import Data from "./Data";
import Protect from "./components/Protect";
import React, { useState } from 'react';
import './components/system.css'
import Registration from "./components/Registration";
import Chart from "./components/Chart";
import Exit from "./components/Exit";
import NewTable from "./components/Table/App"
import Information from './components/Information.json'
const System = () => {



  const [newCountOpen, setnewCountOpen] = useState('')
  const [newCountOverdue, setnewCountOverdue] = useState('')
  const [NewInputLogin, setNewInputLogin] = useState('')
  const [NewInputNick, setNewInputNick] = useState('')
  const [Info, setInfo] = useState(Information.Information)
  const [Protection, setProtection] = useState(true)
  const SaveInfo = (ququ) => {
    setInfo(ququ)
  };
  const SavesetnewCountOpen = (ruru) => {
    setnewCountOpen(ruru)
  };
  const SavesetnewCountOverdue = (tutu) => {
    setnewCountOverdue(tutu)
  };
  const SaveProtection = () => {
    setProtection(false)
  };
  const notSaveProtection = () => {
    setProtection(true)
  };
  const SavesetNewInputLogin = (event) => {
    setNewInputLogin(event.target.value)
  };
  const SavesetNewInputNick = (event) => {
    setNewInputNick(event.target.value)
    console.log(NewInputNick)
  };



  return (

    <div>
      {Protection && (
        <div>
          <Registration notSaveProtection={notSaveProtection} SaveProtection={SaveProtection} Information={Info} SaveInfo={SaveInfo}/>
        <div className="protect">

          <Protect SavePass={SaveProtection} password={Info}  NewInputLogin={NewInputLogin} SavesetNewInputNick={SavesetNewInputNick} SavesetNewInputLogin={SavesetNewInputLogin} />
        </div>
        </div>
      )}

    
      {!Protection && (
        <div>
      <Exit notSaveProtection={notSaveProtection}/>
      <Data NewInputLogin={NewInputLogin} newCountOpen={newCountOpen} newCountOverdue={newCountOverdue} Info={Info}/>
      <h1>  Таблица</h1>
      <hr></hr>
      <NewTable SavesetnewCountOpen={SavesetnewCountOpen} SavesetnewCountOverdue={SavesetnewCountOverdue}/>
      <h1>Диаграмма</h1>
      <hr></hr>
      <Chart />
      </div>
      )}
    </div>
    
  )


}

export default System