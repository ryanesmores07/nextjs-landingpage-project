import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return <div>Search Form</div>;
};

export default SearchForm;
