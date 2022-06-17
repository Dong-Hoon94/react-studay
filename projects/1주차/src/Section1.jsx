
function Section(props) {
  console.log(props.data);
  return (
    <section>
      <ul>
        <li>
          <span>id: {props.data[0].id}</span>&nbsp;&nbsp;&nbsp;
          <span>name:{props.data[0].name}</span>&nbsp;&nbsp;&nbsp;
          <span>age: {props.data[0].age}</span>&nbsp;&nbsp;&nbsp;
        </li>
        <li>
        <span>id: {props.data[1].id}</span>&nbsp;&nbsp;&nbsp;
        <span>name:{props.data[1].name}</span>&nbsp;&nbsp;&nbsp;
        <span>age:{props.data[1].age}</span>&nbsp;&nbsp;&nbsp;
        </li>
        <li>
        <span>id:{props.data[2].id}</span>&nbsp;&nbsp;&nbsp;
        <span>name{props.data[2].name}</span>&nbsp;&nbsp;&nbsp;
        <span>age:{props.data[2].age}</span>&nbsp;&nbsp;&nbsp;
        </li>
      </ul>
    </section>
  )
}

export default Section;