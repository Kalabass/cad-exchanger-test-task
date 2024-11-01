import ContactUsButton from '@/components/ui/ContactUsButton';
import { StyledSection } from '@/components/ui/StyledSection';
import { Box, Container, styled, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

const FooterSection: FC = () => {
  const theme = useTheme();
  return (
    <StyledSection
      bg_color={theme.palette.custom.accentTeal}
      component='section'
    >
      <Container>
        <CenteredBox>
          <Typography variant={'h2'}>Less important title</Typography>
          <ContactUsButton />
        </CenteredBox>
      </Container>
    </StyledSection>
  );
};

export default FooterSection;

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
}));
