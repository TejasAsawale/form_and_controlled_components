import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import SearchFilter from './components/SearchFilter';
import SettingsForm from './components/SettingsForm';
import Survey from './components/Survey';

function App() {
  return (
    <div className="App">
      <Login />
      <br></br>
      <Registration />
      <br></br>
      <Survey />
      <br></br>
      <h1>Search Filter Example</h1>
      <SearchFilter />
      <br></br>
      <SettingsForm />
    </div>
  );
}

export default App;
