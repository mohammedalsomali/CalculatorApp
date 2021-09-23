import { IonButton, IonButtons, IonContent, IonHeader, IonGrid, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css'


const Calc: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <div style={{ 'height': '50%' }}>

        </div>
        <IonGrid >
          <IonRow>
            <IonCol>
              <IonButton shape='round' size='large' > C </IonButton>
            </IonCol>
            <IonCol>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> + </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> x </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape='round' size='large' > 7 </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> 8 </IonButton>

            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> 9 </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> - </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape='round' size='large' > 4 </IonButton>
            </IonCol>
            <IonCol>
            <IonButton shape='round' size='large'> 5 </IonButton>

            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> 6 </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> + </IonButton>
            </IonCol>
          </IonRow>
          <IonRow id='secondrow'>
            <IonCol>
              <IonButton shape='round' size='large' > 1 </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> 2 </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape='round' size='large'> 3 </IonButton>
            </IonCol>
          </IonRow>
          <IonRow >

            <IonCol>
              <IonButton id='zerobtn' shape='round' size='large' > 0 </IonButton>
            </IonCol>

            <IonCol>
              <IonButton shape='round' size='large'> . </IonButton>
            </IonCol>

            <IonCol id='resutlscol'>
              <IonButton id='resultsbtn' shape='round' size='large'> = </IonButton>
            </IonCol>
            
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calc;