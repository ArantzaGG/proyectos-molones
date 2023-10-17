import CardData from "./CardData";
import cover from '../../../images/periodico.jpg';


const CardPreview = ({ data }) => {
    return (
    <section className="preview">
    <img className="image" src={cover} alt="" />
    <CardData data={data}/>
  </section>
  );
};

export default CardPreview;