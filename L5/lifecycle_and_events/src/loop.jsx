function Loop() {
  const dogs = [
    { name: "Boss", age: 3 },
    { name: "Plutten", age: 7 },
    { name: "Alerberto", age: 12 },
  ];

  // array filter, map

  // newArray = oldArray.map(<funktion>);     (element, index, array) => { return element.age }
  const newAgeArray = dogs.map((e, i) => {
    return e.age;
  });
  console.log(newAgeArray);

  let myDogs = (dogArray) => {
    const retArray = [];
    for (let i = 0; i < dogs.length; i++) {
      retArray.push(<li key={i}>{dogs[i].name}</li>);
    }
    return retArray;
  };

  //   let myDogs2 = () =>
  //     dogs.map((e, i) => {
  //       return <li key={i}>{e.name} </li>;
  //     });

  return (
    <>
      <h2>With map()</h2>
      <ul>
        {dogs.map((e, i) => {
          return <li key={i}>{e.name} </li>;
        })}
      </ul>
      <h2>With function</h2>
      <ul>{myDogs()}</ul>
    </>
  );
}

export default Loop;
