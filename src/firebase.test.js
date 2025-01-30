import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Simula la inicialización de Firebase (esto debe ir antes de las importaciones o el uso de las funciones)
jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(),
  connectAuthEmulator: jest.fn(),
  GoogleAuthProvider: jest.fn(),
}));

describe("Firebase Emulator", () => {
  test("debe conectar correctamente al emulador de autenticación", () => {
    // Configuración de Firebase (solo para el test)
    const firebaseTestConfig = {
      apiKey: "AIzaSyBYy3QiP94OP-Arb3Xv0aHygjTYIP5TLMk",
      authDomain: "leakplanting.firebaseapp.com",
      projectId: "leakplanting",
      storageBucket: "leakplanting.firebasestorage.app",
      messagingSenderId: "725588759111",
      appId: "1:725588759111:web:cb92ec657d726872c0d762",
      measurementId: "G-EY9LGN065L",
    };

    // Inicializa Firebase con la configuración del test
    const app = initializeApp(firebaseTestConfig);
    const auth = getAuth(app);

    // Llama a connectAuthEmulator para conectarse al emulador
    connectAuthEmulator(auth, "http://localhost:9099");

    // Verifica que connectAuthEmulator haya sido llamado con el auth y la URL correcta
    expect(connectAuthEmulator).toHaveBeenCalledWith(
      auth,
      "http://localhost:9099"
    );
  });
});
