import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import timezones from "../timezones.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Timezone = typeof timezones[0];

export const getTimezonesByString = (text: string): Timezone[] => {
  const normalizedString = text.trim().toLowerCase();

  return timezones.filter((tz: Timezone) => 
    tz.value.toLowerCase().includes(normalizedString)
    || tz.abbr.toLowerCase().includes(normalizedString)
    || tz.text.toLowerCase().includes(normalizedString)
    || tz.utc.find(utc => utc.replace("_", " ").toLowerCase().includes(normalizedString))
  );
};