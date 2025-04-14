import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold">InnovateTech</span>
            <p className="mt-4 text-sm text-muted-foreground">
              Innovating Solutions for a Better Tomorrow
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild>
                  <a href="#home">Home</a>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <a href="#about">About</a>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <a href="#services">Services</a>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <a href="#team">Team</a>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <a href="#contact">Contact</a>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0">
                  Web Development
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Digital Marketing
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Consulting
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Mobile Apps
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Terms of Service
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Cookie Policy
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} InnovateTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}