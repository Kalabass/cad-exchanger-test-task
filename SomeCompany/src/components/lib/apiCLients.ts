import { FormData } from '../types/formData';

export const sendData = async (formData: FormData): Promise<string> => {
  const response = await fetch('http://localhost:3232/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Response was not ok');
  }

  return response.text();
};
