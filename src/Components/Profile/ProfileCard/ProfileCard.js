import React from "react";
import styled from "styled-components";

const ProfileCardBox = styled.div`
  width: 50vw;
  display: inline-block;
  margin: 1rem auto;
`;

const ProfileCardHeader = styled.div`
  width: 100%;
  background-color: #adad85;
  font-size: 1.5rem;
  text-align: left;
  padding: 0.5rem;
  font-weight: bold;
`;

const ProfileCardContent = styled.div`
  display: block;
  width: 100%;
  ${"" /* background-color: #ffeecc; */}
  background-color: #ffe0cc;
  text-align: left;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: auto;
`;

const ProfileCard = props => {
  return (
    <ProfileCardBox>
      <ProfileCardHeader>{props.title}</ProfileCardHeader>
      <ProfileCardContent>{props.children}</ProfileCardContent>
    </ProfileCardBox>
  );
};

export default ProfileCard;
