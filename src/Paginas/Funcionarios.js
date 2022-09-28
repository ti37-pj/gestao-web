import React, { useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function funcionarios(){

    const [funcionarios, setFuncionarios ] = React.useState([])

    const [nome, setNome] = React.useState();
    const [cargo, setCargo] = React.useState();
    const [usuario, setUsuario] = React.useState();
    const [senha, setSenha] = React.useState();

    useEffect(()=>{
        axios.get("http://10.60.46.31:3001/funcionarios/busca_todos")
            .then(
                res => setFuncionarios(res.data)
            )
            .catch(res => console.log(res))


    }, [])

    const cadastraFuncionario = (funcionario, event) => {
        axios.post("http://10.60.46.31:3001/funcionarios/busca_todos")
        event.preventDefault();

        setLista(lista => [...lista,
            {
                nome: funcionario.nome,
                cargo: funcionario.cargo,
                usuario: funcionario.usuario,
                senha: funcionario.senha,
                contato: funcionario.contato,
            }
    ] );

    }


    return(
        <div>
            <h1>Funcionários</h1>
            {(funcionarios === 0 )?(
                <CircularProgress/>
            ):(
                <li>
                    {funcionarios.map(funcionario => <FuncionarioCard funcionario={funcionario}/>)}
                </li>
            )}

            <FabAdd onClick={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
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
                    label="Insira o Nome do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    id="standard-basic"
                    label="Insira a função do empregado"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    id="standard-basic"
                    label="Insira o Nome do Usuario"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="varchar"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    id="standard-basic"
                    label="Insira a senha"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text" 
                    id="standard-basic"
                    label="Insira a Categoria do Produto"
                    variant="standard" />

                    <TextField 
                    sx={styleText}
                    type="text"
                    id="standard-basic"
                    value={imagem}
                    onChange={(e) => setimagem(e.target.value)}
                    label="Insira a URL da imagem do Produto"
                    variant="standard" />

                    <Button onSubmit={event => cadastraProduto(produtos, event)}>Salvar</Button>

                    <Button>Cancelar</Button>
                </Box>
            </Modal>

        </div>
    )

}

export default Funcionarios; 