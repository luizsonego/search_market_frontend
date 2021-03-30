import { useEffect, useState } from "react";
import Box from "../../components/Box";
import MenuAside from "../../components/MenuAside";
import Map from "../../components/Map";
import { Marker } from "react-leaflet";

import "./style.css";

import mapIcon from "../../components/Map/mapIcon";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

function Createmarket() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  const [sunday, setSunday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunStart, setSunStart] = useState('');
  const [sunEnd, setSunEnd] = useState('');
  const [monStart, setMonStart] = useState('');
  const [monEnd, setMonEnd] = useState('');
  const [tueStart, setTueStart] = useState('');
  const [tueEnd, setTueEnd] = useState('');
  const [wedStart, setWedStart] = useState('');
  const [wedEnd, setWedEnd] = useState('');
  const [thuStart, setThuStart] = useState('');
  const [thuEnd, setThuEnd] = useState('');
  const [friStart, setFriStart] = useState('');
  const [friEnd, setFriEnd] = useState('');
  const [satStart, setSatStart] = useState('');
  const [satEnd, setSatEnd] = useState('');

  const history = useHistory();

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { latitude, longitude } = position;
    try {
      api.post("market", {
        name,
        about,
        latitude,
        longitude,
        sunday,
        sunStart,
        sunEnd,
        monday,
        monStart,
        monEnd,
        tuesday,
        tueStart,
        tueEnd,
        wednesday,
        wedStart,
        wedEnd,
        thursday,
        thuStart,
        thuEnd,
        friday,
        friStart,
        friEnd,
        saturday,
        satStart,
        satEnd,
      }).then(() => {
        history.push("/");
      })
    } catch (error) {
      console.error("error", error)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="create-market">
      <MenuAside width="small" />
      <Box title="Cadastrar uma feira">
        <main>
          <form onSubmit={handleSubmit} className="form-create-market">
            <legend>Selecione no mapa o local da feira</legend>

            <legend>Nome da feira</legend>
            <div className="input-block">
              <div className="">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <legend>sobre a feira</legend>
            <div className="input-block">
              <div className="day-hour">
                <label htmlFor="about">Nome</label>
                <input type="text" name="about" id="about" value={about} onChange={(e) => setAbout(e.target.value)} />
              </div>
            </div>

            <Map
              center={[position.latitude, position.longitude]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <legend>Que dia acontece a feira ?</legend>
            <div className="input-block">
              <div className="day-hour">
                <label htmlFor="sunday">Domingo</label>
                <input type="checkbox" name="1" id="sunday" checked={sunday} onChange={() => setSunday(!sunday)} />
                <input type="time" id="sunStartTime" value={sunStart} onChange={(e) => setSunStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={sunEnd} onChange={(e) => setSunEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="monday">Segunda-feira</label>
                <input type="checkbox" name="1" id="monday" checked={monday} onChange={() => setMonday(!monday)} />
                <input type="time" id="sunStartTime" value={monStart} onChange={(e) => setMonStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={monEnd} onChange={(e) => setMonEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="tuesday">Terça-feira</label>
                <input type="checkbox" name="1" id="tuesday" checked={tuesday} onChange={() => setTuesday(!tuesday)} />
                <input type="time" id="sunStartTime" value={tueStart} onChange={(e) => setTueStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={tueEnd} onChange={(e) => setTueEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="wednesday">Quarta-feira</label>
                <input type="checkbox" name="1" id="wednesday" checked={wednesday} onChange={() => setWednesday(!wednesday)} />
                <input type="time" id="sunStartTime" value={wedStart} onChange={(e) => setWedStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={wedEnd} onChange={(e) => setWedEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="thursday">Quinta-feira</label>
                <input type="checkbox" name="1" id="thursday" checked={thursday} onChange={() => setThursday(!tuesday)} />
                <input type="time" id="sunStartTime" value={thuStart} onChange={(e) => setThuStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={thuEnd} onChange={(e) => setThuEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="friday">Sexta-feira</label>
                <input type="checkbox" name="1" id="friday" checked={friday} onChange={() => setFriday(!friday)} />
                <input type="time" id="sunStartTime" value={friStart} onChange={(e) => setFriStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={friEnd} onChange={(e) => setFriEnd(e.target.value)} />
              </div>

              <div className="day-hour">
                <label htmlFor="saturday">Sabado</label>
                <input type="checkbox" name="1" id="saturday" checked={saturday} onChange={() => setSaturday(!saturday)} />
                <input type="time" id="sunStartTime" value={satStart} onChange={(e) => setSatStart(e.target.value)} />
                <input type="time" id="sunEndTime" value={satEnd} onChange={(e) => setSatEnd(e.target.value)} />
              </div>

            </div>

            <button className="confirm-button" type="submit">
              Salvar
            </button>
          </form>
        </main>
      </Box>
    </div>
  );
}

export default Createmarket;