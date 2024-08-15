import React, { useState } from "react";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    taskDetail: "",
    status: "todo",
    tags: [],
  });

  // Function to check if a tag is selected
  const checkTag = (tag) => taskData.tags.includes(tag);

  // Function to toggle tag selection
  const selectTag = (tag) => {
    setTaskData((prev) => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: newTags };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({
      task: "",
      taskDetail: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div className="py-2 border-b border-gray-300">
      <h1 className="text-5xl font-serif py-5 font-bold text-center text-indigo-500">Drag and Drop Assignment</h1>
      <header className="flex items-center justify-center  py-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="text-lg font-medium bg-gray-100 text-black border border-gray-300 rounded-md px-3 py-2 mb-4 w-full placeholder-gray-500"
            placeholder="Enter your task"
            onChange={handleChange}
          />
          <input
            type="text"
            name="taskDetail"
            value={taskData.taskDetail}
            className="text-lg font-medium bg-gray-100 text-black border border-gray-300 rounded-md px-3 py-2 mb-4 w-full placeholder-gray-500"
            placeholder="Enter task description"
            onChange={handleChange}
          />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
              <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
              <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
              <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
            </div>
            <div className="flex items-center gap-2">
              <select
                name="status"
                value={taskData.status}
                className="text-base font-medium border border-gray-400 rounded-md w-32 h-10 px-2"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button
                type="submit"
                className="text-base font-medium bg-indigo-600 text-white rounded-md h-10 w-full px-4 border-none cursor-pointer"
              >
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
        <p className=" text-center mb-10"><a target="blank" className="text-blue-500 " href="https://docs.google.com/document/d/1Y77qjmYKKHOGb02shab0DGHYK78xLBI2t1VSHmxLEVQ/edit?usp=sharing">Drag and Drop Assignment Documentation Here</a></p>
    </div>
  );
};

export default TaskForm;
