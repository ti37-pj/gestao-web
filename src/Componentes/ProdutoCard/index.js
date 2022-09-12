import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Switch, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import EditIcon from '@mui/icons-material/Edit';



const ProdutoCard = ({produto}) => {

    const [apareceMenu, setApareceMenu] = useState(false);

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
                        {produto.descricao}
                    </Typography>
                    <Typography>
                        Preço Custo:R${produto.preco_custo}
                    </Typography>
                    <Typography>
                        Preço Venda:R${produto.preco_venda}
                    </Typography>
                    <Typography>
                        {produto.registro}
                    </Typography> 
                </CardContent>
                <CardActions>
                <Button>
                    Editar
                </Button>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default ProdutoCard;