import { FormData } from '@/components/types/formData';
import { StyledComponentProps } from '@/components/types/styledComponentstypes';
import CustomButton from '@/components/ui/CustomButton';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import { Control } from 'react-hook-form';
import FormField from './FormField';

const FORM_FIELD_NAMES: Record<keyof FormData, keyof FormData> = {
  name: 'name',
  email: 'email',
  message: 'message',
};

interface ContactFormProps {
  onSubmit: () => void;
  control: Control<FormData>;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit, control }) => {
  return (
    <StyledForm component='form' onSubmit={onSubmit}>
      <Stack>
        {Object.entries(FORM_FIELD_NAMES).map(([_key, name]) => (
          <FormField key={name} name={name} control={control} />
        ))}
        <CustomButton text='Submit' type='submit' />
      </Stack>
    </StyledForm>
  );
};

export default ContactForm;

const StyledForm = styled(Box)<StyledComponentProps>(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.custom.accentPurple,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
}));
