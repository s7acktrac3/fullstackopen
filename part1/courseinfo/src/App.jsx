const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  }
  
  
  return (
    <div>
    <Header course={course}></Header>
    <Content parts={course} ></Content>
    <Total parts={course}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
    <Part part={props.parts.parts[0].name} exercise = {props.parts.parts[0].exercises}></Part>
    <Part part={props.parts.parts[1].name} exercise = {props.parts.parts[1].exercises}></Part>
    <Part part={props.parts.parts[2].name} exercise = {props.parts.parts[2].exercises}></Part>
    </div>
  )
}


const Total = (props) => {
  
  return (
    <>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  
  return (
    <p>
    {props.part} {props.exercise}
    </p>
  )
}



export default App