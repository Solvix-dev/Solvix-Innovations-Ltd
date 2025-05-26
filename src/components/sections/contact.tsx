import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Linkedin, LucideX, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  type TemplateParams = {
    from_name: string;
    from_email: string;
    to_name: string;
    message: string;
    [key: string]: unknown;
  };

  interface EmailJSResponse {
    status: number;
    text: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceId: string = 'solvixinnovations'; // Replace with your EmailJS service ID
    const templateId: string = 'template_qehrlwr'; // Replace with your EmailJS template ID 
    const publicKey: string = 'RyiHvYoGOfMjp2JLW'; // Replace with your EmailJS user ID
  
    //create a new  object that contains dynamic template 
    const templateParams: TemplateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Solvix Innovations',
      message: message,
    };
    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response: EmailJSResponse) => {
        console.log('Email sent successfully:', response);
        // Reset the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Your message Has been sent sucessfully');
      })
      .catch((error: unknown) => {
        console.error('Failed to send email:', error);
        setErrorMessage('Fail to send your message. Please try again later.')
      });
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {successMessage &&(
                <div className="text-green-500">{successMessage}</div>
              )}
               {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full" >
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">
                    Alhajin Yara Plaza<br />
                    Office No.7 Alhajin Yara Plaza, Gombe, Gombe state.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+234 8146565844</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">solvixinnovations@gmail.com</p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://x.com/Solvix_dev" target="_blank" rel="noopener noreferrer">
                      <LucideX className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/solvix-dev345" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.facebook.com/share/1CHHCggWrp/
                    " target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.instagram.com/solvix.dev?igsh=MTkyOXExZmEyazcwbQ==" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
}