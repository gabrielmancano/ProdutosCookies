import { useState } from 'react';
import { Barras } from '../Pages/Barras';
import { Cookies } from '../Pages/Cookies';
import { Potes } from '../Pages/Potes';
import { Tortas } from '../Pages/Tortas';
import { Sidebar } from "../Sidebar";
import { Container } from "./styled";

export function Main(props) {

    
    return(
        <Container>
            <Sidebar type={props.type} setType={props.setType} />
            
            <div>
            {props.type === "cookies" && < Cookies />}
            {props.type === "barras" && < Barras />}
            {props.type === "tortas" && < Tortas />}
            {props.type === "potes" && < Potes />}
            </div>
            
        </Container>
    )
}