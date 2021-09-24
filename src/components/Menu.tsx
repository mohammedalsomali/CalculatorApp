import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonIcon,
  } from "@ionic/react";
  import React from "react";
  
  export const Menu = () => {
    return (
      <IonMenu  contentId="main" >
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>FireFly</IonTitle>
            <IonCheckbox slot="end" color="primary" />
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
              <IonItem button routerLink={"/page-1"} routerDirection="none">
                <IonLabel>Log</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/page-2"} routerDirection="none">
                <IonLabel>Page Two</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };