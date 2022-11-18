import React from 'react';
import PedidoCard from '../Componentes/ComPedidos/PedidoCard';
import api from '../api';

const Pedidos = () => {

    React.useEffect(()=>{
        buscaTodos();
    }, [])

    const [pedidos, setPedidos] = React.useState([]);
    //console.log(pedidos)

    //aguardando
    //confirmado
    //preparando
    //enviado
    //concluido

    const buscaTodos = () => {

         const banco = [
            {id:1, registro:"2022-11-17T14:00:00", mesa:6, observacao:"Teste", id_cliente:1, status:"aguardando", id_venda:12, produto:[{nome:"Hamburgão", quantidade:2},{nome:"batata", quantidade:1}]},
            {id:2, registro:"2022-11-17T14:00:00", mesa:3, observacao:"", id_cliente:2, status:"aguardando", id_venda:13, produto:[{nome:"Hamburgão", quantidade:2},]},
            {id:3, registro:"2022-11-17T14:00:00", mesa:5, observacao:"Testando", id_cliente:3, status:"confirmado", id_venda:14, produto:[{nome:"Hamburgão", quantidade:1},{nome:"batata", quantidade:1}]},
            {id:4, registro:"2022-11-17T14:00:00", mesa:4, observacao:"", id_cliente:4, status:"confirmado", id_venda:15, produto:[{nome:"Hamburgão", quantidade:1},{nome:"coca", quantidade:1}]},
            {id:5, registro:"2022-11-17T14:00:00", mesa:2, observacao:"Testarei", id_cliente:1, status:"preparando", id_venda:16, produto:[{nome:"Hamburgão", quantidade:1},{nome:"batata", quantidade:3}]},
            {id:6, registro:"2022-11-17T14:00:00", mesa:1, observacao:"", id_cliente:6, status:"preparando", id_venda:17, produto:[{nome:"Cerveja", quantidade:2},{nome:"batata", quantidade:2}]},
            {id:7, registro:"2022-11-17T14:00:00", mesa:6, observacao:"Testarai", id_cliente:1, status:"enviado", id_venda:18, produto:[{nome:"Hamburgão", quantidade:2},{nome:"batata", quantidade:1}]},
            {id:8, registro:"2022-11-17T14:00:00", mesa:5, observacao:"", id_cliente:3, status:"enviado", id_venda:19, produto:[{nome:"Hamburgão", quantidade:2},{nome:"batata", quantidade:1}]},
            {id:9, registro:"2022-11-17T14:00:00", mesa:6, observacao:"Testaraivos", id_cliente:1, status:"concluido", id_venda:20, produto:[{nome:"Hamburgão", quantidade:2},{nome:"batata", quantidade:1}]},
            {id:10, registro:"2022-11-17T14:00:00", mesa:4, observacao:"", id_cliente:4, status:"concluido", id_venda:21, produto:[{nome:"Hamburgão", quantidade:2},{nome:"batata", quantidade:1}]},
        ]

        setPedidos(banco)

        // api.get("pedidos/busca_todos")
        // .then(res => setPedidos(res.data))
        // .catch(res => console.log(res.data));
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
            {(pedidos == 0) ? (
                <text>Nenhum Pedido feito</text>
            ) : (
                <div>
                    <div style={styleColuns} >
                        <div style={styleCardsFirst} >
                            <div style={styleCabecalho} >Aguardando</div>
                            {pedidos.map(pedido =>{
                                
                                if(
                                pedido.status == 'aguardando'
                                ){
                                    return<PedidoCard pedidos={pedidos} setPedidos={setPedidos} pedido={pedido} key={pedido.id}/>
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
                                    return<PedidoCard pedido={pedido} key={pedido.id}/>  
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
                                    return<PedidoCard pedido={pedido} key={pedido.id}/>  
                                }
                            })
                            }
                        </div>
                        <div style={styleCards} >
                            <div style={styleCabecalho} >Enviado</div>
                            {pedidos.map(pedido =>{
                                if(
                                pedido.status == 'enviado'
                                ){
                                    return<PedidoCard pedido={pedido} key={pedido.id}/>  
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
                                    return<PedidoCard pedido={pedido} key={pedido.id}/>  
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