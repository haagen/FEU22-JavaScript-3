import Child from "./child";
import { coolHeadline } from "./style";
import styles from "./parent.module.css";

function Parent() {
  const myConstantStyle = {
    color: "magenta",
    fontSize: "22pt",
  };

  return (
    <>
      <p className="red">Hello World!</p>
      <Child />
      <hr />
      <p style={{ fontWeight: 800 }}>
        This has been styled inline (should be bold).
      </p>
      <p style={myConstantStyle}>
        This style has been styled inline using a constant / variable. (Should
        be magenta and big).
      </p>
      <p style={coolHeadline}>
        This style has been styled inline using a constant / variable in a
        JavaScript-module. (Should be small, bold and brown)
      </p>
      <hr />
      <p className={styles.blue}>
        This style has been styled using CSS modules. (should be blue).
      </p>
    </>
  );
}

export default Parent;
