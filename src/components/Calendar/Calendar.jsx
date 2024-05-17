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
    let currentDay;
    let currentMonth;
    let currentYear;
    // 28 days is a month
    // 13 months is 364 days
    // day 365 (and 366) need to be skipped and then restarted
    // so I suppose I can just have it loop within one year...
    // % maybe? 😅

    // I think triggering the month reset comes in year
    // using that same logic, I think triggering the day reset
    // comes in month

    // Hail Eris!
    // I think I need to pseudocode out the ENTIRE function first:
    // So... year.
    // A year is 365 days. (days === 1)
    // On 12/21/2013 currentYear = 1
    // today - lastEra (maybe??) === 365
    // currentYear++;
    // And then, of course, we have the leap years.
    // leapYear is 366 days.
    // So... the first question,
    // is there a way to refer back to the previous iteration of an interating variable?

    // forEach...

    // Nope! That's only for arrays.
    // setDate is what I'll be using here.
    // So... this is still a little complicated...
    // let me think...

    // When the day is 365 days away from dayOne,
    // then the loop starts over again.

    function calculateYear() {
        for (let i = 1; i < 20; i++) {
            currentYear = i;
            // if ((today.getTime() / 86400000) - day === 365) {
            //     if (currentYear === i - 1 || currentYear === undefined) {
            //         currentYear++;
            //         return currentYear;
            //     }
            // }
        }
    }
    
    function calculateMonth() {
        for (let i = 0; i < 13; i++) {
            currentMonth = i + 1;
            if ((today.getTime() / 86400000) - day === 28) {
                console.log(currentMonth);
                return currentMonth;
            }
    }
}

    for (let j = 0; j < 19; j++) {

        if ((today.getTime() / 86400000) - day === 365) {
        }

                // currentMonth++;
                // currentDay = 1;
            }
    
    

    return (

        <div>
            {/* What's the matter with {calculateYear}? */}
           /{currentMonth}/{days}
        </div>

    )

}