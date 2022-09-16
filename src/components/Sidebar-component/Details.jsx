import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar-profile.png";

const Details = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/main-api/v1/employee/${params.dbg_pegawaipegawai_pin}`,
    })
      .then((res) => setData(res.data))
      .catch(() => setError(false))
      .finally(() => setLoading(false));
  }, [params]);

  if (!error) {
    return (
      <div className="loading">
        <div className="container-navbar navbar-details">
          <h1>Employee Details</h1>
        </div>
        <div className="container-content">
          <i>no data found</i>
        </div>
      </div>
    );
  }
  return (
    <section className="container">
      {loading ? (
        <div className="loading">
          <div className="container-navbar navbar-details">
            <h1>Employee Details</h1>
          </div>
          <div className="container-content">
            <i>Loading brokkk....</i>
          </div>
        </div>
      ) : (
        <section className="container">
          <div className="container-navbar navbar-details">
            <h1>Employee Details</h1>
          </div>
          <div className="container-content">
            <div className="container-table details">
              <div className="container-header">
                <h5>{data.dbg_pegawaipegawai_nama}</h5>
                <p>{data.dbg_pegawaipembagian2_nama}</p>
              </div>
              <div className="container-body-details">
                <div className="container-body-image">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-container">
                  <div className="col">
                    <div className="row">
                      <h4>NAME</h4>
                      <p>{data.dbg_pegawaipegawai_nama}</p>
                    </div>
                    <div className="row">
                      <h4>NIP</h4>
                      <p>{data.dbg_pegawaipegawai_nip}</p>
                    </div>
                    <div className="row">
                      <h4>DIVISI</h4>
                      <p>{data.dbg_pegawaipembagian2_nama}</p>
                    </div>
                    <div className="row">
                      <h4>OFFICE</h4>
                      <p>{data.dbg_pegawaipembagian3_nama}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <h4>TEMPAT TANGGAL LAHIR</h4>
                      <p>{data.dbg_pegawaitempat_lahir}</p>
                    </div>
                    <div className="row">
                      <h4>TANGGAL LAHIR</h4>
                      <p>{data.dbg_pegawaitgl_lahir}</p>
                    </div>
                    <div className="row">
                      <h4>TELP</h4>
                      <p>{data.dbg_pegawaipegawai_telp}</p>
                    </div>
                    <div className="row">
                      <h4>JADWAL MULAI KERJA</h4>
                      <p>{data.dbg_pegawaitgl_masuk_pertama}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <h4>PIN</h4>
                      <p>{data.dbg_pegawaipegawai_pin}</p>
                    </div>
                    <div className="row">
                      <h4>RFID</h4>
                      <p>{data.dbg_pegawaipegawai_rfid ? data.dbg_pegawaipegawai_rfid : "-"}</p>
                    </div>
                    <div className="row">
                      <h4>FINGER PRINT</h4>
                      <p>{data.dbg_pegawaijml_alg_39}</p>
                    </div>
                    <div className="row">
                      <h4>STATUS</h4>
                      <p>Active</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row row-center">
                      <button>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};
export default Details;
