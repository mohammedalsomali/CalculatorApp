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
  IonButton
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, heartOutline, heartSharp, mailOutline, paperPlaneOutline, scaleSharp , settingsSharp, calculatorSharp, bookSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

// const appPages: AppPage[] = [
//   {
//     title: 'Calculator',
//     url: './page/calculator',
//     iosIcon: mailOutline,
//     mdIcon: calculatorSharp
//   },
//   {
//     title: 'Unit Convertor',
//     url: './pages/Convertor',
//     iosIcon: paperPlaneOutline,
//     mdIcon: scaleSharp
//   },
//   {
//     title: 'Log',
//     url: './page/Log',
//     iosIcon: heartOutline,
//     mdIcon: bookSharp
//   },
//   {
//     title: 'Settings',
//     url: './page/Settings',
//     iosIcon: archiveOutline,
//     mdIcon: settingsSharp,
    
//   }
  
// ];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>FI</IonListHeader>
          <IonNote> FireFly integratoins</IonNote>
          {/* {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url}  lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })} */}
          <IonButton>
              <IonIcon slot="start" icon={calculatorSharp} />
              Calculator
          </IonButton>
          <IonButton>
            <IonIcon slot="start" icon={scaleSharp} />

             Unit Convertor 
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
