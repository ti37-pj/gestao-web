import React, { useEffect } from 'react';
import ProdutoCard from '../Componentes/ComProdutos/ProdutoCard';
import Cards from '../Componentes/Cards/Index';
import {CircularProgress} from '@mui/material';
import FabAdd from '../Componentes/FabAdd';
import api from '../api';
import ProdutoModal from '../Componentes/ComProdutos/ProdutoModal';

const PGProdutos = () => {

    useEffect(()=>{
        buscaTodos();
    }, [])

    const buscaTodos = () => {
        api.get("/categorias/busca_todos")
        .then(res =>{
            setCategorias(res.data)
            api.get("/produtos/busca_todos")
            .then(res => setProdutos(res.data))
        })
        .catch(res => console.log(res));
    }


    const cadastraProduto = (produto) => {
        api.post("/produtos/insere", produto)
        .then((res) => {
            if (res.status === 201 || res.status === 200) {
                buscaTodos();
                handleClose();
            }
        })
        .catch();
    }

    //<Cards>
        //<ProdutoCard buscaTodos={buscaTodos} produto={["produto 1","produto 2"]} categorias={["categoria 1","categoria 2"]} key='0'/>       
    //</Cards>

    const [produtos, setProdutos] = React.useState([])
    const [categorias, setCategorias] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return ( 
        <div>
            <h1>Produtos</h1>
            {(produtos === 0) ? (
                <CircularProgress />
            ) : (
                    <div>
                        <Cards>
                            {produtos.map(produto => <ProdutoCard buscaTodos={buscaTodos} produto={produto} categorias={categorias} key={produto.id} />)}       
                        </Cards>
                    </div>        
            )}

            <FabAdd onClick={handleOpen} />
            <ProdutoModal open={open} onClose={handleClose} onSave={produto => cadastraProduto(produto)} categorias={categorias} />

        </div>
     );
}
 
export default PGProdutos;