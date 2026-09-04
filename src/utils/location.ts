import { useState, useEffect } from 'react';

const STORAGE_KEY = 'googul_visitor_location_cache';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface LocationInfo {
  country: string | null;
  city: string | null;
  loading: boolean;
}

interface CachedLocation {
  timestamp: number;
  country: string | null;
  city: string | null;
}

export function useVisitorLocation(): LocationInfo {
  const [location, setLocation] = useState<LocationInfo>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed: CachedLocation = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return {
            country: parsed.country || null,
            city: parsed.city || null,
            loading: false,
          };
        }
      }
    } catch (err) {
      console.warn('Failed to read location cache from localStorage', err);
    }
    return { country: null, city: null, loading: true };
  });

  useEffect(() => {
    // Check if we already loaded valid non-expired cached data
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed: CachedLocation = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return;
        }
      }
    } catch {
      // ignore
    }

    let isMounted = true;
    const controller = new AbortController();

    async function fetchLocation() {
      try {
        const res = await fetch('https://freeipapi.com/api/json', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP status ${res.status}`);
        const data = await res.json();

        const countryName =
          typeof data.countryName === 'string' &&
          data.countryName.trim() !== '' &&
          data.countryName !== '-'
            ? data.countryName.trim()
            : null;

        const cityName =
          typeof data.cityName === 'string' &&
          data.cityName.trim() !== '' &&
          data.cityName !== '-'
            ? data.cityName.trim()
            : null;

        const newCache: CachedLocation = {
          timestamp: Date.now(),
          country: countryName,
          city: cityName,
        };

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newCache));
        } catch (e) {
          console.warn('Failed to save location cache to localStorage', e);
        }

        if (isMounted) {
          setLocation({
            country: countryName,
            city: cityName,
            loading: false,
          });
        }
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        console.warn('FreeIPAPI location lookup failed:', err);
        if (isMounted) {
          setLocation({
            country: null,
            city: null,
            loading: false,
          });
        }
      }
    }

    fetchLocation();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return location;
}
