import ActionButton from "@/components/ActionButton";
import Earlier from "@/components/Earlier";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col gap-8 bg-white">
      <div className="relative flex flex-col justify-center items-center gap-8 w-full h-screen">
        <img
          className="top-0 left-0 absolute blur-sm w-full h-full object-cover"
          alt="Grass cutting"
          src={"/images/main3.jpg"}
        />
        <div className="z-20 flex flex-col gap-4 border-8 border-neutral-200 shadow-xl px-12 py-8 rounded-xl text-center text-neutral-200">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl">
            Grabbarna Gräs
          </h1>
          <p className="font-semibold text-lg sm:text-xl md:text-2xl">
            Vi klipper din gräsmatta
          </p>
        </div>
        <ActionButton />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="font-bold text-4xl text-center">Våra tjänster</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-12">
          <Card>
            <CardHeader>
              <CardTitle>Gräsklippning</CardTitle>
              <CardDescription>
                Vi klipper din gräsmatta med en gräsklippare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår efter klipparen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/images/main4.jpg"
                className="rounded-lg w-full aspect-video"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kantklippning</CardTitle>
              <CardDescription>
                Vi kantar din gräsmatta med en kantklippare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår efter klipparen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/images/main5.jpg"
                className="rounded w-full aspect-video"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gödsling</CardTitle>
              <CardDescription>
                Vi gödslar din gräsmatta med en gödselspridare. Du behöver inte
                oroa dig för att gräset blir för långt eller att det blir fula
                spår.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/images/main6.jpg"
                className="rounded w-full aspect-video"
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <ActionButton />
        </div>
      </div>
      <div className="h-12" />
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="font-bold text-4xl text-center">Om oss</h2>
        <p className="w-11/12 lg:w-1/2 text-center tracking-wide">
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
        <p className="font-bold text-center">- Grabbarna Gräs</p>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-12">
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
      <div className="flex justify-center items-center bg-neutral-200 px-12 py-8 w-full">
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 grid-rows-3">
          <p>Kontakta Grabbarna Gräs: </p>
          <p>Hemsida utvecklad av Sebastian Ahlman:</p>
          <Link
            className="row-start-2 md:row-start-2 text-blue-500"
            href="mailto:grabbarn"
          >
            grabbarnagras@gmail.com
          </Link>
          <Link
            className="md:col-start-2 text-blue-500"
            target="_blank"
            href="https://github.com/Hawaii66"
          >
            Github (HawaiiDev / Hawaii66)
          </Link>
          <Link
            className="md:col-start-2 text-blue-500"
            href="mailto:hawaiilive@outlook.com"
          >
            hawaiilive@outlook.com
          </Link>
        </div>
      </div>
    </main>
  );
}
