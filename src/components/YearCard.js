import React from "react";
import "./YearCard.css";
import { useState, useEffect } from "react";
import Field from "./Field";

function YearCard({ val }) {
  const [reset, setReset] = useState(false);
  const initState = {
    Jan: false,
    Feb: false,
    Mar: false,
    Apr: false,
    May: false,
    Jun: false,
    Jul: false,
    Aug: false,
    Sep: false,
    Oct: false,
    Nov: false,
    Dec: false,
  };
  const initField = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  const [call, setCall] = useState(false);
  const [state, setState] = useState({
    Jan: false,
    Feb: false,
    Mar: false,
    Apr: false,
    May: false,
    Jun: false,
    Jul: false,
    Aug: false,
    Sep: false,
    Oct: false,
    Nov: false,
    Dec: false,
  });
  const [field, setField] = useState({
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  });
  // let hash = new Map([
  //   [1, "Jan"],
  //   [2, "Feb"],
  //   [3, "Mar"],
  //   [4, "Apr"],
  //   [5, "May"],
  //   [6, "Jun"],
  //   [7, "Jul"],
  //   [8, "Aug"],
  //   [9, "Sep"],
  //   [10, "Oct"],
  //   [11, "Nov"],
  //   [12, "Dec"],
  // ]);

  let hash = Object.keys(field);
  console.log(hash);
  console.log(field[hash[0]]);

  // let hash = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];

  const [value, setValue] = useState(false);

  // useEffect(() => {
  //   hash = hash.slice(value - 1, value + 3);
  //   setLoad(true);
  // }, [value]);
  // useEffect(() => {
  //   // setField1(0);
  //   // setField2(0);
  //   // setField3(0);
  //   // setField4(0);
  //   // setField({
  //   //   field1: 0,
  //   //   field2: 0,
  //   //   field3: 0,
  //   //   field4: 0,
  //   // });
  //   // setState({
  //   //   field1: false,
  //   //   field2: false,
  //   //   field3: false,
  //   //   field4: false,
  //   // });
  // }, [value]);

  return (
    <div className="yearMain">
      <div className="reset">
        <button
          onClick={() => {
            setReset(true);
          }}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3"
        >
          reset
        </button>
      </div>
      <div className="">
        <p className="font-bold text-lg text-base text-center">{val}</p>
        <select
          className="dropbox"
          onChange={(e) => {
            setValue(parseInt(e.target.value));
            setCall(false);
          }}
        >
          <option selected disabled hidden></option>
          <option value="1">Jan - Apr</option>
          <option value="5">May - Aug</option>
          <option value="9">Sep - Dec</option>
        </select>
      </div>
      {value && (
        <Field
          value={value}
          field={field}
          setField={setField}
          state={state}
          setState={setState}
          hash={hash.slice(value - 1, value + 3)}
          call={call}
          setCall={setCall}
          reset={reset}
          setReset={setReset}
        />
      )}
      <div className="calculate">
        <button
          onClick={() => {
            setCall(true);
          }}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3"
        >
          calculate
        </button>
      </div>
    </div>
  );
}

export default YearCard;
