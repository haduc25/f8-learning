import { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { Howl } from 'howler';

import './App.css';
import onichanSound from './assets/Onii-chan.mp3';

// label
const NOT_TOUCH_LABEL = 'not_touch';
const TOUCHED_LABEL = 'touched';

// số lần học
const TRANING_TIMES = 50;

function App() {
    const video = useRef();
    const classifier = useRef();
    const mobilenetModule = useRef();

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
        // camera
        console.log('initing...');
        await setupCamera();

        console.log('setup camera is success!');

        // database
        console.log('installing database...');
        // Create the classifier.
        classifier.current = knnClassifier.create();

        // Load the model. | load database
        mobilenetModule.current = await mobilenet.load();
        console.log('setup database is success!');

        //Train 1
        console.log('Vui lòng không chạm tay lên mặt và bấm Train 1');
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

                        resolve();
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

    // Training
    const train = async (label) => {
        // console.log(label);

        for (let i = 0; i < TRANING_TIMES; i++) {
            console.log(`Progressing: ${parseInt(((i + 1) / TRANING_TIMES) * 100)}%`);

            await sleep(100); //train trong 5s
        }
    };

    // Sleep
    const sleep = (ms = 0) => {
        // tạo ra sleep để cho train chậm lại
        return new Promise((resolve) => setTimeout(resolve, ms));
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
                <button
                    className="btn"
                    onClick={() => {
                        train(NOT_TOUCH_LABEL);
                    }}
                >
                    Train 1
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        train(TOUCHED_LABEL);
                    }}
                >
                    Train 2
                </button>
                <button className="btn" onClick={() => {}}>
                    Run
                </button>
            </div>
        </div>
    );
}

export default App;
