import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import NotFoundAnimation from './../404.json'

const NotFound = () => {
     //constante de configuração do BodyMovin
     const bodyMovinOptions = {
        loop: true,
        autoplay: true, 
        prerender: true,
        animationData: NotFoundAnimation
    };

    return(
       
        <div>
            <ReactBodyMovin options={bodyMovinOptions} />
        </div>
    )
}

export default NotFound;