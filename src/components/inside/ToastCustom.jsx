import React from 'react';
import { DefaultToast } from 'react-toast-notifications';

/**
 * CustomDefaultToast: Exemplo de Toast customizada herdando as definições
 * da DefaultToast do react-toast-notifications
 * @param {*} object (children e props) 
 */
// const CustomDefaultToast = ( { children, ...props }) => (
//     <DefaultToast {...props}>
//         <div>
//             <h1>{children}</h1>
//         </div>
//     </DefaultToast>
// );

/**
 * CustomDefaultToast: Exemplo da criação de um toast sem as definições padrões
 * @param {*} object (appearance e children)  
 */
const CustomDefaultToast = ( { appearance, children }) => (
        <div style={{ background: `${appearance}` }}>
            <h1>{children}</h1>
        </div>
  
);

export default CustomDefaultToast;