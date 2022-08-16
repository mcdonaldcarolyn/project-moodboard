import React, { useCallback, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Moodboard from './components/Moodboard';
import MoodboardImage from './components/MoodboardImage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import update from "immutability-helper";
import { isTouchDevice } from "./utils/isTouchDevice";


function App() {
  
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: uuidv4(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      returnfile;
    });
  }, []);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };
  /* makes images draggable*/
  return (
    <div className="App">
      <h1 className="moodboard-center">MoodBoard</h1>
      {images && images.length > 0 && (
        <h3 className="moodboard-center">Add and drag images </h3>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
