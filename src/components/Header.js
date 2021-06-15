import { signOut, signOutAPI } from "../actions";
import {
  ArrowDropDown,
  Group,
  Apps,
  Home,
  Message,
  Notifications,
  SearchRounded,
  WorkRounded,
} from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Header(props) {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home" alt="">
            <img
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt=""
            />
          </a>
        </Logo>
        <Search>
          <div>
            <input placeholder="Search" type="text" />
          </div>
          <SearchIcon>
            <SearchRounded />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="a">
              <a href="">
                <Home />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <Group />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <WorkRounded />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <Message />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <Notifications />
                <span>Notifications</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
        <User>
          <a href="">
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="images/user.svg" alt="" />
            )}
            <span>me</span>
            <ArrowDropDown style={{ fontSize: "medium" }} />
          </a>
          <SignOut onClick={() => props.signOut()}>
            <a>SignOut</a>
          </SignOut>
        </User>
        <Work>
          <a href="">
            <Apps />
            <span>
              Work
              <ArrowDropDown style={{ fontSize: "medium" }} />
            </span>
          </a>
        </Work>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgb(0, 0, 0, 0.08);
  padding: 0px 24px;
  position: fixed;
  left: 0;
  top: 0;
  width: 96vw;
  z-index: 1;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  min-width: 1110px;
`;
const Logo = styled.span`
  margin-left: 10px;
  img {
    height: 35px;
    object-fit: contain;
  }
`;
const Search = styled.div`
  margin-left: 10px;
  flex-grow: 1;
  position: relative;
  & div {
    max-width: 280px;
    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 218px;
      padding: 0px 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 2px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.div`
  margin-left: auto;
  display: block;
  @media (max-width: 760px) {
    left: 0;
    bottom: 0;
    background-color: white;
    position: fixed;
  }
`;
const NavListWrap = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  flex-wrap: nowrap;

  .a {
    span:after {
      content: " ";
      position: absolute;
      border-bottom: 2px solid var(---white, #fff);
      bottom: 0;
      transform: scaleX(1);
      width: 100%;
      background-color: violet;
      transition: transform 2s ease-in-out;
      left: 0;
      border-color: black;
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    text-decoration: none;
    min-width: 80px;
    min-height: 42px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400px;
    line-height: 1.5;
    color: black;
    span {
      color: rgb(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
    &:hover {
      span {
        color: rgb(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  border-radius: 3px;
`;
const User = styled(NavList)`
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Work = styled(User)``;
const mapStateProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(signOutAPI());
  },
});
export default connect(mapStateProps, mapDispatchToProps)(Header);
