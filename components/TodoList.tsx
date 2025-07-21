"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { BadgeCheck } from "lucide-react";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">No todos yet. Add something above!</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200"
        >
          <BadgeCheck className="text-green-500" size={18} />
          <span className="text-gray-800">{todo}</span>
        </li>
      ))}
    </ul>
  );
}
