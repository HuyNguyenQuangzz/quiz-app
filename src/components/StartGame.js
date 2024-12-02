import "./style.css";

function StartGame(props) {
  return (
    <div className="mt-5">
      <h1 className="text-light">Welcome to React Quiz Game!</h1>
      <button onClick={() => props.setStatus("ingame")} className="btnStart">
        Start
      </button>
    </div>
  );
}

export default StartGame;
