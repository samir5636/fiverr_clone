import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography, } from "@material-ui/core";
//import Grid from "@mui/material/Grid";




function RustedBy(){


    return(
        <Box sx={{ marginTop: "50px" }}>
        <Stack direction="row" spacing={5}>
        <Typography style={{ borderRadius: "20px", fontSize: "30px", color: "white"}}>
            populair :
        </Typography>
                    <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"}
                alt="samir"
                sx={{ marginTop: 14 ,marginLeft: 5,width:200,height:120}}
                
                />
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"}
                alt="samir"
                sx={{ marginTop: 14 ,marginLeft: 5,width:200,height:120}}
            
                />
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"}
                alt="samir"
                sx={{ marginTop: 14 ,marginLeft: 5,width:200,height:120}}
                />
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"}
                alt="samir"
                sx={{ marginTop: 14 ,marginLeft: 5,width:200,height:120}}
                />
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"}
                alt="samir"
                sx={{ marginTop: 14 ,marginLeft: 5,width:200,height:120}}
                />
        </Stack>
        </Box>
    );
}
export default RustedBy;