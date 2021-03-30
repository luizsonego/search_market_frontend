import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.css";

function Landing() {
  const [city, setCity] = useState('')
  const [estate, setEstate] = useState('')

  useEffect(() => {
    axios.get(`https://ipinfo.io?token=653dac51823ada`)
    .then(res => {
      const getIpInfo = res.data
      setCity(getIpInfo.city)
      setEstate(getIpInfo.region)
    })

  })


  return (
    <div className="page-landing">
      <div className="content-wrapper">
        <p>&nbsp;</p>

        <main>
          <h1>Encontre</h1>
          <h2>Uma feira proxima de você</h2>

          <div className="actions-landing">
            <Link to="/map" className="enter-app">
              Encontrar feiras
            </Link>
            <Link to="/create" className="create">
              Cadastrar feiras
            </Link>
          </div>
        </main>

        <div className="location">
          <strong>{city}</strong>
          <span>{estate}</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
