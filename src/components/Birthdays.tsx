import { useState } from "react";
import { BIRTHDAY_DATA } from "../data";
import type { BirthdayProps } from "../types/BirthdayProps";
import Birthday from "./Birthday";

const Birthdays = () => {
  const [birthdays, setBirthdays] = useState<BirthdayProps[]>(BIRTHDAY_DATA);

  const onClearAllHandler = () => {
    setBirthdays([]);
  }

  const onRefreshHandler = () => {
    setBirthdays(BIRTHDAY_DATA);
  }

  return (
    <div className="max-w-sm bg-white mx-auto my-8 p-5">
      {
        birthdays.length > 0 &&
        <h1 className="text-[25px] mb-6 text-center font-bold">
          <span>{birthdays.length} Birthdays Today</span>
          <span className="flex h-1 bg-pink-400 w-40 mx-auto"></span>
        </h1>
      }
      <ul>
        {!!birthdays.length && birthdays.map((birthday: BirthdayProps) => {
          return <Birthday {...birthday} key={birthday.id} />
        })}
        {!birthdays.length && <p className="text-center text-[14px] text-gray-300">No Birthdays Today</p>}
        {birthdays.length > 0 ? (<li>
          <button className="px-6 py-2 mt-4 text-white text-[18px] w-full bg-pink-600 text-center cursor-pointer" onClick={onClearAllHandler}>Clear All</button>
        </li>) : (<li>
          <button className="px-6 py-2 mt-4 text-white text-[18px] w-full bg-green-600 text-center cursor-pointer" onClick={onRefreshHandler}>Refresh</button>
        </li>)}

      </ul>
    </div >
  );
}

export default Birthdays