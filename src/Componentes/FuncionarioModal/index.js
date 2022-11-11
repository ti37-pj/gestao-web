import React from 'react';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './styles.module.css';

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

const FuncionarioModal = (props) => {

    const [nome, setNome] = React.useState(props.funcionario?.nome);
    const [usuario, setUsuario] = React.useState(props.funcionario?.usuario);
    const [cargo, setCargo] = React.useState(props.funcionario?.cargo);
    const [telefone, setTelefone] = React.useState(props.funcionario?.telefone);
    const [email, setEmail] = React.useState(props.funcionario?.email);
    const [cpf, setCpf] = React.useState(props.funcionario?.cpf);
    const [senha, setSenha] = React.useState(props.funcionario?.senha);


    return ( 
        <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box sx={style}>
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    id="standard-basic"
                    label="Insira o Nome "
                    variant="standard" />
    
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    id="standard-basic"
                    label="Insira a nome de usario"
                    variant="standard" />
    
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    id="standard-basic"
                    label="Insira o Cargo"
                    variant="standard" />
    
                    <TextField 
                    sx={styleText}
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    id="standard-basic"
                    label="Insira o Telefone"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text" 
                    id="standard-basic"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    label="Insira o Cpf"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text" 
                    id="standard-basic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Insira o Email"
                    variant="standard" />
    
                    <TextField 
                    sx={styleText}
                    type="text" 
                    id="standard-basic"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    label="Insira a Senha"
                    variant="standard" />
    
                    <Button onClick={_event => props.onSave({
                        nome,
                        senha,
                        contato: telefone,
                        cargo,
                        usuario,
                    }) }>Salvar</Button>
    
                    <Button onClick={props.onClose}>Cancelar</Button>
                </Box>
            </Modal>
     );
}


export default FuncionarioModal;