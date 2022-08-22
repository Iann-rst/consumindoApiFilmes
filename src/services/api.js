import axios from 'axios';

/*Base URL: http://sujeitoprogramador.com/

LISTA TODOS OS FILMES: r-api/?api=filmes/ 

LISTA FILME COM ID=X: r-api/?api=filmes/123 (FILME COM ID 123)

*/

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com'
});

export default api;
