import { Clock8Icon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { DateTime } from 'luxon';

export interface TimePickerProps {
  date?: DateTime;
  onDateChange?: (date: DateTime) => void;
}

const timeStringFromDate = (date: DateTime) => {
  const hours = date.hour.toString().padStart(2, '0');
  const minutes = date.minute.toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

const TimePicker = ({ date, onDateChange }: TimePickerProps) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="relative">
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
          <Clock8Icon className="size-4" />
          <span className="sr-only">User</span>
        </div>
        <Input
          type="time"
          id="time-picker"
          step="60"
          defaultValue={timeStringFromDate(date ?? DateTime.local())}
          onChange={(e) => {
            if (onDateChange) {
              const [hours, minutes] = e.target.value.split(':').map(Number);

              const newDate = (date ?? DateTime.local()).set({
                hour: hours,
                minute: minutes,
                second: 0,
              });
              console.log(newDate, newDate.toString());

              onDateChange(newDate);
            }
          }}
          className="peer bg-background appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
};

export default TimePicker;
