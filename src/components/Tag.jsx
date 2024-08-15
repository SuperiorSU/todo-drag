import React from "react";

const Tag = ({ tagName, selectTag, selected }) => {

    const tagColors = {
        HTML: "bg-indigo-500", 
        CSS: "bg-pink-400",  
        JavaScript: "bg-yellow-500", 
        React: "bg-blue-400",
        default: "bg-green-400",
    };
    return (
        <button
            type="button"
            className={`text-sm text-white font-medium border border-gray-300 rounded px-2 py-1 mr-2 cursor-pointer ${selected ? tagColors[tagName] : tagColors.default}`}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
