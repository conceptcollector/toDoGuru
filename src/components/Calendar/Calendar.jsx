import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Calendar() {

    const day = 1;
    const month = 28;
    const year = 365;
    const leapYear = 366;
    const lastEra = new Date("12/20/2013");
    const today = new Date();
    const yesterday = (today.getTime() / 86400000) - 1;
    const days = Math.round((today.getTime() - lastEra.getTime()) / 86400000);
    const currentDay = 1;
    const currentMonth = 1;
    const currentYear = 1;
    // 28 days is a month
    // 13 months is 364 days
    // day 365 (and 366) need to be skipped and then restarted
    // so I suppose I can just have it loop within one year...
    // % maybe? 😅

    // I think triggering the month reset comes in year
    // using that same logic, I think triggering the day reset
    // comes in month

    for (let j = 0; j < 19; j++) {

        if ((today.getTime() / 86400000) - day === 365) {
            currentYear++;
            currentMonth = 1;
        }

        for (let i = 0; i < 13; i++) {

            if ((today.getTime() / 86400000) - day === 28) {
                currentMonth++;
                currentDay = 1;
            }
    
        }
    }
    

    return (

        <div>
            {currentYear}/{currentMonth}/{days}
        </div>

    )

}