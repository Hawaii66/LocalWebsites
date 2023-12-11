import Header from "@/components/Header";
import SplitView from "@/components/SplitView";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Header header="Välkommen till Nyköpings återvinningscentral" />
      <SplitView>
        <SplitView.Image url="https://dms-api.ntm.eu/api/v1/images/r2mzqwpj/smart/width/980/height/551/as/jpeg/redirect" />
        <div className="flex flex-col gap-4">
          <SplitView.Header header="Öppettider" />
          <p>
            <b>Måndag (12/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Tisdag (13/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Onsdag (14/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Torsdag (15/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Fredag (16/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Lördag (17/12):</b> 08:30 - 17:00
          </p>
          <p>
            <b>Söndag (18/12):</b> 08:30 - 17:00
          </p>
          <Link
            className="flex flex-row gap-4 justify-center items-center underline font-semibold"
            href="/oppettider"
          >
            Se kalendern <Calendar />
          </Link>
        </div>
      </SplitView>
      <SplitView>
        <div>
          <SplitView.Header header="Kort om oss" />
          <p>
            Välkommen till vår återvinningscentral i Nyköping! <br /> <br />
            Vi är öppna varje dag i veckan och tar emot en bred variation av
            material för återvinning. Oavsett om det är elektronik eller farligt
            avfall, är du välkommen att lämna det hos oss. Vi strävar efter att
            göra det enkelt för invånare i Nyköping att bidra till en hållbar
            miljö genom att erbjuda en säker och tillgänglig plats för
            återvinning. Vi ser fram emot att hjälpa dig med ditt
            återvinningsbehov och tackar för ditt engagemang i att minska
            miljöpåverkan.
          </p>
          <br />
          <Link
            className="underline text-neutral-800 font-semibold"
            href="/om-oss"
          >
            Läs mer
          </Link>
        </div>
        <SplitView.Image url="https://dms-api.ntm.eu/api/v1/images/r0302w9r/smart/width/980/height/551/as/webp" />
      </SplitView>
    </div>
  );
}
