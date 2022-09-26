import { Children } from "react";

const Filter = ({ setSearch, posts, setFilter }) => {
  const searchHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const divisionHandler = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div className="input-form">
      <h3>Employee Details</h3>
      <form action="" method="get">
        <select name="Divisi" id="" onChange={divisionHandler}>
          <option selected disabled value="disabled">
            --Divisi--
          </option>
          <option value="All">All</option>
          {Children.toArray(posts.map((res) => <option value={res.dbg_pegawaipembagian2_nama}>{res.dbg_pegawaipembagian2_nama}</option>))}
        </select>
        <input type="text" placeholder="search" onChange={searchHandler} />
      </form>
    </div>
  );
};

export default Filter;
