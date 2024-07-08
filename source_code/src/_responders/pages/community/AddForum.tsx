import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import BackBtn from '../../../components/HeaderBack';
import { db } from '../../../config/firebase';
import { addDoc, collection, serverTimestamp, DocumentReference } from 'firebase/firestore';

interface ForumInfo {
  name: string;
  description: string;
  author: string;
  members: { id: string; membername: string; role: boolean }[];
  messages: { id: string; content: string; timestamp: Date; author: string; repliedto: string }[];
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

const AddForum: React.FC = () => {
  const [forumTitle, setForumTitle] = useState<string>('');
  const [forumDescription, setForumDescription] = useState<string>('');
  const author = "Anonymous"; 

  const handleSubmit = async () => {
    const forumInfo: ForumInfo = {
      name: forumTitle,
      description: forumDescription,
      author,
      members: [],
      messages: [],
    };

    try {
      const result = await createForum('forums', forumInfo);
      console.log('Forum created with ID:', result.id);
      setForumTitle('');
      setForumDescription('');
    } catch (error) {
      console.error('Error creating forum:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <BackBtn title="Create Forum" />
      </IonHeader>
      <IonContent className="ion-padding create-forum-container">
        <p style={{ color: 'var(--ion-color-muted)' }}>
          Enter Forum Details:
        </p>
        <IonInput
          mode="md"
          className="ion-margin-top"
          fill="outline"
          labelPlacement="floating"
          label="Forum Name"
          value={forumTitle}
          placeholder="Enter forum name"
          onIonInput={(e: any) => setForumTitle(e.target.value)}
        />
        <IonTextarea
          mode="md"
          className="ion-margin-top text-area-input"
          fill="outline"
          labelPlacement="floating"
          label="Forum Description"
          value={forumDescription}
          autoGrow={true}
          counter={true}
          maxlength={200}
          placeholder="Enter forum description"
          onIonInput={(e: any) => setForumDescription(e.target.value)}
        />
        <IonButton
          className="primary-button ion-margin-top"
          mode="ios"
          expand="block"
          disabled={forumTitle === '' || forumDescription === ''}
          onClick={handleSubmit}
        >
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddForum;
