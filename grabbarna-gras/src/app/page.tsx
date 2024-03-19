"use client";
import ActionButton from "@/components/ActionButton";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleGeminiEffect } from "@/components/ui/gem";
import { SparklesCore } from "@/components/ui/sparkles";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";
export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <main className="flex flex-col gap-8">
      <div
        className="relative h-[200vh] w-full overflow-clip bg-black pt-40 dark:border dark:border-white/[0.1]"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-4xl font-bold">Våra tjänster</h2>
        <div className="grid grid-cols-1 gap-8 px-12 md:grid-cols-2 xl:grid-cols-3">
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem className="text-2xl font-semibold" translateZ={50}>
                Gräsklippning
              </CardItem>
              <CardItem translateZ={60}>
                Vi klipper din gräsmatta med en gräsklippare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår efter klipparen.
              </CardItem>
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={-10}
                className="mt-4 w-full"
              >
                <img
                  src="/images/main4.jpg"
                  className="aspect-video w-full rounded-lg"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem className="text-2xl font-semibold" translateZ={50}>
                Kantklippning
              </CardItem>
              <CardItem translateZ={60}>
                Vi kantar din gräsmatta med en kantklippare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår efter klipparen.
              </CardItem>
              <CardItem translateZ={100} rotateX={45} className="mt-4 w-full">
                <img
                  src="/images/main5.jpg"
                  className="aspect-video w-full rounded"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem className="text-2xl font-semibold" translateZ={50}>
                Gödsling
              </CardItem>
              <CardItem translateZ={60}>
                Vi gödslar din gräsmatta med en gödselspridare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår.
              </CardItem>
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={10}
                className="mt-4 w-full"
              >
                <img
                  src="/images/main6.jpg"
                  className="aspect-video w-full rounded"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <ActionButton />
        </div>
      </div>
      <div className="h-12" />
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <h2 className="text-center text-4xl font-bold">Om oss</h2>
          <div className="relative h-10 w-[40rem]">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="h-full w-full"
              particleColor="#550022"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <p className="w-11/12 text-center tracking-wide lg:w-1/2">
          <b className="font-bold">Välkommen till Grabbrarna Gräs!</b>
          <br /> Vi är ett sammansvetsat gäng grabbar från Nyköping med en
          passion för gräsklippning. Beväpnade med slitna klippare och ett gäng
          trädgårdsredskap ger vi varje gräsmatta den perfekta looken. Varje
          helg tar vi oss an uppdraget att göra Nyköping grönt och prydligt. För
          oss handlar det inte bara om gräs - det är vår grej, och vi älskar att
          lämna vårt gröna avtryck överallt vi går. Ta en titt på vårt arbete
          och låt Grabbrarna Gräs göra din trädgård lika snygg som staden vi
          älskar!
        </p>
        <p className="text-center font-bold">- Grabbarna Gräs</p>
        <div className="grid grid-cols-1 gap-8 px-12 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Alexander - Gräsdesignern</CardTitle>
              <CardDescription>
                Alexander är Grabbrarna Gräs konstnär med gräsklipparen. Hans
                öga för design och detaljer skapar unika och vackra gräsmattor
                som ger varje trädgård en konstnärlig touch.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Boe - Gräsmästaren</CardTitle>
              <CardDescription>
                Boe, alias Gräsmästaren, är den snabbaste och mest precisa
                klipparen i gänget. Hans skicklighet och erfarenhet gör varje
                gräsmatteuppdrag till en sömlös och vältrimmad process.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>August - Grönfingret</CardTitle>
              <CardDescription>
                August, eller Grönfingret som vi kallar honom, är Grabbrarna
                Gräs trädgårdsmagi. Hans gröna tumme och kärlek för växter ser
                till att varje trädgård inte bara är välklippt, utan också fylld
                med liv och blommor.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="h-12" />
      <div className="flex w-full items-center justify-center bg-neutral-200 px-12 py-8">
        <div className="grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-2">
          <p>Kontakta Grabbarna Gräs: </p>
          <p>Hemsida utvecklad av Sebastian Ahlman:</p>
          <Link
            className="row-start-2 text-blue-500 md:row-start-2"
            href="mailto:grabbarn"
          >
            grabbarnagras@gmail.com
          </Link>
          <Link
            className="text-blue-500 md:col-start-2"
            target="_blank"
            href="https://github.com/Hawaii66"
          >
            Github (HawaiiDev / Hawaii66)
          </Link>
          <Link
            className="text-blue-500 md:col-start-2"
            href="mailto:hawaiilive@outlook.com"
          >
            hawaiilive@outlook.com
          </Link>
        </div>
      </div>
    </main>
  );
}
