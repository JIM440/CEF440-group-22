import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword , signInWithPopup} from "firebase/auth";

const signInEmailandPassword = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};


export { signInEmailandPassword, signInWithGoogle };