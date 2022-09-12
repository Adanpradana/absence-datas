import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [tableHeader, setTableHeader] = useState([]);
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/main-api",
    })
      .then((res) => {
        setTableHeader(res.data.GRID.COLUMNS.COLUMN);
        setPost(res.data.GRID.ROWS.ROW);
      })
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // slicing setDatas and filter
  const filterIndex = posts.filter((req) => req._attributes.dbg_pegawaipegawai_nama.toLowerCase().includes(search));
  const postsLastIndex = currentPage * postPerpage;
  const postsFirstIndex = postsLastIndex - postPerpage;
  const currentPost = filterIndex.slice(postsFirstIndex, postsLastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container">
      <div className="container-navbar">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="container-content">
        <div className="container-table">
          <div className="input-form">
            <h3>Employee Details</h3>
            <form action="" method="get">
              <input type="text" placeholder="search" onChange={searchHandler} />
            </form>
          </div>
          <div className="table-wrapper">
            <table className="table-content">
              <thead>
                <tr>
                  {tableHeader.map((res, i) => (
                    <th key={i}>{res._attributes.Caption}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <TableBody posts={currentPost} loading={loading} search={search} />
              </tbody>
            </table>
          </div>
          <div className="container-pagination">
            <div className="pagination-showing-data">
              page {currentPage}/{postPerpage}
            </div>
            <Pagination pages={postPerpage} totalPost={posts.length} paginate={paginate} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Employee;
