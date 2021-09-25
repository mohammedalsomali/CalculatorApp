import { IonButton, IonButtons, IonContent, IonHeader, IonGrid, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css'

let currentval = ''
let prevval = 0
let operator

const Calc: React.FC = () => {
  
  const [displayvalue, setdisplayvalue] = useState([]);
  const [results, setresults] = useState('')

  function reinitiize() {
    setdisplayvalue([])
    setresults('')
    currentval = ''
    prevval = 0

  }

  function CalcDisplay(BtnValue) {
    if(BtnValue == '.' && displayvalue.includes('.')){
      return
    }
    currentval = currentval + BtnValue
    console.log(currentval)
    setdisplayvalue(oldArray => [...oldArray, BtnValue]);

  }


  function calculate() {
    console.log(operator)

    let calculated 
    let current = parseFloat(currentval)
    console.log(current, prevval)
    if(prevval == 0 || currentval == '') return

    switch (operator) {
      case '+':
        calculated = prevval + current
        currentval = calculated
        break
      case '-':
        calculated = prevval - current
        currentval = calculated
        break
      case 'x':
        calculated = prevval * current
        currentval = calculated
        break
      case '÷':
        calculated = prevval / current
        currentval = calculated
        break
        
      default:
        return

    // operator = ''

      
    }

    // setresults(calculated)
    // setdisplayvalue([])
    
    // prevval = calculated
    current = 0
    setresults(currentval)
    prevval = parseFloat(currentval)
    currentval = ''
    setdisplayvalue([])
    






  
    


  }


  function operation(operation){
    operator = operation
    if(displayvalue.toString() == '') return
    if(prevval !== 0){
       calculate()
       return
    }
    
    setresults(currentval)
    prevval = parseFloat(currentval)
    currentval = ''
    setdisplayvalue([])

  }



  return (





    <IonContent fullscreen>

      <div className='resultsdiv' style={{ 'height': '32%', 'justifyContent': 'center', 'alignContent': 'center' }}>
        <div style={{ 'height': '30%', 'color': 'pink' }}> {results} </div>

        <div className='diaplaydiv' style={{ 'height': '30%', 'color': 'pink' }}> {displayvalue} </div>

      </div>



      <div>
        <div className="parentdiv">
          <div >
            <IonGrid >
              <IonRow>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={reinitiize}> C </IonButton>
                </IonCol>
                <IonCol>
                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => operation('÷')}> ÷ </IonButton>
                </IonCol>

              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('7')}> 7 </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('8')}> 8 </IonButton>

                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('9')}> 9 </IonButton>
                </IonCol>

              </IonRow>
              <IonRow >
                <IonCol >
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('4')}> 4 </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('5')}> 5 </IonButton>

                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('6')}> 6 </IonButton>
                </IonCol>

              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('1')}> 1 </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('2')}> 2 </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton shape='round' size='large' onClick={() => CalcDisplay('3')}> 3 </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>

          </div>
          <div >
            <IonGrid>
              <IonCol>
                <IonRow >
                  <IonButton shape='round' size='large' onClick={() => operation('x')}> x </IonButton>
                </IonRow>
                <IonRow>
                  <IonButton shape='round' size='large' onClick={() => operation('-')}> - </IonButton>
                </IonRow>
                <IonRow>
                  <IonButton shape='round' size='large' onClick={() => operation('+')}> + </IonButton>
                </IonRow>
                <IonRow>
                  <IonButton id='resultsBtn' shape='round' size='large' onClick={calculate}> = </IonButton>
                </IonRow>
              </IonCol>
            </IonGrid>

          </div>
        </div>
        <div>
          <IonGrid>
            <IonRow>
              <IonCol size='5.7'>
                <IonButton id='zerobtn' shape='round' size='large' onClick={() => CalcDisplay(0)}> 0 </IonButton>
              </IonCol>
              <IonCol size='3'>
                <IonButton shape='round' size='large' onClick={() => CalcDisplay('.')}> . </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

        </div>
      </div>

     
    </IonContent>


  );
};


export default Calc;