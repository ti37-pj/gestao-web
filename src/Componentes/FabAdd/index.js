import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FabAdd = (props) => {
    return ( 
        <Fab
            color="primary"
            aria-label="add"
            className='Fab'
            sx= {{
                position: 'fixed',
                bottom: 16,
                right: 16
            }}
            onClick={props.onClick}>
            <AddIcon />
        </Fab> 
    );
}
 
export default FabAdd;