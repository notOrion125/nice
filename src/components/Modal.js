import React from "react";
import {
    CButton,
    CForm,
    CFormInput,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
    CRow,
    CCol,
    CFormSelect
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

function Modal({ visible, handleCancel, handleSave, editableTask, tasks, handleDelete }) {
    return (
        <CModal visible={visible} onClose={handleCancel}>
            <CModalHeader onClose={handleCancel}>
                <CModalTitle>{editableTask === null ? "Добавить задачу" : "Редактировать задачу"}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm onSubmit={handleSave}>
                    <CRow>
                        <CCol xs="6">
                            <CFormInput
                                type="text"
                                id="parther"
                                name="parther"
                                label="Партнер"
                                defaultValue={editableTask !== null ? tasks[editableTask].parther : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <CCol xs="6">
                            <CFormInput
                                type="text"
                                id="subtask"
                                name="subtask"
                                label="Подзадача"
                                defaultValue={editableTask !== null ? tasks[editableTask].subtask : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs="6">
                            <CFormSelect
                                type="text"
                                id="subtaskStatus"
                                name="subtaskStatus"
                                label="Статус подзадачи"
                                defaultValue={editableTask !== null ? tasks[editableTask].subtaskStatus : ""}
                                aria-describedby="exampleFormControlInputHelpInline">
                                <option value="В работе">В работе</option>
                                <option value="К выполнению">К выполнению</option>
                            </CFormSelect>
                        </CCol>
                        <CCol xs="6">
                            <CFormInput
                                type="text"
                                id="tasks"
                                name="tasks"
                                label="Задача"
                                defaultValue={editableTask !== null ? tasks[editableTask].tasks : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs="6">
                            <CFormInput
                                type="text"
                                id="stage"
                                name="stage"
                                label="Этап"
                                defaultValue={editableTask !== null ? tasks[editableTask].stage : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <CCol xs="6">
                            <CFormInput
                                type="text"
                                id="project"
                                name="project"
                                label="Проект"
                                defaultValue={editableTask !== null ? tasks[editableTask].project : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs="6">
                            <CFormInput
                                type="date"
                                id="startdate"
                                name="startdate"
                                label="Дата начала"
                                defaultValue={editableTask !== null ? tasks[editableTask].startdate : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <CCol xs="6">
                            <CFormInput
                                type="date"
                                id="enddate"
                                name="enddate"
                                label="Дата окончания"
                                defaultValue={editableTask !== null ? tasks[editableTask].enddate : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs="6">
                            <CFormInput
                                type="number"
                                id="timeestimation"
                                name="timeestimation"
                                label="Оценка времени"
                                defaultValue={editableTask !== null ? tasks[editableTask].timeestimation : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                type="text"
                                id="jobdescription"
                                name="jobdescription"
                                label="Описание работы"
                                defaultValue={editableTask !== null ? tasks[editableTask].jobdescription : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs="6">
                            <CFormInput
                                type="number"
                                id="timewrittenoff"
                                name="timewrittenoff"
                                label="Списано времени"
                                suffix="hour"
                                defaultValue={editableTask !== null ? tasks[editableTask].timewrittenoff : ""}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <p></p>
                        <p></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <CButton color="secondary" onClick={handleCancel}>Отмена</CButton>
                            <CButton type="submit" color="primary">Сохранить</CButton>
                        </div>
                    </CRow>
                </CForm> 
            </CModalBody>
        </CModal>
    );
}

export default Modal;