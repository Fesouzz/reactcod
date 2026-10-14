import express from "express";
import cors from "cors";

// Importa o módulo FS (File System)
//Este módulo permite ler e escrever arquivos utilizando JavaScript
import fs from "fs";

// Importa a conexão criada com o firebase
import db from "./firebase.js";

import{
    ref,
    push,
} from "firebase/database";

const app = express();

app.use(cors());

//permite que a api receba e interprete dados no formato json
app.use(express.json());

let historico = [];

//Verifica se o arquivo historico.json existe.
//Caso exista os dados serão carregados, para dentro do vetor histórico

if(fs.existsSync("./api/historico.json")){
    
    //Lê o conteúdo do arquivo histórico.json
    const dadosArquivo = fs.readFileSync (
        "./api/historico.json",
        "utf8"
    );

    try{
        if (dadosArquivo.trim() !== ""){
            // Converte o JSON do arquivo para Array JavaScript
            historico = JSON.parse(dadosArquivo)
        } else {
            historico = [];
        }
    } catch {
        historico = [];
    }
}

app.get("/historico", (req, res) => {
    res.json(historico);
})

app.post("/historico", async (req, res) => {
    historico.push(req.body);

    //Cria uma referencia chamada historico dentro do Firebase
    //Caso ela não exista o firebase irá criá-la automaticamente
    const referenciaFirebase = ref (
        db,
        "historico"
    );

    
    // Salva uma cópia dos dados também no Firebase Realtime Database
    await push (
        referenciaFirebase,
        req.body
    );

    
    // Converte o array JavaScript para o formato JSON.
    // O número 2 deixa o arquivoo organizado e legível
    const historicoJSON = JSON.stringify(
        historico,
        null,
        2
    );

    //Salva os dados atualizados no arquvo historico.json
    //Assim os registros permanecem armazenados mesmo após desligar o servidor
    fs.writeFileSync(
        "./api/historico.json",
        historicoJSON
    );

    //Retorna uma mensagem informando que o registro foi salvo com sucesso
    res.json({
        mensagem: "Consulta salva"
    });
});

// Inicialização do servidor 

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})