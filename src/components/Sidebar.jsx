import React, { useEffect } from 'react';
import Templates from './../containers/routes';

export default function Sidebar(props) {

    /**
     * useEffect: Seta o estado da sidebar de acordo com o evento ao ser montado ou não o 
     * componente
     */
    useEffect( () => {
        //adiciona o toggle ao montar o componente
        document.getElementById('main-wrapper').classList.toggle('toggled');
        return() => {
            //remove o toggle ao montar ser desmontado
            document.getElementById('main-wrapper').classList.remove('toggled');   
        }
    }, []);
    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>Admin</h2>
            </div>
            <div className="list-group">
            <a href="/" className="list-group-item">Home</a>
            { Templates.map((template, index) => (
                <a href={template.path} className="list-group-item" key={index} >{template.name}</a>
            ))}
            </div>
        </aside>
    );

}
