import styled from "styled-components";
import React, { useState } from "react";
import { CloseRounded, CropOriginal, YouTube } from "@material-ui/icons";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { postArticleAPI } from "../actions";
import firebase from "firebase";

function PostModal(props) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const reset = (e) => {
    props.handleClick(e);
    setShareImage("");
    setVideoLink("");
    setEditorText("");
    setAssetArea("");
  };
  const swithchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };
  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image == "" || image == undefined) {
      alert(`not an image ,this file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  return (
    <>
      {props.showModal == "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <CloseRounded style={{ pointerEvents: "none" }} />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="images/user.svg" alt="" />
                )}
                <div>
                  <span>
                    {props.user.displayName ? props.user.displayName : "name"}
                  </span>
                  <button>
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
                      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                    </svg>
                    <span>Anynone</span>
                    <img
                      src="images/down-icon.svg"
                      alt=""
                      style={{
                        width: "15px",
                        objectFit: "contain",
                        height: "15px",
                      }}
                    />
                  </button>
                </div>
              </UserInfo>
              <Editor>
                <textarea
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                />
                <AddHashtag>Add hashtag</AddHashtag>
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg"
                      name="image"
                      id="image"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="image">Select a image for share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea == "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width="100%" url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => swithchAssetArea("image")}>
                  <CropOriginal />
                </AssetButton>
                <AssetButton onClick={() => swithchAssetArea("media")}>
                  <YouTube />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton
                  style={{ borderRadius: "15px", padding: "0px 15px" }}
                >
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
                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                  </svg>
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>
              <PostButton
                disabled={editorText ? false : true}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 97%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  h2 {
    font-weight: 400;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.7);
    border: none;
    background: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  align-items: center;
  display: flex;
  padding: 6px 18px;
  div {
    flex-direction: column;
    display: flex;
    span {
      font-weight: 600;
      margin-left: 5px;
      line-height: 1.5;
      font-size: 16px;
    }
    button {
      padding: 4px 7px;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in;
      color: rgba(0, 0, 0, 0.6);
      span {
        font-size: 14px;
        font-weight: 600;
      }
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      background: white;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.8);
      }
    }
  }
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid transparent;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  border: none;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    margin-left: 5px;
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 20px;
  border: none;
  background: transparent;
  padding-right: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.4)" : "white")};
  background-color: ${(props) =>
    props.disabled ? "rgba(0, 0, 0, 0.1)" : "#0a66c2"};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0, 0, 0, 0.08)" : "#0041c2"};
  }
`;
const Editor = styled.div`
  padding: 12px 12px;
  textarea {
    width: 100%;
    min-height: 150px;
    font-size: large;
    outline: none;
    border: none;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    outline: none;
    border-radius: 15px;
    border: 1px solid silver;
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  color: #0a66c2;
  font-weight: 600;
  font-size: 15px;
  img {
    width: 100%;
  }
`;
const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
  };
};
const mapStateProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const AddHashtag = styled.button`
  padding: 6px 8px;
  font-size: 17px;
  color: rgb(0, 119, 255);
  border: none;
  background: transparent;
  font-weight: 600;
  transition: 0.2s ease-in;
  &:hover {
    background: rgba(0, 119, 255, 0.1);
    border-radius: 5px;
  }
`;
export default connect(mapStateProps, mapDispatchToProps)(PostModal);
