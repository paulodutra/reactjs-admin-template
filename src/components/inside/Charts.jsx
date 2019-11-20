import React, { useState } from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,

} from 'reactstrap';

import { Bar, Pie } from 'react-chartjs-2';

const dataBar = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", ],
    datasets: [
        {
            label: "First",
            //backgroundColor: "#ffffff",
            backgroundColor: [ //a quantidade de backgroundColor, também deve ser a quantidade de data
                '#4040b2',
                '#f05928',
                '#eb3f67',
                '#ccccccc',
                '#000000'
            ],
            borderColor: '#cccccc',
            borderWidth: 1,
            data: [10, 20, 30, 70, 80] //a quantidade de data, também deve ser a quantidade de labels

        },
    ]

}

const dataPie = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [
        {
            data: [70, 80, 90],
            backgroundColor: [ //a quantidade de backgroundColor, também deve ser a quantidade de data
                '#4040b2',
                '#f05928',
                '#eb3f67'
            ]
        }
    ]

}

export default function Charts () {

    return(
        <div>
           <Row>
               <Col xs="12" sm="6" md="6">
                   <Card>
                       <CardHeader>
                           <h4>Charts Bar</h4>
                       </CardHeader>
                       <CardBody>
                            <Bar data={dataBar} width={100} height={80}/>
                       </CardBody>
                   </Card>
               </Col>
               <Col xs="12" sm="6" md="6">
                   <Card>
                       <CardHeader>
                           <h4>Charts Pie</h4>
                       </CardHeader>
                       <CardBody>
                            <Pie data={dataPie} width={100} height={80}/>
                       </CardBody>
                   </Card>
               </Col>
             
           </Row>
        </div>
    )
}