import React from 'react';
import {
    AppBar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography as T
} from '@mui/material';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
import TourIcon from '@mui/icons-material/Tour';


const linkStyle = {
    color: 'primary.dark',
    textDecoration: 'none',
}

const appBarButtons = {
    color: 'primary.dark',
    display: {
        xs: 'none',
        sm: 'none',
        md: 'block',
    },
    '&:hover': {
        backgroundColor: 'primary.darkOverlay',
    }
}

const schoolIconStyle = {
    color: 'primary.dark',
    marginRight: '10px',
    height: '20px'
}

const drawerItems = [
    // {
    //     text: 'Tutoring',
    //     href: '/#/tutoring',
    //     icon: <BorderColorIcon/>
    // }, {
    //     text: 'Tours',
    //     href: '/#/tours',
    //     icon: <TourIcon/>
    // }, {
    //     text: 'Interviews',
    //     href: '/#/interviews',
    //     icon: <TourIcon/>
    // }, {
    //     text: 'Pricing',
    //     href: '/#/pricing',
    //     icon: <TourIcon/>
    // }, {
    //     text: 'About',
    //     href: '/#/about',
    //     icon: <InfoIcon/>
    // }, {
    //     text: 'Contact',
    //     href: '/#/contact',
    //     icon: <SendIcon/>
    // }
]

function AppBarDrawer() {

    const node = React.useRef();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    React.useEffect(() =>
        document.addEventListener("mousedown", handleClick)
    );

    return (
        <div ref={node}>
            <CssBaseline/>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2, display: {md: 'none'}}}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <T variant="h6" component="div" sx={{flexGrow: 1}}>

                        <Link href="/" sx={linkStyle}>
                            {/*<SchoolIcon sx={schoolIconStyle}/>*/}
                            Dating for powerlifters
                        </Link>
                    </T>

                    {drawerItems.map((item) => (
                        <Button sx={appBarButtons} href={item.href} key={item.text}>{item.text}</Button>
                    ))}

                </Toolbar>

            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>

                     <Link href='/#/' key='home' sx={linkStyle}>
                        <ListItem button key='home' onClick={handleDrawerClose}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItem>
                    </Link>
                    {drawerItems.map((item) => (
                        <Link href={item.href} key={item.text} sx={linkStyle}>
                            <ListItem button key={item.text} onClick={handleDrawerClose}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider/>
            </Drawer>
        </div>
    );
}


export default AppBarDrawer;