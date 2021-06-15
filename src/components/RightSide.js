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
      <Banner>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" />
      </Banner>
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
const Banner = styled(FollowCard)``;
export default RightSide;
