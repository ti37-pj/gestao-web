import React from 'react';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './styles.module.css';

 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const styleText = {
    border: '2px solid #000',
    padding: '10px',
    margin: '10px',
    width: '90%',
    height:'10%'
}

const ProdutoModal = (props) => {

    const [nome, setNome] = React.useState(props.produto?.nome);
    const [descricao, setDescricao] = React.useState(props.produto?.descricao);
    const [imagem_url, setImagemUrl] = React.useState(props.produto?.imagem_url);
    const [preco_custo, setPreco_custo] = React.useState(props.produto?.preco_custo);
    const [preco_venda, setPreco_Venda] = React.useState(props.produto?.preco_venda);
    const [id_categoria, setIdCategoria] = React.useState(props.produto?.id_categoria);

    return ( 
        <Modal
                open={props.open}
                onClose={props.onClose}
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
                    value={id_categoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                    label="Insira a Categoria do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    id="standard-basic"
                    value={imagem_url}
                    onChange={(e) => setImagemUrl(e.target.value)}
                    label="Insira a URL da imagem do Produto"
                    variant="standard" />

                    <Button onClick={_event => props.onSave({
                        nome,
                        descricao,
                        imagem_url,
                        preco_custo,
                        preco_venda,
                        id_categoria,
                        registro: props.produto.registro,
                    }) }>Salvar</Button>

                    <Button onClick={props.onClose}>Cancelar</Button>
                </Box>
            </Modal>
     );
}
 
export default ProdutoModal;