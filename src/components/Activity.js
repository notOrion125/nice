import './Head.css'
function Activity(props) {

  // const CurrentActivities = [
  //   {
  //     Id:0,
  //     CountOpen: '15',
  //     CountOverdue: '14',
  //   },
  //   {
  //     Id:1,
  //     CountOpen: '3',
  //     CountOverdue: '8',
  //   },
  //   {
  //     Id:2,
  //     CountOpen: '30',
  //     CountOverdue: '40',
  //   },
  // ]
  

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