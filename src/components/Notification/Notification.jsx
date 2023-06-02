import styled from "styled-components";

const StyledTitle = styled.p`
font-size: x-large;
margin-bottom: 30px;
font-weight: bold;
`;

export const Notification = ({ message }) => <StyledTitle>{message}</StyledTitle>;