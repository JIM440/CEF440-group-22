import { db } from "../../config/firebase";
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";

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

// Sample user data
const user: User = {
  name: "John",
  email: "fabricemokfembam@gmail.com",
  password: "1234567890",
  telephone: "987-654-3210",
  language: "Spanish",
  photo: "path/to/photo2.jpg",
  role: "non-volunteer",
  locations: ["Chicago", "New York"],
  forums: ["disaster-recovery", "first-aid"]
};

// Function to fetch a user by ID
const getUser = async (id: string): Promise<User> => {
  const q0 = query(collection(db, 'users'), where('id', '==', id));

  try {
    const { docs } = await getDocs(q0);
    if (docs.length > 0) {
      const docData = docs[0].data();
      return { id: docs[0].id, ...docData } as User;
    } else {
      console.log(`No user found with ID: ${id}`);
      throw console.error
      
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Function to fetch all volunteer users
const getAllUserVolunteers = async (): Promise<User[]> => {
  const q = query(collection(db, 'users'), where('role', '==', 'volunteer'));

  try {
    const { docs } = await getDocs(q);
    const result = docs.map(doc => (
      { id: doc.id, ...doc.data() }
    ));
    return result as User[];
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    throw error;
  }
};

// Function to fetch users in Los Angeles
const getUsersInLosAngeles = async (): Promise<User[]> => {
  const q2 = query(collection(db, 'users'), where('locations', 'array-contains', 'Los Angeles'));

  try {
    const { docs } = await getDocs(q2);
    const result = docs.map(doc => (
      { id: doc.id, ...doc.data() }
    ));
    return result as User[];
  } catch (error) {
    console.error('Error fetching users in Los Angeles:', error);
    throw error;
  }
};

// Function to update a user's location
const updateUserLocation = async (userId: string, newLocations: string[]): Promise<void> => {
  const docRef = doc(db, 'users', userId);

  try {
    await updateDoc(docRef, {
      locations: newLocations
    });
    console.log('User location updated successfully');
  } catch (error) {
    console.error('Error updating user location:', error);
    throw error;
  }
};

// Function to delete a user
const deleteUser = async (userId: string): Promise<void> => {
  const docRef = doc(db, 'users', userId);

  try {
    await deleteDoc(docRef);
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

const updateForum = async (collectionName: string, forumId: string, updatedData:any): Promise<void> => {
  const forumDocRef = doc(db, collectionName, forumId);

  try {
    await updateDoc(forumDocRef, {
      ...updatedData,
      timestamp: serverTimestamp()
    });
    console.log('Forum updated successfully');
  } catch (error) {
    console.error('Error updating forum:', error);
    throw error;
  }
};

export { deleteUser, getAllUserVolunteers, getUsersInLosAngeles, updateUserLocation, getUser };
