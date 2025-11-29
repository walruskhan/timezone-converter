import { DateTime, type ToISOTimeDurationOptions } from 'luxon';
import { useEffect, useMemo, useState } from 'react';
import { getTimezonesByString } from '../lib/utils';
import timezones from '../timezones';
import type { Timezone } from '../timezones';
import { Input } from './ui/input';

export interface TimezonePickerProps {
  searchText?: string;
  onTimezoneselected?: (tz: string) => void;
}

interface TimezoneRowProps extends Pick<TimezonePickerProps, 'onTimezoneselected'> {
  tz: Timezone;
}

const TimezoneRow = ({ tz }: TimezoneRowProps) => {
  return (
    <li>
      <span>{tz.text}</span>
    </li>
  );
};

const TimezonePicker = ({
  searchText,
  onTimezoneselected,
}: TimezonePickerProps) => {
  const [text, setText] = useState<string>(searchText ?? '');

  useEffect(() => {
    setText(searchText ?? '');
  }, [searchText]);

  const getFilteredTimezones = useMemo(() => {
    return getTimezonesByString(text);
  }, [text]);

  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} />
      <div className="h-[50vh] overflow-scroll">
        <ul>
          {getFilteredTimezones.map((tz) => (
            <TimezoneRow tz={tz} key={tz.value} onTimezoneselected={onTimezoneselected} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimezonePicker;
