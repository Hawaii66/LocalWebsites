"use client";
import React from "react";
import Link from "next/link";

function ActionButton() {
  return (
    <Link
      href={"/boka"}
      className="text-bold z-20 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-semibold !text-neutral-800 shadow-lg shadow-yellow-500 transition-all hover:bg-yellow-400 active:scale-95 active:bg-yellow-300"
    >
      Boka besök
    </Link>
  );
}

export default ActionButton;
