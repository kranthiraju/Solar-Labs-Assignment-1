import React, { useEffect, useState } from "react";

function Field({
  value,
  hash,
  setField,
  field,
  setState,
  state,
  call,
  setCall,
  reset,
  setReset,
}) {
  const init = {
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

  const f1 = (e) => {
    console.log(e.target.value);
    // const newFeild = [...field];
    // newFeild[hash[0]] = e.target.value;

    setField({
      ...field,
      [e.target.id]: parseInt(e.target.value),
    });
    // const newState = new Map();
    // let up = hash.map((key)=>{
    //     return key==this.target.id ? state[hash[key]]
    // })
    const up = { ...state };
    for (const key of hash) {
      if (key == e.target.id) {
        up[key] = false;
      } else {
        up[key] = true;
      }
    }
    setState(up);
  };

  useEffect(() => {
    if (call == false) {
      console.log("k");
    } else {
      const up = { ...field };
      var arr = [];
      var num = 0;
      for (const key of hash) {
        if (state[key] == false) {
          num = field[key];
        }
      }
      var min = num - 100;
      // if (min < 0) {
      //   min = 0;
      // }
      var max = num + 100;
      console.log("min");
      console.log(min);

      while (arr.length < 4) {
        var r = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(r);
        if (arr.indexOf(r) == -1) arr.push(r);
      }
      let i = 0;
      for (const key of hash) {
        if (state[key] == true) {
          up[key] = arr[i];
          i++;
        }
      }
      setField(up);
      setState(init);
      setCall(false);
    }
  }, [call]);

  useEffect(() => {
    if (reset == true) {
      const newState = { ...state };
      const newFeild = { ...field };
      hash.map((key) => {
        newFeild[key] = 0;
        newState[key] = false;
      });
      setField(newFeild);
      setState(newState);
      setReset(false);
    }
  }, [reset]);

  return (
    <div className="field">
      {hash.map((key) => {
        return (
          <label className="w-[8rem] flex justify-between font-bold">
            {key}
            <input
              id={key}
              disabled={state[key]}
              value={field[key]}
              type="number"
              className={
                state[key]
                  ? "border-black border-[1px] ml-4 w-14 outline-none bg-[#C0C0C0] "
                  : "border-black border-[1px] ml-4 w-14 outline-none "
              }
              onChange={(e) => {
                f1(e);
              }}
            ></input>
          </label>
        );
      })}
      {/* <label>
        {value && hash[0]}
        <input
          id={hash[0]}
          disabled={state[hash[0]]}
          value={field[hash[0]]}
          type="number"
          className="border-black border-[1px] ml-4 w-14 outline-none"
          onChange={(e) => {
            f1(e);
          }}
        ></input>
      </label>
      <label>
        {value && hash[1]}
        <input
          id={hash[1]}
          disabled={state[hash[1]]}
          value={field[hash[1]]}
          type="number"
          className="border-black border-[1px] ml-4 w-14 outline-none"
          //   onChange={(e) => {
          //     setField({ ...field, [hash[1]]: e.target.value });
          //   }}
          onChange={(e) => {
            f1(e);
          }}
        ></input>
      </label>
      <label>
        {value && hash[2]}
        <input
          id={hash[2]}
          min="0"
          value={field[hash[2]]}
          disabled={state[hash[2]]}
          type="number"
          className="border-black border-[1px] ml-4 w-14 outline-none"
          //   onChange={(e) => {
          //     setField({ ...field, [hash[2]]: e.target.value });
          //   }}
          onChange={(e) => {
            f1(e);
          }}
        ></input>
      </label>
      <label>
        {value && hash[3]}
        <input
          id={hash[3]}
          disabled={state[hash[3]]}
          value={field[hash[3]]}
          type="number"
          className="border-black border-[1px] ml-4 w-14 outline-none"
          //   onChange={(e) => {
          //     setField({ ...field, [hash[3]]: e.target.value });
          //   }}
          onChange={(e) => {
            f1(e);
          }}
        ></input>
      </label> */}
    </div>
  );
}

export default Field;
