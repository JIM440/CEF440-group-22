import { Timestamp } from "mongodb";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp} from "firebase/firestore";


interface HelpRequest {
  id: string;
  location: string;
  content: string;
  mediaEvidence?: string[]; 
  disasterType: string;
  time: Date; 
  userId: string;
}

const helpRequest: HelpRequest = {
  id: "help-request-123",
  location: "123 Main St, Springfield",
  content: "Need assistance with evacuation due to rising flood waters.",
  mediaEvidence: ["path/to/image1.jpg", "path/to/image2.jpg"], 
  disasterType: "flood",
  time: new Date(), 
  userId: "user-456"
};





const createHelp_Request = async (collectionName: string, helpInfo:HelpRequest): Promise<DocumentReference>  => {
    try {
      const result = await addDoc(collection(db, collectionName), {
        ...helpInfo,
        timestamp:serverTimestamp()
      })
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}


 const handleCreateHelpRequest = async () => {
    try {
      await createHelp_Request('help-request',helpRequest );
      console.log('help created successfully');
    } catch (error) {
      console.error('Error creating forum:', error);
    }
  };


export {createHelp_Request,handleCreateHelpRequest}
