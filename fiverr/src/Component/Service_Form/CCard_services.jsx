import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import HoverRating from '../HoverRating';

const ExpandMore = styled((props) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
duration: theme.transitions.duration.shortest,
}),
}));

const CCard_services = ({ service }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const navigate = useNavigate();

return (
<Card 
>
<CardMedia
      component="img"
      height="220"
      image="../../../img/samir1.png"
      alt="Paella dish"
    />
<CardContent>
<Typography variant="body2" color="text.secondary" style={{ fontSize: '25px' }}>
{service.description}
</Typography>
<HoverRating />
<h1 style={{ color: 'green' }}>prix : {service.price} $</h1>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>

    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>message:</Typography>
        <button style={{height:'50px',width:'100px',backgroundColor:'green'}} onClick={()=>navigate("/chat")}>messag</button>
    </CardContent>
  </Collapse>
</Card>
);
};

export default CCard_services;
