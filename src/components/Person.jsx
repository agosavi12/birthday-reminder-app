const Person = ({ person }) => {
  const { id, name, age, image } = person;
  return (
    <article className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} Years old</p>
      </div>
    </article>
  );
};
export default Person;
