import React from 'react';

interface DateDividerProps {
    date: string;
}
const DateDivider: React.FC<DateDividerProps> = ({ date }) => {
    return (
        <div className="flex items-center justify-start my-6 w-full gap-3">
            <span className=" text-neutral-700 text-base text-left">{date}</span>
            <div className="flex-grow border-t border-solid border-gray-300"></div>
        </div>
    );
};

export default DateDivider;
