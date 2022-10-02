import { Children } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const TableBody = ({ posts, loading, search }) => {
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
        posts.map((res) => (
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
