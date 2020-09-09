import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Recebea o produto que você está esperando ou
         devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      tempora, debitis eaque, doloribus soluta minus ex quidem magnam in unde
      pariatur rerum, asperiores quia! Obcaecati maiores aliquam et incidunt.
      Quasi!
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit rerum
      harum fuga in cumque. Sequi, quas fugit. Ipsa cupiditate corporis error,
      veritatis magnam saepe facere. Numquam, dicta corporis. A, pariatur!
    </p>
  </Description>
)

export default Product;
