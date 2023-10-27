import CardData from './CardData';
import defaultAvatar from '../../../images/periodico.jpg';
import PropTypes from "prop-types";

const CardPreview = ({ data, avatar, avatarProfile }) => {
  const avatarCover = avatar === '' ? defaultAvatar : avatar;
  return (
    <section className='preview'>
      <div
        className='preview__image'
        style={{ backgroundImage: `url(${avatarCover})` }}
      ></div>
      <CardData avatarProfile={avatarProfile} data={data} />
    </section>
  );
};

CardPreview.propTypes = {
  data: PropTypes.object,
  avatar: PropTypes.string,
  avatarProfile: PropTypes.string,
};

export default CardPreview;
