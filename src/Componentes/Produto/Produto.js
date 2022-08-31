import React from "react";
import "./Produto.css";

const Produto = () => {
    return ( 
        <div className="produto">
                <h2>Bolinho de Bacalhau</h2>
                <img src={"https://via.placeholder.com/150"}/>
                <p className="Venda">Preço Venda:R$24,00</p>
                <p className="Custo">Preço Custo:R$20,00</p>
                <p className="Descricao">A receita tradicional portuguesa leva batatas, 
                bacalhau cozido e desfiado, cebola picada, alho, cheiro-verde e ovo.</p>
                <p className="RegistroP">29/28/2022 as 14:58</p>
                <button className="Switch">Switch</button>
                <button className="Editar">Editar</button>
        </div>
     );
}
 
export default Produto;