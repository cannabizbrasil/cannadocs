import HeroCannaDocs from "@/components/hero";
import CtaCannaDocs from "@/components/cta";
import StatsCannaDocs from "@/components/stats";
import NavBar from "@/components/navbar";
import DepoimentosCannaDocs from "@/components/depoimentos";
import VideoCannaDocs from "@/components/video";
import CardsCannaDocs from "@/components/cards";
import FaqCannaDocs from "@/components/faq";
import FooterCannaDocs from "@/components/footer";
import PriceCannaDocs from "@/components/price";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroCannaDocs />
      <StatsCannaDocs />
      <CtaCannaDocs />
      <CardsCannaDocs />
      <VideoCannaDocs />
      <DepoimentosCannaDocs />
      <PriceCannaDocs />
      <FaqCannaDocs />
      <FooterCannaDocs />
    </main>
  );
}
