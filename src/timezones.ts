import timezones from './timezones_data.json';

export type Timezone = (typeof timezones)[number];
export default timezones;
