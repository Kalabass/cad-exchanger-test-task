import { sendData } from '@/components/lib/apiCLients';
import { FormData } from '@/components/types/formData';
import { StyledComponentProps } from '@/components/types/styledComponentstypes';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ContactForm from './ContactForm';

const HEADER_FOOTER_HEIGHT = '160px';

const ContactsPage: FC = () => {
  const theme = useTheme();

  const [response, setResponse] = useState<string | undefined>();

  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const responseData = await sendData(data);
      setResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <StyledMain component='main'>
        {response ? (
          <Typography variant='h1' color={theme.palette.custom.accentPurple}>
            {response}
          </Typography>
        ) : (
          <>
            <Typography variant='h1' color={theme.palette.custom.accentPurple}>
              Only CTA on the page
            </Typography>

            <ContactForm onSubmit={handleSubmit(onSubmit)} control={control} />
          </>
        )}
      </StyledMain>
    </Container>
  );
};

export default ContactsPage;

const StyledMain = styled(Box)<StyledComponentProps>(() => ({
  height: `calc(100vh - ${HEADER_FOOTER_HEIGHT})`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
