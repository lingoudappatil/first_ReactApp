import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Msg from './components/Msg';
import Msg2 from './components/Msg2';

function App() { 
  return (
    <div className="App">
      <Hello/>
      <Message name="Lingouda" profession="Software Engineer"/>
      <Msg />
      <Msg2 name="Lingouda" lastname="Patil" />
      <Msg2 name="Mallikarjun" lastname="Patil" />
      <Msg2 name="Police" lastname="Patil" />
    </div>
  );
}
export default App;
