import React, { useEffect } from 'react';
import CupomCard from '../Componentes/ComCupons/CupomCard';
import Cards from '../Componentes/Cards/Index';
import {CircularProgress} from '@mui/material';
import FabAdd from '../Componentes/FabAdd';
import api from '../api';
import CupomModal from '../Componentes/ComCupons/CupomModal';

const PGCupom = () => {

    const [cupons, setCupons] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(()=>{
        buscaTodos();
    }, [])

    const buscaTodos = () => {
        api.get("/cupons/busca_todos")
        .then(res => setCupons(res.data))
        .catch(res => console.log(res));
    }

    const cadastraCupom = (cupom) => {
        console.log(cupom);
        api.post("/cupons/insere", cupom)
        .then((res) => {
            if (res.status === 201 || res.status === 200) {
                buscaTodos();
                handleClose();
            }
        })
        .catch();
    }

    return ( 
        <div>
            <h1>Cupons</h1>
            {(cupons == 0) ? (
                <CircularProgress />
            ) : (
                <Cards>
                    {cupons.map(cupom => <CupomCard buscaTodos={buscaTodos} cupom={cupom} key={cupom.id} />)}
                </Cards>
            )}

            <FabAdd onClick={handleOpen} />

            <CupomModal open={open} onClose={handleClose} onSave={cupom => cadastraCupom(cupom)} />

        </div>
     );
}
 
export default PGCupom;