import React,{useState} from "react";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({ title, icon: Icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const selectTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <section className="w-1/3 p-4">
      <h2 className="flex items-center text-xl font-semibold mb-4 border-b-2 py-2 border-gray-300">
        <Icon className="w-7 h-7 mr-2 mb-1" /> {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <div key={index}>
              <TaskCard
                title={task.task}
                desc={task.taskDetail}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
                selectTag={selectTag} // Ensure this is passed correctly
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </div>
          )
      )}
    </section>
  );
};

export default TaskColumn;
