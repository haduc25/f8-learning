import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { Howl } from 'howler';

import './App.css';
import onichanSound from './assets/Onii-chan.mp3';

function App() {
    const classifier = knnClassifier.create();
    console.log('classifier', classifier);

    var sound = new Howl({
        src: [onichanSound],
    });

    sound.play();

    return (
        <div className="main">
            <h2>Meow</h2>
            <video className="video" autoPlay />

            <div className="control">
                <button className="btn">Train 1</button>
                <button className="btn">Train 2</button>
                <button className="btn">Run</button>
            </div>
        </div>
    );
}

export default App;
