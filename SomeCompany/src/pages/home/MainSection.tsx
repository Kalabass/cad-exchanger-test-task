import { StyledSection } from '@/components/ui/StyledSection';
import { Container, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const MainSection: FC = () => {
  const theme = useTheme();
  return (
    <StyledSection
      bg_color={theme.palette.custom.accentBlue}
      component='section'
    >
      <Container>
        <Grid container spacing={{ xs: 1, md: 10 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant='h1'>
              Most important title on the page
            </Typography>
            <Typography color={theme.palette.primary.contrastText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=IQQoU7diW5VtLdMO'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default MainSection;
