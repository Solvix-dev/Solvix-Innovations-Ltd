import {
  Code2,
  LineChart,
  MessageSquareMore,
  ShieldCheck,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Web Development',
      description: 'We create responsive and user-friendly websites tailored to your needs.',
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our data-driven marketing strategies.',
    },
    {
      icon: <MessageSquareMore className="h-6 w-6" />,
      title: 'Consulting',
      description: 'Expert advice to help you grow and scale your business effectively.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Apps',
      description: 'Custom mobile applications that engage users and drive results.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions.',
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'IT Consultation and Support',
      description: '24/7 technical support to keep your systems running smoothly.',
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of technology solutions to help your
            business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}