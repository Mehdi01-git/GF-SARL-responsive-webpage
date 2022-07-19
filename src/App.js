import { useEffect, useState } from "react";
import "./App.css";
import { birds } from "./data";

function App() {
  const [scrollIndex, setScrollIndex] = useState(5);

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop >=
        e.target.documentElement.scrollHeight
      ) {
        setScrollIndex(scrollIndex + 5);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollIndex]);

  return (
    <div className="App">
      {birds
        .filter((bird, index) => index < scrollIndex)
        .map((bird, index) => {
          return (
            <span key={index} className="container">
              <h3 className="title">{bird}</h3>
              <img
                alt="birdImg"
                src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${bird}`}
                className="Bird"
                styles={`color: white`}
              />
            </span>
          );
        })}
    </div>
  );
}

export default App;
