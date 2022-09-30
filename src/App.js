import Produtos from "./Paginas/Produtos";
import Cupons from "./Paginas/Cupons";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Home from '@mui/icons-material/Home';
import DrawerItem from "./Componentes/DrawerItem";
import TrendingUp from "@mui/icons-material/TrendingUp"
import Person from "@mui/icons-material/Person";
import Sell from "@mui/icons-material/Sell";
import "./App.css";


const App = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const drawerWidth = 240;

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }),
      );

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      });
      
    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
      });
      
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                        >
                        <MenuIcon />
                        </IconButton>
                            <Typography variant="h6" noWrap component="div">
                            Lelexo's Bar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader> 
                        <List>
                            <DrawerItem link="" open={open} icon={<Home/>} texto="HomePage"/>
                        </List>               
                        <List>
                            <DrawerItem link="/produtos" open={open} icon={<ShoppingCart/>} texto= "Produtos"/>
                        </List>
                        <List>
                            <DrawerItem link="/cupons" open={open} icon={<Sell/>} texto= "Cupons"/>
                        </List>
                        <List>
                            <DrawerItem link="/funcionarios" open={open} icon={<Person/>} texto= "Funcioários"/>
                        </List>
                        <List>
                            <DrawerItem link="/vendas" open={open} icon={<TrendingUp/>} texto= "Vendas"/>
                        </List>
                    </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                        <main>
                            <Routes>
                                <Route path="/produtos" element={<Produtos/>}></Route>
                            </Routes>
                            <Routes>
                                <Route path="/dashboard"></Route>
                            </Routes>
                            <Routes>
                                <Route path="/cupons" element={<Cupons/>}></Route>
                            </Routes>
                            <Routes>
                                <Route path="/funcionarios"></Route>
                            </Routes>
                            <Routes>
                                <Route path="/vendas"></Route>
                            </Routes>
                        </main>
                </Box>
            </Box>
        </BrowserRouter>  
    );
}
export default App;