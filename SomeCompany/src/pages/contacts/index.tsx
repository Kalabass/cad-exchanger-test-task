import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactsPage: FC = () => {
  const [response, setResponse] = useState<string | undefined>();

  const sendData = async (formData: FormData): Promise<string> => {
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const responseData = await sendData(data);
      setResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const { handleSubmit, control } = useForm<FormData>();

  return (
    <Container>
      <Paper
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!response && (
          <>
            <Typography component='h1' fontWeight={600} fontSize={64}>
              Only CTA on the page
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit(onSubmit)}
              sx={{ border: 1, borderColor: 'black', borderRadius: 1, p: 2 }}
            >
              <Stack spacing={2}>
                <Box>
                  <Typography>Name</Typography>
                  <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        placeholder='Value'
                        fullWidth
                        size='small'
                        {...field}
                        error={!!error}
                        value={field.value ?? ''}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Typography>Email</Typography>
                  <Controller
                    name='email'
                    control={control}
                    rules={{
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        placeholder='Value'
                        fullWidth
                        size='small'
                        {...field}
                        error={!!error}
                        value={field.value ?? ''}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Typography>Message</Typography>
                  <Controller
                    name='message'
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        multiline
                        placeholder='Value'
                        fullWidth
                        size='small'
                        {...field}
                        error={!!error}
                        value={field.value ?? ''}
                      />
                    )}
                  />
                </Box>
                <Button type='submit'>submit</Button>
              </Stack>
            </Box>
          </>
        )}

        {response && (
          <Typography component='h1' fontWeight={600} fontSize={54}>
            {response}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ContactsPage;
