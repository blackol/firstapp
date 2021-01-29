function Activite1(props){
    return(
        <div>
            <h1>Activite 1</h1> 
            <span>salut {props.nom_variable} </span>
            <div>{props.nom_variable2}</div>

        </div>
    );
}

export default Activite1;