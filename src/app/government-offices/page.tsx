import { Badge } from "@/components/ui/badge";
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
import {
  Banknote,
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  Wrench
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GovernmentOfficesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-sm px-4 py-2">
                <Building2 className="w-4 h-4 mr-2" />
                Official Government Portal
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Government Offices
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your gateway to essential government services and administrative support in Nasirnagar upazila
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-6 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <a href="#offices" className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  Explore Offices
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold text-black hover:text-white transition-colors duration-200 shadow-lg"
              >
                <a href="#services" className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Available Services
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="offices">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Government Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Key Government Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right office for your needs with comprehensive information about services, contact details, and operating hours.
            </p>
          </div>

          <Tabs defaultValue="administrative" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-lg rounded-xl p-2 border">
                <TabsTrigger 
                  value="administrative" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Administrative</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="law" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Law & Order</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="revenue" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Banknote className="w-4 h-4" />
                  <span className="hidden sm:inline">Revenue</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="development" 
                  className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Wrench className="w-4 h-4" />
                  <span className="hidden sm:inline">Development</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="administrative" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Upazila Nirbahi Officer (UNO)"
                  description="The chief executive officer of the upazila administration."
                  address="Upazila Parishad Complex, Nasirnagar"
                  phone="+880 17054-11232"
                  email="unonasirnagar@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://nasirnagar.brahmanbaria.gov.bd/bn/site/officer_list/%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80%E0%A6%A8%E0%A6%BE-%E0%A6%A8%E0%A6%BE%E0%A6%9B%E0%A6%B0%E0%A6%BF%E0%A6%A8"
                  image="https://i.ibb.co/Z6hgZk6t/6730ab1e8a802442875137.jpg"
                />

                <OfficeCard
                  title="Upazila Parishad"
                  description="Local government body responsible for upazila administration."
                  address="Upazila Parishad Complex, Nasirnagar"
                  phone="+880 17054-11232"
                  email="unonasirnagar@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="https://nasirnagar.brahmanbaria.gov.bd/#"
                  image="https://i.ibb.co/4nwqZ2Z0/b1.jpg"
                />

                <OfficeCard
                  title="Upazila Election Office"
                  description="Responsible for conducting elections in the upazila."
                  address="Election Commission Building, Nasirnagar"
                  phone="+880 15500-41989"
                  email="ecs1972ueonasirnagar@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="http://ec.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/Qv9WyBHz/IMG-20220122-225827-600x337.jpg"
                />
              </div>
            </TabsContent>

            <TabsContent value="law" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Nasirnagar Police Station"
                  description="Main law enforcement agency in the upazila."
                  address="Police Station Road, Nasirnagar"
                  phone="+880 1320-115059"
                  email="ocnasirnagar@gmail.com"
                  hours="24/7"
                  website="http://police.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/yn6wr5LD/67b6fb7a2eafc386847303.png"
                />

                <OfficeCard
                  title="Upazila Court"
                  description="Judicial court handling local cases and disputes."
                  address="Court Complex, Nasirnagar"
                  phone="+880 1320-115059"
                  email="ocnasirnagar@gmail.com"
                  hours="24/7"
                  website="http://police.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/23cHWJTb/images-8.jpg"
                />

                <OfficeCard
                  title="Fire Service & Civil Defense"
                  description="Emergency response and fire safety services."
                  address="Fire Station Road, Nasirnagar"
                  phone="+880 1712-447488"
                  email="shohaib.khl@gmail.com"
                  hours="24/7"
                  website="http://fireservice.nazirpur.pirojpur.gov.bd/"
                  image="https://i.ibb.co/sdQzwn4B/shutterstock-2028567584.jpg"
                />
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <OfficeCard
                  title="Land Office"
                  description="Handles land records, registration, and related services."
                  address="Land Office Complex, Nasirnagar"
                  phone="+880 18933-82626"
                  email="aclandnasirnagar@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="http://sr.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/q3h5k0wv/66b32f159be4e156701421.jpg"
                />

                <OfficeCard
                  title="Sub-Registry Office"
                  description="Responsible for property registration and documentation."
                  address="Registry Complex, Nasirnagar"
                  phone="+880 19100-95706"
                  email="subregistrar.nasirnagar@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 4:00 PM"
                  website="https://minlaw.gov.bd"
                  image="https://i.ibb.co/kV5gnvp5/6565da8292ebd998813200.jpg"
                />

                <OfficeCard
                  title="Tax Office"
                  description="Handles local tax collection and related services."
                  address="Tax Office Building, Nasirnagar"
                  phone="+880 17488-00798"
                  email="uaonasirnagar3781@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 4:00 PM"
                  website="http://dao.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/xtmL5j7K/6652c3a8e03c0053500443-2.jpg"
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
                  website="http://lged.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/fdh4Z6TV/cbca8e96656ae81e9355f3c6323f0e7d.png"
                />

                <OfficeCard
                  title="Department of Agricultural Extension"
                  description="Provides agricultural support and services to farmers."
                  address="Agriculture Office, Nasirnagar"
                  phone="+880 17083-38013"
                  email="imran.shakil.dae@gmail.com"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="http://dae.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/q3h5k0wv/66b32f159be4e156701421.jpg"
                />

                <OfficeCard
                  title="Department of Public Health Engineering"
                  description="Responsible for water supply and sanitation services."
                  address="DPHE Office, Nasirnagar"
                  phone="+880 17012-48402"
                  email="nasirnagar@uhfpo.dghs.gov.bd"
                  hours="Sun-Thu: 9:00 AM - 5:00 PM"
                  website="http://dphe.nasirnagar.brahmanbaria.gov.bd/"
                  image="https://i.ibb.co/mrpYp5F9/dc089140109cf032a21c3e92691a402c.png"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Digital Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Available Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access essential government services with clear requirements and streamlined processes for your convenience.
            </p>
          </div>         
           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a href="http://ec.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
              <ServiceCard
                title="Birth & Death Registration"
                description="Register births and deaths, obtain certificates."
                office="Upazila Nirbahi Office"
                requirements={[
                  "Application form",
                  "Identity documents",
                  "Supporting documents",
                ]}
                icon={<Users className="w-6 h-6" />}
                color="blue"
              />
            </a>            
            <a href="http://acl.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
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
                icon={<MapPin className="w-6 h-6" />}
                color="green"
              />
            </a>

            <a href="http://police.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
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
                icon={<FileText className="w-6 h-6" />}
                color="purple"
              />
            </a>

            <a href="http://dae.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
              <ServiceCard
                title="Agricultural Services"
                description="Access farming advice, seeds, fertilizers, and equipment."
                office="Department of Agricultural Extension"
                requirements={[
                  "Farmer ID card",
                  "Land ownership documents",
                  "Application for specific services",
                ]}
                icon={<Wrench className="w-6 h-6" />}
                color="orange"
              />
            </a>

            <a href="http://doict.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
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
                icon={<Shield className="w-6 h-6" />}
                color="red"
              />
            </a>

            <a href="http://police.nasirnagar.brahmanbaria.gov.bd/" target="_blank" rel="noopener noreferrer">
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
                icon={<Building2 className="w-6 h-6" />}
                color="indigo"
              />
            </a>
          </div>
        </div>
      </section>      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Help Center
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about government services and procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
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
      </section>      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Our dedicated team is here to assist you with any questions about government services or procedures. We&apos;re committed to providing you with the support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg text-black "
              >
                <a href="tel:+8801234567890" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
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
    <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pb-4">
        <div className="flex items-start group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
          <span className="text-gray-700 text-sm">{address}</span>
        </div>
        <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <Phone className="h-5 w-5 text-green-500 mr-3 shrink-0" />
          <a href={`tel:${phone}`} className="text-gray-700 text-sm hover:text-green-600 transition-colors duration-200">
            {phone}
          </a>
        </div>
        <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <Mail className="h-5 w-5 text-purple-500 mr-3 shrink-0" />
          <a href={`mailto:${email}`} className="text-gray-700 text-sm hover:text-purple-600 transition-colors duration-200 truncate">
            {email}
          </a>
        </div>
        <div className="flex items-center group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <Clock className="h-5 w-5 text-orange-500 mr-3 shrink-0" />
          <span className="text-gray-700 text-sm">{hours}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Globe className="mr-2 h-4 w-4" />
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
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
  icon: React.ReactNode;
  color: string;
}

function ServiceCard({
  title,
  description,
  office,
  requirements,
  icon,
  color,
}: ServiceCardProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 border-blue-200 text-blue-600 bg-blue-50",
      green: "bg-green-500 border-green-200 text-green-600 bg-green-50",
      purple: "bg-purple-500 border-purple-200 text-purple-600 bg-purple-50",
      orange: "bg-orange-500 border-orange-200 text-orange-600 bg-orange-50",
      red: "bg-red-500 border-red-200 text-red-600 bg-red-50",
      indigo: "bg-indigo-500 border-indigo-200 text-indigo-600 bg-indigo-50",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const [iconBg, borderColor, textColor, cardBg] = getColorClasses(color).split(' ');

  return (
    <Card className={`h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg ${cardBg}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-3">
          <div className={`p-3 rounded-xl ${iconBg} text-white shadow-lg`}>
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
              {title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white/70 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-gray-500" />
            <h4 className="font-semibold text-sm text-gray-700">Provided By</h4>
          </div>
          <p className={`font-medium ${textColor}`}>{office}</p>
        </div>
        <div className="bg-white/70 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-4 h-4 text-gray-500" />
            <h4 className="font-semibold text-sm text-gray-700">Requirements</h4>
          </div>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-lg shrink-0">
          <CheckCircle className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{question}</h3>
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
