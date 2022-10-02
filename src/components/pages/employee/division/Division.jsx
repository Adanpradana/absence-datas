import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Division = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/main-api/v1/employee",
    })
      .then((response) => setPost(response.data))
      .finally(() => setLoading(false));
  });

  const filterDivision = () => {
    const data = [];
    posts.forEach((response) => {
      if (!data.includes(response.dbg_pegawaipembagian2_nama)) {
        data.push(response.dbg_pegawaipembagian2_nama);
      }
      return data;
    });
  };

  return (
    <section className="container">
      <div className="container-navbar">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="container-content">
        <div className="container-table">
          <div className="input-form">
            <h1>Division</h1>
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
                <tr>
                  <td>1</td>
                  <td>coo</td>
                  <td> icon detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Division;
