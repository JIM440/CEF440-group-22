import React, {useState} from "react";
import { Geolocation } from '@capacitor/geolocation';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonInput,
  IonProgressBar,
  IonLabel,
  IonIcon, useIonRouter
} from '@ionic/react';
import './RegistrationForm.css';
import { chevronBack, chevronForward } from "ionicons/icons";

const RegistrationForm: React.FC = () => {
  const router = useIonRouter()
  const [step, setStep] = useState(1);

  const getLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setLocation(position.coords);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };


const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const [fullNameValid, setFullNameValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Location' },
    { number: 4, title: 'Confirmation' },
  ];

  const handleNextStep = () => {
    console.log('clicked')
    switch (step) {
      case 1:
        if (validateStep1()) {
          setStep(2);
        }
        break;
      case 2:
        if (validateStep2()) {
          setStep(3);
        }
        break;
      case 3:
        if (validateStep3()) {
          setStep(4);
        }
        break;
      default:
        break;
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateStep1 = () => {
    const fullNameValid = fullName.trim() !== '';
    const usernameValid = username.trim() !== '';
    const passwordValid = password.trim() !== '';
    setFullNameValid(fullNameValid);
    setUsernameValid(usernameValid);
    setPasswordValid(passwordValid);
    return fullNameValid && usernameValid && passwordValid;
  };

  const validateStep2 = () => {
    const emailValid = email.trim() !== '';
    const phoneValid = phone.trim() !== '';
    setEmailValid(emailValid);
    setPhoneValid(phoneValid);
    return emailValid && phoneValid;
  };

  const validateStep3 = () => {
    return 'hi';
  };

  const submitForm = () => {
    // Handle form submission logic
    console.log('Form submitted');
    router.push('/tabs/home')
    // Optionally, reset state or navigate to success page
  };

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>      </IonHeader>
      <IonContent className="ion-padding">
        <div className="progress-bar-container">
          {steps.map((s) => (
            <div key={s.number} className={`progress-step ${s.number === step || s.number < step ? 'active' : ''}`}>
              <div className='step-number'><p>{s.number}</p></div>
              <div className="step-title">{s.title}</div>
            </div>
          ))}
          <IonProgressBar value={(step - 1) / 3} className="progress-bar"></IonProgressBar>
        </div>
        {step === 1 && (
          <form>
            <IonInput
              mode="md"
              label='Full Name'
              type="text"
              value={fullName}
              placeholder="Full Name"
              onIonInput={(e: any) => setFullName(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            <IonInput
              mode="md"
              label='UserName'
              type="text"
              value={username}
              placeholder="Username"
              onIonInput={(e: any) => setUsername(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            <IonInput
              mode="md"
              label='Password'
              type="password"
              value={password}
              placeholder="Password"
              onIonInput={(e: any) => setPassword(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            <div className="ion-text-center ion-margin-top">
              <IonButton className='btn' mode='ios' onClick={handleNextStep} disabled={!(fullName !== '') || !(username !== '') || !(password !== '')}>
                Next <IonIcon icon={chevronForward} slot='end' />
              </IonButton>
            </div>
          </form>
        )}
        {step === 2 && (
          <form>
            <IonInput
              mode="md"
              label='Email'
              type="email"
              value={email}
              placeholder="Email Address"
              onIonInput={(e: any) => setEmail(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            <IonInput
              mode="md"
              label='Phone Number'
              type="number"
              value={phone}
              placeholder="Phone Number"
              onIonInput={(e: any) => setPhone(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            <div className="btn-container ion-text-center ion-margin-top">
              <button onClick={handlePrevStep} className="btn-outlined ion-margin-end">
                <IonIcon slot='start' icon={chevronBack} /><IonLabel>Previous</IonLabel>
              </button>

              <IonButton mode='ios' onClick={handleNextStep} disabled={!(email !== '') || !(phone !== '')} className='btn'>
                Next <IonIcon icon={chevronForward} slot='end' size='small' />
              </IonButton>
            </div>
          </form>
        )}
        {step === 3 && (
          <form>
            <IonInput
              mode="md"
              label='Location'
              type="text"
              value={location.latitude}
              placeholder="Location"
              onIonInput={(e: any) => setLocation(e.target.value)}
              required
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-top"
            />
            {console.log(location)}
            <IonButton onClick={getLocation} fill='clear'>Get My Current Location</IonButton>
  {location && (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  )}

            <div className="btn-container ion-text-center ion-margin-top">
              <button onClick={handlePrevStep} className="btn-outlined ion-margin-end">
                <IonIcon slot='start' icon={chevronBack} /><IonLabel>Previous</IonLabel>
              </button>

              <IonButton mode='ios' onClick={handleNextStep} className='btn'>
                Next <IonIcon icon={chevronForward} slot='end' size='small' />
              </IonButton>
            </div>
          </form>
        )}
        {step === 4 && (
          <div>
            <p className="ion-text-center">Please review your information:</p>
            <IonInput mode="md"
            label='Full Name:' value={fullName} disabled className="ion-margin-top" />
            <IonInput mode="md"
            label='Email:' value={email} disabled className="ion-margin-top" />
            <IonInput mode="md"
            label='Phone Number:' value={phone} disabled className="ion-margin-top" />
            <IonInput mode="md"
            label='Location:' value={location} disabled className="ion-margin-top" />
            <div className="btn-container ion-text-center ion-margin-top">
              <button onClick={handlePrevStep} className="btn-outlined ion-margin-end">
                <IonIcon slot='start' icon={chevronBack} /><IonLabel>Previous</IonLabel>
              </button>

              <IonButton mode='ios' onClick={submitForm} className='btn'>
                Submit <IonIcon icon={chevronForward} slot='end' size='small' />
              </IonButton>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default RegistrationForm;
