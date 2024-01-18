import { Select, Space, Input } from "antd";
import React, { useState } from "react";
import "../choice/Choice.css";
import { IMPROVE } from "../constant";
const { Option } = Select;

function Multichoice() {
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }
  const Hobbies = [
    { hobby: "Cricket", value: "Cricket", label: "Cricket" },
    { hobby: "batminton", value: "batminton", label: "batminton" },
    { hobby: "swimming", value: "swimming", label: "swimming" },
    { hobby: "football", value: "football", label: "football" },
    { hobby: "table tennis", value: "table tennis", label: "table tennis" },
  ];
  return (
    <div className="main">
      <div className="create">Institute name*</div>
      <div className="user">
        <input type="name" placeholder="Enter Your institute name "></input>
      </div>
      <div className="from">
        <h1>From*</h1>
        <h2>To*</h2>
      </div>

      <div className="fro">
        <input type="date"></input>
        <div className="to">
          <input type="date" placeholder="Date"></input>
        </div>
      </div>
      <div className="check">
        <input type="checkbox" id="checkbox" name="checkbox"></input>Present
      </div>

      <div className="degree">Degree*</div>
      <div className="deg">
        <input type="name" placeholder="Your degree"></input>
      </div>

      <div className="field">
        <h3>Field of Study </h3>
        <input type="name" placeholder="ex. Computer Science"></input>
        <div className="grade">
          <h4> Degree </h4>
          <input type="number" placeholder="ex. 6.5 or 65%"></input>
        </div>
      </div>

      <div className="Hobbies">
        <h5>Hobbies</h5>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select Hobbies"
          defaultValue={"Cricket"}
          // onChange={handleChange}
          optionLabelProp="label"
        >
          {Hobbies.map((data) => {
            return (
              <Option value={data.value} label={data.label}>
                {data.hobby}
              </Option>
            );
          })}
        </Select>
      </div>

      <div className="des">Description*</div>
      <div className="color">
        {IMPROVE}
        <h6>NextLevel AI</h6> <br></br>
        <textarea name="mytext" id="" cols="90" rows="10"></textarea>
      </div>

      <button className="btn">Cancel</button>
      <button className="but">Submit</button>
    </div>
  );
}
export default Multichoice;
