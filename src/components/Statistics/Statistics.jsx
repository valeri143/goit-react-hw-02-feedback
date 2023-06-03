import styled from "styled-components";

const StyledBox = styled.div`
font-weight: bold;
font-size: large;
`;

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StyledBox >
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StyledBox>
  );