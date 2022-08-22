/**
 * Fazer um requisição http (api.get())
 * useEffect: toda fez que abrir a página, busca os filmes na api
 * Pegar apenas o id, nome e imagem dos filmes
 */

import api from '../../services/api'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  //Carrega todos os filmes ao acessar o site na rota / (home)
  useEffect(() => {
    async function loadFilmes() {
      //sujeitoprogramador.com/r-api/?api=filmes

      //fetch('https://sujeitoprogramador.com/r-api/?api=filmes')

      const response = await api.get('r-api/?api=filmes')
      //console.log(response)
      setFilmes(response.data);

    }

    loadFilmes();
  }, [])

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}