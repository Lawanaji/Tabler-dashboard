import { TrashSimple } from "@phosphor-icons/react";
import React from "react";

const Table = () => {
  const TABLE_HEAD = ["USER", "COMMIT", "DATE"];
  const TABLE_ROW = [
    {
      user: "Rold Bradly",
      commit: "Commit Message",
      date: "May 6, 2018",
    },
    {
      user: "Rold Bradly",
      commit: "Commit Message",
      date: "May 6, 2018",
    },
  ];
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full table-auto text-center whitespace-nowrap">
        <thead>
          <tr className="border-b border-[#e1e4ec]">
            {TABLE_HEAD.map((head) => (
              <th className="p-3" key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROW.map(({ user, commit, date }, index) => (
            <tr key={index} className="border-b border-[#e1e4ec]">
              <td className="flex justify-start items-center gap-3 p-4">
                <span className="inline-block w-[36px] h-[36px] border rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                </span>

                {user}
              </td>
              <td className="p-4">{commit}</td>
              <td className="p-4">{date}</td>
              <td className="p-4 cursor-pointer">
                <TrashSimple size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
