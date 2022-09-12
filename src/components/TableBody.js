import { Children } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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
                <span>
                  <i className="bi-info-circle"></i>
                </span>
              </td>
            </tr>
          );
        })
      )}
    </>
  );
};
export default TableBody;
