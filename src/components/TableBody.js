import { Children } from "react";

const TableBody = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading cuyyyy...</h1>;
  }
  return (
    <>
      <tbody>
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
                <td key={res.Index}></td>
              </tr>
            );
          })
        )}
      </tbody>
    </>
  );
};
export default TableBody;
