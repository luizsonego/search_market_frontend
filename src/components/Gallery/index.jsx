import "./style.css";

export default function Gallery({ main, small }) {
  return (
    <div className="gallery">
      <div className="main-image">
        <img src={main} alt="Lar das meninas" />
      </div>
      <div className="images-list">
        <div className="small-images">
          <img
            src="https://idec.org.br/sites/default/files/dicasedireitos/pessoas_comprando_na_feira.jpg"
            alt="Lar das meninas"
          />
        </div>
      </div>
    </div>
  );
}
