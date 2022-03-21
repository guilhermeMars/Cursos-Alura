// O arquivo db.json é utilizado pra guardar informações vindas de um servidor. "npx json-server --watch db.json --port 5000" inicia o server localmente
// api.js será utilizado para fazer contato com o servidor. Axios é a biblioteca utilizada para fazer essa conexão

import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const busca = async(url, setDado)=>{ // Por se tratar de servidor os dados são assincronos, podendo vir um tempo antes ou depois
    const response = await api.get(url); // Await - Esperar a resposta da api
    setDado(response.data)
}
