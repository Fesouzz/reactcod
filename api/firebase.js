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
    apiKey: "AIzaSyC2paOuueK7Kb-eZ0CHi4YsWqf0-k8VuSY",

    //Domínio de autentiçação do projeto
     authDomain: "dbaulareact-7eb1c.firebaseapp.com",

     //Endereço do Realtime Database
     databaseURL: "https://dbaulareact-7eb1c-default-rtdb.firebaseio.com",
    
     //Identificador do projeto Firebase
     projectId: "dbaulareact-7eb1c",

     //Seviço de armazenamento de arquivos
     storageBucket: "dbaulareact-7eb1c.firebasestorage.app",

     //Identificador responsável pela troca de mensagens
     messagingSenderId: "93784514903",

     //Identificador único da aplicação web
     appId: "1:93784514903:web:c9a415360e17daa7f49e12",

     //Identificador utilizado pelo google analytics
     measurementId: "G-YJ1DR6W2L0"
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

