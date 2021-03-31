import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

export default function MenuAside({ width = "large", title }) {
  return (
    <aside className={width === "large" ? "large" : "small"}>
      <header>
        <img src={logo} alt="Logo Feira" />

        {width === "large" ? <p>Escolha uma feira</p> : <p>{title}</p>}
      </header>

      <footer>
        {width === "large" ? '' : (
          <Link to={'/'} className="button-back">
            <FiArrowLeft size={32} color="#FFF" />
          </Link>
        )}
      </footer>
    </aside >
  );
}
