import './App.css';
import { useState } from 'react';
import { unstuckMap } from './constants';

function App() {
  const [currentNode, setCurrentNode] = useState("1");
  const node = unstuckMap[currentNode];

  return (
    <div className="App">
      <header>
        <a href='./'>
          <h1>
            I feel stuck
          </h1>
        </a>
      </header>
      <div className="cards-container">
        {node.cards.map((element, key) =>
          <div key={key} className={"card " + element.className}>
            {element.className === "moment-of-struggle" && <div className="diamond"></div>}
            <h1>{element.title}</h1>
            {element.description && <h2>{element.description}</h2>}
          </div>
        )}
      </div>
      {node.connections &&
        <div className="button-container">
          {node.connections.map((item, id) =>
            <button key={id} className={item.className} onClick={() => setCurrentNode(item.node)}>
              {item.displayText}
            </button>
          )}
        </div>
      }
      <footer>
        <span>Created by <a href='https://samuelgiacomelli.com'>Samuel Giacomelli</a> based on Unstuck map by <a href='http://www.nikkel-blaase.com/'>Nikkel Blaase</a></span>
      </footer>
    </div>
  );
}

export default App;
