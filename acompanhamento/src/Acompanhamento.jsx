import React from 'react';
import './Acompanhamento.css';

const Acompanhamento = () => {
    return (
        <div>
            <header>
                <div className="container">
                </div>
            </header>
            <main>
                <div className="container">
                    <section className="order-details">
                        <h2>Detalhes do Pedido</h2>
                        <div className="order-info">
                            <p><strong>ID do Pedido:</strong> #123456789</p>
                            <p><strong>Data do Pedido:</strong> 01/08/2024</p>
                            <p><strong>Nome do Cliente:</strong> João da Silva</p>
                            <p><strong>Endereço de Entrega:</strong> Rua das Flores, 123, São Paulo, SP</p>
                        </div>
                    </section>
                    <section className="order-status">
                        <h2>Status do Envio</h2>
                        <div className="status-timeline">
                            <div className="status-card active">
                                <h3>Em Processamento</h3>
                                <p>Seu pedido foi recebido e está sendo processado.</p>
                                <p><strong>Data:</strong> 02/08/2024</p>
                            </div>
                            <div className="status-card active">
                                <h3>Despachado</h3>
                                <p>Seu pedido foi despachado e está a caminho.</p>
                                <p><strong>Data:</strong> 03/08/2024</p>
                            </div>
                            <div className="status-card completed">
                                <h3>Entregue</h3>
                                <p>Seu pedido foi entregue com sucesso.</p>
                                <p><strong>Data:</strong> 05/08/2024</p>
                            </div>
                        </div>
                    </section>
                    <section className="order-history">
                        <h2>Histórico de Atualizações</h2>
                        <ul>
                            <li><strong>01/08/2024:</strong> Pedido recebido e confirmado.</li>
                            <li><strong>02/08/2024:</strong> Pedido está sendo processado.</li>
                            <li><strong>03/08/2024:</strong> Pedido despachado para entrega.</li>
                            <li><strong>05/08/2024:</strong> Pedido entregue com sucesso.</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Acompanhamento;