import { useState } from "react";
import { useEffect } from "react";
import { Children } from "react";
import datas from "../data/employee.json";
import TableBody from "./TableBody";
const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage, setPostPerpage] = useState(9);
  const [loading, setLoading] = useState(false);
  const [tableHeader, setTableHeader] = useState([]);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTableHeader(datas.GRID.COLUMNS.COLUMN);
    setPost(datas.GRID.ROWS.ROW);
    setLoading(false);
  }, []);

  // slicing setDatas
  const postsLastIndex = currentPage * postPerpage;
  const postsFirstIndex = postsLastIndex - postPerpage;
  const currentPost = posts.slice(postsFirstIndex, postsLastIndex);

  return (
    <section className="container">
      <div className="container-navbar">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="container-content">
        <div className="container-table">
          <h3>Employee Details</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {tableHeader.map((res, i) => (
                    <th key={i}>{res._attributes.Caption}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>

              <TableBody posts={currentPost} loading={loading} />
            </table>
          </div>
          <div className="container-pagination">
            <div className="pagination-showing-data">showing data 1-10 entries</div>
            <div className="pagination-button-wrapper">
              <button>previous</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Employee;
