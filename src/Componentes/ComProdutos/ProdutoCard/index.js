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

    const [modalOpen, setModalOpen] = useState(false);

    //2022-09-28T19:09:37.000Z
    let dataFormatada = produto.registro
    let horas = dataFormatada.split("T")[1]
    horas = horas.split(".")[0]
    horas = parseInt(horas.split(":")[0])-3 + ":" + horas.split(":")[1]
    let data = dataFormatada.split("T")[0]
    data = data.split("-").reverse().join("/")
    dataFormatada = data + " às " + horas

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
        api.delete(`/produtos/deleta/${produto.id}`)
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
                        Categoria:{produto.id_categoria}
                    </Typography>
                    <Typography>
                        {dataFormatada}
                    </Typography>    
                </CardContent>
                <CardActions>
                <Button onClick={() => {setModalOpen(true)}}>
                    Editar
                </Button>
                </CardActions>
            </Card>
            <ProdutoModal open={modalOpen} onClose={() => {setModalOpen(false)}} onSave={(produto) => {alteraProduto(produto)}} produto={produto} />
        </div>
    
    )
}
 
export default ProdutoCard;