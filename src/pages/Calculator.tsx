import { IonButton, IonButtons, IonContent, IonHeader, IonGrid, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css'
import  $  from 'jquery'

let currentval = ''
let prevval = 0
let operator
let algho



const logdata = {}



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
    // console.log(currentval)
    setdisplayvalue(oldArray => [...oldArray, BtnValue]);

  }


  function calculate() {
    
    
    let calculated 
    let current = parseFloat(currentval)
    console.log(current, prevval)
    if(prevval == 0 || currentval == '') return
    console.log(current, prevval)

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
      

    // operator = ''

      
    }


    logdata[calculated] = prevval + ' ' +  operator + ' ' + current + ' ' + '='
    console.log(logdata)
    current = 0
    setresults(currentval)
    prevval = parseFloat(currentval)
    currentval = ''
    setdisplayvalue([])
    
    






  
    


  }


  function trig_log( trig ){
    let current = parseInt(currentval)
    let calculated

    switch (trig) {
      case '^2':
        calculated = current ** 2
        
        

        break
      case 'ln':
        calculated = Math.log(current)
        
        break
      case 'log':
        calculated = Math.log10(current)
        // currentval = calculated
        break
      case 'sin(':
        calculated = Math.sin(current)
        // currentval = calculated
        break
      case 'cos(':
        calculated = Math.cos(current)
        // currentval = calculated
        break
      case 'Tan(':
        calculated = Math.tan(current)
        // currentval = calculated
        break
      case '√':
        calculated = current ** (1 / 2)
        // currentval = calculated
        break

      default:
        return
    }
    
    if(trig == '^2'){
      logdata[calculated] = currentval + ' ' +  trig +  ' ' + '='
    }
    else {
      logdata[calculated] =  trig +  ' ' + currentval + ' ' +  '='

    }
    console.log(logdata)
    currentval = calculated
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


  function showhistory(){
    const showdiv = document.querySelector<HTMLElement>('.historylog')
    const hidediv = document.querySelector<HTMLElement>('.screen')
    
    showdiv.innerHTML = ''
    
    

    for (let [k, v] of Object.entries(logdata)) {
      let logdiv = document.createElement('div')
      let logval = document.createElement('ul')
      let logres = document.createElement('ul')
      logres.innerHTML = k;
      logval.innerHTML = logdata[k];

      logdiv.appendChild(logval)
      logdiv.appendChild(logres)
      showdiv.appendChild(logdiv)
    }
    // showdiv.style.visibility = 'visible'
    // hidediv.style.visibility = 'hidden'
    $( ".historylog" ).first().fadeToggle( "slow", "linear" );
    $( ".screen" ).first().fadeToggle( "slow", "linear" );
    

  }



  return (





    <IonContent fullscreen>
      <div className='historylog' style={{'display': 'none'}}> </div>

      <div className='resultsparentdiv' style={{ 'height': '45%', 'justifyContent': 'center', 'alignContent': 'center' }}>
        <div className='resultsdiv' style={{ 'height': '50%', 'color': 'pink' }}> {results} </div>

        <div className='displaydiv' style={{ 'height': '50%', 'color': 'pink' }}> {displayvalue} </div>

      </div>

      <div className='btndiv'>
            <IonButton id='historybtn' onClick={showhistory}>
              <IonIcon></IonIcon>

            </IonButton>
          </div>
      <div className='screen'>
        <div className='calccontainer' >
          
          <div className="parentdiv">
            <div >
              <IonGrid >
                <IonRow>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={reinitiize}> C </IonButton>
                  </IonCol>
                  <IonCol>
                  </IonCol>
                  <IonCol>
                    <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('÷')} > ÷ </IonButton>
                  </IonCol>

                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('7')}> 7 </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('8')}> 8 </IonButton>

                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('9')}> 9 </IonButton>
                  </IonCol>

                </IonRow>
                <IonRow >
                  <IonCol >
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('4')}> 4 </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('5')}> 5 </IonButton>

                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('6')}> 6 </IonButton>
                  </IonCol>

                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('1')}> 1 </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('2')}> 2 </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('3')}> 3 </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>

            </div>
            <div >
              <IonGrid>
                <IonCol>
                  <IonRow >
                    <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('x')}> x </IonButton>
                  </IonRow>
                  <IonRow>
                    <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('-')}> - </IonButton>
                  </IonRow>
                  <IonRow>
                    <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('+')}> + </IonButton>
                  </IonRow>
                  <IonRow>
                    <IonButton className='opbutton' id='resultsBtn' shape='round' size='large' onClick={calculate}> = </IonButton>
                  </IonRow>
                </IonCol>
              </IonGrid>

            </div>
          </div>
          <div className='zerodiv'>
            <IonGrid>
              <IonRow>
                <IonCol size='5.7'>
                  <IonButton id='zerobtn' shape='round' size='large' onClick={() => CalcDisplay(0)}> 0 </IonButton>
                </IonCol>
                <IonCol size='3'>
                  <IonButton className='ionbutton' id='dotbtn' shape='round' size='large' onClick={() => CalcDisplay('.')}> . </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>

          </div>
        </div>
        <div className='hiddenside'>
        <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('sin(')}> Sin </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('cos(')}> Cos </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('Tan(')}> Tan </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('log(')}> log </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => CalcDisplay('3.14')}> π </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('ln(')}> ln </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('^2')}> ^2 </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => trig_log('√')}> √ </IonButton>
              </IonCol>
            </IonRow>
                    
          </IonGrid>

        </div>
      </div>

     
    </IonContent>


  );
};


export default Calc;