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

const GET_SERVICES_QUERYY= gql`
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

export default function Boxe(){
    const { loading, error, data} = useQuery(GET_SERVICES_QUERYY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return(
        <Box sx={{border:'solid'}}>
            <Stack direction="row">
            <Typography style={{fontSize: "30px",marginTop:100,marginLeft:70,fontWeight:'bold'}}>{data.services.title}</Typography>
            <Typography style={{fontSize: "30px",marginTop:100,marginLeft:70,fontWeight:'bold'}}>$ {data.services.price}</Typography>
            </Stack>
            <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>{data.services.description}</Typography>
        
            <IconButton>
                <img src="../../public/img/img/clock.png" />
                <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>{data.services.delevrytime}</Typography>
            </IconButton>
    </Box>
    );
}