import { Children } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const TableBody = ({ posts, loading, search }) => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/main-api/${params.dbg_pegawaipegawai_pin}`,
    }).then((res) => console.log(res.data));
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
        posts.map((res) => {
          return (
            <tr>
              <td key={res.Index}>{res._attributes.dbg_pegawaipegawai_pin}</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaipegawai_nip}</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaipegawai_nama}</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaijdw_kerja_m_name}</td>
              <td key={res.Index}>jabatan</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaipembagian2_nama}</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaipembagian3_nama}</td>
              <td key={res.Index}>{res._attributes.dbg_pegawaipriv}</td>
              <td key={res.Index} className="text-center">
                <Link to="details">
                  <span>
                    <i className="bi-info-circle"></i>
                  </span>
                </Link>
              </td>
            </tr>
          );
        })
      )}
    </>
  );
};
export default TableBody;
