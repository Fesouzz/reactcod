//Importa a biblioteca express, responsável por criar o servidor e as rotas da API
import express from "express";

//Importa a biblioteca CORS que permitea comunicação entre
//aplicações executadas em portas diferentes (React e API)
import cors from "cors";

///Cria uma instância da aplicação Expres
const app = express();

//Habilita o cors para permitir requisições vindas do React
app.use(cors());

//permite que a API receba e interprete dados no formato JSON
app.use(express.json());

//Vetor responsável por armazenar temporariamente todas as consultas realizados pelo usuário
let historico = [];

//MÉTODO GET
//Utilizado para consultar informações já armazenadas na API
//Rota responsável por retornar todo o histórico
app.get("/historico", (req, res) => {
    
    //Envia a lista completa de consultas em formato json
    res.json(historico);
});

//MÉTODO POST
//Utiizado para enviar informações para API
app.post("/historico", (req, res) => {
    
    //Adiciona os dados recebidos pelo React ao vetor de histórico
    historico.push(req.body);

    res.json({
        mensagem: "Consulta salva!"
    })
});

//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});