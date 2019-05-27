import React from "react";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";

const ProfileBox = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  ${"" /* overflow: auto; */}
  margin-bottom: 5rem;
  overflow: auto;

  & td {
    padding: 5px 10px;
    vertical-align: text-top;
  }
`;

const Profile = () => {
  return (
    <ProfileBox>
      <ProfileCard title={`Skills`}>
        <table>
          <tr>
            <td>
              <strong>Front End: </strong>
            </td>
            <td>JS, HTML, CSS, SASS</td>
          </tr>
          <tr>
            <td>
              <strong>Back End: </strong>
            </td>
            <td>Node, Express, Loopback, REST API</td>
          </tr>
          <tr>
            <td>
              <strong>Framework: </strong>
            </td>
            <td>React, Redux, Styled Component, Material UI</td>
          </tr>
          <tr>
            <td>
              <strong>Languages: </strong>
            </td>
            <td>JavaScript(ES6), TypeScript, Java, Python, SQL</td>
          </tr>
          <tr>
            <td>
              <strong>Cloud: </strong>
            </td>
            <td>Google Cloud, AWS</td>
          </tr>
        </table>
      </ProfileCard>

      <ProfileCard title={`Education`}>
        <table>
          <tr>
            <td>
              <strong>Jan 2017 - Dec 2018</strong>
            </td>
            <td>
              <strong>Master of Information Technology</strong>
              <br />
              Monash University, Australia
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sep 2009 - Jul 2012</strong>
            </td>
            <td>
              <strong>BA(Hons) Accounting and Finance</strong>
              <br />
              Newcastle University, UK
            </td>
          </tr>
        </table>
      </ProfileCard>
      <ProfileCard title={`Experience`}>
        <table>
          <tr>
            <td>
              <strong>Apr 2019 - Present</strong>
            </td>
            <td>
              <strong>CoderDojo Champion</strong>
              <br />
              ACS CoderDojo, Australia
            </td>
          </tr>
          <tr>
            <td>
              <strong>Jan 2018 - Dec 2018</strong>
            </td>
            <td>
              <strong>Java Peer Assisted Study Session Leader</strong>
              <br />
              Monash University, Australia
            </td>
          </tr>
          <tr>
            <td>
              <strong>Oct 2015 - Nov 2016</strong>
            </td>
            <td>
              <strong>Assurance Associate</strong>
              <br />
              PwC China
            </td>
          </tr>
        </table>
      </ProfileCard>
    </ProfileBox>
  );
};

export default Profile;
