import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const notify = () => toast.error("Please enter search term!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    if (text.trim() === "") {
      notify();
      return;
    }
    onSubmit(text);
    form.reset();
  };

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <IoIosSearch size="18" className={s.icon} />
          <input
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <Toaster />
          <button className={s.btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
