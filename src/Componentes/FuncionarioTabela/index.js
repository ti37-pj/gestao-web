import React, { useState } from "react";
import styles from './styles.module.css';
import api from "../../api";
import FuncionarioModal from "../FuncionarioModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FuncionarioTabela = ({funcionarios}) => {

    const [modalOpen, setModalOpen] = useState(false);

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

    const editaFuncionario = (funcionarioEditado) => {
        console.log(funcionarios)
        api.put(`/funcionarios/altera/${funcionarios.id}`, funcionarioEditado)
        .then((res) => {
           if (res.status === 200) {
                setModalOpen(false)
                funcionarioEditado.id = funcionarios.id
                funcionarios(funcionarioEditado)
            }
        })
        .catch(e=>console.log(e));
    }

    const deletaFuncionario = () => {
        api.delete(`/funcionario/deleta/${funcionarios.id}`)
        .then((res) => {
            if(res.status ===200){
                //props.buscaTodos();
            }
        }

        )
    }

    return(
        <table>
            <tbody>
                <tr>
                    <td>Nome</td>
                    <td>Usuário</td>
                    <td>Cargo</td>
                    <td>Contato</td>
                    <td>Registro</td>
                    <td>Ações</td>
                </tr>
                {
                    funcionarios.map(funcionario =>
                            <tr key={funcionario.id} >
                                <td> {funcionario.nome} </td>
                                <td> {funcionario.usuario} </td>
                                <td> {funcionario.cargo} </td>
                                <td> {funcionario.contato} </td>
                                <td> {formataData(funcionario.registro)} </td>
                                <td> <button onClick={()=> setModalOpen(true)}>Edita</button> <button onClick={()=> deletaFuncionario}>Remover</button> </td>
                            </tr>
                    )
                }
                <FuncionarioModal open={modalOpen} onClose={() => {setModalOpen(false)}} onSave={(funcionario) => {editaFuncionario(funcionario)}} funcionario={funcionarios} />
            </tbody>
        </table>
    
    )
}
 
export default FuncionarioTabela;