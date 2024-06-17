import { messages } from './../../../Task 5/src/modules/language/dictionary';
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp} from "firebase/firestore";


interface ForumInfo {
    name: string;
    description: string;
    author: string;
    timestamp: typeof serverTimestamp;
    members: { id: string, membername: string, role: boolean }[];
    messages: {id:string, content: string , timestamp: Date, author: string, repliedto: string }[]
}

export const createForum = async (collectionName: string, forumInfo: ForumInfo): Promise<DocumentReference>  => {
    try {
        const result = await addDoc(collection(db, collectionName), forumInfo)
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getAllForums = async (collectionName: string): Promise<DocumentData[]> => {
  try {
    const {docs} = await getDocs(collection(db, collectionName));
    const data = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};