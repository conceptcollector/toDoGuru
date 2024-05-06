import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Day() {

    const day = 1;
    const dayOne = new Day('12/21/2013');
    const today = new Day();
    // subtract dayOne from today and count days
    // every 28 days is another month
    // so I need to connect to Month for that
    // 13 months + 1 (or 2) days is a year

    // so... leap years...
    // the first leap year is 2016, I think...
    // so I think that the best way to do this is
    // to set a first leapYear, too
    // jury's currently out on if leapYear is handled in
    // Day or Year (or hell... Month is plausible)

    return (

        <div>

        </div>

    );

}