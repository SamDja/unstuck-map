import './App.css';
import React, { useState } from 'react';
import { unstuckMap } from './constants';

function App() {
  const [currentNode, setCurrentNode] = useState("1");

  return (
    <div className="App">
      <div className="cards-container">
        {unstuckMap[currentNode].cards.map((element, key) =>
          <div key={key} className={"card " + element.className}>
            {element.className === "moment-of-struggle" && <div className="diamond"></div>}
            <h1>{element.title}</h1>
            {element.description && <h2>{element.description}</h2>}
          </div>
        )}
      </div>
      {unstuckMap[currentNode].connections &&
        <div className="button-container">
          {unstuckMap[currentNode].connections.map((item, id) =>
            <button key={id} className={item.className} onClick={() => setCurrentNode(item.node)}>
              {item.displayText}
            </button>
          )}
        </div>
      }
      <footer>
        <span>Created by <a href='https://twitter.com/sam__dja'>@samdja</a> based on Unstuck map by <a href='http://www.nikkel-blaase.com/'>Nikkel Blaase</a></span>    
      </footer>
    </div>
  );
}

export default App;
