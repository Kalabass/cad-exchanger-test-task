import { articles } from '@/components/const/articles';
import ContactUsButton from '@/components/ui/ContactUsButton';
import { StyledSection } from '@/components/ui/StyledSection';
import { Container, Stack, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const ArticleSection: FC = () => {
  const theme = useTheme();
  return (
    <StyledSection component='section'>
      <Container>
        <Stack spacing={{ xs: 5, md: 10 }} alignItems='center'>
          <Typography variant={'h2'} color={theme.palette.custom.accentPurple}>
            Also very important title
          </Typography>
          <Grid container spacing={{ xs: 5, md: 10 }}>
            {articles.map((article, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index} component='article'>
                <>
                  <Typography
                    variant={'h3'}
                    color={theme.palette.custom.accentPurple}
                  >
                    {article.title}
                  </Typography>
                  <Typography>{article.description}</Typography>
                </>
              </Grid>
            ))}
          </Grid>
          <ContactUsButton />
        </Stack>
      </Container>
    </StyledSection>
  );
};

export default ArticleSection;
