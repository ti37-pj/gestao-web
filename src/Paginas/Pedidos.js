import React from 'react';
import PedidoCard from '../Componentes/ComPedidos/PedidoCard';
import api from '../api';
import Cards from '../Componentes/Cards/Index';

const Pedidos = () => {

    React.useEffect(()=>{
        buscaTodos();
    }, [])

    const [pedidos, setPedido] = React.useState([]);
    console.log(pedidos)

    const buscaTodos = () => {
        api.get("pedidos/busca_todos")
        .then(res => setPedido(res.data))
        .catch(res => console.log(res.data));
    }

    const styleStatus = {
        display: 'flex',
        flexDirection: 'row'
    }

    return ( 
        
        <div>
            <h1>Pedidos</h1>
            {(pedidos == 0) ? (
                <text>Nenhum Pedido feito</text>
            ) : (
                <div style={styleStatus} >
                    <div>
                        {pedidos.map(pedido =>{
                            
                            if(
                            pedido.status == 'aguardando'
                            ){
                                return<PedidoCard buscaTodos={buscaTodos} pedido={pedido} key={pedido.id}/>
                            }
                        })
                        }
                    </div>
                    <div>
                        {pedidos.map(pedido =>{
                            if(
                            pedido.status == 'concluido'
                            ){
                                return<PedidoCard buscaTodos={buscaTodos} pedido={pedido} key={pedido.id}/>  
                            }
                        })
                        }
                    </div>
                </div>
            )}
        </div>
     );
}
//(pedido => <PedidoCard buscaTodos={buscaTodos} pedido={pedido} key={pedido.id} />)

//aguardando
//confirmado
//preparando
//enviado
//concluido
 
export default Pedidos;