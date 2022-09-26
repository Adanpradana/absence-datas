import { Children } from "react";

const Filter = ({ setSearch, posts, setFilter }) => {
  const division = () => {
    let newDivision = [];
    posts.forEach((response) => {
      if (!newDivision.includes(response.dbg_pegawaipembagian2_nama)) {
        newDivision.push(response.dbg_pegawaipembagian2_nama);
      }
    });
    return newDivision;
  };

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
          <option value="disabled" disabled>
            -- Select Division --
          </option>
          <option value="All">All</option>
          {Children.toArray(division().map((res) => <option value={res}>{res}</option>))}
        </select>
        <input type="text" placeholder="search" onChange={searchHandler} />
      </form>
    </div>
  );
};

export default Filter;
