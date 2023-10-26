import "../../styles/App.scss";
import Header from "../Header/Header";
import Form from "../Create-Page/Form";
import CardPreview from "../Create-Page/cards/CardPreview";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import SubHeader from "../Header/SubHeader";

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

export default CreatePage;
