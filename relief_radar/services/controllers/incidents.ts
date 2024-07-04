import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, deleteDoc, updateDoc, DocumentData, DocumentReference, serverTimestamp, doc, where, query } from "firebase/firestore";

// Incident Interface
interface Incident {
  id: string;
  userId: string;
  disasterType: string;
  location: string;
  status: string;
  description: string;
  mediaEvidence?: string[];
  time: Date;
  incidentStatus: string;
}


const incident: Incident = {
  id: "incident-789",
  userId: "user-123",
  disasterType: "earthquake",
  location: "456 Elm St, Springfield",
  status: "occurred",
  description: "Severe earthquake causing structural damage and power outages.",
  mediaEvidence: ["path/to/image1.jpg", "path/to/image2.jpg"],
  time: new Date(),
  incidentStatus: "Pending"
};

const incidents: Incident[] = [
  {
    id: "incident-789",
    userId: "user-123",
    disasterType: "earthquake",
    location: "456 Elm St, Springfield",
    status: "occurred",
    description: "Severe earthquake causing structural damage and power outages.",
    mediaEvidence: ["path/to/image1.jpg", "path/to/image2.jpg"],
    time: new Date(),
    incidentStatus: "Pending"
  },
  {
    id: "incident-790",
    userId: "user-124",
    disasterType: "flood",
    location: "789 Oak Ave, Riverside",
    status: "ongoing",
    description: "Heavy rains causing widespread flooding in residential areas.",
    mediaEvidence: ["path/to/flood1.jpg", "path/to/flood2.jpg"],
    time: new Date(),
    incidentStatus: "Reported"
  },
  {
    id: "incident-791",
    userId: "user-125",
    disasterType: "wildfire",
    location: "321 Pine Rd, Forestville",
    status: "occurred",
    description: "Massive wildfire destroying forest area and threatening nearby homes.",
    mediaEvidence: ["path/to/fire1.jpg", "path/to/fire2.jpg"],
    time: new Date(),
    incidentStatus: "Pending"
  },
  {
    id: "incident-792",
    userId: "user-126",
    disasterType: "hurricane",
    location: "654 Cedar St, Coastal City",
    status: "potential",
    description: "Hurricane approaching the coastline, residents advised to evacuate.",
    mediaEvidence: ["path/to/hurricane1.jpg", "path/to/hurricane2.jpg"],
    time: new Date(),
    incidentStatus: "Reported"
  },
  {
    id: "incident-793",
    userId: "user-127",
    disasterType: "tornado",
    location: "987 Birch Ln, Tornado Alley",
    status: "occurred",
    description: "Tornado touching down, causing significant damage to buildings and infrastructure.",
    mediaEvidence: ["path/to/tornado1.jpg", "path/to/tornado2.jpg"],
    time: new Date(),
    incidentStatus: "Pending"
  }
];


const createIncident = async (collectionName: string, incidentInfo: Incident): Promise<DocumentReference> => {
  try {
    const result = await addDoc(collection(db, collectionName), {
      ...incidentInfo,
      timestamp: serverTimestamp(), 
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// Query to get all incidents by status
const qStatus = query(collection(db, 'incidents'), where('status', '==', 'occurred'));

const getIncidentsByStatus = async () => {
  try {
    const { docs } = await getDocs(qStatus);
    const result = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Query to get all incidents by userId
const qUser = query(collection(db, 'incidents'), where('userId', '==', 'user-123'));

const getIncidentsByUser = async () => {
  try {
    const { docs } = await getDocs(qUser);
    const result = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Update media evidence for a specific incident
const incidentDocRef = doc(db, 'incidents', 'incident-789');

const updateIncidentMediaEvidence = async () => {
  try {
    const updatedDoc = await updateDoc(incidentDocRef, {
      mediaEvidence: ['path/to/newimage1.jpg', 'path/to/newimage2.jpg']
    });
    return updatedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete a specific incident
const incidentDocRef2 = doc(db, 'incidents', 'incident-790');

const deleteIncident = async () => {
  try {
    const deletedDoc = await deleteDoc(incidentDocRef2);
    return deletedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}




const handleCreateIncident = async () => {
  try {
    await createIncident('incidents', incidents[4]);
    console.log('Incident created successfully');
  } catch (error) {
    console.error('Error creating incident:', error);
  }
};

export { createIncident, handleCreateIncident, getIncidentsByStatus, getIncidentsByUser, updateIncidentMediaEvidence, deleteIncident };