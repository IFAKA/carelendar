export type TypeIndexMonthState = number;

export const EmptyIndexMonthState: TypeIndexMonthState = new Date().getMonth();

export interface IWeek {
    days: TypeDate[]
}

export interface IDay {
    day: TypeDate
}

export type TypeDate = string