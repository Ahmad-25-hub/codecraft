import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { StudioStatement } from "@/components/studio-statement";
import { Capabilities } from "@/components/capabilities";
import { SelectedWork } from "@/components/selected-work";
import { Approach } from "@/components/approach";
import { Process } from "@/components/process";
import { ProjectReferences } from "@/components/project-references";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Motion } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <StudioStatement />
        <Capabilities />
        <SelectedWork />
        <Approach />
        <Process />
        <ProjectReferences />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
