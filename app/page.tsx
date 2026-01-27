import Hero from "@/app/components/Hero";
import WorkGrid from "@/app/components/WorkGrid";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground transition-all duration-700 ease-in-out relative selection:bg-purple-500/30 selection:text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      
      {/* Global Background Blobs - Creative Video Editor Theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-background">
         {/* Deep dark atmosphere */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background" />
         
         {/* Neon Accent Blobs */}
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDuration: '20s' }} />
         <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-float" style={{ animationDuration: '25s' }} />
         <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <Hero />
      <WorkGrid />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}