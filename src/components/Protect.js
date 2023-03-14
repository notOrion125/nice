import { CFormInput, CButton } from "@coreui/react"
import React, { useState } from 'react';

const Protect = (props) => {
    const [inputHard, setinputHard] = useState('')
    const [ShowHard, setShowHard] = useState(true)
    const [inputPass, setinputPass] = useState('')
    // const [inputLogin, setinputLogin] = useState('')
    const [showHTML, setShowHTML] = useState(false);
    const [showText, setShowText] = useState(false);
    const saveinputPass = () => {
        setinputPass(document.getElementById('inputPass').value)
        setShowHTML(document.getElementById('inputPass').value === props.password[inputHard].password && document.getElementById('inputNick').value === props.password[inputHard].nick)
        
    };
    console.log(props.password)
    // const saveinputLogin = () => {
    //     setinputLogin(document.getElementById('inputLogin').value)
    // };



    const saveinputHard = () => {
        setinputHard(props.NewInputLogin)
        setShowHard(false)
        console.log(inputHard)
    };

    const notTrue = () => {
        setShowText(true);
    };
    return (

        <div>
            {ShowHard && (

                <div>

                    <h1>Введите ваш ID, который выдали при регистрации</h1>
                    <p></p>
                    <CFormInput type="number" size="lg" placeholder='Ваш ID' onChange={props.SavesetNewInputLogin} id='inputLogin' aria-label="default input example" />
                    <CButton className="mb-3" onClick={saveinputHard}>Это мой ID</CButton>
                </div>


            )}{!ShowHard && (
                <div>
                    <h1>Защита от детей</h1>
                    <CFormInput type="text" size="lg" placeholder='Никнейм' onChange={props.SavesetNewInputNick} id='inputNick' aria-label="default input example" />
                    <CFormInput type="password" size="lg" placeholder='Пароль' onChange={saveinputPass} id='inputPass' aria-label="default input example" />
                    <p></p>
                    {!showHTML && (

                        <CButton color="secondary" onClick={notTrue} >Подтвердить</CButton>)}
                    {showHTML && (
                        <CButton color="primary" onClick={props.SavePass} >Подтвердить</CButton>
                        )}
                        
                    {showText && <p style={{ color: 'red' }}>Неверный пароль!!</p>}
                </div>
            )}
        </div>
    )


}

export default Protect