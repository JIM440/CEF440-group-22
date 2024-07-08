import React, { useState, useContext } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonToast,
} from '@ionic/react';
import { checkmarkCircle, closeCircle, logInOutline } from 'ionicons/icons';
import { storage, auth } from '../../../config/firebase';
import { userContext } from '../../../context/UserContext';
import {
  addDoc,
  collection,
  setDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../../components/Loader';

const ResponderAccountApplication = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState('primary');
  const [toastIcon, setToastIcon] = useState(checkmarkCircle);

  const showToast = (message, color, icon) => {
    setToastMessage(message);
    setToastColor(color);
    setToastIcon(icon);
    setIsOpen(true);
  };

  const hideToast = () => {
    setIsOpen(false);
  };

  const [displayLoader, setDisplayLoader] = useState('none');

  // State variables for form inputs
  const [organizationName, setOrganizationName] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [officialWebsite, setOfficialWebsite] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [operationAreas, setOperationAreas] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [legalDocuments, setLegalDocuments] = useState<File | null>(null);
  const [authorizationDocument, setAuthorizationDocument] =
    useState<File | null>(null);
  const [legalDocumentsURL, setLegalDocumentsURL] = useState('');
  const [authorizationDocumentURL, setAuthorizationDocumentURL] = useState('');

  // Handlers for file inputs
  const handleLegalDocumentsChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    setLegalDocuments(file);
    if (file) {
      const fileRef = ref(
        storage,
        `reports-images/${new Date().toISOString()}`
      );
      const data = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(data.ref);
      console.log(downloadUrl);
      setLegalDocumentsURL(downloadUrl);
    } else {
      setLegalDocumentsURL('');
    }
  };

  const handleAuthorizationDocumentChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    setAuthorizationDocument(file);
    if (file) {
      const fileRef = ref(
        storage,
        `reports-images/${new Date().toISOString()}`
      );
      const data = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(data.ref);
      console.log(downloadUrl);
      setAuthorizationDocumentURL(downloadUrl);
    } else {
      setAuthorizationDocumentURL('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setDisplayLoader('flex');
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        officialEmail,
        password
      );
      const user = userCredential.user;

      const userDoc = {
        id: user.uid,
        email: user.email,
        username,
        organizationName,
        organizationType,
        phoneNumber,
        officialWebsite,
        roleDescription,
        operationAreas,
        legalDocumentsURL,
        authorizationDocumentURL,
        timestamp: serverTimestamp(),
      };

      // Store the document in Firestore with the same UID as the authenticated user
      await setDoc(doc(db, 'responders', user.uid), userDoc);
      console.log('User and document created successfully.');

      setOrganizationName('');
      setOrganizationType('');
      setPhoneNumber('');
      setOfficialEmail('');
      setOfficialWebsite('');
      setRoleDescription('');
      setOperationAreas('');
      setUsername('');
      setPassword('');
      setLegalDocuments(null);
      setAuthorizationDocument(null);
      setLegalDocumentsURL('');
      setAuthorizationDocumentURL('');

      setDisplayLoader('none');
      showToast('Account Application successful.', 'primary', checkmarkCircle);
    } catch (error) {
      showToast(
        'Error during account application. Please try again.',
        'danger',
        closeCircle
      );
      setDisplayLoader('none');

      console.error('Error creating user: ', error);
      throw error;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Responder Application</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding responder-account-application">
        <IonToast
          icon={toastIcon}
          isOpen={isOpen}
          message={toastMessage}
          color={toastColor}
          duration={4000}
          buttons={[
            {
              text: 'Close',
              role: 'cancel',
              handler: hideToast,
            },
          ]}
          onDidDismiss={hideToast}
        />

        <Loader display={displayLoader} />

        <form onSubmit={handleSubmit}>
          {/* Organization Information */}
          <div>
            <h4>Organization Information:</h4>
            <IonInput
              mode="md"
              label="Organization Name"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={organizationName}
              onIonInput={(e) => setOrganizationName(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Type of Organization (e.g. NGO, government agency)"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={organizationType}
              onIonInput={(e) => setOrganizationType(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Phone Number"
              type="number"
              labelPlacement="floating"
              fill="outline"
              value={phoneNumber}
              onIonInput={(e) => setPhoneNumber(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Official Email"
              type="email"
              labelPlacement="floating"
              fill="outline"
              value={officialEmail}
              onIonInput={(e) => setOfficialEmail(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Official Website"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={officialWebsite}
              onIonInput={(e) => setOfficialWebsite(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Description of Role During Disaster"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={roleDescription}
              onIonInput={(e) => setRoleDescription(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Geographical Areas of Operation"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={operationAreas}
              onIonInput={(e) => setOperationAreas(e.detail.value as string)}
            />
          </div>
          <hr className="hr-line" />

          {/* Credentials for Access */}
          <div>
            <h4>Credentials for Access:</h4>
            <IonInput
              mode="md"
              label="Username"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={username}
              onIonInput={(e) => setUsername(e.detail.value as string)}
            />
            <IonInput
              mode="md"
              label="Password"
              type="password"
              labelPlacement="floating"
              fill="outline"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value as string)}
            />
          </div>
          <hr className="hr-line" />

          {/* Verification Documents */}
          <div>
            <h4>Verification Documents:</h4>
            <div>
              <IonLabel>
                Legal Documents (e.g., certificate of incorporation):
              </IonLabel>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleLegalDocumentsChange}
              />
            </div>

            <div>
              <IonLabel>Authorization to Participate in Disaster</IonLabel>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleAuthorizationDocumentChange}
              />
            </div>
          </div>
          <hr className="hr-line" />

          {/* Submit Button */}
          <IonButton
            mode="ios"
            expand="block"
            type="submit"
            className="ion-margin-top primary-button"
          >
            Submit Application
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default ResponderAccountApplication;
