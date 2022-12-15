import "./App.css";
import { useState } from "react";
import YearCard from "./components/YearCard";

function App() {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  return (
    <div className="main">
      <div className="container">
        <div className="flex flex-row h-max gap-[0.5rem]">
          <input
            value="2021"
            type="checkbox"
            onChange={(e) => {
              setCard1(!card1);
              console.log(e.target.value);
              setVal1(e.target.value);
            }}
          ></input>
          <h1 className="m-0">2021</h1>
        </div>

        <div className="flex flex-row gap-[0.5rem] h-max">
          <input
            value="2022"
            type="checkbox"
            onChange={(e) => {
              setCard2(!card2);
              setVal2(e.target.value);
            }}
          ></input>
          <h1 className="m-0">2022</h1>
        </div>
        <div className="flex flex-row gap-[0.5rem] h-max">
          <input
            value="2023"
            type="checkbox"
            onChange={(e) => {
              setCard3(!card3);
              setVal3(e.target.value);
            }}
          ></input>
          <h1 className="m-0">2023</h1>
        </div>
      </div>
      <div className="mini">
        {card1 ? <YearCard val={val1} /> : ""}
        {card2 ? <YearCard val={val2} /> : ""}
        {card3 ? <YearCard val={val3} /> : ""}
      </div>
    </div>
  );
}
// className="h-[10rem] w-[40rem]  flex flex-col align-middle justify-center shadow-lg hover:shadow-2xl mt-28"

export default App;
