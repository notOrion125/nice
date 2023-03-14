import React, { useEffect, useState } from 'react';
import './components/Head.css'
import FirstHead from './components/FirstHead';
import RedactorButton from './RedactorButton';
import Picture from './components/Picture';
import Info from './Info';
import Information from './components/Information.json'
const Expenses = (props) => {
  // const FirstLogin = props.Info
  // console.log("voe", props.Info)
  const [FirstLogin, setFirstLogin] = useState(props.Info)
  
  const [Index, setIndex] = useState(props.NewInputLogin)
  const [SecondName, setSecondName] = useState(FirstLogin[Index].SecondName)
  const [Name, setName] = useState(FirstLogin[Index].Name)
  const [Branch, setBranch] = useState(FirstLogin[Index].Branch)
  const [Post, setPost] = useState(FirstLogin[Index].Post)
  const [Unit, setUnit] = useState(FirstLogin[Index].Unit)
  const [File, setFile] = useState(FirstLogin[Index].File)
  const [OneKPI, setOneKPI] = useState(props.KPIS[0].NewOneKPI)
  const [TwoKPI, setTwoKPI] = useState(props.KPIS[0].NewTwoKPI)
  // const [Lenght, setLenght] = useState('')
  // const [Spisok, setSpisok] = useState(FirstLogin)


  // useEffect( () =>{
  // props.saveNewLenght(FirstLogin.length);
  // props.saveNewSpisok(FirstLogin);
  // }, [])
  const expenses = [
    { Name, SecondName, Branch, Post, Unit, File, OneKPI, TwoKPI }]
  


  const saveSecondName = () => {
    setSecondName(document.getElementById('SecondName').value)
  };
  const saveName = () => {
    setName(document.getElementById('Name').value)
  };
  const saveBranch = () => {
    setBranch(document.getElementById('Branch').value)
  };
  const savePost = () => {
    setPost(document.getElementById('Post').value)
  };
  const saveUnit = () => {
    setUnit(document.getElementById('Unit').value)
  };
  const saveFile = () => {
    setFile(document.getElementById('Picture').value)
  };
  const saveOneKPI = () => {
    setOneKPI(document.getElementById('OneKPI').value)
    props.SetNewOneKPI(document.getElementById('OneKPI').value)
  };
  const saveTwoKPI = () => {
    setTwoKPI(document.getElementById('TwoKPI').value)
    props.SetNewTwoKPI(document.getElementById('TwoKPI').value)
  };

  return (
    <div>
      <RedactorButton Data={expenses} saveName={saveName} saveBranch={saveBranch} savePost={savePost} saveUnit={saveUnit} saveSecondName={saveSecondName} saveFile={saveFile} saveOneKPI={saveOneKPI} saveTwoKPI={saveTwoKPI}/>
      <div >
        {/* <button onClick={console.log(props.NewLenght)}>wot</button>  */}
        <FirstHead Data={expenses} />
      </div>
      <div className='first'>
        <Picture Data={expenses} />
        <Info expenses={expenses} />
      </div>
    </div>

  );

}

export default Expenses