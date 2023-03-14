import React, { useState } from "react";
import { CButton, CModal, CModalHeader, CModalBody, CModalTitle, CModalFooter } from "@coreui/react";

const ChangeStatus = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <CButton color="secondary" variant="ghost" onClick={() => setVisible(!visible)}>Сменить статус</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Сменить статус</CModalTitle>
                </CModalHeader>
                <CModalBody>Здесь можно будет сменить статус</CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>Отмена</CButton>
                    <CButton color="primary">Сохранить</CButton>
                </CModalFooter>
            </CModal>
        </>
    );

};

export default ChangeStatus;