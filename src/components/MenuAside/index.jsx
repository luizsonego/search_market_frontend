import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./style.css";

export default function MenuAside({ width = "large" }) {
  return (
    <aside className={width === "large" ? "large" : "small"}>
      <header>
        <img src={logo} alt="Logo Feira" />

        {width === "large" ? <p>Escolha uma feira</p> : ""}
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
