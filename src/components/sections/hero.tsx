import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
//import heroImage from '../images/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20">
      <div 
         className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
        backgroundImage:'url("/assets/images/img8.jpg")'
        }}
      />
      <div className="" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Innovating Solutions for a{' '}
            <span className="text-primary">Better Tomorrow</span>
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses
            through cutting-edge technology solutions and strategic consulting.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white" 
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}