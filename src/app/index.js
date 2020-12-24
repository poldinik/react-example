import "normalize.css/normalize.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import { render } from "react-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const App = () => {
    const [isHello, setHello] = useState(false);
    return (
        <Container>
            <Row style={{textAlign: "center", marginTop: "200px"}}>
                <Col>
                    {
                        isHello ? <p>hello!</p> : <Button variant={"info"} onClick={() => setHello(true)}>Click me</Button>
                    }
                </Col>
            </Row>
        </Container>
    )
};


render(<App/>, window.document.getElementById("app"));
