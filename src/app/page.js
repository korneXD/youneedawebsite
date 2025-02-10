import Footer from "./components/ui/footer";
import FormLayout from "./components/ui/formLayout";
import LetsBuildSomething from "./components/ui/lbs";
import MainLayout from "./components/ui/mainLayout";
import ProjectsLayout from "./components/ui/projectsLayout";
import SectionDivider from "./components/ui/sectionDivider";
import ServicesLayout from "./components/ui/servicesLayout";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-16 px-4 py-20">
      <MainLayout />
      <ServicesLayout />
      <LetsBuildSomething />
      <SectionDivider />
      <ProjectsLayout />
      <SectionDivider />
      <FormLayout />
      <Footer />
    </main>
  );
}
