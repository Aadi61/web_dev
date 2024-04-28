import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

import Counter from './components/counter';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Aditya" heroName="Batman"/>
      <Message message="Good Morning"/>
      <Counter/> */}
      {/* <ParentComponent /> */}
      {/* <NameList /> */}
      <Form />
    </div>
  );
}

export default App;
