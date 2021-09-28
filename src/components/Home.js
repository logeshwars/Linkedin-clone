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
const Layout = styled.div`
  display: grid;
  grid-template-areas: " leftside main rightside";
  grid-column-gap: 25px;
  grid-template-rows: auto;
  margin: 40px 110px;
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 0px 0px;
  }
`;
const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

export default connect(mapStateToProps)(Home);
