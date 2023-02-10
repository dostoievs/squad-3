import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Admin from "./Admin";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

const Home = () => {
  const [sedans, setSedans] = useState([]);

  const getSedan = async () => {
    try {
      const response = await bancodadosFetch.get("/sedan");

      const data = response.data;

      setSedans(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSedan();
  }, []);

  return (
    <div className="home">
      <div className="containerdiv">
        <Link className="btn-btn" to={`/NewPost`}>
          Cadastrar veículo
        </Link>   <Link className="btn-btn" to={`/Admin`}>
          Visualizar cadastros
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">Tipo de veículo: SEDAN</h1>

      {sedans.length === 0 ? (
        <p className="aguarde">Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        sedans.map((sedans) => (

          <div className="post" key={sedans.id}>
            <Card style={{ width: '18rem' }}>

              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://cdn-icons-png.flaticon.com/512/3202/3202875.png"
                />
              </Figure>

              <Card.Body>
                <Card.Title>Vaga: {sedans.id}</Card.Title>
                <Card.Title>Marca: {sedans.marca}</Card.Title>

              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Modelo: {sedans.modelo}</ListGroup.Item>
                <ListGroup.Item>Ano: {sedans.ano}</ListGroup.Item>
                <ListGroup.Item>Cor: {sedans.cor}</ListGroup.Item>
              </ListGroup>

            </Card>
          </div>
        ))
      )}
    </div>
  );

};

export default Home
