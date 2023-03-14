import './components/Head.css'
function Info(props) {
    return (
        <div className='second'>
            <h4>Общая информация:</h4>
            <div className='layer1'>
            <p>Фамилия: {props.expenses[0].SecondName}</p>
            <p>Имя: {props.expenses[0].Name}</p>
            <p>Филиал: {props.expenses[0].Branch}</p>
            <p>Должность: {props.expenses[0].Post}</p>
            <p>Подразделение: {props.expenses[0].Unit}</p>
            </div>
        </div>
    );
}

export default Info