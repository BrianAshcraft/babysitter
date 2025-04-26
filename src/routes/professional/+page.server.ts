import type { Actions } from '@sveltejs/kit';
import fetch from 'node-fetch';

// Using the same Google Form submission URL as the fun contact form
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-kHyMoIPNqAfnPCItolOq8cM9WtU6WLUMt7fperhCOQGXVA/formResponse';

// Map form field names to Google Form entry IDs (same as fun contact form)
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

    console.log('Contact form submission:', { name, email });

    // Submit the data to Google Form
    const googleFormSuccess = await submitToGoogleSheet({ name, email, message });

    return {
      success: true,
      googleFormSuccess
    };
  }
};
