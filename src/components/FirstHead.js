
function FirstHead(props) {
  return (
    <div>
      <h1>{props.Data[0].SecondName} {props.Data[0].Name}</h1>
    </div>
  );
}

export default FirstHead