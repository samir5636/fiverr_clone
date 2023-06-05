import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Typography, } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import RustedBy from "../../Component/rustedBy";
import { gql, useQuery} from '@apollo/client';
import CCard_services from '../../Component/Service_Form/Card_service';
import Mieure from "../../Component/Mieure";

const GET_SERVICES_QUERY= gql`
    query Query {
        services {
        id
        title
        subtitle
        description
        subdescription
        category
        delevrytime
        price
        idfreelancer
        }
    }
`;

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    borderRadius: "20px",
    marginLeft: theme.spacing(2),
    border: "1px solid white",
    padding: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color:'green'
    },
  }));

const images = ["../../../img/samir1.png", "../../../img/image_67151873-removebg-preview.png","../../../img/ss.png"]; // Chemins vers les images
const colors=["#b92018","#013914","#ff7a04"];
function Home() {
const [services, setServices] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const { loading, error, data, refetch } = useQuery(GET_SERVICES_QUERY, {
    fetchPolicy: 'network-only',
});
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [currentColorIndex, setCurrentColorIndex] = useState(0);
useEffect(() => {
    if (data && data.services) {
    setServices(data.services);
    }
}, [data]);
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 6000);
    
    return () => clearInterval(interval);
    }, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

const filteredServices = services.filter(
    (service) =>
    service.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const setFelter = (cat) => {
        setSearchTerm(cat);
    };


return (
    <>
<Box>
    <Grid
    container
    style={{
        height: 800,
        backgroundColor:colors[currentColorIndex],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
    >
    <Grid item sx={9} md={9} lg={8} style={{display:'flex',flexDirection:'column',justifyContent: "center",alignItems: "center",}}>
        <Box>
        <Typography variant="h3">
        <div style={{ color: "white" }}>
            Trouver les bons <span style={{ fontFamily: "cursive" }}>services</span>{" "}
        </div>
        <div style={{ color: "white" }}>
            <span style={{ fontFamily: "cursive" }}>freelances,</span> immédiatement
        </div>
        </Typography>
        <Box style={{ fontSize: "40px", marginTop: "50px" }}>
        <Typography variant="h3" style={{ margin: "10px" }}></Typography>
        <TextField
            sx={{ flexGrow: 1, width: "500px", backgroundColor: "white" }}
            label="Search services"
            // value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "green", width: "60px", height: "60px" }} />
        </IconButton>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
        <Stack direction="row" spacing={2}>
        <Typography style={{ borderRadius: "20px", fontSize: "30px", color: "white"}}>
            populair :
            </Typography>
            <StyledLink variant="body2" onClick={() => setFelter("Web design")}>Web design</StyledLink>
            <StyledLink variant="body2" onClick={() => setFelter("Mobile design")}>Mobile design</StyledLink>
            <StyledLink variant="body2" onClick={() => setFelter("Backend development")}>Backend development</StyledLink>
            <StyledLink variant="body2" onClick={() => setFelter("Design with AI")}>Design with AI</StyledLink>
        </Stack>
        </Box>

        </Box>
    </Grid>
    <Grid item sx={3} md={3} lg={4}>
        <CardMedia
        component="img"
        height="680"
        image={images[currentImageIndex]}
        alt="Paella dish"
        sx={{ marginTop: 14 }}
        />
    </Grid>
    </Grid>
</Box>
<Box>
<RustedBy/>
</Box>

<Typography style={{ fontSize: "50px",marginTop:100,marginLeft:70,fontWeight:'bold'}}>
Services populaires:
</Typography>
 
    <Grid container spacing={4} > 
    {filteredServices.map((service) => (
        <Grid item xs={3} sm={3} md={3} lg={3} key={service.id}> 
        <CCard_services service={service} />
        </Grid>
    ))}
    </Grid>

<Box sx={{ marginTop:'100px', }}>
    <Mieure />

</Box >
</>
);
}

export default Home;

