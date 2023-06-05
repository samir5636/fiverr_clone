import { useState} from "react";
//import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; 
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import {Typography }from "@material-ui/core";
// import Stack from "@mui/material/Stack";
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

// import { styled } from "@mui/material/styles";

function Mieure() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoClick = () => {
        setIsVideoPlaying(true);
    };
    return (
        <div>
            <Grid container style={{height: 800,backgroundColor:'#f1fdf7'}} >
                <Grid item sx={6} sm={6} md={6} lg={6}>
                    <Typography style={{fontSize: "50px",marginTop:100,marginLeft:70,fontWeight:'bold'}}>Le meilleur ? Tout.</Typography>
                    <IconButton>
                        <img src="../../public/img/img/check.png" />
                        <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>Respecter votre budget</Typography>
                    </IconButton>
                    <Typography style={{marginTop:10,marginLeft:20,fontSize: "20px"}}>Trouvez des services de haute qualité à tous les prix. Pas de tarifs horaires, mais une tarification en fonction des projets.</Typography>
                    <IconButton>
                        <img src="../../public/img/img/check.png" />
                        <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>Un travail de qualité réalisé rapidement</Typography>
                    </IconButton>
                    <Typography style={{marginTop:10,marginLeft:20,fontSize: "20px"}}>Confiez votre projet à un freelance talentueux en quelques minutes et obtenez des résultats durables.</Typography>
                
                    <IconButton>
                        <img src="../../public/img/img/check.png" />
                        <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>Payer une fois satisfait(e)</Typography>
                    </IconButton>
                    <Typography style={{marginTop:10,marginLeft:20,fontSize: "20px"}}>Les devis sont établis à l'avance, ce qui évite les surprises. Le paiement est débloqué uniquement lorsque vous l'approuvez.</Typography>
                    <IconButton>
                        <img src="../../public/img/img/check.png" />
                        <Typography style={{marginTop:10,marginLeft:20,fontSize: "30px",fontWeight:'bold',color:'black'}}>Une assistance 24h/24 et 7j/7</Typography>
                    </IconButton>
                    <Typography style={{marginTop:10,marginLeft:20,fontSize: "20px"}}>Notre équipe d'assistance est disponible 24 heures sur 24 pour vous aider à tout moment et en tout lieu.</Typography>
                </Grid>
                <Box sx={{marginTop:'200px'}}>
                <Grid item xs={6} sm={6} md={6} lg={6} >
                    {isVideoPlaying ? (
                        <CardMedia style={{width:'750px'}}
                        component="video"
                        src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                        autoPlay
                        controls
                        />
                    ) : (
                        <img
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                        alt="Thumbnail"
                        onClick={handleVideoClick}
                        />
                    )}
                </Grid>
                </Box>
            </Grid>
            <Grid container style={{height: 800, display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Grid item xs={12} md={12} lg={12}>
                <Stack direction="row" spacing={5}>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Graphisme & Design</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Marketing digital</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Rédaction & Traduction</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Vidéo & Animation</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Musique & Audio</Typography>
                </div>
                </Stack>
                </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Stack direction="row" spacing={5}>
                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Programmation & Tech</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Business</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Loisirs</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Data</Typography>
                </div>

                <div style={{width:100,height:100,margin:'80px',marginLeft:'100px'}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"}
                alt="samir"
                />
                <Typography style={{fontSize: "15px",color:'green',width:150}}>Photographie</Typography>
                </div>

                </Stack>
                </Grid>
            </Grid>
            <Grid container style={{height: 800,backgroundColor:'#0d084d'}} >
            <Grid item xs={4} md={4} lg={4}  >
            <Typography style={{fontSize: "30px",marginTop:60,marginLeft:70,fontWeight:'bold',color:'white'}}>Une solution conçue pour les entreprises</Typography>
            <Typography style={{fontSize: "20px",marginTop:30,marginLeft:70,fontWeight:'bold',color:'white'}}>Passez à une expérience privilégiée pour accéder à des experts sélectionnés et à des outils exclusifs</Typography>
            <IconButton>
                <img src="../../public/img/img/check.png" />
                <Typography style={{marginTop:10,marginLeft:20,fontSize: "18px",color:'white'}}>Recommandation d'experts</Typography>
            </IconButton>
            <IconButton>
                <img src="../../public/img/img/check.png" />
                <Typography style={{marginTop:10,marginLeft:20,fontSize: "18px",color:'white'}}>Gestion de compte dédiée</Typography>
            </IconButton>
            <IconButton>
                <img src="../../public/img/img/check.png" />
                <Typography style={{marginTop:10,marginLeft:20,fontSize: "18px",color:'white'}}>Outils de collaboration en équipe</Typography>
            </IconButton>
            <IconButton>
                <img src="../../public/img/img/check.png" />
                <Typography style={{marginTop:10,marginLeft:20,fontSize: "18px",color:'white'}}>Solutions de paiement pour les entreprises</Typography>
            </IconButton>
            </Grid>
                <Grid item xs={8} md={8} lg={8}  >
                <div style={{width:800,height:500,marginTop:'200px',marginLeft:"100px"}}>
                <CardMedia
                component="img"
                image={"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"}
                alt="samir"
                />
                </div>
                </Grid>    
            </Grid>
            
        </div>
    );
}

export default Mieure;