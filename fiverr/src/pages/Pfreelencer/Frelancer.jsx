import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card_service from '../../Component/Service_Form/Card_service';
import { gql, useQuery,useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import {Typography} from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GET_SERVICES_QUERY = gql`
query Query($token: String!) {
  servicesByToken(token: $token) {
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

const DELETE_SERVICE = gql`
mutation Mutation($token: String!
  $deleteServiceId: ID!
  ) {
  deleteService(token: $token, 
    id: $deleteServiceId) 
    {
    subdescription
  }
}
`;


function Frelancer() {
  const [servicesOfFreelancer, setServicesOfFreelancer] = useState([]);

  const [deleteServiceMutation] = useMutation(DELETE_SERVICE);

  const token = JSON.parse(localStorage.getItem('token'));
  const [searchTerm, setSearchTerm] = useState('');

  const { loading, error, data, refetch } = useQuery(GET_SERVICES_QUERY, {
    variables: { token: token.token},
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (data && data.servicesByToken) {
      setServicesOfFreelancer(data.servicesByToken);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleDeleteService = async (serviceId) => {
    try {
      await deleteServiceMutation({ variables: { deleteServiceId: serviceId ,token: token.token } });
      setServicesOfFreelancer((prevServices) =>
        prevServices.filter((service) => service.id !== serviceId)
      );
    } catch (error) {
      console.error('Erreur lors de la suppression du service:', error);
    }
  };
  const filteredServices = servicesOfFreelancer.filter(
    (service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop:'200px' }}>
      <Grid item sx={5} md={5} sm={5} lg={8} alignContent="center">
      <Box style={{ fontSize: '40px' }} 
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
        <Typography variant="h3" style={{margin:'10px'}}>
            fiverr<span style={{ color: "green" }}>.</span>
          </Typography>
        <TextField
          sx={{ flexGrow: 1, width: '500px' }}
          label="Search services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: 'green', width: '60px', height: '60px' }} />
        </IconButton>
      </Box>
    </Grid>
        <Grid item sx={5} md={5} sm={5} lg={5}>
          <Item>
            <Box id="category-a" sx={{ fontSize: '20px', textTransform: 'uppercase' }}>
              Ajouter des services
            </Box>
            <Box component="ul" sx={{ color: '#19a463' }}>
              <h1>Hello samir,</h1>
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

    <Box sx={{ flexGrow: 1, margin:'40px', marginTop:'200px', }}> 
    <Grid container spacing={4} > 
      {filteredServices.map((service) => (
        <Grid item xs={7} sm={6} md={5} lg={3} key={service.id}> 
          <Card_service service={service} onDelete={handleDeleteService}/>
        </Grid>
      ))}
    </Grid>
    </Box>
        </>
        );
        }
        
export default Frelancer;
        











