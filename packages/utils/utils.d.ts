export function listDates(startDate: Date, endDate: Date): Date[];
interface DateFormats {
  slash: string;
  dash: string;
}
export function parseDate(date: Date): DateFormats;
