import { useEffect } from 'react';

/**
 * addBody: Arrow Function que adiciona classes ao elemento body
 * utilizando o método add da DOMTokenList
 * @param {*} classes 
 */
const addBody = classes => document.body.classList.add(classes)

/**
 * removeBody: Arrow function que remove classes do elemento body
 * utilizando o método add da DOMTokenList
 * @param {*} classes 
 */
const removeBody = (classes) => { document.body.classList.remove(classes) };

export default function useClass(className) {

    useEffect(
        () => {
            //verificar se o className é um array
            className instanceof Array ? className.map(addBody) : addBody(className);

            return () => {
                className instanceof Array ? className.map(removeBody) : removeBody(className);

            }
        },
        [className]
    )

}