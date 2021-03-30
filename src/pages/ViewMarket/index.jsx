import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Map from "../../components/Map";
import MenuAside from "../../components/MenuAside";

import api from "../../services/api.js";

import mapMarkerImg from "../../assets/images/map-marker.svg";

import "./style.css";
import Box from "../../components/Box";
import { useParams } from "react-router-dom";

function ViewMarket() {
  const params = useParams();
  const [market, setMarket] = useState();
  const [selected, setSelected] = useState(0);

  const mapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
  });

  useEffect(() => {
    try {
      api.get("market/" + params.id).then((response) => {
        setMarket(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  if (!market) {
    return <p>carregando...</p>;
  }

  return (
    <div className="market-details">
      <MenuAside width="small" />

      <Box title={market.name}>

        <div className="opening-hours">
          {market.sunday === "1" ? (
            <div className="hours">
              <strong>Domingo</strong>
              <span>{market.sunStart} até {market.sunEnd}</span>
            </div>
          ) : ''}

          {market.monday === "1" ? (
            <div className="hours">
              <strong>Segunda-feira</strong>
              <span>{market.monStart} até {market.monEnd}</span>
            </div>
          ) : ''}

          {market.tuesday === "1" ? (
            <div className="hours">
              <strong>Terça-feira</strong>
              <span>{market.tueStart} até {market.tueEnd}</span>
            </div>
          ) : ''}

          {market.wednesday === "1" ? (
            <div className="hours">
              <strong>Quarta-feira</strong>
              <span>{market.wedStart} até {market.wedEnd}</span>
            </div>
          ) : ''}

          {market.thursday === "1" ? (
            <div className="hours">
              <strong>Quint-feira</strong>
              <span>{market.thuStart} até {market.thuEnd}</span>
            </div>
          ) : ''}

          {market.friday === "1" ? (
            <div className="hours">
              <strong>Sexta-feira</strong>
              <span>{market.friStart} até {market.friEnd}</span>
            </div>
          ) : ''}

          {market.saturday === "1" ? (
            <div className="hours">
              <strong>Sábado</strong>
              <span>{market.satStart} até {market.satEnd}</span>
            </div>
          ) : ''}
        </div>

        <div className="map-content">
          <Map
            interactive={false}
            center={[market.latitude, market.longitude]}
            zoom={16}
            style={{ width: "100%", height: 280 }}
          >
            <Marker
              interactive={false}
              icon={mapIcon}
              position={[market.latitude, market.longitude]}
            />
          </Map>

          <footer>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${market.latitude},${market.longitude}`}
              target="_blank"
            >
              Como chegar
            </a>
          </footer>

          <h2>Sobre a feira</h2>
          <p>{market.about}</p>
        </div>
      </Box>
    </div>
  );
}

export default ViewMarket;
