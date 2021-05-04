import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <div className="container">
        <AddContact />
        <Contacts />
      </div>
    </>
  );
};

export default App;
