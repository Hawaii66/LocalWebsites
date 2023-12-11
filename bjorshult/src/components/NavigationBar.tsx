import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

function NavigationBar() {
  return (
    <>
      <div className="flex pt-4 px-8 flex-row justify-between items-center">
        <div>
          <Link href="/" className="text-md font-semibold text-neutral-800">
            <h1 className="text-lg font-bold text-neutral-800">
              Björshults återvinningscentral
            </h1>
          </Link>
        </div>
        <nav className="flex flex-row gap-8 justify-end items-center">
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/"
          >
            Hem
          </Link>
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/om-oss"
          >
            Om oss
          </Link>
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/om-oss"
          >
            Quiz
          </Link>
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/om-oss"
          >
            Vart ska ...
          </Link>
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/oppettider"
          >
            Öppettider
          </Link>
          <Link
            className="text-md font-semibold text-neutral-800 underline"
            href="/hitta-hit"
          >
            Hitta hit
          </Link>
        </nav>
      </div>
      <Separator />
    </>
  );
}

export default NavigationBar;
