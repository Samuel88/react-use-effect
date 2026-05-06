import { useState } from 'react';
import Example1 from './examples/Example1.jsx';
import Example2 from './examples/Example2.jsx';
import Example3 from './examples/Example3.jsx';

function App() {
  const [activeExample, setActiveExample] = useState('example1');

  const renderExample = () => {
    switch (activeExample) {
      case 'example1':
        return <Example1 />;
      case 'example2':
        return <Example2 />;
      case 'example3':
        return <Example3 />;
      default:
        return <Example1 />;
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">React useEffect - Tutorial</h1>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeExample === 'example1' ? 'active' : ''}`}
            onClick={() => setActiveExample('example1')}
          >
            Esempio 1: Mount/Unmount
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeExample === 'example2' ? 'active' : ''}`}
            onClick={() => setActiveExample('example2')}
          >
            Esempio 2: Dipendenze
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeExample === 'example3' ? 'active' : ''}`}
            onClick={() => setActiveExample('example3')}
          >
            Esempio 3: Side Effects
          </button>
        </li>
      </ul>

      <div className="border p-4 rounded">
        {renderExample()}
      </div>
    </div>
  );
}

export default App;
