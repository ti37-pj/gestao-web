import React, { useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import FuncionarioTabela from '../Componentes/FuncionarioTabela';

import FabAdd from '../Componentes/FabAdd';
import FuncionarioModal from '../Componentes/FuncionarioModal';


function Funcionarios(){

    const [funcionarios, setFuncionarios ] = React.useState([])
    useEffect(()=>{
        buscaTodos()
    }, [])

    const buscaTodos = () => {
        axios.get("http://10.60.46.31:3001/funcionarios/busca_todos")
        .then(res => setFuncionarios(res.data))
        .catch(res => console.log(res));
    }

    const cadastraFuncionario = (Funcionarios) => {
        console.log(Funcionarios)
        axios.post("http://10.60.46.31:3001/funcionarios/insere", Funcionarios)
        .then((res) => {
            if (res.status === 201 || res.status === 200) {
                buscaTodos();
                handleClose();
            }
        })
        .catch();
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    return(
        <div>
            <h1>Funcionários</h1>
            {(funcionarios === 0 )?(
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