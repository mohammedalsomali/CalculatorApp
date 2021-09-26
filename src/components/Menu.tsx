import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonToggle,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonIcon,
  } from "@ionic/react";
import React from "react";
import {moon } from "ionicons/icons"
import './Menu.css'
import jQuery from 'jquery'

  
  export const Menu = () => {

    const toggleDarkModeHandler = () => {
      document.body.classList.toggle("dark");
    };

    return (
      <IonMenu  contentId="main">
        <IonHeader>
          <IonToolbar >
            <IonTitle>FireFly</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false" >
              <IonItem button routerLink={"/home"} routerDirection="none">
                <IonLabel>Calculator</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">

              <IonItem button  routerDirection="none">
              <IonToggle
                slot="start"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
              DarkMode

              </IonItem>
              <IonItem button  routerDirection="none">
              <IonToggle
                slot="start"
                name="DEG"
              />
              DEG

              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };