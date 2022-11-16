import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Typography,FormControlLabel, Button } from "@mui/material";

const PedidoCard = (props) => {
    const [pedido, setPedido] = React.useState(props.pedido);

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

    const styleRegistro = {
        fontSize: 10,
    }

    return(
        <div>
            <Card sx={{width:'250px', heigt:'455px'}} >
                <CardHeader title={pedido.mesa}/>
                <CardContent>
                    <Typography>
                        Status:{pedido.status}
                    </Typography>
                    <Typography>
                        Preço Custo:R$
                    </Typography>
                    <Typography>
                        Preço Venda:R$
                    </Typography>
                    <Typography sx={styleRegistro}>
                        {formataData(pedido.registro)}
                    </Typography>    
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    
    )
}
 
export default PedidoCard;