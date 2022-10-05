import React, { useState } from "react";
import styles from './styles.module.css';
import api from "../../api";
import FuncionarioModal from "../FuncionarioModal";

const FuncionarioTabela = ({funcionarios}) => {

    const [modalOpen, setModalOpen] = useState(false);

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
        .catch();
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
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Usuário</td>
                    <td>Cargo</td>
                    <td>Contato</td>
                    <td>Registro</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody>
                {
                    funcionarios.map(funcionario =>
                            <tr>
                                <td> {funcionario.nome} </td>
                                <td> {funcionario.usuario} </td>
                                <td> {funcionario.cargo} </td>
                                <td> {funcionario.contato} </td>
                                <td> {funcionario.registro} </td>
                                <td> <button onClick={()=> editaFuncionario}>E</button> <button onClick={()=> deletaFuncionario}>R</button> </td>
                            </tr>
                    )
                }
                <FuncionarioModal open={modalOpen} onClose={() => {setModalOpen(false)}} onSave={(funcionario) => {editaFuncionario(funcionario)}} funcionario={funcionarios} />
            </tbody>
        </table>
    
    )
}
 
export default FuncionarioTabela;