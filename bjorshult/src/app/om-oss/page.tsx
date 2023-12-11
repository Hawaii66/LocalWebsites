import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Info = {
  header: string;
  text: string;
};

const sections: Info[] = [
  {
    header: "Vår Mission:",
    text: "Vi drivs av en stark övertygelse om att varje individ och varje insats räknas när det gäller att vårda vår planet. Genom att erbjuda en mångfald av tjänster och möjligheter för återvinning strävar vi efter att göra det enkelt och bekvämt för invånarna i Nyköping att delta i hållbara praktiker och minska sin miljöpåverkan.",
  },
  {
    header: "Vårt Engagemang:",
    text: "Vi tar emot allt från vardaglig elektronik till farligt avfall, med en dedikation till ansvarsfull hantering och säker behandling av material. Genom att främja en kultur av medvetenhet och engagemang strävar vi efter att skapa en positiv inverkan på vår lokala miljö och samhälle som helhet.",
  },
  {
    header: "Våra Tjänster:",
    text: "Förutom att vara en insamlingsplats för en mängd olika material, erbjuder vi också informativa och interaktiva resurser för att hjälpa samhället att förstå vikten av korrekt sortering och återvinning. Vår återvinningsquiz är ett roligt och pedagogiskt verktyg för att öka medvetenheten och bidra till ökad kunskap om hållbara vanor.",
  },
  {
    header: "Vår Personal:",
    text: "Vår dedikerade och kunniga personal står redo att assistera och vägleda dig genom din återvinningsresa. Vi tror på att skapa en positiv och inkluderande miljö där varje individ känner sig välkommen och stolt över sitt bidrag till en grönare framtid.",
  },
  {
    header: "Ditt Bidrag:",
    text: "Vi uppmuntrar dig att besöka oss och se till att din insats för miljön räknas. Genom att dela vår vision och delta i våra återvinningsinitiativ blir du en viktig del av vår gemensamma strävan efter en bättre och mer hållbar värld.",
  },
];

function page() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Header header="Om oss" />
      <div className="w-3/5 text-center flex flex-col gap-4">
        <h2 className="font-semibold text-neutral-800">
          Björshults återvinningscentral
        </h2>
        <p>
          Välkommen till vår återvinningscentral i hjärtat av Nyköping! Vi är
          stolta över att vara en central spelare i samhällets
          hållbarhetsinsatser och erbjuder en omfattande lösning för en
          miljövänlig hantering av avfall. Med en placering som sträcker sig
          över alla veckodagar står vår återvinningscentral öppen och välkomnar
          dig att dela vår passion för att skapa en renare och grönare framtid.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        {sections.map((section) => (
          <Card className="w-2/3 shadow-none border-none">
            <CardHeader>
              <CardTitle>{section.header}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{section.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
