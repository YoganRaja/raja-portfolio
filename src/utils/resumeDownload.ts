import resumePdf from '../assets/images/Raja_Chera_Kesaree_Resume.pdf';

export interface ResumeFormData {
  name: string;
  email: string;
}

export interface ResumeFormErrors {
  name?: string;
  email?: string;
}

/**
  Validation logic:
  - Name: not empty (after trim)
  - Email: properly formatted
 */
export function validateResumeForm(data: ResumeFormData): ResumeFormErrors {
  const errors: ResumeFormErrors = {};

  if (!data.name.trim()) {
    errors.name = '⚠ Please enter your name.';
  }

  if (!data.email.trim()) {
    errors.email = '⚠ Please enter your email address.';
  } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
    errors.email = '⚠ Please enter a valid email address.';
  }

  return errors;
}

/**
  Netlify Forms submission to form name 'resume-download'
 */
export async function submitResumeForm(data: ResumeFormData): Promise<boolean> {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'resume-download',
        name: data.name.trim(),
        email: data.email.trim(),
      }).toString(),
    });
    return true;
  } catch (error) {
    console.error('Netlify Form Submission Error:', error);
    // Return true as fallback so the download is not blocked by network quirks
    return true;
  }
}

/**
  Download trigger for src/assets/images/Raja_Chera_Kesaree_Resume.pdf
 */
export function triggerResumeDownload(): void {
  const link = document.createElement('a');
  link.href = resumePdf;
  link.download = 'Raja_Chera_Kesaree_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
