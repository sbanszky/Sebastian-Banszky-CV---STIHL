import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import Courses from "@/components/Courses";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <CareerTimeline />
      <Courses />
    </div>
  );
};

export default Index;