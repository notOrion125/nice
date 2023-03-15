import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './components/system.css'

import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter, CFormInput, } from '@coreui/react'
function RedactorButton(props) {
  const [visible, setVisible] = useState(false)
  const [twovisible, setTwoVisible] = useState(false)
  const [threevisible, setThreeVisible] = useState(false)
  const [date, setDate] = useState(new Date())
  const saveDate = () => {
    setDate(new Date())

};
const saveThreeVisible = () => {
  setThreeVisible(!threevisible)}

  // const [SecondName, setSecondName] = useState(props.Data[0].SecondName)
  // const [Name, setName] = useState(props.Data[0].Name)
  // const [Branch, setBranch] = useState(props.Data[0].Branch)
  // const [Post, setPost] = useState(props.Data[0].Post)
  // const [Unit, setUnit] = useState(props.Data[0].Unit)
  // const [Picture, setPicture] = useState(props.Data[0].Picture)
  // const saveData = () => {
  //   setSecondName(document.getElementById('SecondName').value)
  //   setName(document.getElementById('Name').value)
  //   setBranch(document.getElementById('Branch').value)
  //   setPost(document.getElementById('Post').value)
  //   setUnit(document.getElementById('Unit').value)
  //   console.log(Branch);
  // };

  return (
    <div >
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">


        <>
          <CButton color="primary" className="me-md-2" onClick={() => setTwoVisible(!twovisible)}>Загрузить фотографию</CButton>
          <CModal visible={twovisible} onClose={() => setTwoVisible(false)}>
            <CModalHeader onClose={() => setTwoVisible(false)}>
              <CModalTitle>Изменить фотографию</CModalTitle>
            </CModalHeader>
            <CModalBody>Вставьте URL-адрес картинки:<CFormInput type="text" placeholder='URL-адрес' id='Picture' aria-label="default input example" /></CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setTwoVisible(false)}>
                Закрыть
              </CButton>
              <CButton color="primary" onClick={() => {props.saveFile();setTwoVisible(false)}}>Сохранить фотографию</CButton>
            </CModalFooter>
          </CModal>
        </>






        <>
          <CButton onClick={() => setVisible(!visible)}>Редактировать</CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Редактор</CModalTitle>
            </CModalHeader>
            <CModalBody>Введите вашу фамилию:<CFormInput type="text" id='SecondName' placeholder='' defaultValue={props.Data[0].SecondName} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваше имя:<CFormInput type="text" id='Name'  placeholder='' defaultValue={props.Data[0].Name} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш филиал:<CFormInput type="text" id='Branch' defaultValue={props.Data[0].Branch} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите вашу должность:<CFormInput type="text" id='Post' placeholder='' defaultValue={props.Data[0].Post} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваше подразделение:<CFormInput type="text" id='Unit' placeholder='' defaultValue={props.Data[0].Unit} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш KPI за 3 месяца:<CFormInput type="number" id='OneKPI' placeholder='' defaultValue={props.Data[0].OneKPI} aria-label="default input example" /></CModalBody>
            <CModalBody>Введите ваш KPI за полугодие:<CFormInput type="number" id='TwoKPI' placeholder='' defaultValue={props.Data[0].TwoKPI} aria-label="default input example" /></CModalBody>
            <CModalFooter>

              <CButton color="secondary" onClick={() => setVisible(false)}>
                Закрыть
              </CButton>
              <CButton color="primary" onClick={() => {setVisible(false);props.saveSecondName();props.saveName();props.saveBranch();props.savePost();props.saveUnit(); props.saveOneKPI(); props.saveTwoKPI();}}>Сохранить изменения</CButton>
            </CModalFooter>
          </CModal>
        </>
        <>
        <CButton color="primary" variant="outline" onClick={() => {saveThreeVisible(); saveDate()}}>Списать время</CButton>
          <CModal visible={threevisible} onClose={() => setThreeVisible(false)}>
            <CModalHeader onClose={() => setThreeVisible(false)}>
              <CModalTitle>Время</CModalTitle>
            </CModalHeader>
            <CModalBody>Списать время: {date.toLocaleTimeString()}</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setThreeVisible(false)}>
                Закрыть
              </CButton>
              <CButton color="primary" onClick={() => setThreeVisible(false)}>Сохранить изменения</CButton>
            </CModalFooter>
          </CModal>
        </>
      </div>
    </div>

  );
    }
export default RedactorButton

