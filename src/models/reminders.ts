export type TypeSelectedDate = string;
export interface IReminder {
    id: string,
    title: string,
    date: string,
    time: string,
};
export interface IRemindersState {
    reminders: IReminder[]
    selectedDate: TypeSelectedDate
    selectedReminder: IReminder
    hasSelectedReminder: boolean
}

export const EmptySelectedDate: TypeSelectedDate = "";
export const EmptySelectedReminder: IReminder = {
    id: "",
    title: "",
    date: "",
    time: "",
};
export const EmptyRemindersState: IRemindersState = {
    reminders: [],
    selectedDate: EmptySelectedDate,
    selectedReminder: EmptySelectedReminder,
    hasSelectedReminder: false,
};

export interface IReminderItem {
    reminder: IReminder
}

export interface IReminders {
    reminders: IReminder[]
}