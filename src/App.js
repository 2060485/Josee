import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
  const playSound = () => {
    const audio = new Audio('/Assets/fart.mp3');
    audio.play();
  };

  return (
    <div className="App container text-center">
      <header className="App-header my-5">
        <h1 className="display-4">Hey</h1>
        <button className="btn btn-primary btn-lg mt-3" onClick={playSound}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
