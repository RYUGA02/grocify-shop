import React from "react";

const Button = ({ content }) => {
  return (
    <button
      type="button"
      className="
        inline-flex items-center justify-center
        bg-orange-500
        text-white
        px-8 py-3
        rounded-lg
        text-md md:text-lg
        font-medium
        cursor-pointer
        transition
        duration-300
        hover:bg-orange-600
        hover:scale-105
        focus:outline-none
        active:scale-95
        select-none
      "
    >
      {content}
    </button>
  );
};

export default Button;
