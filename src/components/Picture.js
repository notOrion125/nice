function Picture(props) {
    return (
        <div>
            <img src={props.Data[0].File}
                alt="Картинка"
                align="left"
                width="130"
                height="121"
            />
        </div>
    );
}

export default Picture