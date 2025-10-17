// Firebase Configuration - NEXUS FINANCE
const firebaseConfig = {
    apiKey: "AIzaSyCfymo5Fn9skpk03PmGZ0KjDt8ONbwD1rs",
    authDomain: "nexusfinance-bab8e.firebaseapp.com",
    projectId: "nexusfinance-bab8e",
    storageBucket: "nexusfinance-bab8e.firebasestorage.app",
    messagingSenderId: "751159627519",
    appId: "1:751159627519:web:88b4dd9b395bc4229606ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();