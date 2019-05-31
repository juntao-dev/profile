import React from "react";
import styled from "styled-components";

const ProfileCardBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const HeaderPrimary = styled.div`
  justify-self: center;
  width: 100%;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  display: grid;
  justify-items: center;
  grid-gap: 3rem;
`;

const HeaderPrimaryBox = styled.div`
  justify-items: center;
  display: inline-block;
  width: 100%;
  display: grid;
  align-items: center;
`;

const PersonalStatement = styled.div`
  padding: 10rem;
  display: inline-block;
  font-size: 1.5rem;
  font-style: italic;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    padding: 2rem;
  }
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
          <HeaderPrimaryBox>Juntao Zeng</HeaderPrimaryBox>
          <HeaderPrimaryBox>
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin logo"
              onClick={this.handleLinkedInIconClick}
              style={{ cursor: "pointer" }}
            />
          </HeaderPrimaryBox>
        </HeaderPrimary>
        <PersonalStatement>
          Recent IT Graduate from Monash University, seeking career
          opportunities in Front End Web Development and Software Engineering.
        </PersonalStatement>
      </ProfileCardBox>
    );
  }
}

export default HomePageCard;
