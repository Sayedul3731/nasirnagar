import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-6">
              Get in touch with the Nasirnagar administration for information,
              assistance, or feedback.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#contact-form">Send Message</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#offices">Contact Offices</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Main Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Upazila Parishad Complex, Nasirnagar, Brahmanbaria,
                          Bangladesh
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">+880 1234-567890</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">
                          info@nasirnagar.gov.bd
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">
                          Sunday - Thursday: 9:00 AM - 5:00 PM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Tourism Information Center
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-gray-700">
                          Central Road, Near Bus Stand, Nasirnagar
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">+880 1234-567891</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">
                          tourism@nasirnagar.gov.bd
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                        <span className="text-gray-700">
                          Daily: 8:00 AM - 8:00 PM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-100 p-3 rounded-full transition-colors duration-300"
                    >
                      <Facebook className="h-6 w-6 text-gray-700" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-100 p-3 rounded-full transition-colors duration-300"
                    >
                      <Twitter className="h-6 w-6 text-gray-700" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-100 p-3 rounded-full transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6 text-gray-700" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-100 p-3 rounded-full transition-colors duration-300"
                    >
                      <Globe className="h-6 w-6 text-gray-700" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="tourism">
                            Tourism Information
                          </SelectItem>
                          <SelectItem value="services">
                            Government Services
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here"
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <p className="text-lg font-medium">Map of Nasirnagar</p>
                <p className="text-gray-500">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Offices */}
      <section className="py-12 bg-gray-50" id="offices">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Important Contact Offices
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ContactOfficeCard
              name="Upazila Nirbahi Officer (UNO)"
              description="Chief executive officer of the upazila administration."
              address="Upazila Parishad Complex, Nasirnagar"
              phone="+880 1234-567890"
              email="uno.nasirnagar@mopa.gov.bd"
              hours="Sun-Thu: 9:00 AM - 5:00 PM"
            />

            <ContactOfficeCard
              name="Upazila Parishad Chairman"
              description="Elected head of the local government body."
              address="Upazila Parishad Complex, Nasirnagar"
              phone="+880 1234-567892"
              email="chairman.nasirnagar@lgd.gov.bd"
              hours="Sun-Thu: 10:00 AM - 4:00 PM"
            />

            <ContactOfficeCard
              name="Nasirnagar Police Station"
              description="Main law enforcement agency in the upazila."
              address="Police Station Road, Nasirnagar"
              phone="+880 1234-567893"
              email="oc.nasirnagar@police.gov.bd"
              hours="24/7"
            />

            <ContactOfficeCard
              name="Upazila Health Complex"
              description="Primary healthcare facility in the upazila."
              address="Health Complex Road, Nasirnagar"
              phone="+880 1234-567910"
              email="health.nasirnagar@mohfw.gov.bd"
              hours="24/7"
            />

            <ContactOfficeCard
              name="Department of Agricultural Extension"
              description="Agricultural support and services for farmers."
              address="Agriculture Office, Nasirnagar"
              phone="+880 1234-567900"
              email="agriculture.nasirnagar@moa.gov.bd"
              hours="Sun-Thu: 9:00 AM - 5:00 PM"
            />

            <ContactOfficeCard
              name="Land Office"
              description="Handles land records, registration, and related services."
              address="Land Office Complex, Nasirnagar"
              phone="+880 1234-567896"
              email="land.nasirnagar@minland.gov.bd"
              hours="Sun-Thu: 9:00 AM - 5:00 PM"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How can I get information about government services in Nasirnagar?"
              answer="You can visit the Upazila Parishad Complex, call the main office at +880 1234-567890, or send an email to info@nasirnagar.gov.bd. Additionally, you can use the contact form on this website to submit your inquiry."
            />

            <FaqItem
              question="What are the office hours for government offices in Nasirnagar?"
              answer="Most government offices in Nasirnagar operate from Sunday to Thursday, 9:00 AM to 5:00 PM. Emergency services like police, fire service, and healthcare facilities are available 24/7."
            />

            <FaqItem
              question="How can I report a local issue or complaint?"
              answer="You can report local issues or file complaints by visiting the Upazila Nirbahi Officer's office, calling the main office, or using the contact form on this website with 'Complaint' selected as the subject."
            />

            <FaqItem
              question="Where can I get tourism information about Nasirnagar?"
              answer="The Tourism Information Center located near the Bus Stand on Central Road provides comprehensive information about tourist attractions, accommodations, and activities in Nasirnagar. You can also contact them at +880 1234-567891 or email tourism@nasirnagar.gov.bd."
            />

            <FaqItem
              question="How can I provide feedback about the website or services?"
              answer="You can provide feedback using the contact form on this website with 'Feedback' selected as the subject. Your feedback is valuable to us and helps improve our services and communication channels. We appreciate your input to make Nasirnagar better for residents and visitors alike."
            />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Emergency Contacts
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-2xl font-bold">For Emergencies</h3>
              <p className="mt-2">
                In case of emergencies, please contact the following numbers
                immediately:
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Police</h4>
                    <p className="text-lg font-bold">999</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fire Service</h4>
                    <p className="text-lg font-bold">999</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ambulance</h4>
                    <p className="text-lg font-bold">999</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Upazila Health Complex</h4>
                    <p className="text-lg font-bold">+880 1234-567910</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            We&apos;re Here to Help
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is ready to help you
            with any inquiries about Nasirnagar.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <a href="#contact-form">Contact Us Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface ContactOfficeCardProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

function ContactOfficeCard({
  name,
  description,
  address,
  phone,
  email,
  hours,
}: ContactOfficeCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="space-y-3 pt-2">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-700">{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">{email}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">{hours}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
