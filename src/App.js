import "./App.css";
import { birds } from "./data";

function App() {
  return (
    <div className="App">
      {birds.map((bird, index) => {
        return (
          <span className="container">
            <h3 className="title">{bird}</h3>
            <img
              alt="birdImg"
              src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${bird}`}
              className="Bird"
              styles={`color: white`}
              key={index}
            />
          </span>
        );
      })}
    </div>
  );
}

export default App;
