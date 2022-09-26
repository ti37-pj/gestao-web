import React, { useEffect } from 'react';
import ProdutoCard from '../Componentes/ProdutoCard';
import axios from 'axios';
import Cards from '../Componentes/Cards/Index';
import {Button, CircularProgress} from '@mui/material';
import FabAdd from '../Componentes/FabAdd';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const PGProdutos = () => {

    useEffect(()=>{
        axios.get("http://10.60.46.31:3001/produtos/busca_todos")
            .then(
                res => mudaProdutos(res.data)
            )
            .catch(res => console.log(res))


    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '65%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const styleText = {
        border: '2px solid #000',
        padding: '10px',
        margin: '10px',
        width: '99%',
    }


    const cadastraProduto = (produtos, event) => {
        axios.post("http://10.60.46.31:3001/produtos/busca_todos")
        event.preventDefault();
    }

    const [produtos, mudaProdutos] = React.useState([])

    const [nome, setNome] = React.useState();
    const [descricao, setDescricao] = React.useState();
    const [imagem, setimagem] = React.useState();
    const [preco_custo, setPreco_custo] = React.useState();
    const [preco_venda, setPreco_Venda] = React.useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div>
            <h1>Produtos</h1>
            {(produtos === 0) ? (
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
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    id="standard-basic"
                    label="Insira o Nome do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    id="standard-basic"
                    label="Insira a Descrição do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={preco_venda}
                    onChange={(e) => setPreco_Venda(e.target.value)}
                    id="standard-basic"
                    label="Insira o Preço de Venda do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={preco_custo}
                    onChange={(e) => setPreco_custo(e.target.value)}
                    id="standard-basic"
                    label="Insira o Preço de Custo do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text" 
                    id="standard-basic"
                    label="Insira a Categoria do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    id="standard-basic"
                    value={imagem}
                    onChange={(e) => setimagem(e.target.value)}
                    label="Insira a URL da imagem do Produto"
                    variant="standard" />

                    <Button onSubmit={event => cadastraProduto(produtos, event)}>Salvar</Button>

                    <Button>Cancelar</Button>
                </Box>
            </Modal>

        </div>
     );
}
 
export default PGProdutos;