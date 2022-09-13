import React, { useEffect } from 'react';
import ProdutoCard from '../Componentes/ProdutoCard';
import axios from 'axios';
import Cards from '../Componentes/Cards/Index';
import {CircularProgress} from '@mui/material';
import FabAdd from '../Componentes/FabAdd';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const PGProdutos = () => {

    useEffect(()=>{
        setTimeout(() => {
            mudaProdutos([
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                },
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                },
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                }
            ])
        }, 3000)


    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height:'90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [produtos, mudaProdutos] = React.useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    axios.get("http://10.60.46.31:3001/produtos/busca_todos")

    return ( 
        <div>
            <h1>Produtos</h1>
            {(produtos == 0) ? (
                <CircularProgress />
            ) : (
                <Cards>
                    {produtos.map(produto => <ProdutoCard produto={produto}/>)}
                </Cards>
            )}

            <FabAdd onClick={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <label>Nome: </label>
                    <input/>
                </Box>
            </Modal>

        </div>
     );
}
 
export default PGProdutos;