//Importa a função responsável por iniciar o Firebase.
import {initializeApp} from "firebase/app";

//Importa a função responsável por conectar o Realtime Database.
import {getDatabase} from "firebase/database";

//Configuração do projeto Firebase.

//Essas configurações são geradas automaticamente pelo Firebase 
// quando registramos a nossa aplicação.

//Elas funcionam como um endereço que permite que nossa aplicação 
//encontre e se conecte ao banco de dados na nuvem.

const firebaseConfig = {
    //Identificador único do aplicativo
    apiKey: "AIzaSyCw92u6LEPV3NVELQnxZ0P50IimdH1zCeE",

    //Domínio de autentiçação do projeto
     authDomain: "dbaulareact-5c68a.firebaseapp.com",

     //Endereço do Realtime Database
     databaseURL: "https://dbaulareact-5c68a-default-rtdb.firebaseio.com",
    
     //Identificador do projeto Firebase
     projectId: "dbaulareact-5c68a",

     //Seviço de armazenamento de arquivos
     storageBucket: "dbaulareact-5c68a.firebasestorage.app",

     //Identificador responsável pela troca de mensagens
     messagingSenderId: "1056394127795",

     //Identificador único da aplicação web
     appId: "1:1056394127795:web:ba4dd012630eb6459483c6"
};

//Inicialização do Firebase utilizando as configurações acima
const app = initializeApp(firebaseConfig);

//Cria uma conexão com o RealtimeDatabase

//A partir deste objeto será possível:
// . Ler dados
// . Salvar dados
// . Atualizar dados
// . Excluir dados
const db = getDatabase(app);

//Exporta a conexão para que ela possa ser utilizada em outros arquivos como server.js
export default db;

