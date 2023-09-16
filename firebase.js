

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-t_sdSZfsieCbUjas18N3VCCI0IGKLJ4",
    authDomain: "pomodoro-timer-app-39067.firebaseapp.com",
    projectId: "pomodoro-timer-app-39067",
    storageBucket: "pomodoro-timer-app-39067.appspot.com",
    messagingSenderId: "429847903260",
    appId: "1:429847903260:web:e806f785a5d8ff8450b3d9",
    measurementId: "G-PYZD88MQG0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
