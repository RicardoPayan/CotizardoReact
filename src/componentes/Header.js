import React, {Fragment} from 'react';

//Lo que esta dentro de las llaves es codigo JS
        //Lo que se coloque aqui dentro es lo que se va mostrar en pantalla

const Header  = ({titulo}) => (  
    <Fragment>
        <h1>{titulo}</h1>    
    </Fragment>
);


export default Header;