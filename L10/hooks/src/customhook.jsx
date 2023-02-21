import useMyHook from "./myHook";

function CustomHook(props) {
  const [counter] = useMyHook();

  return (
    <>
      <strong>My hook counter:</strong> {counter} <br />
    </>
  );
}

export default CustomHook;
