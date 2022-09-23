import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Switch, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';




const ProdutoCard = ({produto}) => {

    const [apareceMenu, setApareceMenu] = useState(false);

    const [editando, setEditando] = useState(null);

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
                    {produto.editando != null ? 
                    <>

                        <TextField id="standard-basic" value={produto.nome} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={produto.descricao} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={produto.preco_custo} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={produto.preco_venda} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={produto.categoria} label="Standard" variant="standard" />

                    </>              
                    :
                    <>
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
                            Categoria:{produto.categoria}
                        </Typography>
                    </>          
                }
                    <Typography>
                        {produto.registro}
                    </Typography>    
                </CardContent>
                <CardActions>
                <Button onClick={() => produto.editando = true}>
                    Editar
                </Button>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default ProdutoCard;