import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Body from "./components/Body/Body";
import Question from "./components/Question/Question";
import Sidepart from "./components/Sidepart/Sidepart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Select your today's exercise</h2>
      <Body></Body>
      <Question></Question>
    </div>
  );
}

export default App;
