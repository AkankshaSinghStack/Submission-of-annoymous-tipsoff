import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Importing material UI Components
import { AppBar, Toolbar, Grid, IconButton, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//Importing MUI Icons
import Icon from '@mui/material/Icon';
import LoginIcon from '@mui/icons-material/Login';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

//importing local Components
import logo from '../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  header: {
    height: '70px',
  },
  logoDiv: {
    marginRight: '20px',
    width: '15%',
    [theme.breakpoints.down('md')]: {
      width: '25%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
  },
  logo: {
    maxWidth: '100%',
  },
  tabContainer: {
    marginRight: 'auto',
  },
  tab: {
    '&.MuiTab-root': {
      ...theme.typography.tab,
      minWidth: 10,
      marginRight: '20px',
      '&.Mui-selected': {
        color: '#F5EEDC',
      },
    },
  },
  Icons: {
    '&.MuiIcon-root': {
      display: 'flex',
      width: '230px',
      '& svg': {
        cursor: 'pointer',
        padding: '5px',
        marginLeft: '20px',
        color: '#fff',
        '&:hover': {
          border: '1px solid #fff',
          borderRadius: '20px',
          backgroundColor: '#F5EEDC',
          color: 'black',
        },
      },
    },
  },
  drawerIconContainer: {
    '&.MuiIconButton-root': {
      marginLeft: 'auto',
      '& svg': {
        color: '#fff',
        height: '50px',
        width: '50px',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  drawerItemLogin: {
    '&.MuiListItem-root': {
      backgroundColor: '#97BFB4',
      color: '#000',
      '&:hover': {
        backgroundColor: '#fff',
        color: 'black',
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(3);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/report' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/feedback' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/contact' && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/report"
          label="Make a Report"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/feedback"
          label="Receive Feedback"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact"
        />
      </Tabs>

      <Grid item className={classes.iconsGrid}>
        <Icon fontSize="large" className={classes.Icons}>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <TwitterIcon />
          </Link>
          <Button
            to="/login"
            component={Link}
            disableRipple
            onClick={() => setValue()}
          >
            <LoginIcon />
          </Button>
        </Icon>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.paper }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/report"
            selected={value === 1}
          >
            <ListItemText disableTypography>Make a Report</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/feedback"
            selected={value === 2}
          >
            <ListItemText disableTypography>Receive Feedback</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText disableTypography>Contact</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            className={classes.drawerItemLogin}
            divider
            button
            component={Link}
            to="/login"
            selected={value === 5}
          >
            <ListItemText disableTypography>Login</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Grid className={classes.logoDiv}>
            <img src={logo} alt="manthan" className={classes.logo} />
          </Grid>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Navbar;
