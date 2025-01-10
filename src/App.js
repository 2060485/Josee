import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { useEffect, useState } from 'react';

function App() {
  const [audioCache, setAudioCache] = useState({});

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

  // Preload audio files on mount
  useEffect(() => {
    const preloadAudio = () => {
      const cache = {};
      buttons.forEach((button) => {
        // Adjusted file path using process.env.PUBLIC_URL
        const audio = new Audio(`${process.env.PUBLIC_URL}/Assets/${button.sound}.mp3`);
        cache[button.sound] = audio;
      });
      setAudioCache(cache);
    };
    preloadAudio();
  }, [buttons]);

  const playSound = (name) => {
    const audio = audioCache[name];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

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
