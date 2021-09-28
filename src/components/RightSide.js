import { Avatar } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
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
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
          </svg>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" />
            </a>
            <div>
              <span>linkedin</span>
              <button>#music</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" />
            </a>
            <div>
              <span>linkedin</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <ArrowRight />
        </Recommendation>
      </FollowCard>
      <Sticky id="sticky2">
        <Banner>
          <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" />
        </Banner>
        <Footer>
          <div>
            <a href="">About</a>
            <a href="">Accessibility</a>
            <a href="">Help Center</a>
          </div>
          <div>
            <a href="">
              Privacy & Terms
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
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
              </svg>
            </a>
            <a href="">Add choices</a>
          </div>
          <div>
            <a href="">Advertising</a>
            <a href="">
              Business Services
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
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="">Get the Likedin app</a>
            <a href="">More</a>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 14"
              data-supported-dps="56x14"
              fill="currentColor"
              class="mercado-match"
              width="56"
              height="14"
              focusable="false"
            >
              <g>
                <path
                  class="background-mercado"
                  d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
                ></path>
              </g>
            </svg>
            Linkedin Corporation © 2021
          </span>
        </Footer>
      </Sticky>
    </Container>
  );
}
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  background: white;
  margin-bottom: 8px;
  border-radius: 5px;
  position: relative;
  padding: 12px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;
const Title = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 16px;
  }
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
    }
    button {
      display: inline-flex;
      background-color: transparent;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      text-align: center;
      outline: none;
      max-height: 32px;
      max-width: 480px;
      border: none;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2),
        -1px -1px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;
const Recommendation = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0a66c2;
`;
const Banner = styled(FollowCard)`
  padding: 0;
`;
const Footer = styled.div`
  margin-top: 12px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
      line-height: 2;
      margin-left: 13px;
      font-size: 13px;
      display: flex;
      align-items: center;
      &:hover {
        color: rgb(52, 147, 255);
        text-decoration: underline;
      }
      svg {
        width: 12px;
        margin-left: 5px;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin-top: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.9);
    svg {
      color: rgb(52, 147, 255);
      margin-right: 5px;
    }
  }
`;
const Sticky = styled.div``;
export default RightSide;
