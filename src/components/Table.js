import React from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CButton,
} from "@coreui/react";
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import '../BorderedTable.css';

function Table({ tasks, handleEdit, handleDelete }) {
  return (
    <CTable className="table table-hover" >
      <CTableHead color="info">
        <CTableRow>
          <CTableHeaderCell>Партнер</CTableHeaderCell>
          <CTableHeaderCell>Подзадача</CTableHeaderCell>
          <CTableHeaderCell>Статус подзадачи</CTableHeaderCell>
          <CTableHeaderCell>Задача</CTableHeaderCell>
          <CTableHeaderCell>Этап</CTableHeaderCell>
          <CTableHeaderCell>Проект</CTableHeaderCell>
          <CTableHeaderCell>Дата начала</CTableHeaderCell>
          <CTableHeaderCell>Дата окончания</CTableHeaderCell>
          <CTableHeaderCell>Оценка времени</CTableHeaderCell>
          <CTableHeaderCell>Описание работы</CTableHeaderCell>
          <CTableHeaderCell>Списано времени</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody >
        {tasks.map((task, index) => (
          <CTableRow key={index}>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.parther}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.subtask}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.subtaskStatus}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.tasks}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.stage}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.project}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.startdate}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.enddate}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.timeestimation}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.jobdescription}</CTableDataCell>
            <CTableDataCell onClick={() => handleEdit(index)}>{task.timewrittenoff}</CTableDataCell>
            <CTableDataCell>
              <CButton color="light"  onClick={() => handleDelete(index)}>
                <CIcon icon={cilTrash} size='custom-size' />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
}

export default Table;