import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home'
import {Login} from './pages/login'
import { Feed } from './pages/feed';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;



// Componente funcional:
//          function Nome(propriedade/parametro/props){
//              return }

// Componente de classe:
//         import React, {Component} from 'react';
//         export default class Nome_da_Classe extends Component{
//             constructor(props) {
//               super(props);
//               this.state = x;
//               this.propriedade/parametro} = xxx;
//             }
//               render(){
//         }}

// Ciclo de vida dos componentes:
// 1 - Constructor
// 2 - getDerivedStateFromProps
// 3 - componentDidMount
// 4 - shouldComponentUpdate
// 5 - render
// 6 - getSnapshotBeforeUpdate
// 7 - componentDidUpdate
// 8 - componentWillUnmount

// Ele (componente) nasce, vive, é alterado, sofre ações colaterais e no final ele vai morrer de alguma forma
// O primeiro passo é o constructor, que é onde ele vai iniciar a construção dele, vai levantar tudo q precisa pra ser construido
// e antes de ser mostrado ao usuario ele vai passar por um processo, q é quando o componente esta sendo montado, se
// precisa fazer alguma ação antes de ser monstado e exibido ao usuario
// depois passa por um processo de  saber qd precisa ser atualizado, quando muda algo no estado do component,
// por exemplo , um botao, ele pode ter o estado 'ativo' e 'inativo', quando ele mudar o estado de 'ativo'
// pra 'inativo' ele vai precisar ser renderizado na tela, e essa renderização tem um custo (baixo) pro navegador, memoria, etc
// normalmente por padrao toda vez q um estado é atualizado pelo componente ele é renderizado, e tbm os filhos desse componente
// quando mudar o estado ele precisa ser renderizado, q é o componentDidUpdate.
// tem um passo antes, o react trabalha com a virtual Dom, entao ele primeiro pega o virtual dom, renderiza pro estado inativo
// e compara com a dom atual q ta la no navegador, e ele vai ver o q mudou no component, dai ele vai fazer uma diferenciação
// e mudar o q mudou, se for a mesma coisa ele nao vai fazer mudança alguma, vai manter o componente q ja esta la
// chega o momento q o component vai sair da tela (morrer), e é possivel manipular tbm, mostrar alguma mensagem ao usuario informando, etc