import React from 'react';


const Resultado = ({cantidad, total, plazo}) => (
    
    <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>A pagar en: {plazo} meses</p>
        <p>Su pago mensual: ${(total/plazo).toFixed(2)}</p>
        <p>Total a plagar: {(total).toFixed(2)}</p>
    </div>

);

 
export default Resultado;