import { StyledButton } from "./FeedbackOptionsStyled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option) => (
        <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </StyledButton>
      ))}
    </div>
  );