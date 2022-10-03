import React from 'react';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './styles.module.css';
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const styleText = {
    border: '2px solid #000',
    padding: '10px',
    margin: '10px',
    width: '90%',
    height:'10%'
}

const CupomModal = (props) => {

    const [nome, setNome] = React.useState(props.cupom?.nome);
    const [quantidade, setQuantidade] = React.useState(props.cupom?.quantidade);
    const [desconto, setDesconto] = React.useState(props.cupom?.desconto);
    const [inicio, setInicio] = React.useState(dayjs(props.cupom?.inicio));
    const [termino, setTermino] = React.useState(dayjs(props.cupom?.termino));

    return ( 
        <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    id="standard-basic"
                    label="Insira o Nome do Cupom"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    id="standard-basic"
                    label="Insira a Quantidade de cupons"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={desconto}
                    onChange={(e) => setDesconto(e.target.value)}
                    id="standard-basic"
                    label="Insira o valor de Desconto do Cupom"
                    variant="standard" />

                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
                        <DateTimePicker 
                        renderInput={(params) => <TextField {...params} />}
                        sx={styleText}
                        type="text"
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                        id="standard-basic"
                        label="Insira a data inicial do cupom"
                        variant="standard" />

                        <DateTimePicker 
                        renderInput={(params) => <TextField {...params} />}
                        sx={styleText}
                        type="text" 
                        id="standard-basic"
                        value={termino}
                        onChange={(e) => setTermino(e.target.value)}
                        label="Insira a data final do Cupom"
                        variant="standard" />
                    </LocalizationProvider>

                    <Button onClick={_event => props.onSave({
                        nome,
                        quantidade,
                        desconto,
                        inicio,
                        termino,
                    }) }>Salvar</Button>

                    <Button onClick={props.onClose}>Cancelar</Button>
                </Box>
            </Modal>
     );
}
 
export default CupomModal;