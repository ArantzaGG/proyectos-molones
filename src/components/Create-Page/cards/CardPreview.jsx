import CardData from "./CardData";
import cover from '../../images/periodico.jpg';

const CardPreview = () => {
    return (
    <section className="preview">
    <img className="image" src={cover} alt="" />
    <CardData/>
  </section>
  );
};

export default CardPreview;