import { db } from "../../config/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  DocumentData,
  DocumentReference,
  serverTimestamp,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { DisasterGuides } from "../../_citizens/pages/Guides/GuideContent";

interface DisasterContentSection {
  image: string;
  intro: string;
  content: string;
}

interface DisasterGuide {
  name: string;
  id: number;
  before: DisasterContentSection;
  during: DisasterContentSection;
  after: DisasterContentSection;
  timestamp?: any;
}

const createGuide = async (collectionName: string, GuideInfo: DisasterGuide): Promise<DocumentReference> => {
  try {
    const result = await addDoc(collection(db, collectionName), {
      ...GuideInfo,
      timestamp: serverTimestamp(),
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch all guides from the database
const getAllGuides = async () => {
  try {
    const guidesCollection = collection(db, "guides");
    const guideSnapshot = await getDocs(guidesCollection);
    const guideList = guideSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('list',guideList)
    return guideList;
  } catch (error) {
    console.error("Error fetching guides: ", error);
    throw error;
  }
};

// Query to get all guides by disaster type
const qDisaster = query(
  collection(db, "guides"),
  where("disaster", "==", "earthquake")
);

const getGuidesByDisaster = async () => {
  try {
    const { docs } = await getDocs(qDisaster);
    const result = docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Update the images during a specific disaster guide
const guideDocRef = doc(db, "guides", "guide-001");

const updateGuideImages = async () => {
  try {
    const updatedDoc = await updateDoc(guideDocRef, {
      "content.during.image": [
        "path/to/newimage1.jpg",
        "path/to/newimage2.jpg",
      ],
    });
    return updatedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a specific disaster guide
const guideDocRef2 = doc(db, "guides", "guide-002");

const deleteGuide = async () => {
  try {
    const deletedDoc = await deleteDoc(guideDocRef2);
    return deletedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const handleCreateGuide = async () => {
  try {
    await createGuide("guides", DisasterGuides[5]);
    console.log("Guide created successfully");
  } catch (error) {
    console.error("Error creating Guide:", error);
  }
};

export { handleCreateGuide, createGuide, getAllGuides, getGuidesByDisaster, updateGuideImages, deleteGuide };
