import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const monthsOfTheYear = [
    {
        id: 1,
        name: 'January',
        maxDays: 31,
    },
    {
        id: 2,
        name: 'February',
        maxDays: 29,
    },
    {
        id: 3,
        name: 'March',
        maxDays: 31,
    },
    {
        id: 4,
        name: 'April',
        maxDays: 30,
    },
    {
        id: 5,
        name: 'May',
        maxDays: 31,
    },
    {
        id: 6,
        name: 'June',
        maxDays: 30,
    },
    {
        id: 7,
        name: 'July',
        maxDays: 31,
    },
    {
        id: 8,
        name: 'August',
        maxDays: 31,
    },
    {
        id: 9,
        name: 'September',
        maxDays: 30,
    },
    {
        id: 10,
        name: 'October',
        maxDays: 31,
    },
    {
        id: 11,
        name: 'November',
        maxDays: 30,
    },
    {
        id: 12,
        name: 'December',
        maxDays: 31,
    },
]

export const daysOfTheMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] 

export const MAILCHIMP_CREDENTIALS = {
    audienceId: process.env.DEFAULT_AUDIENCE_ID,
    serverPrefix: process.env.SERVER_PREFIX,
}