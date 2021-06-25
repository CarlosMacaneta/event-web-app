import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Event } from "types/event";


type Props = {
    setEventTable: Function;
}

const EventForm = ({setEventTable}: Props) => {

    const [events, setEvents] = useState<Array<Event>>([]);
    const { register, formState: { errors }, handleSubmit } = useForm<Event>();


    const onSubmit: SubmitHandler<Event> = event => {
        event.id = generateId();
        console.log(event)
        addEvent(event);
    }

    const addEvent = (evt: Event): void => {
        const newEvent: Event[] = [...events, evt];
        setEvents(newEvent);
        setEventTable(newEvent);
    }

    const generateId = () : number => {
        var id = 0;

        for (var i = 0; i < events.length; i++) {
            if (id < events[i].id) {
                id = events[i].id;
            }
        }

        return (events.length === 0) ? 1 : id + 1;
    }

    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={12}>
                        <Form.Label htmlFor="name" srOnly>Nome</Form.Label>
                        <Form.Control 
                            {...register("name", {required: true})}
                            type="text" 
                            id="name" 
                            name="name"
                            placeholder="Nome do evento" />
                        {errors.name && "Informe o nome do evento"}
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col md={8}>
                        <Form.Label htmlFor="address" srOnly>Local</Form.Label>
                        <Form.Control
                            {...register("address", {required: true})}
                            type="text" 
                            id="address" 
                            name="address"
                            placeholder="Local do evento" />
                        {errors.address && "Informe o endereço"}
                    </Col>
                    <Col md={2}>
                        <Form.Label htmlFor="datetime" srOnly>Data</Form.Label>
                        <Form.Control 
                            {...register("date", {required: true})}
                            type="date" 
                            id="date"
                            name="date" />
                        {errors.date && "Selecione a data"}
                    </Col>
                    <Col md={2}>
                        <Form.Label htmlFor="time" srOnly>Hora</Form.Label>
                        <Form.Control 
                            {...register("time", {required: true})}
                            type="time" 
                            id="time"
                            name="time" />
                        {errors.time && "Selecione a hora"}
                    </Col>
                </Row>
                <Button type="submit" variant="primary">Adicionar evento</Button>
            </Form>
        </>
    );
}

export default EventForm;