import React, { Component } from "react";
import Link from 'next/link'
import { Container,Col,Row } from "react-bootstrap";
import Header from "../components/header";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <p>aabbccddee</p>
      </>
    )
  }

}

export default App;