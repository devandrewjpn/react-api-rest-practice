import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head'
import styles from './Produto.module.css'

const Produto = () => {

const [produto, setProduto] = React.useState(null)
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(null)
const {id} = useParams();

React.useEffect(() => {
    async function fetchProduto(url) {
        try {
            setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
        } catch(e) {
            setError('Ocorreu um erro')
        } finally {
            setLoading(false)
        }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
}, [id])

if(error) return <p>{error}</p>
if(loading) return <div className='loading'></div>
if(produto === null) return null

  return (
    <section className={`${styles.produto} animLeft`}>
        <Head title={produto.nome} />
        <div>
        {produto.fotos.map((f) => (
            <img key={f.src} src={f.src} alt={f.titulo} />
        ))}
        </div>
        <div>
            <h2>{produto.nome}</h2>
            <span className={styles.preco}>R$ {produto.preco}</span>
            <p className={styles.descricao}>{produto.descricao}</p>
        </div>
    </section>
  )
}

export default Produto