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

const users: User[] = [
  {
    id: "user-001",
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
    id: "user-002",
    name: "John Smith",
    email: "john.smith@example.com",
    password: "mypassword",
    telephone: "987-654-3210",
    language: "Spanish",
    photo: "path/to/photo2.jpg",
    role: "non-volunteer",
    locations: ["Chicago", "New York"],
    forums: ["disaster-recovery", "first-aid"]
  },
  {
    id: "user-003",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "alicepassword",
    telephone: "555-123-4567",
    language: "French",
    photo: "path/to/photo3.jpg",
    role: "volunteer",
    locations: ["Paris", "Berlin"],
    forums: ["emergency-preparedness", "community-support"]
  },
  {
    id: "user-004",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    password: "robertpassword",
    telephone: "111-222-3333",
    language: "German",
    photo: "path/to/photo4.jpg",
    role: "non-volunteer",
    locations: ["Munich", "Chicago"],
    forums: ["first-aid", "volunteer-coordination"]
  },
  {
    id: "user-005",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "emilypassword",
    telephone: "444-555-6666",
    language: "Italian",
    photo: "path/to/photo5.jpg",
    role: "volunteer",
    locations: ["Rome", "Milan"],
    forums: ["disaster-preparedness", "emergency-communication"]
  },
  {
    id: "user-006",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    password: "michaelpassword",
    telephone: "777-888-9999",
    language: "Portuguese",
    photo: "path/to/photo6.jpg",
    role: "non-volunteer",
    locations: ["Lisbon", "Berlin"],
    forums: ["community-support", "emergency-communication"]
  },
  {
    id: "user-007",
    name: "Sarah Moore",
    email: "sarah.moore@example.com",
    password: "sarahpassword",
    telephone: "222-333-4444",
    language: "Chinese",
    photo: "path/to/photo7.jpg",
    role: "volunteer",
    locations: ["Beijing", "Shanghai"],
    forums: ["disaster-recovery", "volunteer-coordination"]
  },
  {
    id: "user-008",
    name: "David Taylor",
    email: "david.taylor@example.com",
    password: "davidpassword",
    telephone: "888-999-0000",
    language: "Japanese",
    photo: "path/to/photo8.jpg",
    role: "non-volunteer",
    locations: ["Tokyo", "Los Angeles"],
    forums: ["emergency-preparedness", "disaster-preparedness"]
  }
];


const createUser = async (collectionName: string, userInfo: User): Promise<DocumentReference> => {
  try {
    const result = await addDoc(collection(db, collectionName), {
      ...userInfo,
      timestamp: serverTimestamp(), 
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
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












const handleCreateUser = async () => {
  try {
    await createUser('users', users[4]);
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
};


export { createUser,deleteUser, handleCreateUser,getAllUserVolunteers,getUsersInLosAngeles,updateUserLocation };
