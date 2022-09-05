import { Children } from "react";
import datas from "../data/employee.json";
const Employee = () => {
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
                  {datas.GRID.COLUMNS.COLUMN.map((response, i) => (
                    <th key={i}>{response._attributes.Caption}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              {Children.toArray(
                datas.GRID.ROWS.ROW.map((data) => (
                  <tbody>
                    <tr>
                      <td>{data._attributes.dbg_pegawaipegawai_nip}</td>
                      <td>{data._attributes.dbg_pegawaipegawai_pin}</td>
                      <td>{data._attributes.dbg_pegawaipegawai_nama}</td>
                      <td>{data._attributes.dbg_pegawaijdw_kerja_m_name}</td>
                      <td></td>
                      <td>{data._attributes.dbg_pegawaipembagian2_nama}</td>
                      <td>{data._attributes.dbg_pegawaipembagian3_nama}</td>
                      <td>{data._attributes.dbg_pegawaipriv}</td>
                      <td></td>
                    </tr>
                  </tbody>
                ))
              )}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Employee;
