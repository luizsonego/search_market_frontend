import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import Map from "../../components/Map/index";

import api from "../../services/api.js";

import mapMarkerImg from "../../assets/images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "./style.css";
import MenuAside from "../../components/MenuAside";

function MapMarket() {
  const [market, setMarket] = useState([]);
  const [mapPosition, setMapPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -75],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setMapPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });

  useEffect(() => {
    try {
      api.get("market").then((response) => {
        setMarket(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setMarket]);

  return (
    <div className="page-map">
      <MenuAside />
        <Map center={[mapPosition.latitude, mapPosition.longitude]}>
          {market?.map((feira) => {
            return (
              <Marker
                key={feira.id}
                icon={happyMapIcon}
                position={[feira.latitude, feira.longitude]}
              >
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  {feira.name}
                  <Link to={`/view/${feira.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </Map>

        <Link to="/create" className="create-feira">
          <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
  );
}

export default MapMarket;
