import React, { useEffect } from 'react';
import ProdutoCard from '../Componentes/ProdutoCard';
import axios from 'axios';
import Cards from '../Componentes/Cards/Index';
import {CircularProgress} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const PGProdutos = () => {

    useEffect(()=>{
        setTimeout(() => {
            mudaProdutos([
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                },
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                },
                {
                    title:'X-Tudo',
                    descricao:'Pão, ovo, muçarela, hamburguer',
                    preco_custo:"18",
                    preco_venda:"25",
                    registro:'12/09/2022 as 14:16',
                    imagem_url:"https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/xtudo.png?w=650&ssl=1"
                }
            ])
        }, 3000)


    }, [])

    const [produtos, mudaProdutos] = React.useState([])

    axios.get("http://10.60.46.31:3001/produtos/busca_todos")

    return ( 
        <div>
            <h1>Produtos</h1>
            {(produtos == 0) ? (
                <CircularProgress />
            ) : (
                <Cards>
                    {produtos.map(produto => <ProdutoCard produto={produto}/>)}
                </Cards>
            )}

            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>

        </div>
     );
}
 
export default PGProdutos;