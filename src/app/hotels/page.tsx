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
  Calendar,
  Car,
  Coffee,
  MapPin,
  Phone,
  Star,
  Tv,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HotelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Stay in <span className="text-yellow-500">Nasirnagar</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Find comfortable accommodations for your visit to Nasirnagar, from
            hotels to guesthouses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <a href="#accommodations">Browse Accommodations</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white/10"
            >
              <a href="#booking">Book Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Find Your Perfect Stay
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label htmlFor="check-in">Check-in Date</Label>
                <Input id="check-in" type="date" />
              </div>
              <div>
                <Label htmlFor="check-out">Check-out Date</Label>
                <Input id="check-out" type="date" />
              </div>
              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select>
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="accommodations">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Accommodations in Nasirnagar
          </h2>

          <Tabs defaultValue="hotels" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="guesthouses">Guesthouses</TabsTrigger>
              <TabsTrigger value="resorts">Resorts</TabsTrigger>
              <TabsTrigger value="homestays">Homestays</TabsTrigger>
            </TabsList>

            <TabsContent value="hotels" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Grand Hotel"
                  description="A premium hotel offering comfortable rooms, restaurant, and business facilities in the heart of Nasirnagar."
                  rating={4.5}
                  price="3,500-5,000 BDT"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567980"
                  amenities={[
                    "Free Wi-Fi",
                    "Restaurant",
                    "Conference Room",
                    "Air Conditioning",
                    "24/7 Reception",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Hotel Greenview"
                  description="Modern hotel with scenic views, comfortable accommodations, and friendly service."
                  rating={4.2}
                  price="2,800-4,200 BDT"
                  address="Green Road, Nasirnagar"
                  phone="+880 1234-567981"
                  amenities={[
                    "Free Wi-Fi",
                    "Restaurant",
                    "Room Service",
                    "Air Conditioning",
                    "Parking",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Central Inn"
                  description="Affordable hotel with clean rooms and basic amenities in a convenient location."
                  rating={3.8}
                  price="1,800-2,500 BDT"
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-567982"
                  amenities={[
                    "Wi-Fi",
                    "Breakfast",
                    "Air Conditioning",
                    "TV",
                    "Parking",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Business Hotel Nasirnagar"
                  description="Hotel catering to business travelers with meeting facilities and convenient services."
                  rating={4.0}
                  price="2,500-3,800 BDT"
                  address="Commercial Area, Nasirnagar"
                  phone="+880 1234-567983"
                  amenities={[
                    "Free Wi-Fi",
                    "Business Center",
                    "Restaurant",
                    "Laundry Service",
                    "Airport Shuttle",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="guesthouses" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Guest House"
                  description="Cozy guest house offering a homely atmosphere and personalized service."
                  rating={4.3}
                  price="1,500-2,200 BDT"
                  address="Residential Area, Nasirnagar"
                  phone="+880 1234-567984"
                  amenities={[
                    "Free Wi-Fi",
                    "Breakfast",
                    "Garden",
                    "Common Kitchen",
                    "Laundry",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Family Guest House"
                  description="Comfortable guest house ideal for families with spacious rooms and home-cooked meals."
                  rating={4.1}
                  price="1,800-2,500 BDT"
                  address="Family Residential Area, Nasirnagar"
                  phone="+880 1234-567985"
                  amenities={[
                    "Free Wi-Fi",
                    "Home-cooked Meals",
                    "Garden",
                    "Family Rooms",
                    "Parking",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Budget Guest House"
                  description="Affordable accommodation with basic amenities for budget-conscious travelers."
                  rating={3.7}
                  price="1,000-1,500 BDT"
                  address="Near Bus Stand, Nasirnagar"
                  phone="+880 1234-567986"
                  amenities={[
                    "Wi-Fi",
                    "Shared Bathroom",
                    "Common Area",
                    "Locker",
                    "Breakfast Available",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="resorts" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Eco Resort"
                  description="Peaceful resort surrounded by nature with eco-friendly facilities and outdoor activities."
                  rating={4.6}
                  price="4,500-7,000 BDT"
                  address="Outskirts of Nasirnagar"
                  phone="+880 1234-567987"
                  amenities={[
                    "Free Wi-Fi",
                    "Restaurant",
                    "Swimming Pool",
                    "Nature Trails",
                    "Outdoor Activities",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Riverside Resort"
                  description="Scenic resort located by the river offering relaxation and water activities."
                  rating={4.4}
                  price="4,000-6,500 BDT"
                  address="Riverside Area, Nasirnagar"
                  phone="+880 1234-567988"
                  amenities={[
                    "Free Wi-Fi",
                    "Restaurant",
                    "River View",
                    "Boating",
                    "Outdoor Dining",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="homestays" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <HotelCard
                  name="Traditional Homestay"
                  description="Experience local culture and hospitality in a traditional family home."
                  rating={4.7}
                  price="1,200-1,800 BDT"
                  address="Village Area, Nasirnagar"
                  phone="+880 1234-567989"
                  amenities={[
                    "Home-cooked Meals",
                    "Cultural Experience",
                    "Local Guide",
                    "Wi-Fi",
                    "Garden",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Modern Family Homestay"
                  description="Comfortable rooms in a modern family home with all essential amenities."
                  rating={4.2}
                  price="1,500-2,000 BDT"
                  address="Residential Area, Nasirnagar"
                  phone="+880 1234-567990"
                  amenities={[
                    "Free Wi-Fi",
                    "Breakfast",
                    "Private Bathroom",
                    "TV",
                    "Air Conditioning",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />

                <HotelCard
                  name="Farm Homestay"
                  description="Unique experience on a working farm with organic food and agricultural activities."
                  rating={4.5}
                  price="1,300-1,900 BDT"
                  address="Agricultural Area, Nasirnagar"
                  phone="+880 1234-567991"
                  amenities={[
                    "Organic Meals",
                    "Farm Activities",
                    "Nature Walks",
                    "Wi-Fi",
                    "Peaceful Environment",
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Accommodation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Accommodation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nasirnagar Grand Hotel"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-black">
                  <Star className="h-4 w-4 mr-1 fill-current" /> 4.5
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Nasirnagar Grand Hotel
              </h3>
              <p className="text-gray-700 mb-6">
                Experience luxury and comfort at Nasirnagar Grand Hotel, the
                premier accommodation option in Nasirnagar. Located in the heart
                of the upazila, this hotel offers spacious rooms, modern
                amenities, and exceptional service to make your stay memorable.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Free High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Restaurant & Room Service</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Complimentary Breakfast</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Free Parking</span>
                </div>
                <div className="flex items-center">
                  <Tv className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Flat-screen TV</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Central Location</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-gray-500">Starting from</span>
                  <div className="text-2xl font-bold">3,500 BDT / night</div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Book Now
                </Button>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>For reservations: +880 1234-567980</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Accommodation Tips
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={<Calendar className="h-10 w-10" />}
              title="Book in Advance"
              description="During peak tourist seasons (October-March) and local festivals, accommodations fill up quickly. Book at least 2-3 weeks in advance to secure your preferred option."
            />

            <TipCard
              icon={<MapPin className="h-10 w-10" />}
              title="Choose the Right Location"
              description="Central accommodations are convenient for exploring the town, while resorts on the outskirts offer more peace and natural surroundings. Consider your priorities when selecting."
            />

            <TipCard
              icon={<Star className="h-10 w-10" />}
              title="Check Reviews"
              description="Before booking, check reviews from previous guests to get a better understanding of the accommodation's quality, service, and actual conditions."
            />

            <TipCard
              icon={<Wifi className="h-10 w-10" />}
              title="Verify Amenities"
              description="If specific amenities like Wi-Fi, air conditioning, or hot water are important to you, confirm their availability before booking, especially in budget accommodations."
            />

            <TipCard
              icon={<Phone className="h-10 w-10" />}
              title="Direct Booking"
              description="Consider calling the accommodation directly for booking. You might get better rates or room options than through online platforms."
            />

            <TipCard
              icon={<Utensils className="h-10 w-10" />}
              title="Meal Options"
              description="Many accommodations offer meal packages. Local homestays often provide authentic home-cooked meals, which can be a highlight of your stay."
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
              question="What is the best area to stay in Nasirnagar?"
              answer="The central area of Nasirnagar is ideal for easy access to government offices, markets, and local attractions. If you prefer a quieter environment, consider accommodations in the residential areas or on the outskirts near natural attractions."
            />

            <FaqItem
              question="Are credit cards accepted at hotels in Nasirnagar?"
              answer="Major hotels like Nasirnagar Grand Hotel and Business Hotel Nasirnagar accept credit cards. However, smaller guesthouses and homestays typically accept only cash payments. It's advisable to carry sufficient cash, especially when staying in budget accommodations."
            />

            <FaqItem
              question="Is it necessary to book accommodations in advance?"
              answer="Yes, especially during peak tourist seasons (October-March) and local festivals. For weekends, it's recommended to book at least a week in advance. During weekdays in off-peak seasons, you might find accommodations without prior booking."
            />

            <FaqItem
              question="Are there any luxury accommodations in Nasirnagar?"
              answer="Nasirnagar Grand Hotel and Nasirnagar Eco Resort offer the most luxurious accommodations in the area with premium amenities and services. While they may not match international luxury standards, they provide comfortable and upscale options for the region."
            />

            <FaqItem
              question="What amenities can I expect in budget accommodations?"
              answer="Budget accommodations typically offer basic amenities such as clean beds, fans or air conditioning, and shared or private bathrooms. Wi-Fi may be available but could be limited. Breakfast might be included or available for an additional charge."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Need Help with Accommodation?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you need assistance finding the right accommodation for your stay
            in Nasirnagar, our tourism office is ready to help you with
            recommendations and booking support.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/contact">Contact Tourism Office</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface HotelCardProps {
  name: string;
  description: string;
  rating: number;
  price: string;
  address: string;
  phone: string;
  amenities: string[];
  image: string;
}

function HotelCard({
  name,
  description,
  rating,
  price,
  address,
  phone,
  amenities,
  image,
}: HotelCardProps) {
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
          <Badge className="bg-yellow-500 text-black">
            <Star className="h-4 w-4 mr-1 fill-current" /> {rating}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>
        <div className="font-semibold">Price Range: {price} per night</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
}

function TipCard({
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
