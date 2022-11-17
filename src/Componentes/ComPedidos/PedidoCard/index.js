import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Typography, Button } from "@mui/material";
import { borderColor } from "@mui/system";

const PedidoCard = (props) => {
    const pedido = props.pedido;

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

            return(
                horas
            )
        }

    const styleRegistro = {
        fontSize: 10,
    }
    const styleCard = {
        width:'250px',
        margin:20,
    }
    const styleProduto = {
        display:'flex'
    }

    const mudaColuna = () =>{

        switch(pedido.status){
            case 'aguardando' : pedido.status = 'confirmado'; break
            case 'confirmado' : pedido.status = 'preparando'; break
            case 'preparando' : pedido.status = 'enviado'; break
            case 'enviado' : pedido.status = 'concluido'; break
            default: pedido.status = 'concluido';
        }
        const novosPedidos = props.pedidos.map(p => {
            if(p.id == pedido.id){
                p.status = pedido.status
            }
            return p
        })
        props.setPedidos(novosPedidos)

    }

    return(
        <div>
            <Card style={styleCard} >
                <CardHeader title= {`Mesa: ${pedido.mesa}`}/>
                <CardContent>
                    <Typography>
                        Status:{pedido.status}
                    </Typography>
                    <Typography>
                        Observação:{pedido.observacao}
                    </Typography>
                    Produtos:{pedido.produto.map(p => {
                            //console.log(p)
                            return<div style={styleProduto} >
                                <Typography>{p.quantidade}x</Typography>
                                <Typography>{p.nome}</Typography>
                            </div>
                        })}
                    <Typography sx={styleRegistro}>
                        {formataData(pedido.registro)}
                    </Typography>    
                </CardContent>
                <CardActions>
                    <Button onClick={() => mudaColuna()} > --- </Button>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default PedidoCard;