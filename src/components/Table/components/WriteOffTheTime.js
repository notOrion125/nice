import React, { useState } from "react";
import { CButton, CModal, CModalHeader, CModalBody, CModalTitle, CModalFooter } from "@coreui/react";

const WriteOffTheTime = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <CButton color="secondary" variant="ghost" onClick={() => setVisible(!visible)}>Списать время</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Списать время</CModalTitle>
                </CModalHeader>
                <CModalBody>Здесь можно будет списать время</CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>Отмена</CButton>
                    <CButton color="primary">Сохранить</CButton>
                </CModalFooter>
            </CModal>
        </>
    );

};

export default WriteOffTheTime;