import React from 'react';
import Produto from '../Componentes/Produto/Produto';
import axios from 'axios';


const Produtos = () => {

    const [produtos, mudaProdutos] = React.useState([])

    axios.get("http://10.60.46.31:3001/produtos/busca_todos")

    return ( 
        <div>
            <h1>Produtos</h1>

            {produtos == 0 ? "Carregando": <Produto/>}

        </div>
     );
}
 
export default Produtos ;