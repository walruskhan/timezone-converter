import { expect, test } from 'vitest'
import { getTimezonesByString } from "./utils";

test('should return exact timezone matches', () => {
  const result = getTimezonesByString('America/New York');
  expect(result).toContainEqual(expect.objectContaining({
    text: '(UTC-05:00) Eastern Time (US & Canada)'
  }));
});

test('should return partial matches for names', () => {
  const result = getTimezonesByString('York');
  expect(result.length).toBeGreaterThan(0);
  expect(result.some(tz => tz.utc.some(utc => utc.includes('York')))).toBe(true);
});


test('should be case insensitive', () => {
  const lowerResult = getTimezonesByString('new york');
  const upperResult = getTimezonesByString('NEW YORK');
  const mixedResult = getTimezonesByString('New York');
  
  expect(lowerResult).toEqual(upperResult);
  expect(lowerResult).toEqual(mixedResult);
});

test('should return empty array for non-existent timezone', () => {
  const result = getTimezonesByString('NonExistent/Timezone');
  expect(result).toEqual([]);
});

test('should handle empty string input', () => {
  const result = getTimezonesByString('');
  expect(Array.isArray(result)).toBe(true);
});

test('should handle spaces in search string', () => {
  const result = getTimezonesByString('Los Angeles');
  expect(result.some(tz => tz.utc.some(utc => utc.includes('Los_Angeles')))).toBe(true);
});

test('should return results with correct structure', () => {
  const result = getTimezonesByString('London');
  if (result.length > 0) {
    expect(result[0]).toHaveProperty('value');
    expect(typeof result[0].value).toBe('string');
  }
});