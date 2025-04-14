import { Rocket, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const values = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We push boundaries and embrace new technologies to solve complex challenges.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients.',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our mission is to deliver cutting-edge solutions that empower businesses
            and individuals to achieve their goals. We combine expertise with
            innovation to create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}