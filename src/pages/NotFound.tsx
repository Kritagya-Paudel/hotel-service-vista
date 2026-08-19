import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Header from "@/components/about/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  usePageTitle("Page not found — Khumbu Lodge");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <p className="font-AvenirLight text-xs uppercase tracking-[0.35em] text-secondary mb-6">
            Page not found
          </p>
          <h1 className="font-Editorial text-6xl md:text-8xl text-primary tracking-[-0.02em] mb-6">
            404
          </h1>
          <p className="font-AvenirLight text-foreground/80 text-base md:text-lg mb-10 leading-relaxed">
            This path doesn't lead anywhere — much like the trail above Namche when the cloud comes in. Let's get you back to the lodge.
          </p>
          <Link
            to="/"
            className="font-AvenirLight inline-block bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-secondary transition-colors"
          >
            Return home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
