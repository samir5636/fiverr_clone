import { useEffect, useState } from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(3),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  login: {
    textDecoration: "none",
    color: "#1dbf73",
    fontSize: "20px",
    
    marginLeft: theme.spacing(20),
    borderRadius: "10px",
    width: "100px",
    height: "40px",
    textAlign: "center",
    "&:hover": {
        borderColor: "#1dbf73",
    borderWidth: "5px",
    borderStyle: "solid",
      },
  },
  links: {
    textDecoration: "none",
    color: "#1dbf73",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#1dbf73",
      borderBottom: "1px solid white",
    },
  },
  appBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#013914",
    color: "white",
    position: "fixed",
    top: 0,
    zIndex: 999,
    transition: "0.5s all ease",
    "&.active": {
        backgroundColor: "white",
        color: "black",
    },
},
    menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    },
    menuLink: {
    textDecoration: "none",
    color: "White",
    fontSize: "18px",
    marginLeft: theme.spacing(2),
    },
}));


function Navbare() {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    const { pathname } = useLocation();
    const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    //console.log(currentUser);
    const navigate=useNavigate();
    const handleLogout = async () => {
      localStorage.setItem("currentUser", null);
      navigate.replace("/");
    };
  
    useEffect(() => {
      window.addEventListener("scroll", isActive);
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    }, []);
  
    return (
      <AppBar className={`${classes.appBar} ${active && "active"}`} position="sticky">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h1" className={classes.logo}>
            fiverr<span style={{ color: "green" }}>.</span>
          </Typography>
          {/* <Link to="/" className={`${classes.links} ${pathname === "/Pfrelancer" && "active"}`}>
            Fiverr Business
            </Link> */}
            <Link to="/" className={`${classes.links} ${pathname === "/Pfrelancer" && "active"}`}>
            Explore
            </Link>
            <Link to="/" className={`${classes.links} ${pathname === "/Pfrelancer" && "active"}`}>
            English
            </Link>
          {currentUser ? (
            <>
              <Link to="/Pfrelancer" className={`${classes.links} ${pathname === "/Pfrelancer" && "active"}`}>
                  Frelancer
              </Link>
              <Link to="/checkout" className={`${classes.links} ${pathname === "/Pfrelancer" && "active"}`}>
                  AddService
              </Link>
              <Link className={`${classes.links} ${pathname === "/login" && "active"}`} onClick={handleLogout}>
              Logout
              </Link>
            </>
          ):(
            <div className={classes.navlinks}>
            <Link to="/" className={`${classes.links} ${pathname === "/" && "active"}`}>
              Home
            </Link>
            <Link to="/signup" className={classes.login}>
              Sign Up
            </Link>
            <Link to="/login" className={`${classes.links} ${pathname === "/login" && "active"}`}>
              Login
            </Link>
          </div>
          )}
        </Toolbar>
        {(!active ) && (
          <>
            <hr />
            <div className={`${classes.menu} ${active && "active"}`}>
              <Link className={classes.menuLink} to="/">
                Graphics & Design
              </Link>
              <Link className={classes.menuLink} to="/">
                Video & Animation
              </Link>
              <Link className={classes.menuLink} to="/">
                Writing & Translation
              </Link>
              <Link className={classes.menuLink} to="/">
                AI Services
              </Link>
              <Link className={classes.menuLink} to="/">
                Digital Marketing
              </Link>
              <Link className={classes.menuLink} to="/">
                Music & Audio
              </Link>
              <Link className={classes.menuLink} to="/">
                Programming & Tech
              </Link>
              <Link className={classes.menuLink} to="/">
                Business
              </Link>
              <Link className={classes.menuLink} to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )}
      </AppBar>
    );
  }

export default Navbare;

