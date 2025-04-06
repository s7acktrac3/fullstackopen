import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  
  let total = good + neutral + bad
  let average = total === 0 ? 0 : (good - bad) / total
  let positive = total === 0 ? 0 : (good / total) * 100
  
  if (total === 0 ) {
    return (
      <div>
      <Header title="Give Feedback"></Header>
      <Button title="good" onClick={incrementGood}></Button>
      <Button title="neutral" onClick={incrementNeutral}></Button>
      <Button title="bad" onClick={incrementBad}></Button>
      
      <Header title="Statistics"></Header>
      <p> No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <Header title="Give Feedback"></Header>
    <Button title="good" onClick={incrementGood}></Button>
    <Button title="neutral" onClick={incrementNeutral}></Button>
    <Button title="bad" onClick={incrementBad}></Button>
    
    <Header title="Statistics"></Header>
    <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}></Statistics>
    </div>
  )
}

const Header = ({title}) => <h1> {title} </h1>


const Button = ({title, onClick}) => {
  
  return (
    <button onClick={onClick}>
    {title}
    </button>
  )
}

const Statistics = ({good, bad, neutral, total, average, positive}) => {
  
  return (
    
    <div>
    <table>
    <tbody>
    <StatisticLine text="Good" value={good}></StatisticLine>
    <StatisticLine text="Neutral" value={neutral}></StatisticLine>
    <StatisticLine text="Bad" value={bad}></StatisticLine>
    <StatisticLine text="Total" value={total}></StatisticLine>
    <StatisticLine text="Average" value={average}></StatisticLine>
    <StatisticLine text="Positive" value={positive}></StatisticLine> 
    </tbody>
    </table>
    </div>
  )
}

const StatisticLine = (props) => {

  if (props.text == "Positive") {
    return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value} %</td>  
      </tr>
    ) 
  }
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>  
    </tr>
  )
}
export default App