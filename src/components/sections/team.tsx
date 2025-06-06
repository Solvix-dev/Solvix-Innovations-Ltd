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
      image: 'https://ik.imagekit.io/solvix/Team%20Images/cap.jpeg?updatedAt=1744635877923',
      social: {
        facebook: 'https://www.facebook.com/share/16L7ppcbJW/?mibextid=qi2Omg',
        linkedin: '#',
        instagram: 'https://www.instagram.com/muha.reeb?igsh=YmhyczFremd3N3hq',
        twitter: '#',
      },
    },
    {
      name: 'Muhammad Kabir Hassan ',
      role: 'CTO/ Software Engineer',
      bio: 'Kabeer oversees all technical operations, ensuring our solutions are top-notch.',
      image: 'https://ik.imagekit.io/solvix/Team%20Images/IMG-20220527-WA0009.jpg?updatedAt=1744636084793',
      social: {
        facebook: ' https://web.facebook.com/profile.php?id=100080875477298',
        linkedin: 'https://www.linkedin.com/in/generallshakefire/',
        instagram: ' https://nexalinks.carrd.co/',
        twitter: ' https://x.com/shakefire001',
      },
    },
    {
      name: 'Ibrahim Sani',
      role: 'Lead Developer/ Software Engineer',
      bio: 'Ibrahim brings extensive experience in full-stack development .',
      image: 'https://ik.imagekit.io/solvix/Team%20Images/imran.jpg?updatedAt=1744635877130',
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
      image: 'https://ik.imagekit.io/solvix/Team%20Images/tooncap.png?updatedAt=1744635879869',
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
      image: 'https://ik.imagekit.io/solvix/Team%20Images/hasan.jpg?updatedAt=1744635881389',
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
      image: 'https://ik.imagekit.io/solvix/Team%20Images/sirdiq.jpg?updatedAt=1744635877485',
      social: {
        facebook: 'https://www.facebook.com/share/1XnBo1P4ex/',
        linkedin: 'http://www.linkedin.com/in/sadiq-h-bulama-288743331',
        instagram: 'https://www.instagram.com/sirddeqbulama?igsh=cmwxYXF6cWF5enAz',
        twitter: 'https://x.com/Sirddeq?t=4TBkxdWepwcyPGoWKbbqgA&s=09',
      },
    },
    {
      name: 'Ibrahim Usman Wudiri',
      role: 'Project Manager/ Software Engineer',
      bio: 'Wudiri ensures smooth project delivery and excellent client communication.',
      image: 'https://ik.imagekit.io/solvix/Team%20Images/wudiri.jpg?updatedAt=1745833262624',
      social: {
        facebook: 'https://www.facebook.com/ibrahimu.wudiri',
        linkedin: 'https://www.linkedin.com/in/ibrahim-usman-wudiri-37341a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        instagram: 'https://www.instagram.com/wudir_iibrahim?utm_source=qr&igsh=MW9qeHZwbTE1NHljaw== ',
        twitter: 'https://x.com/IWudiri55490?t=DgeBXsXHM_edJjMgp5a0DQ&s=08 ',
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