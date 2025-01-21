import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%]">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-6"
          placeholder="what would you like to watch today?"
        />
        <button className=" col-span-6 py-2 px-4  bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
