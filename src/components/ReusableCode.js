import styled from "styled-components";
import "../global.scss";

export const BoldTitle = styled.h1`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => (props.primary ? "black" : "white")};
  /* margin-left: ${(props) => props.margin}rem; */
`;

export const ColoredButton = styled.button`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  border-radius: 0.5rem;
  padding: ${(props) => props.padding}rem;
  background: linear-gradient(
    90deg,
    rgba(71, 0, 216, 1) 36%,
    rgba(153, 0, 240, 1) 100%
  );
  font-size: ${(props) => props.size}rem;
  color: white;
  border: none;
`;

export const TitleUnderline = styled.div`
  border: none;
  background: linear-gradient(
    90deg,
    rgba(71, 0, 216, 1) 36%,
    rgba(153, 0, 240, 1) 100%
  );
  height: 0.3rem;
  width: 8rem;
`;
