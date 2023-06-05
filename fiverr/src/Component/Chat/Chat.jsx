import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import { useState } from 'react';

const useStyles = makeStyles({
table: {
minWidth: 650,
},
chatSection: {
width: '100%',
height: '90vh',
},
headBG: {
backgroundColor: '#e0e0e0',
},
borderRight500: {
borderRight: '1px solid #e0e0e0',
},
messageArea: {
height: '70vh',
overflowY: 'auto',
},
green: {
color: 'green',
},
sendButton: {
backgroundColor: 'green',
},
chatBubble: {
backgroundColor: '#1dbf73',
borderRadius: '10px',
padding: '10px',
margin: '5px',
width: 'fit-content',
maxWidth: '70%',
},
});

const Chat = () => {
const classes = useStyles();
const [messages, setMessages] = useState([]);
const [inputText, setInputText] = useState('');

const sendMessage = () => {
const newMessage = {
    text: inputText,
    time: new Date().toLocaleTimeString(),
};

setMessages([...messages, newMessage]);
setInputText('');
};

const handleInputChange = (event) => {
setInputText(event.target.value);
};

return (
<div style={{height:'90hv',marginTop:150,marginBottom:100}}>
    <Grid container>
    <Grid item xs={12}>
        <Typography variant="h5" className={classes.headerMessage} style={{color:"#1dbf73"}} align='center'>
        Chat With Freelancer
        </Typography>
    </Grid>
    </Grid>
    <Grid container component={Paper} className={classes.chatSection}>
    <Grid item xs={3} className={classes.borderRight500}>
        <List>
        <ListItem button key="RemySharp">
            <ListItemIcon>
            <Avatar
                alt="Samir"
                src="../../../img/chat.jpg"
            />
            </ListItemIcon>
            <ListItemText primary="Samir" />
        </ListItem>
        </List>
        <Divider />
        <Grid item xs={12} style={{ padding: '10px',backgroundColor:'#1dbf73' }}>
        </Grid>
        <Divider />
        <List>
        <ListItem button key="Mohammed">
            <ListItemIcon>
            <Avatar
                alt="Mohammed"
                src="../../../img/Default_isometric_view_of_a_MINI_cute_hyperrealistic_futuristi_0_7ab077f5-9839-467c-ad4c-2112606d3dd6_1.jpg"
            />
            </ListItemIcon>
            <ListItemText primary={<span className={classes.green}>Mohamed</span>} secondary="Remy Sharp" />
            <ListItemText secondary="online" align="right" />
        </ListItem>
        </List>
    </Grid>
    <Grid item xs={9}>
        <List className={classes.messageArea}>
        {messages.map((message, index) => (
            <ListItem key={index}>
            <Grid container>
                <Grid item xs={12}>
                <ListItemText
                    align={index % 2 === 0 ? 'right' : 'left'}
                    primary={
                    <div
                        className={
                        index % 2 === 0
                        ? classes.chatBubble + ' ' + classes.green
                        : classes.chatBubble
                        }
                    >
                        {message.text}
                    </div>
                    }
                />
                </Grid>
                <Grid item xs={12}>
                <ListItemText
                    align={index % 2 === 0 ? 'right' : 'left'}
                    secondary={message.time}
                />
                </Grid>
            </Grid>
            </ListItem>
        ))}
        </List>
        <Divider />
        <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
            <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
            value={inputText}
            onChange={handleInputChange}
            />
        </Grid>
        <Grid xs={1} align="right">
        <Fab
            color="primary"
            aria-label="add"
            onClick={sendMessage}
            className={classes.sendButton}
            >
            <SendIcon />
        </Fab>
        </Grid>
    </Grid>
    </Grid>
    </Grid>
</div>
);
};
export default Chat;
