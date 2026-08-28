const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
      </div>
  )
}

const Total = (props) => {
<<<<<<< HEAD
  return (<p>{props.parts[0] + props.parts[1] + props.parts[2]}</p>
=======
  return (<p>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
>>>>>>> 80f5ffa542a379d657d587748fae20c4879e19bc
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
<<<<<<< HEAD
      { name: 'Fundamentals of React', exercises: 10},
      { name: 'Using props to pass data', exercises: 7},
      { name: 'State of a component', exercises: 14}
=======
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
>>>>>>> 80f5ffa542a379d657d587748fae20c4879e19bc
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
