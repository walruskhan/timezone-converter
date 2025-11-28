import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import DatePicker from './components/DatePicker'
import TimePicker from './components/TimePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <DatePicker placeholder='Date' />
      <TimePicker onDateChange={v => console.log(v)} />
    </div>
  )
}

export default App
