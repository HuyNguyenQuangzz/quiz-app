import { useState } from "react";
import "./App.css";
import EndGame from "./components/EndGame";
import InGame from "./components/InGame";
import StartGame from "./components/StartGame";
import Review from "./components/Review";

function App() {
  const [status, setStatus] = useState("start");

  const [userSelected, setUserSelected] = useState([]);

  const [userGrade, setUserGrade] = useState();

  return (
    <div className="App">
      {status === "start" && <StartGame setStatus={setStatus} />}
      {status === "ingame" && (
        <InGame
          setStatus={setStatus}
          setUserGrade={setUserGrade}
          setUserSelected={setUserSelected}
        />
      )}
      {status === "end" && (
        <EndGame setStatus={setStatus} userGrade={userGrade} />
      )}
      {status === "review" && <Review userSelected={userSelected}/>}
    </div>
  );
}

export default App;
