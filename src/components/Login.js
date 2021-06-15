import React from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";

function Login(props) {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
            alt=""
          />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIns>Sign in</SignIns>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img
            src="https://www.pngitem.com/pimgs/m/110-1106529_corporate-woman-working-at-her-desk-woman-at.png"
            alt=""
          />
        </Hero>
        <Form>
          <Google onClick={props.SignIn}>
            <img
              src="https://image.flaticon.com/icons/png/128/281/281764.png"
              alt=""
            />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}
const Container = Styled.div`
padding:0px;
max-width:1120px;
margin:auto;
`;
const Nav = Styled.div`
padding:12px 0px 10px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
wrap:nowrap;
& > a img
{
    width: 130px;
    object-fit:contain;
    @media(max-width:700px){
        padding:1px;
    }
}
`;
const Join = Styled.a`
font-size:18px;
padding:10px 12px;
text-decoration:none;
color:rgba(0,0,0,0.6);
margin-right:12px;
&:hover{
    background-color:rgba(0,0,0,0.1);
    color:rgba(0,0,0,0.9);
    border-radius:3px;

}

`;
const SignIns = Styled.a`
font-size:18px;
border-radius:24px;
border:1.5px solid rgb(0, 119, 255);
color:rgb(0, 119, 255);
font-weight:bold ;
line-height:40px;
transition-duration:1.2s;
text-decoration:none;
padding:10px 30px;
&:hover{
    background-color:rgba(112,181,249,0.15) ;
}
`;
const Section = Styled.div`
display: flex;
align-content:start;
align-items: center;
padding-top:40px;
position: relative;
min-height: 760px;
flex-wrap:wrap;
width: 100%;
margin: auto;
@media(max-width:768px){
}

`;
const Hero = Styled.div`
width:100%;
height: 200px;
h1{
width:50%;
font-size: 56px;
color:#2977c9;
font-weight:100;
line-height: 70px;
@media(max-width:768px){
  font-size:20px;
  text-align: center;
  width: 100%;
  line-height: 2px;
}
}
img{
width: 50%;
height: 50%;
object-fit:contain;
position: absolute;
z-index:-1;
top:0px;
right: 0px;
@media(max-width:768px){
   width: 92vw;
   padding: 30px 15px;
   right: initial;
 }
}
`;
const Form = Styled.div`
 margin-top: 70px;
  width: 420px;
  @media(max-width:768px){
    margin-top: 100px;
   
  }
`;
const Google = Styled.button`
display: flex;
align-items: center;
justify-content:center;
margin: auto;
width: 100%;
position: relative;
height: 50px;
border-radius:30px;
border: none;
font-size:20px;
vertical-align:middle;
color:rgb(0,0,0,0.5);
margin-top:50px;
transition-duration:1s ;
box-shadow:1px 1px 3px rgb(0,0,0,0.3);
&:hover{
  background: rgb(0,0,0,0.2);
}
img{
  width: 30px;
  margin-right:5px ;


}`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
