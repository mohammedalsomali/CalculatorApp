import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import Calc from './Calculator'
import Convert from './Converter';
import { type } from 'os';
const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  // console.log(name,typeof {name} )
  
  // const getcontent = () => {
  //   console.log(name)
  //   if ( typeof {name}  == 'Calculator object'){
  //     return <Calc/>
  //   }
  //   else if (name == 'Log'){
      
  //   }
  //   else if (name == 'Unit Convertor'){
  //      <Convert/>
  //   }

  // }
   
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        
        <Calc/>

      </IonContent>
    </IonPage>
  );
};

export default Page;
