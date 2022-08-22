import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css'

/**
 * Fazer uma requisição http (api.get) para pegar o filme que contem o id passado por url
 */

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        //Tentou acessar com um id que não existe, volto ele para a página home
        history.replace('/');
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    return () => {
      console.log('COMPONENTE DESMONTADO');
    }
  }, [id, history]);

  //Salvar os filmes favoritos no localStorage
  function salvaFilmes() {
    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //se ja tiver o filme salvo, não posso duplicar o filme. Ignora o filme
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (hasFilme) {
      toast.info('Você já possui esse filme salvo.');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!');
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    )
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="botoes">
        <button onClick={salvaFilmes}>Salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}