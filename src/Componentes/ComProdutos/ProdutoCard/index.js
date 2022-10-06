import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import ProdutoModal from "../ProdutoModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import api from '../../../api';

const ProdutoCard = (props) => {
    const [produto, setProduto] = useState(props.produto);
    const [categorias, setCategorias] = useState(props.categorias);

    const [modalOpen, setModalOpen] = useState(false);

    const formataData = (date) => {
        if(!date){
            return(
                null
            )
        }
        let dataFormatada = date
        let horas = dataFormatada.split("T")[1]
        horas = horas.split(".")[0]
        horas = parseInt(horas.split(":")[0])-3 + ":" + horas.split(":")[1]
        let data = dataFormatada.split("T")[0]
        data = data.split("-").reverse().join("/")
        dataFormatada = data + " às " + horas

        return(
            dataFormatada
        )
    }

    const alteraProduto = (produtoAlterado) => {
        console.log(produto)
        api.put(`/produtos/altera/${produto.id}`, produtoAlterado)
        .then((res) => {
           if (res.status === 200) {
                setModalOpen(false)
                produtoAlterado.id = produto.id
                setProduto(produtoAlterado)
            }
        })
        .catch();
    }

    const deletaProduto = () => {
        api.delete(`/produtos/delete/${produto.id}`)
        .then((res) => {
            if(res.status ===200){
                props.buscaTodos();
            }
        }

        )
    }

    return(
        <div className={styles.produtoCard}>
            <Card sx={{maxWidth: 345}} >
                <CardHeader
                    title={produto.nome}
                    action={
                        <FormControlLabel
                            control={
                                <DeleteForeverIcon onClick={() => deletaProduto()}/>
                            }
                            
                        />
                    }
                />
                <CardMedia
                    component='img'src={produto.imagem_url}
                    
                    alt="Foto do produto"
                />
                <CardContent>
                    <Typography>
                        {produto.descricao}
                    </Typography>
                    <Typography>
                        Preço Custo:R${produto.preco_custo}
                    </Typography>
                    <Typography>
                        Preço Venda:R${produto.preco_venda}
                    </Typography>
                    <Typography>
                        Categoria: {props.categorias.find((categoria) => {
                            return(categoria.id === produto.id_categoria)
                        })?.nome}
                    </Typography>
                    <Typography>
                        {formataData(produto.registro)}
                    </Typography>    
                </CardContent>
                <CardActions>
                <Button onClick={() => {setModalOpen(true)}}>
                    Editar
                </Button>
                </CardActions>
            </Card>
            <ProdutoModal open={modalOpen} onClose={() => {setModalOpen(false)}} onSave={(produto) => {alteraProduto(produto)}} produto={produto} categorias={props.categorias} />
        </div>
    
    )
}
 
export default ProdutoCard;