import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import timezones from '../timezones';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Timezone = (typeof timezones)[0];

export const getTimezonesByString = (
  text: string | null | undefined
): Timezone[] => {
  if (text === null || text === undefined) {
    return timezones;
  }

  const normalizedString = text.trim().toLowerCase();
  if (normalizedString.length === 0) {
    return timezones;
  }

  return timezones.filter(
    (tz: Timezone) =>
      tz.value.toLowerCase().includes(normalizedString) ||
      tz.abbr.toLowerCase().includes(normalizedString) ||
      tz.text.toLowerCase().includes(normalizedString) ||
      tz.utc.find((utc) =>
        utc.replace('_', ' ').toLowerCase().includes(normalizedString)
      )
  );
};
