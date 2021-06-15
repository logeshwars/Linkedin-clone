import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function LeftSide(props) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcome, {props.user ? props.user.displayName : "there"}
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>connections</span>
              <span>Grow your network</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
          </a>
        </Widget>
        <Item>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </span>
        </a>
        <a>
          <span>Followed hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
}
const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background: white;
  border-radius: 5px;
  position: relative;
  transition: box-shadow 83px;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
`;
const UserInfo = styled.div`
  padding: 12px 12px 16px;
  word-wrap: break-word;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 62px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  margin: -38px auto 12px;
  border-radius: 50%;
  border: 2px solid white;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.08);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 12px;
      line-height: 1.333;
      &:first-child {
        color: rgb(0, 0, 0, 0.6);
      }
      &:nth-child(3) {
        color: rgb(0, 0, 0, 1);
      }
    }
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0px 0px;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: #0a66c2;
    padding: 4px 12px 4px 12px;
    font-size: 15px;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      padding: 12px;
      text-decoration: none;
      border-top: 1px solid rgba(0, 0, 0, 0.16);
      text-align: center !important;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(LeftSide);
