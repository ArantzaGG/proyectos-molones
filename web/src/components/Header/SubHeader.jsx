import { Link } from "react-router-dom";
import "../../styles/SubHeader.scss";
import PropTypes from "prop-types";

function SubHeader({ title, subTitle, textButton, btnLink, desc }) {
  return (
    <section className="subHeader">
      <h2 className="subHeader__h2">{title}</h2>
      <p className="subHeader__p">{subTitle}</p>
      {desc && <p className="subHeader__p">{desc}</p>}
      <Link className="subHeader__btn" to={btnLink}>
        <button className="subHeader__btn">{textButton}</button>
      </Link>
    </section>
  );
}
SubHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  textButton: PropTypes.string,
  btnLink: PropTypes.string,
  desc: PropTypes.string,
};
export default SubHeader;
