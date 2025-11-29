import { Button } from '@/components/ui/button';
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import TimezonePicker from './components/TimezonePicker';
import './App.css';

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <DatePicker placeholder="Date" />
      <TimePicker onDateChange={(v) => console.log(v)} />

      <div className="flex flex-row gap-4 m-4">
        <TimezonePicker />
        <TimezonePicker />
      </div>
    </div>
  );
}

export default App;
