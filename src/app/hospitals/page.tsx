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
  Baby,
  Clock,
  Heart,
  MapPin,
  Microscope,
  Phone,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HospitalsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Hospitals & Healthcare</h1>
            <p className="text-xl text-gray-300 mb-6">
              Find information about hospitals, clinics, and healthcare
              facilities in Nasirnagar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#hospitals">View Hospitals</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#emergency">Emergency Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="hospitals">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Healthcare Facilities
          </h2>

          <Tabs defaultValue="hospitals" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
              <TabsTrigger value="clinics">Clinics</TabsTrigger>
              <TabsTrigger value="pharmacies">Pharmacies</TabsTrigger>
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Medical Specialties Available
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="General Medicine"
              description="Diagnosis and non-surgical treatment of diseases and disorders."
            />

            <SpecialtyCard
              icon={<Heart className="h-10 w-10" />}
              title="Cardiology"
              description="Diagnosis and treatment of heart diseases and cardiovascular conditions."
            />

            <SpecialtyCard
              icon={<Activity className="h-10 w-10" />}
              title="Surgery"
              description="Surgical procedures for various conditions and injuries."
            />

            <SpecialtyCard
              icon={<Baby className="h-10 w-10" />}
              title="Pediatrics"
              description="Medical care for infants, children, and adolescents."
            />

            <SpecialtyCard
              icon={<Microscope className="h-10 w-10" />}
              title="Pathology"
              description="Laboratory testing and diagnosis of diseases."
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="Obstetrics & Gynecology"
              description="Women's health, pregnancy, and childbirth."
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="Orthopedics"
              description="Treatment of musculoskeletal system disorders and injuries."
            />

            <SpecialtyCard
              icon={<Stethoscope className="h-10 w-10" />}
              title="ENT"
              description="Treatment of ear, nose, and throat conditions."
            />
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 bg-red-50" id="emergency">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Emergency Services
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-2xl font-bold">Emergency Contact Numbers</h3>
              <p className="mt-2">
                For medical emergencies, please contact the following numbers:
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ambulance Service</h4>
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

                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Nasirnagar General Hospital
                    </h4>
                    <p className="text-lg font-bold">+880 1234-567911</p>
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
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Important Note
                </h4>
                <p className="text-yellow-800">
                  In case of a medical emergency, please call the emergency
                  numbers immediately. Do not delay seeking medical attention.
                  The emergency services are available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Health Tips</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HealthTipCard
              title="Stay Hydrated"
              description="Drink at least 8 glasses of water daily to maintain good health and prevent dehydration."
              image="/placeholder.svg?height=200&width=300"
            />

            <HealthTipCard
              title="Regular Exercise"
              description="Engage in at least 30 minutes of moderate physical activity daily for better health."
              image="/placeholder.svg?height=200&width=300"
            />

            <HealthTipCard
              title="Balanced Diet"
              description="Consume a balanced diet rich in fruits, vegetables, proteins, and whole grains."
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you need information about healthcare services or medical
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

function HospitalCard({
  name,
  type,
  beds,
  specialties,
  address,
  phone,
  hours,
  emergency,
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
  image: string;
}) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge
            className={type === "Government" ? "bg-green-500" : "bg-blue-500"}
          >
            {type}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {beds} Beds •{" "}
          {emergency ? "Emergency Services Available" : "No Emergency Services"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{hours}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
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
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">Services</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{hours}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
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
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">Services</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{hours}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}

function SpecialtyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function HealthTipCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
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
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
