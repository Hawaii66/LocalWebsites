import React from "react";

type Props = {
  header: string;
};

function Header({ header }: Props) {
  return (
    <h1 className="font-bold text-lg text-center text-neutral-800">{header}</h1>
  );
}

export default Header;
