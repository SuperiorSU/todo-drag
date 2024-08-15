import React, { useState, useEffect } from "react";
import { AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import { HiOutlineCube } from "react-icons/hi";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const oldTasks = localStorage.getItem("tasks");
    return JSON.parse(oldTasks) || [];
  });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, index) => {
    if (activeCard == null) return;

    const cardToMove = tasks[activeCard];
    const updatedCards = tasks.filter((_, idx) => idx !== activeCard);

    updatedCards.splice(index, 0, { ...cardToMove, status: status });
    setTasks(updatedCards);
  };

  return (
    <div className="grid p-2">
      <TaskForm setTasks={setTasks} />
      
      <main className="flex justify-around p-5 gap-3 px-[8%]">
        <TaskColumn
          title="To do"
          icon={HiOutlineCube}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={AiOutlineStar}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={AiOutlineCheckCircle}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
