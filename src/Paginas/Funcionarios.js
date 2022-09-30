import React, { useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import FuncionarioTabela from '../Componentes/FuncionarioTabela';

import FabAdd from '../Componentes/FabAdd';
import FuncionarioModal from '../Componentes/FuncionarioModal';


function Funcionarios(){

    const [funcionarios, setFuncionarios ] = React.useState([])

    const [nome, setNome] = React.useState();
    const [cargo, setCargo] = React.useState();
    const [usuario, setUsuario] = React.useState();
    const [senha, setSenha] = React.useState();

    useEffect(()=>{
        axios.get("http://10.60.46.31:3001/funcionarios/busca_todos")
            .then(
                res => {setFuncionarios(res.data)
                console.log (res.data)}
            )
            .catch(res => console.log(res))


    }, [])

    const cadastraFuncionario = (funcionario, event) => {
        axios.post("http://10.60.46.31:3001/funcionarios/busca_todos")
        event.preventDefault();

    //     setLista(lista => [...lista,
    //         {
    //             nome: funcionario.nome,
    //             cargo: funcionario.cargo,
    //             usuario: funcionario.usuario,
    //             senha: funcionario.senha,
    //             contato: funcionario.contato,
    //         }
    // ] );

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    return(
        <div>
            <h1>Funcionários</h1>
            {(funcionarios == 0 )?(
                <CircularProgress/>
            ):(
                <FuncionarioTabela funcionarios={funcionarios} />
            )}

            <FabAdd onClick={handleOpen} />
            
            <FuncionarioModal open={open} onClose={handleClose} onSave={funcionarios => cadastraFuncionario(funcionarios)} />
            
        </div>
    )

}

export default Funcionarios; 