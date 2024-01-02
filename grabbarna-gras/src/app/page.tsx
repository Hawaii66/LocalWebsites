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
      <div className="relative flex h-screen w-full flex-col items-center justify-center gap-8 ">
        <img
          className="absolute left-0 top-0 h-full w-full object-cover blur-sm"
          alt="Grass cutting"
          src={"/images/main3.jpg"}
        />
        <div className="z-20 flex  flex-col gap-4 rounded-xl border-8 border-neutral-200 px-12 py-8 text-center text-neutral-200 shadow-xl">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl ">
            Grabbarna Gräs
          </h1>
          <p className="text-lg font-semibold sm:text-xl md:text-2xl">
            Vi klipper din gräsmatta
          </p>
        </div>
        <ActionButton />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-4xl font-bold">Våra tjänster</h2>
        <div className="grid grid-cols-1 gap-8 px-12 md:grid-cols-2 xl:grid-cols-3">
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
                className="aspect-video w-full rounded-lg "
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
                className="aspect-video w-full rounded "
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
                className="aspect-video w-full rounded "
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <ActionButton />
        </div>
      </div>
      <div className="h-12" />
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-4xl font-bold">Om oss</h2>
        <p className="w-11/12 text-center tracking-wide lg:w-1/2">
          <b className="font-bold">Välkommen till Grabbrarna Gräs!</b> Vi är ett
          sammansvetsat gäng grabbar från Nyköping med en passion för
          gräsklippning. Beväpnade med slitna klippare och ett gäng
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
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-4xl font-bold">Tidigare arbeten</h2>
        <p className="text-center tracking-wide">
          Kolla vad vi gjort tidigare!
        </p>
        <Earlier />
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
