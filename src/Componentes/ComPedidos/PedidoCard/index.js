import React from "react";
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Typography, Button } from "@mui/material";
import api from "../../../api";

const PedidoCard = (props) => {
    const pedido = props.pedido;
    const produtos = pedido.produtos

    // console.log(produtos)
    // console.log(pedido)

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

    const styleBtn = {
        display:'flex',
        justifyContent:'flex-end',
        width:'100%',
        fontSize:25,
    }

    const styleRegistro = {
        fontSize: 25,
    }
    const styleCard = {
        width:'250px',
        margin:20,
    }
    const styleText = {
        fontSize:20
    }
    const styleProduto = {
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
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
        console.log(novosPedidos)
        api.put(`pedidos/altera/${pedido.id}`)
            .then((res) => {
                if(res.status == 200){pedido.status = novosPedidos.status}
            } )
            .catch(res => console.log(res.data))

    }

    // api.put(`pedidos/altera/${pedido.id}`)
    //   .then((res) => {
    //      p.status = pedido.status
    //    } )
    //   .catch(res => console.log(res.data))

    return(
        <div>
            <Card style={styleCard} >
                <CardHeader title= {`Mesa: ${pedido.mesa}`}/>
                <CardContent>
                    <Typography style={styleText}>
                        Status: {pedido.status}
                    </Typography>
                    <Typography style={styleText}>
                        Observação: {pedido.observacao}
                    </Typography>
                    <Typography style={styleText}>Produtos:</Typography>
                    {produtos.map(p => {
                        //console.log(p)
                        return<div style={styleProduto} key={p.id} >
                            <Typography style={styleText}>{p.quantidade}x</Typography>
                            <Typography style={styleText}>{p.nome}</Typography>
                        </div>
                    })}
                    <Typography sx={styleRegistro}>
                        {formataData(pedido.registro)}
                    </Typography>    
                </CardContent>
                <CardActions>
                    <div style={styleBtn} >
                        <Button onClick={() => mudaColuna()}> <ArrowForwardIcon/> </Button>
                    </div>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default PedidoCard;