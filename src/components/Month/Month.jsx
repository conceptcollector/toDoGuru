import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Day from '../Day/Day';

export default function Month() {

    const month = 28;
    const currentMonth = 1;
    // 28 days is a month
    // 13 months is 364 days
    // day 365 (and 366) need to be skipped and then restarted
    // so I suppose I can just have it loop within one year...
    // % maybe? 😅

    // I think triggering the month reset comes in year
    // using that same logic, I think triggering the day reset
    // comes in month

    for (let i = 0; i < 13; i++) {

    }
    if ((today.getTime() / 86400000) - day === 28) {
        currentMonth++;
        currentDay = 1;
    }
    return (

        <div>
            {currentMonth}
        </div>

    );

}