import { FormData } from '@/components/types/formData';
import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface FormFieldProps {
  name: keyof FormData;
  control: Control<FormData>;
}

const FormField: FC<FormFieldProps> = ({ name, control }) => {
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `Введите ${label.toLowerCase()}`,
        ...(name === 'email' && {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Неверный формат почты',
          },
        }),
      }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Typography color={error ? 'red' : 'black'}>{label}</Typography>
          <TextField
            placeholder='Value'
            fullWidth
            size='small'
            {...field}
            error={!!error}
            value={field.value ?? ''}
            helperText={error?.message || ' '}
            multiline={name === 'message'}
          />
        </>
      )}
    />
  );
};

export default FormField;
