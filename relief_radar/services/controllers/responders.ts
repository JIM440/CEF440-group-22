import { db } from "../../config/firebase";
import { addDoc, collection, DocumentReference, serverTimestamp } from "firebase/firestore";


interface Responder {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  photo: string;
  assignedDisasters: string[];
}


const responder: Responder = {
  id: "responder-001",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "securepassword123",
  telephone: "123-456-7890",
  photo: "path/to/photo.jpg",
  assignedDisasters: ["earthquake", "flood"]
};


const createResponder = async (collectionName: string, responderInfo: Responder): Promise<DocumentReference> => {
  try {
    const result = await addDoc(collection(db, collectionName), {
      ...responderInfo,
      timestamp: serverTimestamp(), 
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const handleCreateResponder = async () => {
  try {
    await createResponder('responders', responder);
    console.log('Responder created successfully');
  } catch (error) {
    console.error('Error creating responder:', error);
  }
};


export { createResponder, handleCreateResponder };
