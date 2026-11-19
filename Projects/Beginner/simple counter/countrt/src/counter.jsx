
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `Count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))

 // setCounter(0)


import { useState } from 'react'

export default function Counter() {
  const [count, setcount] = useState(0)

  return (
    <div>
      <h1>counter app</h1>
      <h1>Count is {count}</h1>
      <button onClick={() => setcount(count => count + 1)}>Increment</button>
      <button onClick={() => setcount(count => count - 1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </div>
  )
}

