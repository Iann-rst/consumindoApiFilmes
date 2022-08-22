/**
 * Fazer um requisição http (api.get())
 * useEffect: toda vez que abrir a página, busca os filmes na api
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
      try {

        //buscar os dados de uma API externa
        const response = await api.get('r-api/?api=filmes')
        setFilmes(response.data);

        /*
        * Caso estivesse utilizando um backend:
        * 
        * Front pede informação para o backend, 
        * backend por sua vez vai acessar a api externa e 
        * buscar os dados da requisição do front.
        * 
        * Após conseguir os dados, o backend processa os dados e manda um retorno para o Front
        * 
        * Front apresenta as informação para o usuário
        */

      } catch (error) {
        console.log(error)
      }
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