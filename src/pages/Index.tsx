import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import Courses from "@/components/Courses";
import BackButton from "@/components/BackButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Back button - top right */}
      <div className="fixed top-6 right-8 z-50">
        <BackButton />
      </div>
      
      {/* Back button - bottom right */}
      <div className="fixed bottom-6 right-8 z-50">
        <BackButton />
      </div>
      
      <Hero />
      <CareerTimeline />
      <Courses />
    </div>
  );
};

export default Index;