import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

const EmpleadoGrilla = (props) => {
    return (
        <div>
            <ListGroup.Item className="d-flex my-3">
            <img src={props.pic} alt="imagen de perfil" className="w-20"/>
            <div className='m-5 text-center'>
            <h1 className="display-4 m-4">{props.name}</h1>
            <h4>{props.title}<Badge bg="info" className="m-4">{props.departament}</Badge></h4>
            </div>
            
      </ListGroup.Item>
        </div>
    );
};

export default EmpleadoGrilla;