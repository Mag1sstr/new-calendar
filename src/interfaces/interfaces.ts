export interface IMonthDays {
  day: number;
  title: string;
  click: boolean;
  year: number;
  month: number;
}

export interface ISaved {
  year: number;
  month: number;
  saved: IMonthDays[];
}
