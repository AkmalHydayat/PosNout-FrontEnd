/* eslint-disable react/prop-types */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchGroup = ({ onSubmit, value, onChange, placeholder }) => {
  return (
    <div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label htmlFor="" className="me-2 text-gray-900">
          Search:
        </label>
        <input
          type="text"
          placeholder={`Cari ${placeholder}`}
          value={value}
          onChange={onChange}
          className="rounded-l  w-48 focus:outline-none ps-2 h-full border-[1px] border-e-0 border-gray-300 placeholder:text-sm"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 px-2 h-full border-[1px] border-s-0 border-purple-600 rounded-r hover:bg-purple-700 hover:border-purple-700"
        >
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchGroup;
