import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Day from '../Day/Day';

export default function Month() {

    const month = 1;
    // 28 days is a month
    // 13 months is 364 days
    // day 365 (and 366) need to be skipped and then restarted
    // so I suppose I can just have it loop within one year...
    // % maybe? 😅

    return (

        <div>

        </div>

    );

}