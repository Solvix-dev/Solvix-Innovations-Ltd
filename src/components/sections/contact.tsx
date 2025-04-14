import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Linkedin, LucideX, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const serviceId = 'solvixinnovation2024'; // Replace with your EmailJS service ID
      const templateId = 'templete_qehrlwr'; // Replace with your EmailJS template ID
      const userId = 'RyiHvYoGOfMjp2JLW'; // Replace with your EmailJS user ID

      await emailjs.send(serviceId, templateId, formData, userId);

      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {successMessage && (
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full"  disabled={isSubmitting}>
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