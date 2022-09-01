import React from 'react';
import axios from 'axios';


const DashBoard = () => {

    axios.get("http://10.60.46.31:3001/produtos/busca_todos")

    return ( 
        <div>
            <h1>Bem vindo a Gestão</h1>

        </div>
     );
}
 
export default DashBoard ;