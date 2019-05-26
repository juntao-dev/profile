import React from "react";
import styled from "styled-components";

const ProfileCardBox = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-rows: 50% 30% 20%;
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
  font-size: 2rem;
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

const HeaderSecondary = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const PersonalStatement = styled.div`
  display: absolute;
  bottom: 10px;
  margin: 0;
  font-size: 1.7rem;
  font-style: italic;
  width: 100%;
`;

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleList: [
        "Front End Developer",
        "Monash University Graduate",
        "Professional Year Student"
      ],
      roleMsg: "",
      isDeleting: false,
      currentIndexCount: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  tick() {
    let newMsg = null;
    let currentElementIndex =
      this.state.currentIndexCount % this.state.roleList.length;
    let currentElement = this.state.roleList[currentElementIndex];

    if (this.state.isDeleting) {
      newMsg = currentElement.substring(0, this.state.roleMsg.length - 1);
    } else {
      newMsg = currentElement.substring(0, this.state.roleMsg.length + 1);
    }

    // debugger;
    if (
      !this.state.isDeleting &&
      this.state.roleMsg === this.state.roleList[currentElementIndex]
    ) {
      this.setState({
        isDeleting: true
      });
    } else if (this.state.isDeleting && this.state.roleMsg === "") {
      this.setState({
        isDeleting: false,
        currentIndexCount: this.state.currentIndexCount + 1
      });
    }

    this.setState({
      roleMsg: newMsg
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <ProfileCardBox>
        <HeaderPrimary>
          <HeaderPrimaryBox>
            <InlineBlockDiv>
              <a href="https://www.linkedin.com/in/juntaozeng/">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="linkedin logo"
                />
              </a>
            </InlineBlockDiv>
            <InlineBlockDiv>Juntao Zeng</InlineBlockDiv>
          </HeaderPrimaryBox>
        </HeaderPrimary>
        <HeaderSecondary>{this.state.roleMsg}</HeaderSecondary>
        <PersonalStatement>
          Recent Monash University Graduate, seeking career opportunities in
          Front End Web Development and Software Engineering.
        </PersonalStatement>
      </ProfileCardBox>
    );
  }
}

export default ProfileCard;
