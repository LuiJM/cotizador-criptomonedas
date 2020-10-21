import React from 'react';
import styled from '@emotion/styled';


const Resultadodiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
`;

const Cotizacion = ({resultadoC}) => {
    
    if(Object.keys(resultadoC).length === 0) return null;

    return (
        <Resultadodiv>
            <Precio>El precio es: <span>{resultadoC.PRICE}</span></Precio>
            <Info>Precio mas alto del día: <span>{resultadoC.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del día: <span>{resultadoC.LOWDAY}</span></Info>
            <Info>Variación ultimas 24 horas: <span>{resultadoC.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualización: <span>{resultadoC.LASTUPDATE}</span></Info>
        </Resultadodiv>
    );
    
}
 
export default Cotizacion;