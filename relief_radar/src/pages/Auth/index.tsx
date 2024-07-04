import React from "react";
import { IonNav, IonPage } from "@ionic/react";

import LanguagePage from "./Language";

import "./Auth.css";

interface ContainerProps {
  setLocale: Function;
  locale: string;
}

const AuthenticationPage: React.FC<ContainerProps> = ({
  locale,
  setLocale,
}) => {
  return (
    <IonPage className="main-authen-body">
      <LanguagePage setLocale={setLocale} locale={locale} />
    </IonPage>
  );
};
export default AuthenticationPage;
