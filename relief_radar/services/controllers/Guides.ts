import { db } from "../../config/firebase";
import { addDoc, collection, getDocs, deleteDoc, updateDoc ,DocumentData, DocumentReference, serverTimestamp, doc, query, where} from "firebase/firestore";


interface DisasterContentSection {
  image: string[];
  introductory_text: string;
  content: string;
}

interface DisasterGuide {
  id: string;
  disaster: string;
  content: {
    before: DisasterContentSection;
    during: DisasterContentSection;
    after: DisasterContentSection;
  };
}

const disasterGuides: DisasterGuide[] = [
  {
    id: "guide-001",
    disaster: "earthquake",
    content: {
      before: {
        image: ["path/to/earthquake_before1.jpg", "path/to/earthquake_before2.jpg"],
        introductory_text: "Prepare an emergency kit and secure heavy furniture.",
        content: "Ensure you have a supply of food, water, and medical supplies. Secure bookshelves and other heavy furniture to walls. Know the safe spots in each room, like under sturdy furniture."
      },
      during: {
        image: ["path/to/earthquake_during1.jpg", "path/to/earthquake_during2.jpg"],
        introductory_text: "Drop, Cover, and Hold On.",
        content: "During an earthquake, drop to your hands and knees, cover your head and neck with your arms and take shelter under a sturdy table or against an interior wall. Hold on until the shaking stops."
      },
      after: {
        image: ["path/to/earthquake_after1.jpg", "path/to/earthquake_after2.jpg"],
        introductory_text: "Check for injuries and damages.",
        content: "After the shaking stops, check yourself and others for injuries. Check your home for damages and evacuate if the building is unsafe. Listen to the radio for emergency information and instructions."
      }
    }
  },
  {
    id: "guide-002",
    disaster: "flood",
    content: {
      before: {
        image: ["path/to/flood_before1.jpg", "path/to/flood_before2.jpg"],
        introductory_text: "Know your flood risk and prepare accordingly.",
        content: "Move valuable items to higher ground. Create a family emergency plan. Know your community's evacuation routes and have an emergency kit ready."
      },
      during: {
        image: ["path/to/flood_during1.jpg", "path/to/flood_during2.jpg"],
        introductory_text: "Move to higher ground immediately.",
        content: "If a flood is likely in your area, move immediately to higher ground. Do not wait for instructions to move. Avoid walking or driving through flood waters."
      },
      after: {
        image: ["path/to/flood_after1.jpg", "path/to/flood_after2.jpg"],
        introductory_text: "Return home only when authorities say it is safe.",
        content: "Avoid floodwaters as they may be contaminated. Listen to authorities for information and instructions. Clean and disinfect everything that got wet."
      }
    }
  },
  {
    id: "guide-003",
    disaster: "hurricane",
    content: {
      before: {
        image: ["path/to/hurricane_before1.jpg", "path/to/hurricane_before2.jpg"],
        introductory_text: "Prepare your home and gather supplies.",
        content: "Secure loose outdoor items, cover windows with storm shutters or plywood, and gather supplies like food, water, and medications. Know your evacuation routes and have a plan in place."
      },
      during: {
        image: ["path/to/hurricane_during1.jpg", "path/to/hurricane_during2.jpg"],
        introductory_text: "Stay indoors and away from windows.",
        content: "During the hurricane, stay indoors and away from windows. Seek shelter in a small, windowless room on the lowest level of your home. Listen to the radio or TV for updates."
      },
      after: {
        image: ["path/to/hurricane_after1.jpg", "path/to/hurricane_after2.jpg"],
        introductory_text: "Be cautious of hazards.",
        content: "After the hurricane passes, be cautious of fallen power lines, debris, and flooding. Avoid driving unless necessary. Listen to authorities for updates and instructions."
      }
    }
  },
  {
    id: "guide-004",
    disaster: "wildfire",
    content: {
      before: {
        image: ["path/to/wildfire_before1.jpg", "path/to/wildfire_before2.jpg"],
        introductory_text: "Create a defensible space around your home.",
        content: "Clear flammable vegetation and debris from around your home. Use fire-resistant materials for roofing and siding. Have an emergency plan and kit ready."
      },
      during: {
        image: ["path/to/wildfire_during1.jpg", "path/to/wildfire_during2.jpg"],
        introductory_text: "Evacuate immediately if told to do so.",
        content: "If authorities order an evacuation, do so immediately. Wear protective clothing and avoid breathing in smoke. Follow your evacuation plan and route."
      },
      after: {
        image: ["path/to/wildfire_after1.jpg", "path/to/wildfire_after2.jpg"],
        introductory_text: "Return home only when authorities say it is safe.",
        content: "After the wildfire, check your home for hot spots and embers. Use caution when cleaning up debris. Listen to authorities for updates and instructions."
      }
    }
  },
  {
    id: "guide-005",
    disaster: "tornado",
    content: {
      before: {
        image: ["path/to/tornado_before1.jpg", "path/to/tornado_before2.jpg"],
        introductory_text: "Identify a safe shelter in your home.",
        content: "Find an interior room on the lowest floor with no windows. Prepare an emergency kit and know your community's tornado warning system."
      },
      during: {
        image: ["path/to/tornado_during1.jpg", "path/to/tornado_during2.jpg"],
        introductory_text: "Take shelter immediately.",
        content: "During a tornado, take shelter in your identified safe place. Protect your head and neck with your arms and cover yourself with a blanket or mattress."
      },
      after: {
        image: ["path/to/tornado_after1.jpg", "path/to/tornado_after2.jpg"],
        introductory_text: "Stay tuned to local news for updates.",
        content: "After the tornado passes, be cautious of debris and downed power lines. Check for injuries and damage, and listen to local news for updates and instructions."
      }
    }
  }
];
const createGuide = async (collectionName: string, GuideInfo: DisasterGuide): Promise<DocumentReference>  => {
    try {
      const result = await addDoc(collection(db, collectionName), {
        ...GuideInfo,
        timestamp: serverTimestamp()
      })
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}


// Query to get all guides by disaster type
const qDisaster = query(collection(db, 'guides'), where('disaster', '==', 'earthquake'));

const getGuidesByDisaster = async () => {
  try {
    const { docs } = await getDocs(qDisaster);
    const result = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Update the images during a specific disaster guide
const guideDocRef = doc(db, 'guides', 'guide-001');

const updateGuideImages = async () => {
  try {
    const updatedDoc = await updateDoc(guideDocRef, {
      'content.during.image': ['path/to/newimage1.jpg', 'path/to/newimage2.jpg']
    });
    return updatedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete a specific disaster guide
const guideDocRef2 = doc(db, 'guides', 'guide-002');

const deleteGuide = async () => {
  try {
    const deletedDoc = await deleteDoc(guideDocRef2);
    return deletedDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


 const handleCreateGuide = async () => {
    try {
      await createGuide('guides',disasterGuides[4] );
      console.log('Guide created successfully');
    } catch (error) {
      console.error('Error creating Guide:', error);
    }
  };


export { createGuide, handleCreateGuide, getGuidesByDisaster, updateGuideImages, deleteGuide };