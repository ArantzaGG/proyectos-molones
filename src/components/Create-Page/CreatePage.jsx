import '../../styles/App.scss';
import Header from '../Header/Header';
import Form from '../Create-Page/Form';
import CardPreview from '../Create-Page/cards/CardPreview';
import Footer from '../Footer/Footer';


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
    <div className='container'>
      <Header />
      <div className='div__MQ'>
        <main className='main'>
          
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
      </div>
      <Footer />
    </div>
  );
}

export default CreatePage;
