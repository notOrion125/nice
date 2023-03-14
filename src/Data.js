import './components/Head.css'
import Expenses from './Expenses';
import Activity from './components/Activity';
import Progress from './components/Progress';
import './components/Board.css'
import { useState } from 'react';


import Information from './components/Information.json'


const Data = (props) => {
  // const ExpensesKPI = Information.Information


  const [NewOneKPI, setNewOneKPI] = useState(props.Info[props.NewInputLogin].FirstExpensesKPI)
  const [NewTwoKPI, setNewTwoKPI] = useState(props.Info[props.NewInputLogin].SecondExpensesKPI)
  const [NewLenght, setNewLenght] = useState()
  const [NewSpisok, setNewSpisok] = useState()


  const saveNewLenght = (childLenhgt) => {
    setNewLenght(childLenhgt)
    console.log(NewLenght)
  };
  const saveNewSpisok = (childSpisok) => {
    setNewSpisok(childSpisok)
    console.log(NewSpisok)
  };
  const SaveNewOneKPI = () => {
    setNewOneKPI(document.getElementById('OneKPI').value)
    console.log(NewOneKPI)
  };
  const saveNewTwoKPI = () => {
    setNewTwoKPI(document.getElementById('TwoKPI').value)
    console.log(NewTwoKPI)
  };
  // console.log("Vor", props.Info)

  const KPIS = [
    { NewOneKPI, NewTwoKPI }]

  return (
    <div>
      <div className='Basic' >
        <Expenses KPIS={KPIS} Info={props.Info} SetNewOneKPI={SaveNewOneKPI} saveNewLenght={saveNewLenght} saveNewSpisok={saveNewSpisok} SetNewTwoKPI={saveNewTwoKPI} NewInputLogin={props.NewInputLogin} />
        <div className='two'>
          <div className='third'>
            <Activity NewInputLogin={props.NewInputLogin} CountOpen={props.newCountOpen} CountOverdue={props.newCountOverdue}/>
          </div >
          <div className='fourth'>
            <Progress KPIS={KPIS} />
          </div>
        </div>
      </div>
      <div className='Table'>
      </div>
    </div>

  );

}

export default Data

