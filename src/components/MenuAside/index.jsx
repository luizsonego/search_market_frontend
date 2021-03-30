import { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./style.css";

export default function MenuAside({ width = "large" }) {

  const [city, setCity] = useState('')
  const [estate, setEstate] = useState('')

  // useEffect(() => {
  //   axios.get(`https://ipinfo.io?token=653dac51823ada`)
  //   .then(res => {
  //     const getIpInfo = res.data
  //     setCity(getIpInfo.city)
  //     setEstate(getIpInfo.region)
  //   })

  // })
  
  return (
    <aside className={width === "large" ? "large" : "small"}>
      <header>
        <img src={logo} alt="Logo Feira" />

        {width === "large" ? <p>Escolha uma feira</p> : ""}
      </header>

      <footer>
        {width === "large" ? (
          <>
            {/* <strong>{city}</strong>
            <span>{estate}</span> */}
          </>
        ) : (
          <Link to={'/'} className="button-back">
            <FiArrowLeft size={32} color="#FFF" />
          </Link>
        )}
      </footer>
    </aside>
  );
}
