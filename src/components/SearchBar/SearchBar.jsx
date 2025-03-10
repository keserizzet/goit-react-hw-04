import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Lütfen bir arama terimi girin!");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Search images..." value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;