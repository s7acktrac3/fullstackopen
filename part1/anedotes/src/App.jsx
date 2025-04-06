import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let maxVotes = 0
  let maxIndex = 0

  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0, 7:0 })
  
  const randomAnedote = ()=> {
    let generated = Math.floor(Math.random() * 8)
    setSelected(generated)
  }

  const doVote = () => {
    const copy = { ...vote }
    copy[selected] += 1


    setVotes(copy)
  }

  for (let key in vote) {
    if (vote[key] > maxVotes) {
      maxVotes = vote[key]
      maxIndex = key
    }
  }
  console.log(maxIndex, maxVotes)

  return (
    <div>
      <h1>Anedote of the Day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes </p>
      <button onClick={doVote}  > Vote</button>
      <button onClick={randomAnedote}> Next Anecdote</button>
      <h1>Anedote With Most Votes</h1>
      {anecdotes[maxIndex]}


    </div>
  )
}

export default App