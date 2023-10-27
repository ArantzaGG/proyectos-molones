import CardData from './CardData';
import defaultAvatar from '../../../images/periodico.jpg';
import PropTypes from "prop-types";

const CardPreview = ({ data }) => {
  const avatarCover = data.photo === '' ? defaultAvatar : data.photo;
  return (
    <section className='preview'>
      <div
        className='preview__image'
        style={{ backgroundImage: `url(${avatarCover})` }}
      ></div>
      <CardData data={data} />
    </section>
  );
};

CardPreview.propTypes = {
  data: PropTypes.object,
  
};

export default CardPreview;
