import React from "react";
import "./SearchInput.styles.css";
const SearchInput = ({ filterText, setFilterText }: any) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterText(e.target.value);
  };
  return (
    <div className="inputSearch">
      <input
        type="text"
        placeholder="Jon Snow"
        value={filterText}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};
export default SearchInput;
