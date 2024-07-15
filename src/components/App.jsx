import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

function App() {
  const searchQuery = (data) => {
    console.log(data);
  };

  return (
    <>
      <SearchBar onSubmit={searchQuery} />
    </>
  );
}

export default App;
