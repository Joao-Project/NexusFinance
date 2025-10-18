// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfymo5Fn9skpk03PmGZ0KjDt8ONbwD1rs",
    authDomain: "nexusfinance-bab8e.firebaseapp.com",
    projectId: "nexusfinance-bab8e",
    storageBucket: "nexusfinance-bab8e.firebasestorage.app",
    messagingSenderId: "751159627519",
    appId: "1:751159627519:web:88b4dd9b395bc4229606ca"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('🔥 Firebase conectado!');
} catch (error) {
    console.log('❌ Erro Firebase:', error);
}

const auth = firebase.auth();
const db = firebase.firestore();

// Configuração para desenvolvimento
auth.useDeviceLanguage();

// Forçar reconexão se houver erro de rede
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('✅ Usuário logado:', user.email);
    }
}, (error) => {
    console.log('❌ Erro auth:', error);
});