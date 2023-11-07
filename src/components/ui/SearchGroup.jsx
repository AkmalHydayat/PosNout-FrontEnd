/* eslint-disable react/prop-types */

import { BiSearchAlt } from "react-icons/bi";
const SearchGroup = ({ onSubmit, value, onChange, placeholder }) => {
  return (
    <div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label
          htmlFor=""
          className="me-2 font-medium transition-all ease-in  text-gray-900 dark:text-colorTwo"
        >
          Search:
        </label>
        <input
          type="text"
          placeholder={`Cari ${placeholder}`}
          value={value}
          onChange={onChange}
          className="rounded-l border-[1px] transition-colors ease-in  bg-colorTwo dark:bg-colorDarkTwo focus:bg-white  border-purple-600 font-medium w-48 focus:outline-none ps-2 placeholder:text-sm"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 px-2  border-[1px] border-s-0 border-purple-600 rounded-r hover:bg-purple-700 hover:border-purple-700"
        >
          <BiSearchAlt className="text-colorTwo  text-xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchGroup;
