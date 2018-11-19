import styled from "styled-components";
import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const MyButton = styled.button`
  background: red;
  color: yellow;
  font-size: 36px;
  span {
    font-size: 50px;
    color: white;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Inner>{this.props.Children}</Inner>
        <MyButton>
          Click <span>me!</span>
        </MyButton>
      </div>
    );
  }
}
