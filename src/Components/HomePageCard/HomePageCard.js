import React from "react";
import styled from "styled-components";

const ProfileCardBox = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const InlineBlockDiv = styled.div`
  display: inline-block;
`;

const HeaderPrimary = styled.div`
  width: 100%;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  display: grid;
  justify-items: center;
`;

const HeaderPrimaryBox = styled.div`
  display: inline-block;
  width: 25vw;
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
`;

const PersonalStatement = styled.div`
  margin: 0;
  font-size: 1.7rem;
  font-style: italic;
  width: 100%;
`;

class HomePageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLinkedInIconClick = e => {
    let newTab = window.open(
      "https://www.linkedin.com/in/juntaozeng/",
      "_blank"
    );
    newTab.focus();
  };

  render() {
    return (
      <ProfileCardBox>
        <HeaderPrimary>
          <HeaderPrimaryBox>
            <InlineBlockDiv>
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin logo"
                onClick={this.handleLinkedInIconClick}
                style={{ cursor: "pointer" }}
              />
            </InlineBlockDiv>
            <InlineBlockDiv>Juntao Zeng</InlineBlockDiv>
          </HeaderPrimaryBox>
        </HeaderPrimary>
        <PersonalStatement>
          Living in Melbourne, recent IT Graduate from Monash University,
          seeking career opportunities in Front End Web Development and Software
          Engineering. I enjoy reading and travelling. Passionate about coding
          and learning new things.
        </PersonalStatement>
      </ProfileCardBox>
    );
  }
}

export default HomePageCard;
