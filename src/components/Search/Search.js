import React, { useState } from "react";

export default function Search({ search, updateSearch, getSearch }) {
  return (
    <form onSubmit={getSearch} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

