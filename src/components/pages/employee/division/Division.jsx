import axios from "axios";
import { Children, useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pagination from "./Pagination";

const Division = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage, setPostPerpage] = useState(8);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/main-api/v1/employee",
    })
      .then((response) => setPost(response.data))
      .finally(() => setLoading(false));
  });

  const filterDivision = () => {
    const filter = [];
    posts.forEach((res) => filter.push(res.dbg_pegawaipembagian2_nama));
    const division = [...new Set(filter)];
    return division;
  };
  const searchBar = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const searchHandler = filterDivision().filter((res) => res.toLowerCase().includes(search.toLowerCase()));
  const lastIndex = currentPage * postPerpage;
  const firstIndex = lastIndex - postPerpage;
  const currentPosts = searchHandler.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="container">
      <div className="container-navbar">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="container-content">
        <div className="container-table">
          <div className="input-form">
            <h1>Division</h1>
            <form action="">
              <input type="search" name="search.." id="" onChange={searchBar} />
            </form>
          </div>
          <div className="table-wrapper">
            <table className="table-content">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Divisi</th>
                  <th>Detail divisi</th>
                </tr>
              </thead>
              <tbody>
                {Children.toArray(
                  currentPosts.map((res, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{res}</td>
                      <td>
                        <span>
                          <i className="bi-info-circle"></i>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="container-pagination">
            <Pagination postPerpage={filterDivision().length} page={postPerpage} paginate={paginate} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Division;
