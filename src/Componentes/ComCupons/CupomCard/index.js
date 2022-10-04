import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {CardContent, CardHeader, Typography,FormControlLabel, Button } from "@mui/material";
import styles from './styles.module.css';
import CupomModal from "../CupomModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import api from '../../../api';

const CupomCard = (props) => {

    const [apareceMenu, setApareceMenu] = useState(false);
    const [cupom, setCupom] = useState(props.cupom);

    const [modalOpen, setModalOpen] = useState(false);

    //2022-09-28T19:09:37.000Z

    const formataData = (date) => {
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

    const alteraCupom = (cupomAlterado) => {
        console.log(cupom)
        api.put(`/cupons/altera/${cupom.id}`, cupomAlterado)
        .then((res) => {
           if (res.status === 200) {
                setModalOpen(false)
                cupomAlterado.id = cupom.id
                setCupom(cupomAlterado)
            }
        })
        .catch();
    }

    const deletaCupom = () => {
        api.delete(`/cupons/delete/${cupom.id}`)
        .then((res) => {
            if(res.status ===200){
                props.buscaTodos();
            }
        }

        )
    }

    return(
        <div className={styles.cuponCard}>
            <Card sx={{maxWidth: 345}} >
                <CardHeader
                    title= {cupom.nome}
                    action={
                        <FormControlLabel
                            control={
                                <DeleteForeverIcon onClick={() => deletaCupom()}/>
                            }
                            
                        />
                    }
                />
                <CardContent>
                    <Typography>
                        Restam:{cupom.quantidade} cupons.
                    </Typography>
                    <Typography>
                        Desconto de:{cupom.desconto}%
                    </Typography>
                    <Typography>
                        Inicia em {formataData(cupom.inicio)} e termina em {formataData(cupom.termino)}
                    </Typography>
                    <Typography>
                    {formataData(cupom.registro)}
                    </Typography>    
                </CardContent>
                <CardActions>
                <Button onClick={() => {setModalOpen(true)}}>
                    Editar
                </Button>
                </CardActions>
            </Card>
            <CupomModal open={modalOpen} onClose={() => {setModalOpen(false)}} onSave={(cupom) => {alteraCupom(cupom)}} cupom={cupom}/>
        </div>
    
    )
}
 
export default CupomCard;