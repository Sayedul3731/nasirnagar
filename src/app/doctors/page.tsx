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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Find a Doctor</h1>
            <p className="text-xl text-gray-300 mb-6">
              Connect with qualified healthcare professionals in Nasirnagar for
              your medical needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#doctors">Browse Doctors</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#appointment">Book Appointment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Search by doctor name or specialty"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="specialty" className="sr-only">
                  Specialty
                </Label>
                <Select>
                  <SelectTrigger id="specialty">
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="medicine">General Medicine</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="gynecology">Gynecology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="ent">ENT</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="doctors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Doctors</h2>

          <Tabs defaultValue="medicine" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              <TabsTrigger value="medicine">Medicine</TabsTrigger>
              <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
              <TabsTrigger value="pediatrics">Pediatrics</TabsTrigger>
              <TabsTrigger value="gynecology">Gynecology</TabsTrigger>
              <TabsTrigger value="orthopedics">Orthopedics</TabsTrigger>
              <TabsTrigger value="ent">ENT</TabsTrigger>
              <TabsTrigger value="dermatology">Dermatology</TabsTrigger>
            </TabsList>

            <TabsContent value="medicine" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Rahim Ahmed"
                  specialty="General Medicine"
                  qualifications="MBBS, FCPS (Medicine)"
                  experience={15}
                  hospital="Nasirnagar Upazila Health Complex"
                  address="Health Complex Road, Nasirnagar"
                  phone="+880 1234-567920"
                  schedule={[
                    "Sun, Tue, Thu: 10:00 AM - 2:00 PM",
                    "Mon, Wed: 4:00 PM - 8:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />

                <DoctorCard
                  name="Dr. Fatima Begum"
                  specialty="General Medicine"
                  qualifications="MBBS, MD (Medicine)"
                  experience={12}
                  hospital="Nasirnagar General Hospital"
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567921"
                  schedule={[
                    "Sun, Tue, Thu: 9:00 AM - 1:00 PM",
                    "Mon, Wed: 5:00 PM - 9:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />

                <DoctorCard
                  name="Dr. Kamal Hossain"
                  specialty="General Medicine"
                  qualifications="MBBS, FCPS (Medicine)"
                  experience={10}
                  hospital="Modern Clinic"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567922"
                  schedule={["Sun-Thu: 6:00 PM - 10:00 PM"]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="cardiology" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Anwar Khan"
                  specialty="Cardiology"
                  qualifications="MBBS, MD (Cardiology)"
                  experience={18}
                  hospital="Nasirnagar General Hospital"
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567923"
                  schedule={[
                    "Sun, Tue, Thu: 10:00 AM - 2:00 PM",
                    "Mon, Wed: 4:00 PM - 8:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />

                <DoctorCard
                  name="Dr. Salma Rahman"
                  specialty="Cardiology"
                  qualifications="MBBS, FCPS (Cardiology)"
                  experience={14}
                  hospital="Heart Care Center"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567924"
                  schedule={["Sun-Thu: 5:00 PM - 9:00 PM"]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="pediatrics" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Nasreen Akter"
                  specialty="Pediatrics"
                  qualifications="MBBS, FCPS (Pediatrics)"
                  experience={16}
                  hospital="Mother & Child Hospital"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567925"
                  schedule={["Sun-Thu: 9:00 AM - 1:00 PM"]}
                  image="/placeholder.svg?height=200&width=200"
                />

                <DoctorCard
                  name="Dr. Rafiq Islam"
                  specialty="Pediatrics"
                  qualifications="MBBS, MD (Pediatrics)"
                  experience={12}
                  hospital="Nasirnagar Upazila Health Complex"
                  address="Health Complex Road, Nasirnagar"
                  phone="+880 1234-567926"
                  schedule={[
                    "Sun, Tue, Thu: 10:00 AM - 2:00 PM",
                    "Mon, Wed: 4:00 PM - 8:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="gynecology" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Sabina Yasmin"
                  specialty="Obstetrics & Gynecology"
                  qualifications="MBBS, FCPS (Gynecology & Obstetrics)"
                  experience={20}
                  hospital="Mother & Child Hospital"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567927"
                  schedule={["Sun-Thu: 10:00 AM - 2:00 PM"]}
                  image="/placeholder.svg?height=200&width=200"
                />

                <DoctorCard
                  name="Dr. Nargis Akhter"
                  specialty="Obstetrics & Gynecology"
                  qualifications="MBBS, MS (Gynecology & Obstetrics)"
                  experience={15}
                  hospital="Nasirnagar General Hospital"
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567928"
                  schedule={[
                    "Sun, Tue, Thu: 9:00 AM - 1:00 PM",
                    "Mon, Wed: 5:00 PM - 9:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="orthopedics" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Masud Rana"
                  specialty="Orthopedics"
                  qualifications="MBBS, MS (Orthopedics)"
                  experience={18}
                  hospital="Nasirnagar General Hospital"
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567929"
                  schedule={[
                    "Sun, Tue, Thu: 10:00 AM - 2:00 PM",
                    "Mon, Wed: 4:00 PM - 8:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="ent" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Habib Rahman"
                  specialty="ENT"
                  qualifications="MBBS, FCPS (ENT)"
                  experience={14}
                  hospital="Nasirnagar General Hospital"
                  address="Hospital Road, Nasirnagar"
                  phone="+880 1234-567930"
                  schedule={[
                    "Sun, Tue, Thu: 9:00 AM - 1:00 PM",
                    "Mon, Wed: 5:00 PM - 9:00 PM",
                  ]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>

            <TabsContent value="dermatology" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Tahmina Khanam"
                  specialty="Dermatology"
                  qualifications="MBBS, DD (Dermatology)"
                  experience={12}
                  hospital="Skin Care Center"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567931"
                  schedule={["Sun-Thu: 5:00 PM - 9:00 PM"]}
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-12 bg-white" id="appointment">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Book an Appointment
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-yellow-500 text-black p-6">
              <h3 className="text-2xl font-bold">Schedule Your Visit</h3>
              <p className="mt-2">
                Fill out the form below to book an appointment with one of our
                doctors.
              </p>
            </div>

            <div className="p-6">
              <form className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="doctor">Select Doctor</Label>
                    <Select>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-rahim">
                          Dr. Rahim Ahmed
                        </SelectItem>
                        <SelectItem value="dr-fatima">
                          Dr. Fatima Begum
                        </SelectItem>
                        <SelectItem value="dr-anwar">Dr. Anwar Khan</SelectItem>
                        <SelectItem value="dr-nasreen">
                          Dr. Nasreen Akter
                        </SelectItem>
                        <SelectItem value="dr-sabina">
                          Dr. Sabina Yasmin
                        </SelectItem>
                        <SelectItem value="dr-masud">Dr. Masud Rana</SelectItem>
                        <SelectItem value="dr-habib">
                          Dr. Habib Rahman
                        </SelectItem>
                        <SelectItem value="dr-tahmina">
                          Dr. Tahmina Khanam
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        Morning (9:00 AM - 12:00 PM)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12:00 PM - 4:00 PM)
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening (4:00 PM - 8:00 PM)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Input
                    id="reason"
                    placeholder="Briefly describe your medical concern"
                  />
                </div>

                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Book Appointment
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Note: This is a request for an appointment. Our staff will
                  contact you to confirm the appointment.
                </p>
              </form>
            </div>
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
              question="How do I book an appointment with a doctor?"
              answer="You can book an appointment by filling out the appointment form on this page, calling the doctor's office directly, or visiting the hospital/clinic in person."
            />

            <FaqItem
              question="What should I bring to my doctor's appointment?"
              answer="Please bring your identification, any previous medical records, list of current medications, and details of your medical history or concerns."
            />

            <FaqItem
              question="Can I change or cancel my appointment?"
              answer="Yes, you can change or cancel your appointment by contacting the doctor's office at least 24 hours before your scheduled appointment."
            />

            <FaqItem
              question="Do I need a referral to see a specialist?"
              answer="In most cases, a referral from a general physician is recommended to see a specialist. However, some specialists may accept direct appointments."
            />

            <FaqItem
              question="What payment methods are accepted?"
              answer="Most doctors and healthcare facilities in Nasirnagar accept cash payments. Some larger hospitals may accept credit/debit cards or mobile banking."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Need Help Finding a Doctor?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you need assistance finding the right doctor for your medical
            needs, our team is ready to help you.
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

interface DoctorCardProps {
  name: string;
  specialty: string;
  qualifications: string;
  experience: number;
  hospital: string;
  address: string;
  phone: string;
  schedule: string[];
  image: string;
}

function DoctorCard({
  name,
  specialty,
  qualifications,
  experience,
  hospital,
  address,
  phone,
  schedule,
  image,
}: DoctorCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="text-center pb-0">
        <div className="mx-auto relative w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle>{name}</CardTitle>
        <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-2">
          {specialty}
        </Badge>
        <CardDescription className="flex flex-col items-center gap-1">
          <span className="text-sm">{qualifications}</span>
          <span className="text-sm">{experience} Years Experience</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 pt-4">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <div>
            <div className="font-medium">{hospital}</div>
            <div className="text-sm text-gray-500">{address}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <div className="text-gray-700">
            {schedule.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href="#appointment">
            <Calendar className="mr-2 h-4 w-4" /> Book Appointment
          </a>
        </Button>
      </CardFooter>
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
