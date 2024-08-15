import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Tag from "./Tag";
import Popup from "./Popup";

const TaskCard = ({ title, desc = "", tags = [], handleDelete, index, setActiveCard }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowToggle = desc.length > 10;

  return (
    <>
      <article
        draggable="true"
        onDragStart={() => setActiveCard(index)}
        onDragEnd={() => setActiveCard(null)}
        className="w-full min-h-[100px] border border-gray-300 rounded-lg p-4 my-4 active:border-[1px] active:opacity-75 cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
        <p className="text-xl font-semibold mb-4">{title}</p>
        <p>
          {isExpanded || !shouldShowToggle
            ? desc
            : `${desc.slice(0, 10)}...`}
        </p>
        {shouldShowToggle && (
          <button
            onClick={toggleDescription}
            className="text-indigo-600 font-medium mt-2"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected />
            ))}
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(index);
            }}
          >
            <AiOutlineDelete
              className="w-5 h-5 text-gray-600 opacity-50 transition-all duration-300 ease-in-out hover:opacity-80"
            />
          </div>
        </div>
      </article>
      {isPopupOpen && (
        <Popup
          title={title}
          desc={desc}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default TaskCard;
