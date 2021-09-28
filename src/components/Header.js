import { signOut, signOutAPI } from "../actions";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
            </svg>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="a">
              <a href="">
                <img src="images/nav-home.svg" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="images/nav-network.svg" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="images/nav-jobs.svg" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="images/nav-messaging.svg" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="images/nav-notifications.svg" />
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
            <Me>
              <span>Me</span>
              <img
                src="images/down-icon.svg"
                alt=""
                style={{ width: "15px", objectFit: "contain", height: "15px" }}
              />
            </Me>
          </a>
          <SignOut onClick={() => props.signOut()}>
            <a>SignOut</a>
          </SignOut>
        </User>
        <Work>
          <a href="">
            <img src="images/nav-work.svg" alt="" />
            <span>
              Work
              <img
                src="images/down-icon.svg"
                alt=""
                style={{ width: "15px", objectFit: "contain", height: "15px" }}
              />
            </span>
          </a>
        </Work>
        <Premium>
          <a href="">
            Try premium for free
          </a>
        </Premium>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgb(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  padding: 0px 0px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
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
    svg {
      width: 20px;
      margin-left: 10px;
    }
    max-width: 280px;
    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 230px;
      padding: 0px 8px 0 40px;
      @media (max-width: 768px) {
        width: 200px;
      }
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
  padding: 0;
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
    padding: 5px 0;
    align-items: center;
    text-decoration: none;
    min-width: 80px;
    min-height: 42px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 500px;
    line-height: 1.5;
    color: black;
    span {
      color: rgb(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      font-weight: 440;
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
const Me  =  styled.div`
  display:  flex;
  align-items: center;
`;;
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
const Work = styled(User)`
    border-left:  1px solid rgba(0,0,0,0.2);
`;
const Premium = styled.div`
  width: 100px;
  text-align: center;
  a {
    color: #915907;
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
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
