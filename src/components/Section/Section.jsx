import styled from "styled-components";

const StyledTitle = styled.h2`
font-size: x-large;
margin-bottom: 30px;
`;

export const Section = ({ title, children }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </>
);