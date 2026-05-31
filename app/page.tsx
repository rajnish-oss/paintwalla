import HeroSection from "./components/HeroSection";
import HowItWork from "./components/HowItWork";
import Services from "./components/Services";
import CostCalculator from "./components/CostCalculator";
import Work from "./components/Work";
import Enquiry from "./components/Enquiry";
import PageEnd from "./components/PageEnd";
import WhatsAppButton from "./components/WhatsAppButton";
export default function Home() {
  return (
    <>
     <HeroSection />
     <Services />
     <Work />
    <CostCalculator />
     <HowItWork />
     <Enquiry />
     <PageEnd />
     <WhatsAppButton />
    </>
  );
}
