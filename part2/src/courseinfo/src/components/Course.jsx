
const Header = ({name}) => {
  return <h2>{name}</h2>
}
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return <p>total of {total} exercises</p>
}
const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default Course