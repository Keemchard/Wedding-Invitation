import React from "react";
import { Guest } from "../../../types/types";

interface Prop {
  guest: Guest[];
}

const GuestTable = ({ guest }: Prop) => {
  return (
    <div className="p-7 flex flex-col items-center">
      {guest.length === 0 ? (
        <div className="bg-[gray]">No Guest Yet</div>
      ) : (
        <table className="guest-table w-[80%]">
          <tbody>
            <tr className="bg-wd_coffee text-wd_mikado_yellow text-left">
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
            {guest.map((guest: Guest) => {
              return (
                <tr key={Math.random()}>
                  <td>{guest.first_name}</td>
                  <td>{guest.last_name}</td>
                  <td>{guest.date}</td>
                  <td>{guest.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GuestTable;
