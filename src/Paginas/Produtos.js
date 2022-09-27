import React, { useEffect } from 'react';
import ProdutoCard from '../Componentes/ProdutoCard';
import Cards from '../Componentes/Cards/Index';
import {CircularProgress} from '@mui/material';
import FabAdd from '../Componentes/FabAdd';
import api from '../api';
import ProdutoModal from '../Componentes/ProdutoModal';

const PGProdutos = () => {

    useEffect(()=>{
        buscaTodos();
    }, [])

    const buscaTodos = () => {
        api.get("/produtos/busca_todos")
        .then(res => setProdutos(res.data))
        .catch(res => console.log(res));
    }

    const cadastraProduto = (produto) => {
        api.post("/produtos/insere", produto)
        .then((res) => {
            if (res.status === 201 || res.status === 200) {
                buscaTodos();
            }
        })
        .catch();
    }

    const [produtos, setProdutos] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    return ( 
        <div>
            <h1>Produtos</h1>
            {(produtos === 0) ? (
                <CircularProgress />
            ) : (
                <Cards>
                    {produtos.map(produto => <ProdutoCard produto={produto} key={produto.id} />)}
                </Cards>
            )}

            <FabAdd onClick={handleOpen} />

            <ProdutoModal open={open} onClose={handleClose} onSave={produto => cadastraProduto(produto)} />

        </div>
     );
}
 
export default PGProdutos;