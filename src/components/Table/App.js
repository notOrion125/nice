import React, { useState } from "react";
import { CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Table from "./components/Table";
import Modal from "./components/Modal";
import './App.css';
import Data from './Data.json';
import Search from "./components/Search";
import ChangeStatus from "./components/ChangeStatus";
import WriteOffTheTime from "./components/WriteOffTheTime"; 

function NewTable(props) {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState(Data);
  const [editableTask, setEditableTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.tasks.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let CountOpen = 0;
  let CountOverdue = 0;
  for (let i = 0; i<tasks.length; i++){
    if (tasks[i].subtaskStatus ==='В работе'){
      CountOpen++
    }
    else if(tasks[i].subtaskStatus ==='К выполнению'){
      CountOverdue++
    }
  }
  props.SavesetnewCountOverdue(CountOpen)
  props.SavesetnewCountOpen(CountOverdue)

  const handleSave = (event) => {
    event.preventDefault();
    const newTask = {
      parther: event.target.parther.value,
      subtask: event.target.subtask.value,
      subtaskStatus: event.target.subtaskStatus.value,
      tasks: event.target.tasks.value,
      stage: event.target.stage.value,
      project: event.target.project.value,
      startdate: event.target.startdate.value,
      enddate: event.target.enddate.value,
      timeestimation: event.target.timeestimation.value,
      jobdescription: event.target.jobdescription.value,
      timewrittenoff: event.target.timewrittenoff.value,
    };
    if (editableTask !== null) {
      const updatedTasks = tasks.map((task, index) => {
        if (index === editableTask) {
          return newTask;
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditableTask(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setVisible(false);
  };

  const handleEdit = (index) => {
    setEditableTask(index);
    setVisible(true);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleCancel = () => {
    setEditableTask(null);
    setVisible(false);
  };

  return (
    <>
      <div className="App">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Search setSearchQuery={setSearchQuery}/>
          <WriteOffTheTime />
          <ChangeStatus />
          <CButton onClick={() => setVisible(true)}>Добавить задачу</CButton>
        </div>
        <p></p>
        <Modal
          visible={visible}
          handleCancel={handleCancel}
          handleSave={handleSave}
          editableTask={editableTask}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Table tasks={filteredTasks} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default NewTable;