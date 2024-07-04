
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp} from "firebase/firestore";


interface ForumInfo {
    name: string;
    description: string;
    author: string;
    timestamp: Date;
    members: { id: string, membername: string, role: boolean }[];
    messages: {id:string, content: string , timestamp: Date, author: string, repliedto: string }[]
}

const createForum = async (collectionName: string, forumInfo: ForumInfo): Promise<DocumentReference>  => {
    try {
        const result = await addDoc(collection(db, collectionName), {
      ...forumInfo,
      timestamp: serverTimestamp()
    })
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}
 const getAllForums = async (collectionName: string): Promise<DocumentData[]> => {
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


export {
  createForum,
  getAllForums
}