import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../config/firebase';

// User Interface
interface User {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  telephone: string;
  language: string;
  photo?: string;
  role: string;
  locations?: string[];
  forums?: string[];
}

const createUser = async (userInfo: User): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
    const user = userCredential.user;

    const userDoc = {
      id: user.uid,
      email: user.email,
      name:userInfo.name,
      username:userInfo.username,
      language: userInfo.language,
      photo: userInfo.photo,
      role: userInfo.role,
      locations: userInfo.locations,
      forums: userInfo.forums,
      timestamp: serverTimestamp(),
    };

    // Store the document in Firestore with the same UID as the authenticated user
    await setDoc(doc(db, 'users', user.uid), userDoc);
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

const signIn = async (email: string, password: string): Promise<object> => {
  try {
    console.log(email,'---',password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user)
    return userCredential ;
  } catch (error) {
    console.error('Error during sign-in:', error);
    return {};
  }
};

const signInWithGoogle = async (): Promise<void> => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error('Error during Google sign-in:', error);
  }
};

const handleCreateUser = async (): Promise<void> => {
  try {
    const user: User = {
      name: "Myke",
      username: "Myke",
      email: "myke@gmail.com",
      password: "myke12345",
      telephone: "987-654-3210",
      language: "Chinesse",
      photo: "path/to/photo2.jpg",
      role: "volunteer",
      locations: ["China", "Cape Verde"],
      forums: ["fake shit", "first-aid"]
    };
    await createUser(user);
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export { handleCreateUser, createUser, signIn, signInWithGoogle };
