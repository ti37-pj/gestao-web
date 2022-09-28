import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Switch, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';




const FuncionarioCard = ({produto: funciorarios}) => {

    const [apareceMenu, setApareceMenu] = useState(false);

    const [editando, setEditando] = useState(null);

    return(
        <div className={styles.produtoCard}>
            <Card sx={{maxWidth: 345}} >
                <CardHeader
                    title={funciorarios.title}
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
                    {funciorarios.editando != null ? 
                    <>

                        <TextField id="standard-basic" value={funciorarios.nome} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={funciorarios.cargo} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={funciorarios.contato} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={funciorarios.usuario} label="Standard" variant="standard" />
                        <TextField id="standard-basic" value={funciorarios.senha} label="Standard" variant="standard" />

                    </>              
                    :
                    <>
                        <Typography>
                            {funciorarios.nome}
                        </Typography>
                        <Typography>
                            {funciorarios.cargo}
                        </Typography>
                        <Typography>
                            Preço Custo:R${funciorarios.usuario}
                        </Typography>
                        <Typography>
                            Preço Venda:R${funciorarios.senha}
                        </Typography>
                        <Typography>
                            Categoria:{funciorarios.contato}
                        </Typography>
                    </>          
                }
                    <Typography>
                        {funciorarios.registro}
                    </Typography>    
                </CardContent>
                <CardActions>
                <Button onClick={() => funciorarios.editando = true}>
                    Editar
                </Button>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default FuncionarioCard;