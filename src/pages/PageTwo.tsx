import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
// import './Home.css';
import { NavButtons } from '../components/NavButtons';

const PageTwo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
          <IonTitle>PAGE TWO</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default PageTwo;