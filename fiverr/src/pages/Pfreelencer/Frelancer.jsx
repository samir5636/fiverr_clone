import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card_service from '../../Component/Service_Form/Card_service';
import { gql, useQuery } from '@apollo/client';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GET_SERVICES_QUERY = gql`
  query GetServices($idfreelancer: String!) {
    servicesOfFreelancer(idfreelancer: $idfreelancer) {
      title
      subtitle
      subdescription
      price
      idfreelancer
      id
      description
      delevrytime
      category
    }
  }
`;


function Frelancer() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  const { loading, error, data, refetch } = useQuery(GET_SERVICES_QUERY, {
    variables: { idfreelancer: currentUser.id },
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const servicesOfFreelancer = data?.servicesOfFreelancer || [];
  
  return (
    <>
      <Grid container spacing={5} sx={{ flexGrow: 1, position: 'absolute', top: '200px' }}>
        <Grid item sx={5} md={5} sm={5} lg={5}>
          <Item>
            <Box id="category-a" sx={{ fontSize: '20px', textTransform: 'uppercase' }}>
              Ajouter des services
            </Box>
            <Box component="ul" sx={{ color: '#19a463' }}>
              <h1>Hello {currentUser.username},</h1>
              <h3>you can add service</h3>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <Item>
            <Box id="category-b" sx={{ fontSize: '20px', textTransform: 'uppercase' }}>
              Votre Information
            </Box>
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 3 }}></Box>
          </Item>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1, position: 'relative', top: '500px', left: '150px' }} flexDirection={'column-reverse'}>
        <Grid container spacing={3}>
          {servicesOfFreelancer.map((service) => (
            <Grid item xs={8} sm={8} md={6} lg={4} key={service.id}>
            <Card_service service={service} />
          </Grid>
        ))}
        </Grid>
        </Box>
        </>
        );
        }
        
        export default Frelancer;
        











