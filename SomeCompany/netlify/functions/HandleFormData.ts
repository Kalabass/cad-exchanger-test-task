import { Handler } from '@netlify/functions';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handler: Handler = async (event) => {
  try {
    const { name, email, message }: ContactFormData = JSON.parse(
      event.body || '{}'
    );

    console.log('Received contact form data:', { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Thank you for your interest, ${name}!`,
      }),
    };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'There was an error processing your request.',
      }),
    };
  }
};
