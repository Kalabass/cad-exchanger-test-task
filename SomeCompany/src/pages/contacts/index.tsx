import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

const ContactsPage: FC = () => {
  interface FromData {
    name: string;
    email: string;
    message: string;
  }
  const formMethods = useForm<FromData>({});

  return (
    <div>
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
          <Typography component={'h1'} fontWeight={600} fontSize={64}>
            Only CTA on the page
          </Typography>
          <Box
            component={'form'}
            sx={{ border: '1px solid black', borderRadius: 1, padding: 2 }}
          >
            <Stack spacing={2}>
              <Box>
                <Typography>Name</Typography>
                <Controller
                  name='name'
                  control={formMethods.control}
                  render={() => (
                    <TextField placeholder='Value' fullWidth size='small' />
                  )}
                />
              </Box>
              <Box>
                <Typography>Name</Typography>
                <Controller
                  name='name'
                  control={formMethods.control}
                  render={() => (
                    <TextField placeholder='Value' fullWidth size='small' />
                  )}
                />
              </Box>
              <Box>
                <Typography>name</Typography>
                <Controller
                  name='name'
                  control={formMethods.control}
                  render={() => (
                    <TextField
                      multiline
                      placeholder='Value'
                      fullWidth
                      size='small'
                    />
                  )}
                />
              </Box>
              <Button type='submit'>submit</Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactsPage;
