"use client";

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
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Filter,
  GraduationCap,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Share2,
  SortAsc,
  Star,
  Stethoscope,
  Video
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("medicine");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const toggleFavorite = (doctorName: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(doctorName)) {
      newFavorites.delete(doctorName);
    } else {
      newFavorites.add(doctorName);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                Find Your Doctor
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Connect with qualified healthcare professionals in Nasirnagar. 
                Expert care, compassionate service, and trusted medical expertise at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <a href="#doctors">Browse Doctors</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <a href="#appointment">Book Appointment</a>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-sm">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-blue-200 text-sm">Specialties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-blue-200 text-sm">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-sm">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-12 bg-white/90 backdrop-blur-lg shadow-2xl relative -mt-16 z-30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">
                Find the Right Doctor for You
              </h2>
              <p className="text-gray-600">Search from our network of qualified healthcare professionals</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="search" className="text-sm font-medium text-gray-700">
                    Search Doctor
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search by doctor name or specialty"
                      className="pl-10 rounded-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-sm font-medium text-gray-700">
                    Specialty
                  </Label>
                  <Select>
                    <SelectTrigger id="specialty" className="rounded-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                      <Stethoscope className="h-4 w-4 mr-2 text-gray-400" />
                      <SelectValue placeholder="All Specialties" />
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
                
                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-sm font-medium text-gray-700">
                    Availability
                  </Label>
                  <Select>
                    <SelectTrigger id="availability" className="rounded-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <SelectValue placeholder="Any Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Time</SelectItem>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter and Sort Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-full"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
                <Button variant="outline" className="rounded-full">
                  <SortAsc className="h-4 w-4 mr-2" />
                  Sort by Rating
                </Button>
              </div>
              
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Available Today
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
                  <Video className="h-3 w-3 mr-1" />
                  Online Consultation
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-purple-50">
                  <Award className="h-3 w-3 mr-1" />
                  Top Rated
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="doctors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Expert Doctors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of dedicated healthcare professionals committed to providing 
              exceptional medical care with compassion and expertise.
            </p>
          </div>

          <Tabs value={selectedSpecialty} onValueChange={setSelectedSpecialty} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8 bg-white/60 backdrop-blur-sm rounded-xl p-1">
              <TabsTrigger value="medicine" className="rounded-lg font-medium">Medicine</TabsTrigger>
              <TabsTrigger value="cardiology" className="rounded-lg font-medium">Cardiology</TabsTrigger>
              <TabsTrigger value="pediatrics" className="rounded-lg font-medium">Pediatrics</TabsTrigger>
              <TabsTrigger value="gynecology" className="rounded-lg font-medium">Gynecology</TabsTrigger>
              <TabsTrigger value="orthopedics" className="rounded-lg font-medium">Orthopedics</TabsTrigger>
              <TabsTrigger value="ent" className="rounded-lg font-medium">ENT</TabsTrigger>
              <TabsTrigger value="dermatology" className="rounded-lg font-medium">Dermatology</TabsTrigger>
            </TabsList>

            <TabsContent value="medicine" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  rating={4.8}
                  reviews={245}
                  isFavorite={favorites.has("Dr. Rahim Ahmed")}
                  onToggleFavorite={() => toggleFavorite("Dr. Rahim Ahmed")}
                  isAvailableToday={true}
                  consultationFee="600-900 BDT"
                  nextAvailable="Today 10:30 AM"
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
                  rating={4.6}
                  reviews={189}
                  isFavorite={favorites.has("Dr. Fatima Begum")}
                  onToggleFavorite={() => toggleFavorite("Dr. Fatima Begum")}
                  isAvailableToday={true}
                  consultationFee="500-800 BDT"
                  nextAvailable="Today 2:00 PM"
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
                  rating={4.4}
                  reviews={156}
                  isFavorite={favorites.has("Dr. Kamal Hossain")}
                  onToggleFavorite={() => toggleFavorite("Dr. Kamal Hossain")}
                  isAvailableToday={false}
                  consultationFee="400-700 BDT"
                  nextAvailable="Tomorrow 6:00 PM"
                />
              </div>
            </TabsContent>

            <TabsContent value="cardiology" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  rating={4.9}
                  reviews={312}
                  isFavorite={favorites.has("Dr. Anwar Khan")}
                  onToggleFavorite={() => toggleFavorite("Dr. Anwar Khan")}
                  isAvailableToday={true}
                  consultationFee="800-1200 BDT"
                  nextAvailable="Today 11:00 AM"
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
                  rating={4.7}
                  reviews={198}
                  isFavorite={favorites.has("Dr. Salma Rahman")}
                  onToggleFavorite={() => toggleFavorite("Dr. Salma Rahman")}
                  isAvailableToday={true}
                  consultationFee="700-1000 BDT"
                  nextAvailable="Today 5:30 PM"
                />
              </div>
            </TabsContent>

            <TabsContent value="pediatrics" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  rating={4.8}
                  reviews={276}
                  isFavorite={favorites.has("Dr. Nasreen Akter")}
                  onToggleFavorite={() => toggleFavorite("Dr. Nasreen Akter")}
                  isAvailableToday={true}
                  consultationFee="500-800 BDT"
                  nextAvailable="Today 9:30 AM"
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
                  rating={4.6}
                  reviews={167}
                  isFavorite={favorites.has("Dr. Rafiq Islam")}
                  onToggleFavorite={() => toggleFavorite("Dr. Rafiq Islam")}
                  isAvailableToday={false}
                  consultationFee="400-700 BDT"
                  nextAvailable="Tomorrow 10:00 AM"
                />
              </div>
            </TabsContent>

            <TabsContent value="gynecology" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  rating={4.9}
                  reviews={324}
                  isFavorite={favorites.has("Dr. Sabina Yasmin")}
                  onToggleFavorite={() => toggleFavorite("Dr. Sabina Yasmin")}
                  isAvailableToday={true}
                  consultationFee="700-1000 BDT"
                  nextAvailable="Today 11:30 AM"
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
                  rating={4.7}
                  reviews={218}
                  isFavorite={favorites.has("Dr. Nargis Akhter")}
                  onToggleFavorite={() => toggleFavorite("Dr. Nargis Akhter")}
                  isAvailableToday={true}
                  consultationFee="600-900 BDT"
                  nextAvailable="Today 3:00 PM"
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
  rating?: number;
  reviews?: number;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  isAvailableToday?: boolean;
  consultationFee?: string;
  nextAvailable?: string;
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
  rating = 4.5,
  reviews = 150,
  isFavorite = false,
  onToggleFavorite,
  isAvailableToday = true,
  consultationFee = "500-800 BDT",
  nextAvailable = "Today 2:00 PM",
}: DoctorCardProps) {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      {/* Header with Image and Actions */}
      <CardHeader className="text-center pb-4 relative">
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 p-0"
            onClick={onToggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 p-0"
          >
            <Share2 className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <div className="mx-auto relative w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all duration-300">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {isAvailableToday && (
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {name}
        </CardTitle>
        
        <div className="flex flex-col items-center gap-2">
          <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600">
            <Stethoscope className="h-3 w-3 mr-1" />
            {specialty}
          </Badge>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 ml-1">{rating}</span>
            </div>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
        </div>

        <CardDescription className="text-center space-y-1 mt-2">
          <span className="inline-flex items-center justify-center gap-1 text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 text-blue-500" />
            {qualifications}
          </span>
          <span className="inline-flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
            <Award className="h-4 w-4 text-green-500" />
            {experience} Years Experience
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 px-6">
        {/* Hospital Info */}
        <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <Building2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="font-medium text-gray-800 truncate">{hospital}</div>
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {address}
            </div>
          </div>
        </div>

        {/* Contact & Availability */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-green-500 shrink-0" />
            <span className="text-sm text-gray-700">{phone}</span>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
            <div className="text-sm text-gray-700 space-y-1">
              {schedule.slice(0, 2).map((time, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>{time}</span>
                  {index === 0 && isAvailableToday && (
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      Available
                    </Badge>
                  )}
                </div>
              ))}
              {schedule.length > 2 && (
                <div className="text-xs text-gray-500">+{schedule.length - 2} more slots</div>
              )}
            </div>
          </div>
        </div>

        {/* Consultation Info */}
        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Consultation Fee</span>
            <span className="text-sm font-medium text-gray-800">{consultationFee}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Next Available</span>
            <span className="text-sm font-medium text-green-600">{nextAvailable}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-6 pb-6">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1 rounded-lg" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </Button>
          <Button 
            asChild 
            className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-lg" 
            size="sm"
          >
            <a href="#appointment">
              <Calendar className="mr-2 h-4 w-4" />
              Book
            </a>
          </Button>
        </div>
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
