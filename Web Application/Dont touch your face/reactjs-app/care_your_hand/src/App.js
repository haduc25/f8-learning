import { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { Howl } from 'howler';

import './App.css';
import onichanSound from './assets/Onii-chan.mp3';

function App() {
    const video = useRef();

    //// checking classifier working?
    // const classifier = knnClassifier.create();
    // console.log('classifier', classifier);

    // // Sound
    // var sound = new Howl({
    //     src: [onichanSound],
    // });

    // sound.play();

    // useEffect() | setup Camera
    const init = async () => {
        console.log('initing...');
        await setupCamera();

        console.log('setup camera is success!');
    };

    // xin cấp quyền truy cập vào camera
    const setupCamera = () => {
        return new Promise((resolve, reject) => {
            // lấy quyền user trong nhiều browser
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;

            if (navigator.getUserMedia) {
                navigator.getUserMedia(
                    { video: true },
                    (stream) => {
                        //để set video lên web
                        video.current.srcObject = stream;

                        // event check success | // nếu load thành công
                        video.current.addEventListener('loadeddata', resolve);
                    },
                    (error) => {
                        reject(error);
                    },
                );
            } else {
                reject();
            }
        });
    };

    useEffect(() => {
        init();

        // cleanup
        return () => {};
    }, []);

    return (
        <div className="main">
            <h2>Meow</h2>
            <video ref={video} className="video" autoPlay />

            <div className="control">
                <button className="btn">Train 1</button>
                <button className="btn">Train 2</button>
                <button className="btn">Run</button>
            </div>
        </div>
    );
}

export default App;
