import {NavLink} from "react-router-dom";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';

const DrawerItem = (props) => {
    return ( 
        <ListItem disablePadding sx={{ display: 'block' }}>
            <NavLink to={props.link}>
                <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: props.open ? 'initial' : 'center',
                    px: 2.5,
                }}
                >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                        {(props.count) ? (
                            <Badge badgeContent={props.count} color="primary">
                                {props.icon}
                            </Badge>
                        ) : (
                            props.icon
                        )}
                        
                    </ListItemIcon>
                    <ListItemText primary={props.texto} sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </NavLink>
        </ListItem>
     );
}
 
export default DrawerItem ;