import './Head.css'
function Activity(props) {
  

  return (
    <div>
      <h4>Текущие активности:</h4>
      <div className='layer1'>
        {/* <p>Кол-во открытых задач: {CurrentActivities[props.NewInputLogin].CountOpen}</p>
        <p>Кол-во просроченных задач: {CurrentActivities[props.NewInputLogin].CountOverdue}</p> */}
        <p>Кол-во открытых задач: {props.CountOpen}</p>
        <p>Кол-во просроченных задач: {props.CountOverdue}</p>
      </div>
    </div>
  );
}

export default Activity