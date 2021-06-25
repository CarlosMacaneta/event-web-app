import { Button, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Guest } from "types/guest";

const GuestForm = () => {

    const { register, formState: {errors}, handleSubmit} = useForm<Guest>();

    const onSubmit: SubmitHandler<Guest> = guest => console.log(guest);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <Form.Label htmlFor="name">Nome</Form.Label>
                    <Form.Control 
                        {...register('name', {required: true})}
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Nome do convidado" />
                    {errors.name && "Informe o nome do convidado"}
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <Form.Label htmlFor="table">Mesa</Form.Label>
                    <Form.Control 
                        {...register('table', {required: true})}
                        type="text" 
                        id="table" 
                        name="table" 
                        placeholder="Nome da mesa" />
                    {errors.table && "Informe a mesa"}
                </Col>
            </Row>
            <Button type="submit" variant="primary" className="my-2">Adicionar</Button>
        </Form>
    );
}

export default GuestForm;