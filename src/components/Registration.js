import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
// import Information from './Information.json'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter, CFormInput, } from '@coreui/react'

function Registration(props) {
  const [visible, setVisible] = useState(false)
  const [Twovisible, setTwoVisible] = useState(false)
  const [FirstLogin, setFirstlogin] = useState(props.Information)
  // console.log(FirstLogin)
  props.SaveInfo(FirstLogin)
  // console.log(FirstLogin.length)
  
  const [Id, setId] = useState(props.Information.length)
  const [SecondName, setSecondName] = useState('')
  const [Name, setName] = useState('')
  const [Branch, setBranch] = useState('')
  const [Post, setPost] = useState('')
  const [Unit, setUnit] = useState('')
  const [File, setFile] = useState('')
  const [password, setPassword] = useState('')
  const [nick, setLogin] = useState('')
  const [FirstExpensesKPI, setOneKPI] = useState('')
  const [SecondExpensesKPI, setTwoKPI] = useState('')
  const saveSecondName = () => {
    setSecondName(document.getElementById('SecondName').value)
  };
  const saveName = () => {
    setName(document.getElementById('Name').value)
  };
  const saveId = () => {
    setId(Id+1)
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
    setFile(document.getElementById('File').value)
  };
  const saveOneKPI = () => {
    setOneKPI(document.getElementById('OneKPI').value)
  };
  const saveTwoKPI = () => {
    setTwoKPI(document.getElementById('TwoKPI').value)

  };
  const savePassword = () => {
    setPassword(document.getElementById('Password').value)
  };
  const saveLogin = () => {
    setLogin(document.getElementById('Login').value)
  };
  const expenses = 
    { Id, Name, SecondName, Branch, Post, Unit, File, FirstExpensesKPI, SecondExpensesKPI, nick, password  }
  // console.log(expenses)
  // const [Lenght, setLenght] = useState(FirstLogin.length)
  // const [Spisok, setSpisok] = useState(FirstLogin)
  
  const AddSpisok = (item) =>{
    setFirstlogin([...FirstLogin, item])
    // console.log(FirstLogin)
  }
  return (
    <div >
      <div >


          <CButton  shape="rounded-pill" onClick={() => {setVisible(!visible); props.notSaveProtection()}}>Регистрация</CButton>

          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Ваш Id: {Id}</CModalTitle>
            </CModalHeader>
            <CModalBody>Введите вашу фамилию:<CFormInput type="text" id='SecondName' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваше имя:<CFormInput type="text" id='Name'  placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш филиал:<CFormInput type="text" id='Branch' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите вашу должность:<CFormInput type="text" id='Post' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваше подразделение:<CFormInput type="text" id='Unit' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш KPI за 3 месяца:<CFormInput type="text" id='OneKPI' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш KPI за полугодие:<CFormInput type="text" id='TwoKPI' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Ссылка на картинку:<CFormInput type="text" id='File' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Придумайте логин:<CFormInput type="text" id='Login' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalBody>Придумайте пароль:<CFormInput type="text" id='Password' placeholder='' defaultValue={''} aria-label="default input example" /></CModalBody>
            <CModalFooter>

              <CButton color="secondary" onClick={() => setVisible(false)}>
                Закрыть
              </CButton>
              <CButton color="primary" onClick={() =>  {setTwoVisible(true);setVisible(false); saveLogin();savePassword();saveOneKPI();saveTwoKPI();saveSecondName();saveFile();saveName();saveBranch();savePost();saveUnit(); saveOneKPI(); saveTwoKPI();}}>Подтвердить</CButton>
              </CModalFooter> 
          </CModal>
          <div/>
              <div>
              <CModal visible={Twovisible} onClose={() => setTwoVisible(false)}>
            <CModalHeader onClose={() => setTwoVisible(false)}>
              <CModalTitle>Ваш Id, который будет использоваться для входа: {Id}</CModalTitle>
            </CModalHeader>
            <CModalBody>Вы точно запомнили ваш Id?()</CModalBody>
            <CModalFooter>

              <CButton color="secondary" onClick={() => setTwoVisible(false)}>
                Закрыть
              </CButton>
              <CButton color="primary" onClick={() =>  {saveId();setVisible(false);setTwoVisible(false);AddSpisok(expenses)}}>Да</CButton>              
              </CModalFooter> 
          </CModal>
              
              
              </div>
              



          </div>
    </div>

  );
    }
export default Registration