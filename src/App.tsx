import logo from './logo.svg';
import './App.css';
import AirHumidity from './components/AirHumidity';
import Termostat from './components/TermostatV2';
import Tempmeter from "./components/Tempmeter";
import SoilHumidity from "./components/SoilHumidity";
import {useEffect, useState} from "react";

function App() {

  let [defVal, setDefVal] = useState<number>(0);

  /*useEffect(()=>{
    setInterval(()=>{
      setDefVal(Math.random());
    },5000);
  },[]);*/

  return (
    <div className="App">
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
      />
      <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
      />
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css"
          rel="stylesheet"
      />
      <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
    />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Components code is in <code>{"src/components"}</code>.
        </p>
        <div className="range">
          <input type="range" onChange={event => setDefVal(parseInt(event.target.value))} min={0} max={100} className="form-range" id="customRange1"/>
        </div>
        <Tempmeter temp={(defVal)-50} theme={1}/>
        <AirHumidity value={defVal} theme={1} config={{}}/>
        <Termostat onValueChanged={()=>{}} defaultValue={30} theme={1} config={{}}/>
        <SoilHumidity value={defVal} theme={1} config={{}}/>
      </header>
    </div>
  );
}

export default App;
