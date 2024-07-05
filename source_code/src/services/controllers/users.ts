import { db } from "../../config/firebase";
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";

// User Interface
interface User {
  id: string;
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


const user: User = {
  id: "user-001",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  password: "securepassword123",
  telephone: "123-456-7890",
  language: "English",
  photo: "path/to/photo.jpg",
  role: "volunteer",
  locations: ["New York", "Los Angeles"],
  forums: ["disaster-preparedness", "community-support"]
};






//get all users that are volunteers
const q = query(collection(db,'users'),where('role', '==','volunteer'))

const getAllUserVolunteers = async () => {
  try {
    const { docs } = await getDocs(q)
    const result = docs.map(doc => (
      {
        id: doc.id,
        ...doc.data()
      }
    ))
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Query to get all users with a location containing 'Los Angeles'
const q2 = query(collection(db, 'users'), where('locations', 'array-contains', 'Los Angeles'));

const getUsersInLosAngeles = async () => {
  try {
    const { docs } = await getDocs(q2);
    const result = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// update location
const docRef = doc(db,'users','UoLEDKswVOoXqCAZINI4')

const updateUserLocation = async () => {
  try {
    const updatedDoc = await updateDoc(docRef, {
      locations:['Cameroon','Nigeria','Tchad']
    });
   
    return updatedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// delete a user
const docRef2 = doc(db,'users','Ai3jA0wtJfOZArhpsoRL')

const deleteUser = async () => {
  try {
    const deletedDoc = await deleteDoc(docRef2); 
    return deletedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}












// const handleCreateUser = async () => {
//   try {
//     await createUser('users', users[4]);
//     console.log('User created successfully');
//   } catch (error) {
//     console.error('Error creating user:', error);
//   }
// };


export {deleteUser,getAllUserVolunteers,getUsersInLosAngeles,updateUserLocation };