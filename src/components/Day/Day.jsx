import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Day() {

    const day = 1;
    const currentDay = 1;
    const lastEra = new Date("12/20/2013");
    const today = new Date();
    const yesterday = (today.getTime() / 86400000) - 1;
    const days = Math.round((today.getTime() - lastEra.getTime()) / 86400000);

    return (

        <div>
            {days}
        </div>

    );

}