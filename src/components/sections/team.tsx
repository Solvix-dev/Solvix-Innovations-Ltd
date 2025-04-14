import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';



export function Team() {
  const team = [
    {
      name: 'Muhammad Adamu Ishaq',
      role: 'Director/ Software Engineer',
      bio: 'Muhareeb is a visionary Engineer with a passion for technology and innovation.',
      image: '/assets/images/cap.jpeg',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Muhammad Kabir Hassan ',
      role: 'CTO/ Software Engineer',
      bio: 'Kabeer oversees all technical operations, ensuring our solutions are top-notch.',
      image: '/assets/images/sirdiq.jpg',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Ibrahim Sani',
      role: 'Lead Developer/ Software Engineer',
      bio: 'Ibrahim brings extensive experience in full-stack development .',
      image: '/assets/images/imran.jpg',
      social: {
        facebook: 'https://www.facebook.com/ebras.dev',
        linkedin: 'https://www.linkedin.com/in/ebrahim-sani',
        instagram: 'https://www.instagram.com/ebrahiimsani',
        twitter: 'https://www.x.com/imran_x35',
      },
    },
    {
      name: 'Riduwanullah Busari Sola',
      role: 'Software Engineer',
      bio: 'Sola creates beautiful and intuitive user experiences that delight our clients.',
      image: '/assets/images/sirdiq.jpg',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Hassan Abdullahi',
      role: 'Network Engineer',
      bio: 'Ibrahim creates beautiful and intuitive user experiences that delight our clients.',
      image: '/assets/images/hasan.jpg',
      social: {
        facebook: 'https://www.facebook.com/share/1JJsmApfSs/',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Abubakar Hussaini Bulama',
      role: 'Marketing Director',
      bio: 'Sadeeq drives our marketing strategies with data-driven insights and creativity.',
      image: '/assets/images/sirdiq.jpg',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Ibrahim Usman Wudiri',
      role: 'Project Manager/ Software Engineer',
      bio: 'Wudiri ensures smooth project delivery and excellent client communication.',
      image: '/assets/images/sirdiq.jpg',
      social: {
        facebook: 'https://www.facebook.com/share/1XnBo1P4ex/',
        linkedin: 'www.linkedin.com/in/sadiq-h-bulama-288743331',
        instagram: 'https://www.instagram.com/sirddeqbulama?igsh=cmwxYXF6cWF5enAz',
        twitter: 'https://x.com/Sirddeq?t=4TBkxdWepwcyPGoWKbbqgA&s=09',
      },
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our talented team of professionals who make innovation happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}