import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesGrid from "./components/FeaturesGrid";
import ComparisonTable from "./components/ComparisonTable";
import ScreenshotSection from "./components/ScreenshotSection";
import SignupForm from "./components/SignupForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <SignupForm />
      <ScreenshotSection />
      <Footer />
    </div>
  );
}