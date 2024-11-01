import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: ButtonType;
}

const CustomButton: FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} variant='contained' type={type}>
      {text}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.custom.accentPurple,
  paddingInline: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    paddingInline: theme.spacing(3),
  },
}));
