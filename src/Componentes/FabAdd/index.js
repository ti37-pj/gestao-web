import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FabAdd = () => {
    return ( 
        <Fab color="primary" aria-label="add" className='Fab' sx= {{position: 'fixed',bottom: 16,
            right: 16}}>
            <AddIcon />
        </Fab> 
    );
}
 
export default FabAdd;