import { StyledComponentProps } from '@/components/types/styledComponentstypes';
import { Box, styled } from '@mui/material';

interface SectionProps extends StyledComponentProps {
  bg_color?: string;
}

export const StyledSection = styled(Box)<SectionProps>(
  ({ theme, bg_color }) => ({
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(5),
    },
    paddingBottom: theme.spacing(15),
    backgroundColor: bg_color || 'inherit',
  })
);
