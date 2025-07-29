import { DateRange } from "react-day-picker";

export const formatDateRange = (dateRange: DateRange) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  const fromDate = dateRange.from?.toLocaleDateString('en-US', options);
  const toDate = dateRange.to?.toLocaleDateString('en-US', options);

  return `${fromDate} - ${toDate}`;
};