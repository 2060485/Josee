import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const playSound = (name) => {
    const audio = new Audio(`/Assets/${name}.mp3`);
    audio.play();
  };

  const buttons = [
    { label: 'Anaïs', sound: 'Anais' },
    { label: 'Annie Lalonde', sound: 'AnnieLa' },
    { label: 'Annie Lehoux', sound: 'AnnieLe' },
    { label: 'Julien', sound: 'Julien' },
    { label: 'Ève-Marie', sound: 'Eve' },
    { label: 'Danny', sound: 'Danny' },
    { label: 'Anick', sound: 'Anick' },
    { label: 'Stéphane Normand', sound: 'StefN' },
    { label: 'Stéphane Simard', sound: 'StefS' },
  ];

  return (
    <div className="App container text-center">
      <header className="App-header my-5 p-5">
        <h1 className="display-4">Tabarnak</h1>
        <div className="row justify-content-center mt-4">
          {buttons.map((button, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => playSound(button.sound)}
              >
                {button.label}
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
