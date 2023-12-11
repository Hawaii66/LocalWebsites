import React from "react";
import NavigationBar from "./NavigationBar";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <>
      <Separator />
      <footer className="flex flex-col gap-4 mb-16">
        <h2 className="font-semibold text-center font-md">Länkar</h2>
        <div className="flex flex-row gap-8 justify-center items-center">
          <Link
            className="flex flex-row gap-2"
            target="_blank"
            href="https://www.facebook.com/nykopingskommun"
          >
            <Facebook />
            <p>Nyköpings kommun</p>
          </Link>
          <Link
            className="flex flex-row gap-2"
            target="_blank"
            href="https://www.instagram.com/nykopingskommun/"
          >
            <Instagram />
            <p>Nyköpings kommun</p>
          </Link>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <Link
            className="flex flex-row gap-2"
            target="_blank"
            href="https://www.sebastianahlman.se"
          >
            <ExternalLink />
            <p>Utvecklare: Sebastian Ahlman</p>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
