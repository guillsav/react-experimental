import React, { useState } from 'react';

import SearchIcon from './SearchIcon';

import css from './Search.module.css';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={css.container}>
      <div className={css.icon}>
        <SearchIcon />
      </div>
      <input
        className={css.input}
        onChange={handleSearchChange}
        placeholder="Search TMDb..."
        value={search}
      />
    </div>
  );
}
