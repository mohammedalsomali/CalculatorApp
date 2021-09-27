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
import { togle } from "../pages/toggleevent"
var tog = '0'

  export const Menu = () => {

    const toggleDarkModeHandler = () => {
      document.body.classList.toggle("dark");
    };

    const changetrig = () => {
      if(tog == '0'){
        tog = '1'
      }
      else {
        tog = '0'
      }
        togle.changevalue(tog)
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
                onIonChange={changetrig}
              />
              DEG

              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };