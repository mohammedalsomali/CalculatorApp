import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
// import './Home.css';
import { NavButtons } from '../components/NavButtons';
import Calc from './Calculator';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
          <IonTitle>HOME</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <Calc/>
      </IonContent>
    </IonPage>
  );
};

export default Home;