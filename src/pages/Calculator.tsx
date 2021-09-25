import { IonButton,  IonButtons, IonContent, IonHeader, IonGrid, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css'


const Calc: React.FC = () => {
    const [ displayvalue, setdisplayvalue ]= useState([0]); 
    const [ results, setresults] = useState(0)

    function reinitiize(){
      setdisplayvalue([0])
    }

    function CalcDisplay(BtnValue){
      // let temp = 0;
      // if (isNaN(BtnValue) == false){
      //     temp = temp + parseInt(BtnValue)
      // }
      
      
      // if (BtnValue == '')
      
      setdisplayvalue(oldArray => [...oldArray, BtnValue ]);
    }


    return (





        <IonContent fullscreen>

          <div style={{ 'height': '30%', 'justifyContent': 'center', 'alignContent': 'center' }}>
            <div  style={{ 'height': '30%'}}>  </div>
            
            <div style={{ 'height': '30%'}}> {displayvalue} </div>
          </div>
          <IonGrid >
            <IonRow>
              <IonCol>
                <IonButton shape='round' size='large' onClick={reinitiize}> C </IonButton>
              </IonCol>
              <IonCol>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('÷')}> ÷ </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('x')}> x </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(7)}> 7 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(8)}> 8 </IonButton>

              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(9)}> 9 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('-')}> - </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(4)}> 4 </IonButton>
              </IonCol>
              <IonCol>
              <IonButton shape='round' size='large' onClick={() => CalcDisplay(5)}> 5 </IonButton>

              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(6)}> 6 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('+')}> + </IonButton>
              </IonCol>
            </IonRow>
            <IonRow id='secondrow'>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(1)}> 1 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large'onClick={() => CalcDisplay(3)}> 2 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay(3)}> 3 </IonButton>
              </IonCol>
            </IonRow>
            <IonRow >

              <IonCol>
                <IonButton id='zerobtn' shape='round' size='large' onClick={() => CalcDisplay(0)}> 0 </IonButton>
              </IonCol>

              <IonCol>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('.')}> . </IonButton>
              </IonCol>

              <IonCol id='resutlscol'>
                <IonButton id='resultsbtn' shape='round' size='large' > = </IonButton>
              </IonCol>

            </IonRow>
          </IonGrid>
          </IonContent>


    );
  };
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle> Calculator</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>

        

//       </IonContent>
//     </IonPage>
//   );
// };

export default Calc;