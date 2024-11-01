import { FormData } from '../types/formData';

interface ResponseData {
  message: string;
}

export const sendData = async (formData: FormData): Promise<string> => {
  const response = await fetch(
    'https://cadexchangertesttask.netlify.app/.netlify/functions/HandleFormData',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error('Response was not ok');
  }

  const data: ResponseData = await response.json();
  return data.message;
};
