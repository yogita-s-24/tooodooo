import React, { useState } from "react";
import "./Home.css";
import Task from "./../../components/Task/Task";

const Home = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: "1",
      title: "Assignment",
      description: "In 2 days",
      priority: "high",
    },
  ]);

  const addTaskList = () => {
    let randomId = Math.floor(Math.random() * 1000);
    const object = {
      id: randomId,
      title: title,
      description: description,
      priority: priority,
    };

    const newarrayList = [...taskList, object];
    setTaskList(newarrayList);
  };



  return (
    <div>
      <h1 className="title display">TOO DOO LIST</h1>
      <p className="second-title display">
        <b>A simple to do list app that helps you keep track of your tasks.</b>
      </p>

      <div className="container">
        <div>
          <h1>Show List</h1>

          {taskList.map((taskitem, index) => {
            const { id, tittle, description, priority } = taskitem;

            return (
              <Task
                id={id}
                tittle={tittle}
                description={description}
                priority={priority}
                key={index}
              />
            );
          })}
        </div>
        <div>
          <h1>Add List</h1>
          <div className="add-container">
            <input
              type="text"
              placeholder="Enter Title Here"
              className="input-field"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Description Here"
              className="input-field"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Priority Here"
              className="input-field"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
            <br />
            <br />
            <button type="submit" className="button" onClick={addTaskList}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
