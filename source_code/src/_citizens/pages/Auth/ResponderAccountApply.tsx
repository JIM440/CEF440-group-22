import React from 'react';
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
  IonItem,
} from '@ionic/react';

const ResponderAccountApplication = () => {
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
        <form>
          {/* Organization Information */}
          <div>
            <h4>Organization Information:</h4>
            <IonInput
              mode="md"
              label="Organization Name"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />
            <IonInput
              mode="md"
              label="Type of Organization (e.g. NGO, government agency)"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />
            <IonInput
              mode="md"
              label="Phone Number"
              type="number"
              labelPlacement="floating"
              fill="outline"
            />
            <IonInput
              mode="md"
              label="Official Email"
              type="email"
              labelPlacement="floating"
              fill="outline"
            />
            
            <IonInput
              mode="md"
              label="Official Website"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />

            <IonInput
              mode="md"
              label="Description of Role During Disaster"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />
            <IonInput
              mode="md"
              label="Geographical Areas of Operation"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />
          </div>
          <hr className='hr-line' />

          {/* Credentials for Access */}
          <div>
            <h4>Credentials for Access:</h4>
            <IonInput
              mode="md"
              label="Username"
              type="text"
              labelPlacement="floating"
              fill="outline"
            />
            <IonInput
              mode="md"
              label="Password"
              type="password"
              labelPlacement="floating"
              fill="outline"
            />
          </div>
          <hr className='hr-line' />

          {/* Verification Documents */}
          <div>
            <h4>Verification Documents:</h4>
            <div>
              <IonLabel>
                Legal Documents (e.g.certificate of
                incorporation):
              </IonLabel>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>

            <div>
              <IonLabel>Authorization to Participate in Disaster</IonLabel>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>
          </div>
          <hr className='hr-line' />

          {/* Consent and Agreement */}
          {/* <div>
            <h4>Consent and Agreement:</h4>
            <div>
              <IonLabel>
                Legal Registration Documents (e.g., certificate of
                incorporation, NGO registration)
              </IonLabel>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>
            <div>
              <IonLabel>Authorization to participate in disaster</IonLabel>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>
          </div> 
          <hr className='line' />*/}

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
