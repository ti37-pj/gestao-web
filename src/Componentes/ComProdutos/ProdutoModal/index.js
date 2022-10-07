import React from 'react';
import {Button, FormControl, InputLabel} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './styles.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

 const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY:'scroll'
  };

const styleText = {
    position:'relative',
    padding: '10px',
    margin: '10px',
    width: '90%',
    height:'10%'
}

const styleButton = {
    margin: '10px',
    position:'relative',
}

const ProdutoModal = (props) => {

    const ID_CATEGORIA_DEFAULT = 1;

    const [nome, setNome] = React.useState(props.produto?.nome);
    const [descricao, setDescricao] = React.useState(props.produto?.descricao);
    const [imagem_url, setImagemUrl] = React.useState(props.produto?.imagem_url);
    const [preco_custo, setPreco_custo] = React.useState(props.produto?.preco_custo);
    const [preco_venda, setPreco_Venda] = React.useState(props.produto?.preco_venda);
    const [id_categoria, setIdCategoria] = React.useState(props.produto?.id_categoria ?? ID_CATEGORIA_DEFAULT);

    const handleChange = (event) => {
        setIdCategoria(event.target.value);
    };

    return ( 
        <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div>
                            <TextField 
                                sx={styleText}
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                id="standard-basic"
                                label="Insira o Nome do Produto"
                                variant="outlined"
                            />
                            <TextField 
                                sx={styleText}
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                id="standard-basic"
                                label="Insira a Descrição do Produto"
                                variant="outlined" 
                            />
                            <TextField 
                                sx={styleText}
                                type="text"
                                value={preco_venda}
                                onChange={(e) => setPreco_Venda(e.target.value)}
                                id="standard-basic"
                                label="Insira o Preço de Venda do Produto"
                                variant="outlined" 
                            />
                            <TextField 
                                sx={styleText}
                                type="text"
                                value={preco_custo}
                                onChange={(e) => setPreco_custo(e.target.value)}
                                id="standard-basic"
                                label="Insira o Preço de Custo do Produto"
                                variant="outlined"
                                />
                            
                            <TextField 
                                sx={styleText}
                                type="text"
                                id="standard-basic"
                                value={imagem_url}
                                onChange={(e) => setImagemUrl(e.target.value)}
                                label="Insira a URL da imagem do Produto"
                                variant="outlined"
                            />

                            <FormControl sx={styleText}>
                                <InputLabel id="label-categoria">Categoria</InputLabel>
                                    <Select
                                        labelId="label-categoria"
                                        label="Categoria"
                                        onChange={handleChange}
                                        value={id_categoria}
                                    >
                                        {props.categorias?.map(categoria => <MenuItem key={categoria.id} value={categoria.id}>{categoria.nome}</MenuItem>)}
                                    </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Button sx={styleButton} onClick={_event => props.onSave({
                                nome,
                                descricao,
                                imagem_url,
                                preco_custo,
                                preco_venda,
                                id_categoria,
                            }) }>Salvar</Button>

                            <Button onClick={props.onClose}>Cancelar</Button>
                        </div>
                    </div>                  
                </Box>
            </Modal>
     );
}
 
export default ProdutoModal;