import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />{/* media query to be .. */}
      <Main />{/* media query done  */}
      <Footer /> {/* media query done */}
    </div>
  );
}

export default App;
