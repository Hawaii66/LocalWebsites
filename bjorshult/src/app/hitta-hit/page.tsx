import Header from "@/components/Header";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Header header="Hitta hit" />
      <div>
        <p className="font-semibold">Address</p>
        <p className="pl-4">Björnhultsvägen, 611 92 Nyköping</p>
      </div>
      <div>
        <p className="font-semibold">Kör hit</p>
        <p className="pl-4">
          Från Nyköping centrum kör mot Arnö Industriområde och följ vägen till
          en rondell. Ta sista utfarten och följ vägen till Nyköpings ÅVC.
        </p>
      </div>
      <div className="w-2/3">
        <img src="/map.png" className="rounded-xl" />
        <p className="pl-4">Vi ligger vid den blåa markören</p>
      </div>
    </div>
  );
}

export default Page;
