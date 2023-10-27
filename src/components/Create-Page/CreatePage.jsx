import "../../styles/App.scss";
import Header from "../Header/Header";
import Form from "../Create-Page/Form";
import CardPreview from "../Create-Page/cards/CardPreview";
import Footer from "../Footer/Footer";
import SubHeader from "../Header/SubHeader";
import PropTypes from 'prop-types';

function CreatePage({
  avatar,
  data,
  avatarProfile,
  updateAvatarProfile,
  updateAvatar,
  updateInput,
  updateCard,
  error,
}) {
  return (
    <>
      <Header />
      <SubHeader
        title={"Proyectos Molones"}
        subTitle={
          "En esta agencia, ningún proyecto podrá esconderse. El talento quedará al descubierto."
        }
        textButton={"Ver proyectos"} btnLink = {'/'}
      />
      <main className="main">
        <CardPreview
          avatar={avatar}
          data={data}
          avatarProfile={avatarProfile}
        />
        <Form
          updateAvatarProfile={updateAvatarProfile}
          avatarProfile={avatarProfile}
          updateAvatar={updateAvatar}
          avatar={avatar}
          data={data}
          updateInput={updateInput}
          updateCard={updateCard}
          error={error}
        />
      </main>

      <Footer />
    </>
  );
}

CreatePage.propTypes = {
  data: PropTypes.object,
  updateInput: PropTypes.func,
  updateCard: PropTypes.func,
  error: PropTypes.string,
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func,
  updateAvatarProfile: PropTypes.func,
  avatarProfile: PropTypes.string,
};

export default CreatePage;
