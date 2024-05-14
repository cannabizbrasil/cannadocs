import HeroCannaDocs from "@/components/hero";
import CtaCannaDocs from "@/components/cta";
import StatsCannaDocs from "@/components/stats";
import NavBar from "@/components/navbar";
import DepoimentosCannaDocs from "@/components/depoimentos";
import VideoCannaDocs from "@/components/video";
import CardsCannaDocs from "@/components/cards";
import FaqCannaDocs from "@/components/faq";
import CadastroCannaDocs from "@/components/cadastro";
import FooterCannaDocs from "@/components/footer";


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
      <FaqCannaDocs />
      <CadastroCannaDocs />
      <FooterCannaDocs />


    </main>
  );
}
