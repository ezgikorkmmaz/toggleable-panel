import React, {useState} from "react";
import './App.css';

function App() {
    const [isPanelToggled, setIsPanelToggled] = useState(false);

    const handleToggle = () => {
        setIsPanelToggled(!isPanelToggled);
    };

  return (
      <div className="toggleable-panel">
        <div className="panel-header">
          <span className="header">Toggleable Panel</span>
            <button className="toggle-button" onClick={handleToggle}>
                {isPanelToggled ? '-' : '+'}
            </button>
        </div>
          {isPanelToggled && (
              <div className="panel-body">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          )}
      </div>
  );
}

export default App;
