import dayjs, { Dayjs } from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat); // use plugin

export const formatDate = (date: string): Dayjs => {
  return dayjs(date);
};

export const toDateString = (date: Date, format: string): string => {
  return dayjs(date).format(format);
};

export const getDateFromPast = (subtract: number, hours: number, minutes: number): string => {
  return dayjs().subtract(subtract, 'day').startOf('day').add(hours, 'hour').add(minutes, 'minute').format('DD/MM/YYYY hh:mm a');
};

type DateType = Dayjs;

export type { DateType };
