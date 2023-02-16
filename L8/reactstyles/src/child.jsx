import "./child.css";
import styled from "styled-components";

const Heading = styled.h1`
  color: blueviolet;
  font-size: 2.2em;
  margin: 0 auto;
  width: 25%;
`;

function Child() {
  return (
    <>
      <p>Hello Child</p>
      <p className="brown">
        This pragraph is styled with a local (component) stylesheet. This should
        be brown.
      </p>
      <Heading>
        This is a heading styled with CSS-in-JSS. This should only use 25% of
        the width.
      </Heading>
    </>
  );
}

export default Child;
