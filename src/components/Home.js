import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

function Home(props) {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5>
          <a>Hiring in hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with upwork an keep bussiness
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 62px;
  max-width: 100%;
`;
const Section = styled.section`
  padding: 16px 0;
  min-height: 50px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: " leftside main rightside";
  grid-column-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 10px;
  grid-template-columns: minmax(0, 5fr) minmax(0, 10fr) minmax(300px, 7fr);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

export default connect(mapStateToProps)(Home);
