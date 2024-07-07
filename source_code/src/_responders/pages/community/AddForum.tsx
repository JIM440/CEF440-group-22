import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonSpinner,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import BackBtn from '../../../components/HeaderBack';

const AddForum: React.FC = () => {
  const [forumTitle, setForumTitle] = useState<string>('');
  const [forumDescription, setForumDescription] = useState<string>('');

  const handleSubmit = () => {
    console.log('Forum Title:', forumTitle);
    console.log('Forum Description:', forumDescription);
    // Add your form submission logic here
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
          onIonChange={(e) => setForumTitle(e.detail.value!)}
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
          onIonChange={(e) => setForumDescription(e.detail.value!)}
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