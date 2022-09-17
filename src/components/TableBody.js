import { Children } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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
            <td>{res._attributes.dbg_pegawaipegawai_pin}</td>
            <td>{res._attributes.dbg_pegawaipegawai_nip}</td>
            <td>{res._attributes.dbg_pegawaipegawai_nama}</td>
            <td>{res._attributes.dbg_pegawaijdw_kerja_m_name}</td>
            <td>-</td>
            <td>{res._attributes.dbg_pegawaipembagian2_nama}</td>
            <td>{res._attributes.dbg_pegawaipembagian3_nama}</td>
            <td>{res._attributes.dbg_pegawaipriv}</td>
            <td className="text-center">
              <Link to={`${res._attributes.dbg_pegawaipegawai_pin}`}>
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
