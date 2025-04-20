import type { Actions } from '@sveltejs/kit';
import fetch from 'node-fetch';

// Replace this URL with your actual Google Form submission URL
// You'll need to create a Google Form with fields that match your form
// and get the form submission URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-kHyMoIPNqAfnPCItolOq8cM9WtU6WLUMt7fperhCOQGXVA/formResponse';

// Map your form field names to Google Form entry IDs
// These IDs were extracted from the Google Form source code
const FORM_FIELD_MAPPING = {
  name: 'entry.1920309866', // Entry ID for name field
  email: 'entry.1900105923', // Entry ID for email field
  message: 'entry.950834783' // Entry ID for message field
};

/**
 * Submits form data to a Google Form which feeds into a Google Sheet
 */
async function submitToGoogleSheet(formData: { name: string; email: string; message: string }) {
  try {
    // Create URL params in the format Google Forms expects
    const params = new URLSearchParams();
    params.append(FORM_FIELD_MAPPING.name, formData.name);
    params.append(FORM_FIELD_MAPPING.email, formData.email);
    params.append(FORM_FIELD_MAPPING.message, formData.message);

    // Submit the form data
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0' // Some forms require a user agent
      }
    });

    if (!response.ok) {
      console.error('Failed to submit to Google Form:', response.status, response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return false;
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    console.log('Contact form submission:', { name, email, message });

    // If Google Form submission is configured, submit the data
    let googleFormSuccess = true;
    if (GOOGLE_FORM_URL !== 'YOUR_GOOGLE_FORM_SUBMISSION_URL') {
      googleFormSuccess = await submitToGoogleSheet({ name, email, message });
    } else {
      console.warn('Google Form URL not configured. Please replace with your actual form URL.');
    }

    return {
      success: true,
      googleFormSuccess
    };
  }
};
