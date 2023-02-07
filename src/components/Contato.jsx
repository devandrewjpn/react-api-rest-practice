import React from "react";
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from "./Head";

const Contato = () => {
    return (
        <section className={`${styles.contato} animLeft`}>
            <Head title="Página contato" />
            <img src={foto} alt="Imagem tela de contato" />
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>teste@teste.com</li>
                    <li>(00)0000-0000</li>
                    <li>Rua tal número tei</li>
                </ul>
            </div>
        </section >
    )
}

export default Contato