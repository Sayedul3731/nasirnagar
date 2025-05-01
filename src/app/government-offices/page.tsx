import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GovernmentOfficesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Government Offices</h1>
            <p className="text-xl text-gray-300 mb-6">
              Access information about local government offices, services, and
              administrative bodies in Nasirnagar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#offices">View Offices</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#services">Available Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="offices">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Key Government Offices
          </h2>

          <Tabs defaultValue="administrative" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="administrative">Administrative</TabsTrigger>
              <TabsTrigger value="law">Law & Order</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>

            <TabsContent value="administrative" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Upazila Nirbahi Officer (UNO)"
                  description="The chief executive officer of the upazila administration."
                  address="Upazila Parishad Complex, Nasirnagar"
                  phone="+880 1234-567890"
                  email="uno.nasirnagar@mopa.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://brahmanbaria.gov.bd/nasirnagar"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Upazila Parishad"
                  description="Local government body responsible for upazila administration."
                  address="Upazila Parishad Complex, Nasirnagar"
                  phone="+880 1234-567891"
                  email="upazilaparishad.nasirnagar@lgd.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://brahmanbaria.gov.bd/nasirnagar"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Upazila Election Office"
                  description="Responsible for conducting elections in the upazila."
                  address="Election Commission Building, Nasirnagar"
                  phone="+880 1234-567892"
                  email="election.nasirnagar@ecs.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://ecs.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="law" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Nasirnagar Police Station"
                  description="Main law enforcement agency in the upazila."
                  address="Police Station Road, Nasirnagar"
                  phone="+880 1234-567893"
                  email="oc.nasirnagar@police.gov.bd"
                  hours="24/7"
                  website="https://police.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Upazila Court"
                  description="Judicial court handling local cases and disputes."
                  address="Court Complex, Nasirnagar"
                  phone="+880 1234-567894"
                  email="court.nasirnagar@judiciary.gov.bd"
                  hours="Sun-Thu: 10:00 AM - 4:00 PM"
                  website="https://judiciary.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Fire Service & Civil Defense"
                  description="Emergency response and fire safety services."
                  address="Fire Station Road, Nasirnagar"
                  phone="+880 1234-567895"
                  email="fire.nasirnagar@fscd.gov.bd"
                  hours="24/7"
                  website="https://fireservice.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Land Office"
                  description="Handles land records, registration, and related services."
                  address="Land Office Complex, Nasirnagar"
                  phone="+880 1234-567896"
                  email="land.nasirnagar@minland.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://minland.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Sub-Registry Office"
                  description="Responsible for property registration and documentation."
                  address="Registry Complex, Nasirnagar"
                  phone="+880 1234-567897"
                  email="registry.nasirnagar@minlaw.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 4:00 PM"
                  website="https://minlaw.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Tax Office"
                  description="Handles local tax collection and related services."
                  address="Tax Office Building, Nasirnagar"
                  phone="+880 1234-567898"
                  email="tax.nasirnagar@nbr.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 4:00 PM"
                  website="https://nbr.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Local Government Engineering Department"
                  description="Responsible for infrastructure development in the upazila."
                  address="LGED Complex, Nasirnagar"
                  phone="+880 1234-567899"
                  email="lged.nasirnagar@lged.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://lged.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Department of Agricultural Extension"
                  description="Provides agricultural support and services to farmers."
                  address="Agriculture Office, Nasirnagar"
                  phone="+880 1234-567900"
                  email="agriculture.nasirnagar@moa.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://dae.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />

                <OfficeCard
                  title="Department of Public Health Engineering"
                  description="Responsible for water supply and sanitation services."
                  address="DPHE Office, Nasirnagar"
                  phone="+880 1234-567901"
                  email="dphe.nasirnagar@dphe.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://dphe.gov.bd"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Available Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Birth & Death Registration"
              description="Register births and deaths, obtain certificates."
              office="Upazila Nirbahi Office"
              requirements={[
                "Application form",
                "Identity documents",
                "Supporting documents",
              ]}
            />

            <ServiceCard
              title="Land Records & Mutation"
              description="Update land ownership records and property documentation."
              office="Land Office"
              requirements={[
                "Application form",
                "Deed documents",
                "Tax payment receipts",
                "Identity documents",
              ]}
            />

            <ServiceCard
              title="Trade License"
              description="Obtain and renew business licenses for commercial activities."
              office="Upazila Parishad"
              requirements={[
                "Application form",
                "Business details",
                "Tax identification number",
                "Premises documents",
              ]}
            />

            <ServiceCard
              title="Agricultural Services"
              description="Access farming advice, seeds, fertilizers, and equipment."
              office="Department of Agricultural Extension"
              requirements={[
                "Farmer ID card",
                "Land ownership documents",
                "Application for specific services",
              ]}
            />

            <ServiceCard
              title="Social Safety Net Programs"
              description="Apply for government welfare and support programs."
              office="Upazila Social Services Office"
              requirements={[
                "Application form",
                "Identity documents",
                "Income certificates",
                "Supporting documents",
              ]}
            />

            <ServiceCard
              title="Legal Aid Services"
              description="Access legal assistance and support for eligible citizens."
              office="Upazila Legal Aid Committee"
              requirements={[
                "Application form",
                "Identity documents",
                "Case details",
                "Income certificates",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How can I get a birth certificate in Nasirnagar?"
              answer="To get a birth certificate, visit the Upazila Nirbahi Office with your application form, identity documents, and supporting documents. The process typically takes 3-5 working days."
            />

            <FaqItem
              question="What are the office hours for government offices in Nasirnagar?"
              answer="Most government offices in Nasirnagar operate from Sunday to Thursday, 9:00 AM to 5:00 PM. Emergency services like police and fire services are available 24/7."
            />

            <FaqItem
              question="How do I apply for a trade license for my business?"
              answer="To apply for a trade license, submit an application to the Upazila Parishad with your business details, tax identification number, and premises documents. The license is typically issued within 7-10 working days."
            />

            <FaqItem
              question="Where can I report local issues or complaints?"
              answer="You can report local issues or file complaints at the Upazila Nirbahi Office or the relevant department office. For emergencies, contact the local police station."
            />

            <FaqItem
              question="How can I access agricultural support services?"
              answer="Visit the Department of Agricultural Extension office with your farmer ID card and land ownership documents. They provide services like farming advice, seeds, fertilizers, and equipment."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Need More Information?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you have specific questions about government services or need
            assistance, our team is ready to help you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface OfficeCardProps {
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  website: string;
  image: string;
}

function OfficeCard({
  title,
  description,
  address,
  phone,
  email,
  hours,
  website,
  image,
}: OfficeCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
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
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Visit Website <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  office: string;
  requirements: string[];
}

function ServiceCard({
  title,
  description,
  office,
  requirements,
}: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">
            Provided By
          </h4>
          <p className="text-gray-700">{office}</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">
            Requirements
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
