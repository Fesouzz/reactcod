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
  
  //Funão executada quando o usuário clicar no botão consultar
  function consultarClima () {
  
  // Verifica se a cidade digitada é são paulo
    if (
    cidade.toLowerCase() === "são paulo" || 
    cidade.toLowerCase() === "são paulo" 
  ) {

    //Atualiza a temperatura
     setTemperatura("24°C");
    
     //Atualiza o clima
     setClima("Ensolarado");
    
     //Atualiza a umidade
     setUmidade("60%");
  }
  else if (cidade.toLowerCase() === "curitiba"){

    setTemperatura("17°");

    setClima("Chuvoso");

    setUmidade("85%")
  }
  else if (cidade.toLowerCase() === "recife"){

    setTemperatura("30°");

    setClima("Ensolarado");

    setUmidade("45%")
  }
    else if (cidade.toLowerCase() === "rio grande do sul"){

    setTemperatura("9°");

    setClima("Chuvoso");

    setUmidade("95%")
  }

else {

  setTemperatura ("---");
  setClima ("cidade não encontrada");
  setUmidade ("--");
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
    <h2>Cidade: {temperatura}</h2>
    
    {/*Exibe condição climática */}
    <h2>Cidade: {clima}</h2>

    {/*Exibe a umidade */}
    <h2>Cidade: {umidade}</h2>

</div>
)
}

//Exporta o componente App para ser utilizado no React

export default App;