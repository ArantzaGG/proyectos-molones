import { Link } from "react-router-dom";
import "../../styles/SubHeader.scss";

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

export default SubHeader;
