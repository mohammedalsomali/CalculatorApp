import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonRouterLink,
  IonRoute
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import React from 'react';
import { scaleSharp , settingsSharp, calculatorSharp, bookSharp } from 'ionicons/icons';
import './Menu.css';

import Calc from '../pages/Calculator';



const Menu: React.FC = () => {
  const location = useLocation();

  // const [ inside, setinside ] = React.useState("Primary Button")

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>FI</IonListHeader>
          <IonNote> FireFly integratoins</IonNote>
          
          <IonButton color="dark" >


            <IonIcon slot="start" icon={calculatorSharp} />
            Calculator
          </IonButton>
          <IonButton >
            <IonIcon slot="start" icon={scaleSharp} />

             Convertor 
          </IonButton>
          <IonButton>
          <IonIcon slot="start" icon={bookSharp} />

              Log 
          </IonButton>
          <IonButton>
          <IonIcon slot="start" icon={settingsSharp} />

              Settings
          </IonButton>
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
