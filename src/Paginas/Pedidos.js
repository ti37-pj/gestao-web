import React from 'react';
import PedidoCard from '../Componentes/ComPedidos/PedidoCard';
import api from '../api';

const Pedidos = () => {

    React.useEffect(()=>{
        buscaTodos();
    }, [])

    let timerId = 0

    const [pedidos, setPedidos] = React.useState([]);
    //console.log(pedidos)

    const buscaTodos = () => {
        clearTimeout(timerId)
        api.get(`pedidos/busca_todos_hoje`)
        .then(res => {
            setPedidos(res.data)
            //console.log(res.data)
        })
        .catch(res => console.log(res.data))
        .finally(()=>{
            timerId = setTimeout(buscaTodos, 10000)
        });
    }

    const styleColuns = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        textAlign:'center',
    }

    const styleCards = {
        borderLeft:'1px solid black'
    }

    const styleCardsFirst = {
    }

    const styleCabecalho = {
        width:'100%',
        textAlign:'center',
        fontSize: 50,
    }

    return ( 
        
        <div>
            <h1>Pedidos</h1>
            {(pedidos.length === 0) ? (
                <p>Nenhum Pedido feito</p>
            ) : (
                <div>
                    <div style={styleColuns} >
                        <div style={styleCardsFirst} >
                            <div style={styleCabecalho} >Aguardando</div>
                            {pedidos.map(pedido =>{
                                
                                if(
                                pedido.status == 'aguardando'
                                ){
                                    return<PedidoCard buscaTodos={buscaTodos} pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>
                                }
                            })
                            }
                        </div>
                        <div style={styleCards} >
                            <div style={styleCabecalho} >Confirmado</div>
                            {pedidos.map(pedido =>{
                                if(
                                pedido.status == 'confirmado'
                                ){
                                    return<PedidoCard buscaTodos={buscaTodos} pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>  
                                }
                            })
                            }
                        </div>
                        <div style={styleCards} >
                            <div style={styleCabecalho} >Preparando</div>
                            {pedidos.map(pedido =>{
                                if(
                                pedido.status == 'preparando'
                                ){
                                    return<PedidoCard buscaTodos={buscaTodos} pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>  
                                }
                            })
                            }
                        </div>
                        <div style={styleCards} >
                            <div style={styleCabecalho} >Enviar</div>
                            {pedidos.map(pedido =>{
                                if(
                                pedido.status == 'enviado'
                                ){
                                    return<PedidoCard buscaTodos={buscaTodos} pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>  
                                }
                            })
                            }
                        </div>
                        <div style={styleCards} >
                            <div style={styleCabecalho} >Concluido</div>
                            {pedidos.map(pedido =>{
                                if(
                                pedido.status == 'concluido'
                                ){
                                    return<PedidoCard buscaTodos={buscaTodos} pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>  
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Pedidos;