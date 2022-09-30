import React, { useState } from "react";
import styles from './styles.module.css';

const FuncionarioTabela = ({funcionarios}) => {

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
                                <td> <button>E</button> <button>R</button> </td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    
    )
}
 
export default FuncionarioTabela;