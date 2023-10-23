import { Box, Container } from '@mui/material';

const Home = () => {

  return (
    <>
      <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', mt: 10, }}>
        <Box>
          <h1>Say hello to your phone book!</h1>
          <h2>Please register or login with an account</h2>
        </Box>
      </Container>
    </>
  );
};

export default Home;
