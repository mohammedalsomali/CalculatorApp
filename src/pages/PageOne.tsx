import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
// import './Home.css';
import { NavButtons } from '../components/NavButtons';
import Convert from './Log';

const PageOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
          <IonTitle>PAGE ONE</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <Convert/>
      </IonContent>
    </IonPage>
  );
};

export default PageOne;