import { db } from "../../config/firebase";
import { addDoc, collection, DocumentReference, serverTimestamp } from "firebase/firestore";


interface Announcement {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  responderId: string;
}


const announcement: Announcement = {
  id: "announcement-001",
  sender: "City Emergency Services",
  content: "There is a severe weather warning for the downtown area. Please take shelter immediately.",
  timestamp: new Date(),
  responderId: "responder-001"
};


const createAnnouncement = async (collectionName: string, announcementInfo: Announcement): Promise<DocumentReference> => {
  try {
    const result = await addDoc(collection(db, collectionName), {
      ...announcementInfo,
      timestamp: serverTimestamp(), 
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const handleCreateAnnouncement = async () => {
  try {
    await createAnnouncement('announcements', announcement);
    console.log('Announcement created successfully');
  } catch (error) {
    console.error('Error creating announcement:', error);
  }
};


export { createAnnouncement, handleCreateAnnouncement };