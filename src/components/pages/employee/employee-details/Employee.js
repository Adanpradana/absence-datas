import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Filter from "./Employee-filter";
import TableBody from "./TableBody";

const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage] = useState(8);
  const [loading, setLoading] = useState(true);
  const [tableHeader, setTableHeader] = useState([]);
  const [pages, setPages] = useState("");
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // const [error, setError] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000",
    })
      .then((res) => {
        setTableHeader(res.data.GRID.COLUMNS.COLUMN);
      })
      .finally(() => setLoading(false));

    axios({
      method: "GET",
      url: "http://localhost:5000/main-api/v1/employee",
    }).then((res) => setPost(res.data));
  }, []);

  const filterDivision = posts.filter((res) => {
    if (filter === res.dbg_pegawaipembagian2_nama) {
      return res.dbg_pegawaipembagian2_nama;
    } else if (filter === "All") {
      return posts;
    } else {
      return !posts;
    }
  });

  const filtering = filterDivision.filter((datas) => datas.dbg_pegawaipegawai_nama.toLowerCase().includes(search.toLowerCase()));
  const lastIndex = currentPage * postPerpage;
  const firstIndex = lastIndex - postPerpage;
  const currentPosts = filtering.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container">
      <div className="container-navbar">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="container-content">
        <div className="container-table">
          <Filter setSearch={setSearch} posts={posts} setFilter={setFilter} />
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
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={9}>no data found...</td>
                  </tr>
                ) : (
                  <TableBody posts={currentPosts} loading={loading} />
                )}
              </tbody>
            </table>
          </div>
          <div className="container-pagination">
            <Pagination pages={postPerpage} totalPost={filterDivision.length} paginate={paginate} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Employee;
