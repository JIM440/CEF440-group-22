import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, updateDoc, DocumentData, DocumentReference, serverTimestamp, doc } from "firebase/firestore";

interface ForumInfo {
    name: string;
    description: string;
    author: string;
    timestamp: Date;
    members: { id: string, membername: string, role: boolean }[];
    messages: { id: string, content: string, timestamp: Date, author: string, repliedto: string }[];
}

const createForum = async (collectionName: string, forumInfo: ForumInfo): Promise<DocumentReference> => {
    try {
        const result = await addDoc(collection(db, collectionName), {
            ...forumInfo,
            timestamp: serverTimestamp()
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getAllForums = async (collectionName: string): Promise<DocumentData[]> => {
    try {
        const { docs } = await getDocs(collection(db, collectionName));
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

const updateForumMembers = async (collectionName: string, forumId: string, newMembers: { id: string, membername: string, role: boolean }[]): Promise<void> => {
    const forumDocRef = doc(db, collectionName, forumId);
    try {
        await updateDoc(forumDocRef, {
            members: newMembers,
            timestamp: serverTimestamp()
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export {
    createForum,
    getAllForums,
    updateForumMembers
};
