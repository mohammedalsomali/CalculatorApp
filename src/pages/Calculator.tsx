import { IonButton, IonButtons, IonContent, IonHeader, IonGrid, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css'


let currentval = ''
let prevval = 0
let operator



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
    console.log(currentval)
    setdisplayvalue(oldArray => [...oldArray, BtnValue]);

  }


  function calculate() {
    let oplist = ['sin(', 'cos(', 'tan(', 'log(', 'ln(', '^', '√']
    

    let calculated 
    let current = parseFloat(currentval)
    console.log(current, prevval)
    if(prevval == 0 || currentval == '' || oplist.includes(operator) == false) return

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
      case '^':
        calculated = current ** 2
        currentval = calculated
        break
      case 'ln':
        calculated = Math.log(current)
        currentval = calculated
        break
      case 'log':
        calculated = Math.log10(current)
        currentval = calculated
        break
      case 'sin(':
        calculated = Math.sin(current)
        currentval = calculated
        break
      case 'cos(':
        calculated = Math.cos(current)
        currentval = calculated
        break
      case 'Tan(':
        calculated = Math.tan(current)
        currentval = calculated
        break
      case '√':
        calculated = current ** (1 / 2)
        currentval = calculated
        break
        
      default:
        return

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
    
    
    console.log(showdiv.style.visibility)
    if( showdiv.style.visibility == 'visible' ){
      showdiv.innerHTML= ''
      showdiv.style.visibility = 'hidden'
      hidediv.style.visibility = 'visible'
      
     

      
      
      return
    }

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
    showdiv.style.visibility = 'visible'
    hidediv.style.visibility = 'hidden'
    

  }



  return (





    <IonContent fullscreen>
      <div className='historylog' > </div>

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
                    <IonButton className='ionbutton' shape='round' size='large' onClick={() => CalcDisplay('8')}> 7 </IonButton>
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
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('sin(')}> Sin </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('cos(')}> Cos </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('Tan(')}> Tan </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('log(')}> log </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => CalcDisplay('3.14')}> π </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('ln(')}> ln </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('^')}> ^ </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='opbutton' shape='round' size='large' onClick={() => operation('√')}> √ </IonButton>
              </IonCol>
            </IonRow>
                    
          </IonGrid>

        </div>
      </div>

     
    </IonContent>


  );
};


export default Calc;