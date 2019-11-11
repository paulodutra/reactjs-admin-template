import React, { useState } from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Collapse
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importa o core para adicionar o icone propriamente dito
import { library } from '@fortawesome/fontawesome-svg-core';
//importa os icones desejados 
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

//Adiciona o icione
library.add(faArrowDown);

export default function Cards () {
    //Define o estado inicial com o hook(useState)
    const [cardOpen, setCardOpen] = useState(true);

    function toggleCard(event) {
        event.preventDefault();

        setCardOpen(!cardOpen);
    }

    return(
        <div>
           <Row>
               <Col xs="12" sm="6" md="4">
                   <Card>
                       <CardHeader>
                           <h4>Title</h4>
                       </CardHeader>
                       <CardBody>
                            Text
                       </CardBody>
                       <CardFooter>
                            Footer
                       </CardFooter>
                   </Card>
               </Col>
               {/** Card com accordion */}
               <Col xs="12" sm="6" md="4">
                   <Card>
                       <CardHeader className="text text-right">
                          <a href="#" onClick={toggleCard}>
                              <FontAwesomeIcon icon="arrow-down" />
                          </a>
                       </CardHeader>
                       <Collapse isOpen={cardOpen}>
                        <CardBody>
                                Text
                        </CardBody>
                       </Collapse>
                   </Card>
               </Col>
               <Col xs="12" sm="6" md="4">
                   <Card>
                        <CardBody>
                            Text
                        </CardBody>
                   </Card>
               </Col>
           </Row>
        </div>
    )
}