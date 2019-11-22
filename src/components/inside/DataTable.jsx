import React, { useEffect, useState } from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
 
} from 'reactstrap';

import BootstrapDataTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
    {
        dataField: 'id', //define que essa coluna criada irá obter os dados de dataset.id definido abaixo
        text: 'ID'
    },
    {
        dataField: 'title',  
        text: 'Title'
    },
    {
        dataField: 'price',  
        text: 'Price'
    },
    
];

export default function DataTable () {
    //criando um state com o array vazio
    const [data, setData] = useState([]);

    useEffect(() => {
        //Define os dados que serão renderizados na tabela
        const dataset = [
            { id: 1, title: 'Product 1', price: 10 },
            { id: 2, title: 'Product 2', price: 20 },
            { id: 3, title: 'Product 3', price: 30 },
            { id: 4, title: 'Product 4', price: 350 },
            { id: 5, title: 'Product 5', price: 300 },
            { id: 6, title: 'Product 6', price: 230 },
            { id: 7, title: 'Product 7', price: 630 },
            { id: 8, title: 'Product 8', price: 930 },
            { id: 9, title: 'Product 9', price: 730 },
            { id: 10, title: 'Product 10', price: 830 },
            { id: 11, title: 'Product 11', price: 430 },
        ];
        setData(dataset)
    }, [])
    return(
        <div>
           <Row>
               <Col xs="12" sm="6" md="6">
                   <Card>
                       <CardHeader>
                           <h4>DataTable</h4>
                       </CardHeader>
                       <CardBody>
                            <BootstrapDataTable 
                                keyField='id'
                                data={data}
                                columns={columns}
                                //striped
                                hover
                                condensed
                                bordered={false}
                                pagination={ paginationFactory( {
                                    //aqui pode ser configurados atributos da paginação
                                }) }
                            />
                       </CardBody>
                   </Card>
               </Col>
               
           </Row>
        </div>
    )
}