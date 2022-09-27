import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Switch, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import ProdutoModal from "../ProdutoModal";





const ProdutoCard = (props) => {

    const [apareceMenu, setApareceMenu] = useState(false);
    const [produto, setProduto] = useState(props.produto);

    const [modalOpen, setModalOpen] = useState(false);

    const alteraProduto = (produtoAlterado) => {
        //api.put("/produtos", produtoAlterado)
        //.then((res) => {
        //    if (res.status === 201 || res.status === 200) {
                setModalOpen(false)
                setProduto(produtoAlterado)
        //    }
        //})
        //.catch();
    }

    return(
        <div className={styles.produtoCard}>
            <Card sx={{maxWidth: 345}} >
                <CardHeader
                    title={produto.title}
                    action={
                        <FormControlLabel
                            control={
                                <Switch />
                            }
                            label="Aparece no menu"
                        />
                    }
                />
                <CardMedia
                    component='img'src={produto.imagem_url}
                    
                    alt="Foto do produto"
                />
                <CardContent>
                    <Typography>
                        {produto.nome}
                    </Typography>
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
                        {produto.registro}
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