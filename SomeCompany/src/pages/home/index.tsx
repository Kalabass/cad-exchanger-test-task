import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const articles = [
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
  },
];
const HomePage: FC = () => {
  return (
    <Container>
      <Box
        component='section'
        sx={{ padding: 6, paddingBottom: 10, backgroundColor: 'lightgray' }}
      >
        <Grid container spacing={10}>
          <Grid size={6}>
            <Box>
              <Typography component='h1' fontWeight={600} fontSize={56}>
                Most important title on the page
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis metus,
                vel suscipit nibh lacus tincidunt ante
              </Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=IQQoU7diW5VtLdMO'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </Grid>
        </Grid>
      </Box>
      <Box
        component='section'
        sx={{
          padding: 6,
        }}
      >
        <Stack spacing={3}>
          <Typography component={'h2'} fontWeight={600} fontSize={52}>
            Also very important title
          </Typography>
          <Grid container spacing={6}>
            {articles.map((article, index) => (
              <Grid size={4} key={index}>
                <Box>
                  <Typography component={'h5'} fontWeight={400} fontSize={32}>
                    {article.title}
                  </Typography>
                  <Typography>{article.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button>contact us</Button>
        </Stack>
      </Box>
      <Box
        component='section'
        sx={{
          padding: 6,
          backgroundColor: 'lightgray',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight={600} fontSize={48} component={'h3'}>
          Less important title
        </Typography>
        <Button>contact us</Button>
      </Box>
    </Container>
  );
};

export default HomePage;
