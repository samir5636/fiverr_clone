import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import  SingleSelect from './SingleSelect';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from "@apollo/client";




const theme = createTheme({
palette: {
primary: green,
},
});

const Query = gql`
  query Query($idfreelancer: String!) {
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

export default function Step1Form() {
// const [selectedImage, setSelectedImage] = useState(null);
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const [description, setDescription] = useState('');
const [Title,setTitle]=useState("");
const [subdescription, setSubDescription] = useState('');
const [price, setPrice] = useState('');
const [Delivrey_Time ,setDelivrey_Time]=useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const [subTitle, setsubTitle] = useState('');

const { loading: queryLoading, error: queryError, data: queryData, refetch: refetchServices } = useQuery(Query, {
  variables: { idfreelancer: currentUser.id },
});

const [Mutation,{error}]=useMutation(
  gql`
  mutation Mutation(
    $title: String! 
    $subtitle: String! 
    $description: String! 
    $subdescription: String! 
    $category: String! 
    $delevrytime: String! 
    $price: String! 
    $idfreelancer: String!
    ) {
    createService(
      title: $title, 
      subtitle: $subtitle, 
      description: $description, 
      subdescription: $subdescription, 
      category: $category, 
      delevrytime: $delevrytime, 
      price: $price, 
      idfreelancer: $idfreelancer
      ) {
      title
      subtitle
    }
  }
  `
);


const addService = () => {
            Mutation({
            variables: {
              title: Title,
                subtitle: subTitle,
                description: description,
                subdescription: subdescription,
                category: selectedCategory,
                delevrytime: Delivrey_Time,
                price: price,
                idfreelancer:currentUser.id
            },
            })
            .then(() => {
              console.log('Service added successfully');
              // Réinitialiser les valeurs des champs après l'envoi des données
              setDescription('');
              setTitle('');
              setSubDescription('');
              setPrice('');
              setDelivrey_Time('');
              setSelectedCategory('');
              setsubTitle('');
            })
            .catch((error) => {
              console.log('Error adding service:', error);
            });
    };


return (
<ThemeProvider theme={theme}>
<>
<Typography variant="h6" gutterBottom>
Partager une description de service
</Typography>
<Grid container spacing={3}>
<Grid item xs={12} sm={12}>
<TextField
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="given-Title"
            variant="standard"
            color="success" 
            onChange={(e)=>setTitle(e.target.value)}
          />
</Grid>

<Grid item xs={12}>
<TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            color="success" 
          />
</Grid>
<Grid item xs={12}>
<Input
            type="file"
            name="image"
            accept="image/*"
            // onChange={handleImageSelect}
            fullWidth
            color="success" 
          />
</Grid>
<Grid item xs={12}>
<Button variant="contained" color="primary" 
// onClick={handleImageUpload}
>
Envoyer limage
</Button>
</Grid>
<Grid item xs={12} sm={12}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Servece Title"
            fullWidth
            autoComplete="given-Title"
            variant="standard"
            color="success" 
            onChange={(e)=>setsubTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SingleSelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </Grid>
        <Grid item xs={12}>
          <TextField color="success" 
            id="description"
            name="description"
            label=" Short Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e)=>setSubDescription(e.target.value)}
            
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-number"
          label="Delivrey Time *"
          type="number"
          color="success" 
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={(e)=>setDelivrey_Time(e.target.value)}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-number"
          label="Price *"
          type="number"
          color="success" 
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={(e)=>setPrice(e.target.value)}
        />
        </Grid>
        <Grid item  fullWidth>
        <Button onClick={addService} variant="contained">
                        Send
        </Button>
        </Grid>

</Grid>
</>
</ThemeProvider>
);
}
