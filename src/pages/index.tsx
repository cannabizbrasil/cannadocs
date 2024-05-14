import HeroCannaDocs from "@/components/hero";
import CtaCannaDocs from "@/components/cta";
import StatsCannaDocs from "@/components/stats";
import NavBar from "@/components/navbar";
import DepoimentosCannaDocs from "@/components/depoimentos";



export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroCannaDocs />
      <StatsCannaDocs />
      <CtaCannaDocs />
      <DepoimentosCannaDocs />
    </main>
  );
}
