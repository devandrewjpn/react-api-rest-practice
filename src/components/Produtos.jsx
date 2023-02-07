import React from "react";
import { Link } from "react-router-dom";
import styles from './Produtos.module.css';

const Produtos = () => {

    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto').then(r=>r.json()).then(json=>setProdutos(json))
    } , [])

    if(produtos === null) return null

    return (
        <section className={`${styles.produtos} animLeft`}>
            {produtos.map((p) =>
                <Link to={`produto/${p.id}`} key={p.id}>
                    <img src={p.fotos[0].src} alt={p.fotos[0].titulo} />
                    <h1 className={styles.nome}>{p.nome}</h1>
                </Link>
            )}
        </section>
    )
}

export default Produtos