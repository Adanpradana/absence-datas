import { Children } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const TableBody = ({ posts, loading, search }) => {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/main-api/v1/employee/`,
    }).then((res) => setPost(res.data));
  }, [params]);
  if (loading) {
    return (
      <>
        <tr>
          <td>loading brok...</td>
        </tr>
      </>
    );
  }
  return (
    <>
      {Children.toArray(
        post.map((res) => (
          <tr>
            <td>{res.dbg_pegawaipegawai_pin}</td>
            <td>{res.dbg_pegawaipegawai_nip}</td>
            <td>{res.dbg_pegawaipegawai_nama}</td>
            <td>{res.dbg_pegawaijdw_kerja_m_name}</td>
            <td>-</td>
            <td>{res.dbg_pegawaipembagian2_nama}</td>
            <td>{res.dbg_pegawaipembagian3_nama}</td>
            <td>{res.dbg_pegawaipriv}</td>
            <td className="text-center">
              <Link to={`${res.dbg_pegawaipegawai_pin}`}>
                <span>
                  <i className="bi-info-circle"></i>
                </span>
              </Link>
            </td>
          </tr>
        ))
      )}
    </>
  );
};
export default TableBody;
