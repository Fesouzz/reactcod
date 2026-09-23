//Importa o css 
import "./App.css"

//Importando hook useState da biblioteca React
//Ele permite armazenar valores e atualizar 
// valores automaticamente
import {useState} from "react";

//Cria o componente principal da aplicação
function App(){

  // Estado responsável por armazenar a cidade digitada
  const [cidade, setCidade] = useState("");
  // Estado responsável por armazenar a temperatura digitada
  const [temperatura, setTemperatura] = useState("");

  // Estado responsável por armazenar a clima digitada
  const [clima, setClima] = useState("");

  // Estado responsável por armazenar a umidade digitada
  const [umidade, setUmidade] = useState("");
  
  //função executada quando o usuário clicar no botão "consultar"
  async function consultarClima() {
    if(cidade === ""){
      alert("digite uma cidade!");
      return;
    }
    try{

      // Faz a requisição para a API
      const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=99bc9bea7ae65b241e69ca4329a1ee01&units=metric&lang=pt_br`
    );
 
      // Converte a resposta para json
      const dados = await resposta.json();

      // Verifica se a cidade foi encontrada
      if (dados.cod !== 200){
        alert ("cidade não encontrada!");
        return;
      }

      //Atualiza a temperatura
      setTemperatura(dados.main.temp + "°C");

      //Atualiza a condição climática
      setClima(dados.weather[0].description);

      setUmidade(dados.main.humidity + "%");
    }catch (erro){
      console.log(erro);
      alert("Erro ao consultar a API.");
    }
  }
    
  
//retorna a interface visual do sistema
return (

//Container principal da aplicação
  <div style={{
    padding: "20px",
    fontFamily: "Arial"
  }}>

    {/*  Título principal*/}
    <h1>Sistema de Previsão do Tempo</h1>
    {/*Campo para digitação */}
    <input

    //Tipo do campo
    type="text"

    //Texto exibido dentro da caixa
    placeholder= "Digite uma cidade"

    //Valor vinculado ao estado cidade
    value = {cidade}

    //Atualiza o estado quando usuário digita
    onChange={(e) => setCidade(e.target.value)}/>

  {/*botão de consulta */}
    <button

//executa a função consultarClima
    onClick={consultarClima}

//Define a margem à esquerda
    style={{
      marginLeft: "10px"
    }}>

{/*Texto exibido no botão */}
    Consultar
    </button>
    {/*Linha horizontal para separar seções */}
    <hr />

  {/*Exibe a cidade informada */}
    <h2>Cidade: {cidade}</h2>


  {/*Exibe a temperatura informada */}
    <h2>Temperatura: {temperatura}</h2>
    
    {/*Exibe condição climática */}
    <h2>Clima: {clima}</h2>

    {/*Exibe a umidade */}
    <h2>Umidade: {umidade}</h2>

</div>
)
}

//Exporta o componente App para ser utilizado no React

export default App;