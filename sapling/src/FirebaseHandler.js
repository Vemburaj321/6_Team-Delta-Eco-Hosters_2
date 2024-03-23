import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
      apiKey: "AIzaSyDJKNIM-jxYtrmRNba9Yx34x6bAKy4Dtho",
      authDomain: "sapling-10ae2.firebaseapp.com",
      projectId: "sapling-10ae2",
      storageBucket: "sapling-10ae2.appspot.com",
      messagingSenderId: "540992782256",
      appId: "1:540992782256:web:b41645ee4c3a9964dd6075",
      measurementId: "G-M0ELDJ4PKC"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage }
