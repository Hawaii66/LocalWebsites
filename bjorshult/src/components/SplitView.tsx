import React from "react";
import { Separator } from "./ui/separator";

type Props = {
  children: [React.ReactNode, React.ReactNode];
};

function SplitView({ children }: Props) {
  return (
    <div className="flex flex-row gap-8 w-2/3 border p-8 rounded-xl justify-center items-center shadow">
      <div className="w-1/2">{children[0]}</div>
      <div className="w-1/2">{children[1]}</div>
    </div>
  );
}

function SplitViewImage({ url }: { url: string }) {
  return <img src={url} className="rounded-xl" />;
}

function SplitViewHeader({ header }: { header: string }) {
  return (
    <>
      <h2 className="font-semibold text-neutral-800 text-center">{header}:</h2>
      <Separator />
    </>
  );
}

SplitView.Image = SplitViewImage;
SplitView.Header = SplitViewHeader;

export default SplitView;
