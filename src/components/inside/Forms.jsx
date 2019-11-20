import React from 'react';
import useForm from 'react-hook-form';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    CardFooter, 
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


import { useToasts } from 'react-toast-notifications';

export default function Forms (props) {
    /** React Hook Form */
    const { handleSubmit, watch, errors, register } = useForm();
    /** React Toast Notification */
    const { addToast } = useToasts();

    function onSubmit(data) {
        console.log(data);
        addToast('Add Sucess', { appearance: '#f9683f', autoDismiss: true });
    }
   
    return(
        <div>
           <Row>
               <Col xs="12" sm="12" md="12">
                   <Card>
                       <CardHeader>
                           <h4>Form</h4>
                       </CardHeader>
                       <CardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    {/** caso não esteja utilizando o reactStrap troque o innerRef por ref */}
                                    <Input type="text" name="name" placeholder="Enter name..." innerRef={register({ required: true })} />
                                    {errors.name && <span className="text-danger">Is required</span>}
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit">Submit</Button>
                                </FormGroup>
                            </form>
                       </CardBody>
                       <CardFooter>
                            Footer
                       </CardFooter>
                   </Card>
               </Col>
           </Row>
        </div>
    )
}
