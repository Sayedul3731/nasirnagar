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
  Activity,
  ArrowRight,
  Award,
  Baby,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Heart,
  MapPin,
  Microscope,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HospitalsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <Heart className="h-12 w-12 text-red-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Healthcare Excellence in 
              <span className="text-yellow-400 block mt-2">Nasirnagar</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services with modern facilities, experienced doctors, 
              and 24/7 emergency care for the community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5+</div>
                <div className="text-blue-200">Hospitals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-blue-200">Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-blue-200">Emergency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-blue-200">Doctors</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                <a href="#hospitals" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Explore Healthcare Facilities
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm"
              >
                <a href="#emergency" className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" />
                  Emergency Services
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Stethoscope className="h-16 w-16 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Heart className="h-20 w-20 text-red-400 animate-bounce" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-100 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Licensed & Certified</h3>
              <p className="text-gray-600 text-sm">All facilities are properly licensed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Experienced Staff</h3>
              <p className="text-gray-600 text-sm">Qualified medical professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-purple-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Quality Care</h3>
              <p className="text-gray-600 text-sm">High standards of medical care</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-red-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900">24/7 Available</h3>
              <p className="text-gray-600 text-sm">Round-the-clock emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="hospitals">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Healthcare Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive healthcare services across Nasirnagar with modern facilities, 
              specialized treatments, and caring professionals.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search healthcare facilities..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 rounded-full px-6">
              <Filter className="h-4 w-4" />
              Filter
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="hospitals" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-white shadow-lg rounded-full p-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="hospitals" className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Hospitals
              </TabsTrigger>
              <TabsTrigger value="clinics" className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Clinics
              </TabsTrigger>
              <TabsTrigger value="pharmacies" className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Pharmacies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hospitals" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <HospitalCard
                  name="Nasirnagar Upazila Health Complex"
                  type="Government"
                  beds={50}
                  specialties={[
                    "General Medicine",
                    "Surgery",
                    "Obstetrics & Gynecology",
                    "Pediatrics",
                  ]}
                  address="Health Complex Road, Nasirnagar"
                  phone="+880 1234-567910"
                  hours="24/7"
                  emergency={true}
                  rating={4.5}
                  image="/placeholder.svg?height=200&width=300"
                />

                <HospitalCard
                  name="Nasirnagar General Hospital"
                  type="Private"
                  beds={30}
                  specialties={[
                    "General Medicine",
                    "Cardiology",
                    "Orthopedics",
                    "ENT",
                  ]}
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567911"
                  hours="24/7"
                  emergency={true}
                  rating={4.3}
                  image="/placeholder.svg?height=200&width=300"
                />

                <HospitalCard
                  name="Mother & Child Hospital"
                  type="Private"
                  beds={20}
                  specialties={[
                    "Obstetrics & Gynecology",
                    "Pediatrics",
                    "Neonatology",
                  ]}
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567912"
                  hours="8:00 AM - 10:00 PM"
                  emergency={true}
                  rating={4.7}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="clinics" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ClinicCard
                  name="Nasirnagar Diagnostic Center"
                  services={["Laboratory Tests", "X-Ray", "Ultrasound", "ECG"]}
                  address="Clinic Road, Nasirnagar"
                  phone="+880 1234-567913"
                  hours="8:00 AM - 10:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />

                <ClinicCard
                  name="Modern Dental Clinic"
                  services={[
                    "Dental Check-up",
                    "Root Canal",
                    "Dental Surgery",
                    "Orthodontics",
                  ]}
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-567914"
                  hours="9:00 AM - 8:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />

                <ClinicCard
                  name="Eye Care Center"
                  services={[
                    "Eye Examination",
                    "Cataract Surgery",
                    "Glaucoma Treatment",
                    "Optical Shop",
                  ]}
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567915"
                  hours="9:00 AM - 6:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />

                <ClinicCard
                  name="Physiotherapy & Rehabilitation Center"
                  services={[
                    "Physiotherapy",
                    "Rehabilitation",
                    "Pain Management",
                    "Sports Injury",
                  ]}
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567916"
                  hours="8:00 AM - 8:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="pharmacies" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PharmacyCard
                  name="Central Pharmacy"
                  services={[
                    "Prescription Drugs",
                    "OTC Medicines",
                    "Medical Supplies",
                    "Home Delivery",
                  ]}
                  address="Main Road, Nasirnagar"
                  phone="+880 1234-567917"
                  hours="8:00 AM - 11:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />

                <PharmacyCard
                  name="Hospital Pharmacy"
                  services={[
                    "Prescription Drugs",
                    "OTC Medicines",
                    "Medical Supplies",
                    "24/7 Service",
                  ]}
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567918"
                  hours="24/7"
                  image="/placeholder.svg?height=200&width=300"
                />

                <PharmacyCard
                  name="Modern Medicine Corner"
                  services={[
                    "Prescription Drugs",
                    "OTC Medicines",
                    "Medical Supplies",
                    "Health Consultation",
                  ]}
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-567919"
                  hours="8:00 AM - 10:00 PM"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Medical Specialties Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical specialties with experienced doctors and modern equipment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="General Medicine"
              description="Diagnosis and non-surgical treatment of diseases and disorders."
              color="bg-blue-500"
            />

            <SpecialtyCard
              icon={<Heart className="h-10 w-10" />}
              title="Cardiology"
              description="Diagnosis and treatment of heart diseases and cardiovascular conditions."
              color="bg-red-500"
            />

            <SpecialtyCard
              icon={<Activity className="h-10 w-10" />}
              title="Surgery"
              description="Surgical procedures for various conditions and injuries."
              color="bg-green-500"
            />

            <SpecialtyCard
              icon={<Baby className="h-10 w-10" />}
              title="Pediatrics"
              description="Medical care for infants, children, and adolescents."
              color="bg-purple-500"
            />

            <SpecialtyCard
              icon={<Microscope className="h-10 w-10" />}
              title="Pathology"
              description="Laboratory testing and diagnosis of diseases."
              color="bg-yellow-500"
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="Obstetrics & Gynecology"
              description="Women's health, pregnancy, and childbirth."
              color="bg-pink-500"
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="Orthopedics"
              description="Treatment of musculoskeletal system disorders and injuries."
              color="bg-indigo-500"
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="ENT"
              description="Treatment of ear, nose, and throat conditions."
              color="bg-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50" id="emergency">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 rounded-full">
                <ShieldCheck className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Emergency Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Round-the-clock emergency medical services with rapid response teams
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
                <h3 className="text-3xl font-bold mb-3">Emergency Contact Numbers</h3>
                <p className="text-red-100 text-lg">
                  For medical emergencies, please contact the following numbers immediately:
                </p>
              </div>

              <div className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <EmergencyCard
                    title="National Emergency"
                    number="999"
                    description="National emergency hotline for ambulance services"
                    priority="high"
                  />
                  
                  <EmergencyCard
                    title="Upazila Health Complex"
                    number="+880 1234-567910"
                    description="Main government hospital emergency department"
                    priority="high"
                  />

                  <EmergencyCard
                    title="Nasirnagar General Hospital"
                    number="+880 1234-567911"
                    description="Private hospital with 24/7 emergency services"
                    priority="medium"
                  />

                  <EmergencyCard
                    title="Fire Service & Civil Defence"
                    number="999"
                    description="Fire emergency and rescue operations"
                    priority="medium"
                  />
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <ShieldCheck className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2 text-lg">
                        Emergency Guidelines
                      </h4>
                      <ul className="text-yellow-800 space-y-1">
                        <li>• Stay calm and provide clear information about the emergency</li>
                        <li>• Give exact location and nature of the medical emergency</li>
                        <li>• Follow first aid instructions if you're trained</li>
                        <li>• Keep emergency numbers saved in your phone</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Health & Wellness Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice for maintaining good health and preventing diseases
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <HealthTipCard
              title="Stay Hydrated"
              description="Drink at least 8 glasses of water daily to maintain good health and prevent dehydration. Proper hydration supports all body functions."
              image="/placeholder.svg?height=200&width=300"
              category="Nutrition"
            />

            <HealthTipCard
              title="Regular Exercise"
              description="Engage in at least 30 minutes of moderate physical activity daily for better cardiovascular health and overall fitness."
              image="/placeholder.svg?height=200&width=300"
              category="Fitness"
            />

            <HealthTipCard
              title="Balanced Diet"
              description="Consume a balanced diet rich in fruits, vegetables, proteins, and whole grains to ensure optimal nutrition."
              image="/placeholder.svg?height=200&width=300"
              category="Nutrition"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Medical Assistance?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team is here to help you find the right healthcare services. 
              Get in touch for information, appointments, or emergency assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Us Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm"
              >
                <a href="#hospitals" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HospitalCard({
  name,
  type,
  beds,
  specialties,
  address,
  phone,
  hours,
  emergency,
  rating,
  image,
}: {
  name: string;
  type: string;
  beds: number;
  specialties: string[];
  address: string;
  phone: string;
  hours: string;
  emergency: boolean;
  rating: number;
  image: string;
}) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge
            className={`${
              type === "Government" 
                ? "bg-green-500 hover:bg-green-600" 
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-semibold shadow-lg`}
          >
            {type}
          </Badge>
          {emergency && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg">
              24/7 Emergency
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{rating}</span>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4 text-blue-500" />
            {beds} Beds
          </span>
          <span className="flex items-center gap-1 text-green-600">
            <ShieldCheck className="h-4 w-4" />
            Certified
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2 flex items-center gap-1">
            <Stethoscope className="h-4 w-4" />
            Medical Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
            <span className="text-gray-700 text-sm">{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-500 shrink-0" />
            <span className="text-gray-700 text-sm font-medium">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-purple-500 shrink-0" />
            <span className="text-gray-700 text-sm">{hours}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg">
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function ClinicCard({
  name,
  services,
  address,
  phone,
  hours,
  image,
}: {
  name: string;
  services: string[];
  address: string;
  phone: string;
  hours: string;
  image: string;
}) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge className="bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-lg">
            Clinic
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-200">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2 flex items-center gap-1">
            <Activity className="h-4 w-4" />
            Services Offered
          </h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 transition-colors duration-200"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
            <span className="text-gray-700 text-sm">{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-500 shrink-0" />
            <span className="text-gray-700 text-sm font-medium">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-purple-500 shrink-0" />
            <span className="text-gray-700 text-sm">{hours}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg">
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function PharmacyCard({
  name,
  services,
  address,
  phone,
  hours,
  image,
}: {
  name: string;
  services: string[];
  address: string;
  phone: string;
  hours: string;
  image: string;
}) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg">
            Pharmacy
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-200">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2 flex items-center gap-1">
            <Heart className="h-4 w-4" />
            Services Available
          </h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 transition-colors duration-200"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
            <span className="text-gray-700 text-sm">{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-500 shrink-0" />
            <span className="text-gray-700 text-sm font-medium">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-purple-500 shrink-0" />
            <span className="text-gray-700 text-sm">{hours}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg">
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function SpecialtyCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer bg-white">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className={`p-4 rounded-full ${color.replace('bg-', 'bg-')}/10 group-hover:scale-110 transition-transform duration-300 mb-4`}>
          <div className={`${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="h-5 w-5 text-blue-500" />
        </div>
      </CardContent>
    </Card>
  );
}

function HealthTipCard({
  title,
  description,
  image,
  category,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
}) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/90 text-gray-800 font-semibold shadow-lg">
            {category}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </CardContent>
    </Card>
  );
}

// New Emergency Card Component
function EmergencyCard({
  title,
  number,
  description,
  priority,
}: {
  title: string;
  number: string;
  description: string;
  priority: 'high' | 'medium';
}) {
  const bgColor = priority === 'high' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200';
  const iconColor = priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600';
  
  return (
    <div className={`flex items-center p-6 border-2 rounded-xl ${bgColor} hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
      <div className={`p-4 rounded-full mr-4 ${iconColor}`}>
        <Phone className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg text-gray-900 mb-1">{title}</h4>
        <p className="text-2xl font-bold text-gray-900 mb-2">{number}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {priority === 'high' && (
        <div className="ml-4">
          <Badge className="bg-red-500 text-white">Priority</Badge>
        </div>
      )}
    </div>
  );
}
