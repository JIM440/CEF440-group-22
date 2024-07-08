import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../../../config/firebase';
interface DisasterContextProps {
  reportedDisasters: DocumentData[];
}

const DisasterContext = createContext<DisasterContextProps | undefined>(undefined);

export const useDisasterContext = () => {
  const context = useContext(DisasterContext);
  if (!context) {
    throw new Error('useDisasterContext must be used within a DisasterProvider');
  }
  return context;
};

export const DisasterProvider: React.FC = ({ children }) => {
  const [reportedDisasters, setReportedDisasters] = useState<DocumentData[]>([]);

  useEffect(() => {
    const disastersCollectionRef = collection(db, 'reported-disasters');
    const unsubscribe = onSnapshot(disastersCollectionRef, (snapshot) => {
      const disasters = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReportedDisasters(disasters);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DisasterContext.Provider value={{ reportedDisasters }}>
      {children}
    </DisasterContext.Provider>
  );
};

const DisplayReportedDisasters: React.FC = () => {
  const { reportedDisasters } = useDisasterContext();

  return (
    <div>
      <h1>Reported Disasters</h1>
      <ul>
        {reportedDisasters.map(disaster => (
          <li key={disaster.id}>
            <strong>Type:</strong> {disaster.disasterType}<br />
            <strong>Description:</strong> {disaster.description}<br />
            <strong>Location:</strong> {disaster.location}<br />
            <strong>Image:</strong> {disaster.image && <img src={disaster.image} alt="Disaster evidence" />}<br />
            <strong>Reported by:</strong> {disaster.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayReportedDisasters;
