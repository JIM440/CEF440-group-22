import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../config/firebase';

// User Interface
interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  language: string;
  photo: string;
  role: string;
  locations: string[];
  forums: string[];
}


const users: User[] = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "securepassword123",
    telephone: "123-456-7890",
    language: "English",
    photo: "path/to/photo1.jpg",
    role: "volunteer",
    locations: ["New York", "Los Angeles"],
    forums: ["disaster-preparedness", "community-support"]
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    password: "mypassword",
    telephone: "987-654-3210",
    language: "Spanish",
    photo: "path/to/photo2.jpg",
    role: "non-volunteer",
    locations: ["Chicago", "New York"],
    forums: ["disaster-recovery", "first-aid"]
  }
];

const createUser = async (userInfo: User): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
    const user = userCredential.user;

    const userDoc = {
      id: user.uid,
      email: user.email,
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

const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
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

export { createUser, signIn, signInWithGoogle };
