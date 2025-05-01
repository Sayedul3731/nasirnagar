import Image from "next/image";
import Link from "next/link";
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
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  Compass,
  Camera,
  Utensils,
  Car,
} from "lucide-react";

export default function TouristSpotsPage() {
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
            Discover <span className="text-yellow-500">Nasirnagar</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Explore the natural beauty, historical sites, and cultural heritage
            of Nasirnagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <a href="#attractions">Explore Attractions</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="#tours">Guided Tours</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="attractions">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tourist Attractions
          </h2>

          <Tabs defaultValue="natural" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="natural">Natural Beauty</TabsTrigger>
              <TabsTrigger value="historical">Historical Sites</TabsTrigger>
              <TabsTrigger value="religious">Religious Places</TabsTrigger>
              <TabsTrigger value="cultural">Cultural Attractions</TabsTrigger>
            </TabsList>

            <TabsContent value="natural" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Nasirnagar Lake"
                  description="A serene lake surrounded by lush greenery, perfect for boating and picnics."
                  location="Central Nasirnagar"
                  timings="Open 24/7"
                  bestTime="October to March"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Eco Park"
                  description="A beautiful park with diverse flora and fauna, walking trails, and recreational facilities."
                  location="North Nasirnagar"
                  timings="6:00 AM - 8:00 PM"
                  bestTime="Year-round"
                  rating={4.2}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Riverside Gardens"
                  description="Scenic gardens along the riverbank with beautiful flowers, trees, and walking paths."
                  location="East Nasirnagar"
                  timings="7:00 AM - 7:00 PM"
                  bestTime="Winter and Spring"
                  rating={4.0}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Tea Gardens"
                  description="Expansive tea plantations with rolling hills and scenic views."
                  location="South Nasirnagar"
                  timings="9:00 AM - 5:00 PM"
                  bestTime="Year-round"
                  rating={4.3}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="historical" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Nasirnagar Fort"
                  description="Ancient fort with historical significance, showcasing traditional architecture."
                  location="Central Nasirnagar"
                  timings="9:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.7}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Heritage Museum"
                  description="Museum displaying artifacts, photographs, and exhibits about the history of Nasirnagar."
                  location="Museum Road, Nasirnagar"
                  timings="10:00 AM - 5:00 PM (Closed on Fridays)"
                  bestTime="Year-round"
                  rating={4.4}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Colonial Buildings"
                  description="Well-preserved buildings from the colonial era showcasing unique architectural styles."
                  location="Old Town, Nasirnagar"
                  timings="External viewing anytime"
                  bestTime="Year-round"
                  rating={4.1}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="religious" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Central Mosque"
                  description="Beautiful mosque with intricate designs and religious significance."
                  location="Central Nasirnagar"
                  timings="Open for prayers (Non-Muslims: 10:00 AM - 4:00 PM)"
                  bestTime="Year-round"
                  rating={4.6}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Ancient Temple"
                  description="Historic Hindu temple with beautiful architecture and religious importance."
                  location="Temple Road, Nasirnagar"
                  timings="6:00 AM - 8:00 PM"
                  bestTime="Year-round"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Buddhist Monastery"
                  description="Peaceful monastery with beautiful statues and meditation spaces."
                  location="East Nasirnagar"
                  timings="8:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.3}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Cultural Center"
                  description="Venue for cultural performances, exhibitions, and events showcasing local traditions."
                  location="Central Nasirnagar"
                  timings="10:00 AM - 8:00 PM"
                  bestTime="Year-round (Check for special events)"
                  rating={4.4}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Handicraft Village"
                  description="Traditional village where local artisans showcase and sell their handmade crafts."
                  location="West Nasirnagar"
                  timings="9:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                />

                <AttractionCard
                  name="Folk Museum"
                  description="Museum dedicated to preserving and showcasing the folk culture and traditions of the region."
                  location="Museum Road, Nasirnagar"
                  timings="10:00 AM - 5:00 PM (Closed on Mondays)"
                  bestTime="Year-round"
                  rating={4.2}
                  image="/placeholder.svg?height=300&width=400"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 bg-white" id="tours">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Guided Tours</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TourCard
              name="Nasirnagar Heritage Tour"
              description="Explore the rich history and cultural heritage of Nasirnagar with knowledgeable local guides."
              duration="4-5 hours"
              includes={[
                "Historical sites",
                "Museum visit",
                "Cultural demonstrations",
                "Local snacks",
              ]}
              price="1,500 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />

            <TourCard
              name="Natural Beauty Expedition"
              description="Discover the scenic natural attractions of Nasirnagar, including lakes, gardens, and tea plantations."
              duration="Full day (6-7 hours)"
              includes={[
                "Lake visit",
                "Eco Park tour",
                "Tea garden exploration",
                "Picnic lunch",
              ]}
              price="2,000 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />

            <TourCard
              name="Religious Sites Tour"
              description="Visit the significant religious sites of different faiths in and around Nasirnagar."
              duration="Half day (3-4 hours)"
              includes={[
                "Mosque visit",
                "Temple tour",
                "Monastery exploration",
                "Religious history",
              ]}
              price="1,200 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />

            <TourCard
              name="Cultural Immersion Experience"
              description="Immerse yourself in the local culture, traditions, and lifestyle of Nasirnagar."
              duration="Full day (6-7 hours)"
              includes={[
                "Cultural center visit",
                "Handicraft demonstrations",
                "Folk performances",
                "Traditional lunch",
              ]}
              price="2,500 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />

            <TourCard
              name="Photography Tour"
              description="Capture the beauty of Nasirnagar with guidance from professional photographers."
              duration="Half day (4 hours)"
              includes={[
                "Scenic locations",
                "Photography tips",
                "Equipment guidance",
                "Photo review session",
              ]}
              price="1,800 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />

            <TourCard
              name="Culinary Tour"
              description="Taste the authentic flavors of Nasirnagar and learn about local cuisine."
              duration="Half day (4 hours)"
              includes={[
                "Market visit",
                "Cooking demonstration",
                "Food tasting",
                "Recipe booklet",
              ]}
              price="1,600 BDT per person"
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Travel Tips</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={<Calendar className="h-10 w-10" />}
              title="Best Time to Visit"
              description="The ideal time to visit Nasirnagar is from October to March when the weather is pleasant and suitable for outdoor activities."
            />

            <TipCard
              icon={<Car className="h-10 w-10" />}
              title="Getting Around"
              description="Local transportation options include auto-rickshaws, cycle-rickshaws, and rental cars. Most attractions are within a short distance of each other."
            />

            <TipCard
              icon={<Compass className="h-10 w-10" />}
              title="Local Customs"
              description="Respect local customs and traditions. Dress modestly when visiting religious sites. Ask permission before taking photographs of people."
            />

            <TipCard
              icon={<Utensils className="h-10 w-10" />}
              title="Local Cuisine"
              description="Try local specialties like 'Kacchi Biryani', 'Bhuna Khichuri', and 'Pitha' (rice cakes). Fresh fruits and vegetables are abundant."
            />

            <TipCard
              icon={<Camera className="h-10 w-10" />}
              title="Photography"
              description="Carry your camera to capture the beautiful landscapes and cultural sites. Early morning and late afternoon offer the best lighting."
            />

            <TipCard
              icon={<MapPin className="h-10 w-10" />}
              title="Accommodation"
              description="Book accommodation in advance, especially during peak tourist season. Options range from budget guesthouses to mid-range hotels."
            />
          </div>
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Seasonal Events & Festivals
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <EventCard
                name="Spring Festival"
                description="Celebration of spring with cultural performances, flower exhibitions, and traditional games."
                time="February-March"
                location="Various locations in Nasirnagar"
                image="/placeholder.svg?height=200&width=400"
              />

              <EventCard
                name="Harvest Festival"
                description="Traditional celebration of the harvest season with folk music, dance, and agricultural exhibitions."
                time="April-May"
                location="Rural areas of Nasirnagar"
                image="/placeholder.svg?height=200&width=400"
              />

              <EventCard
                name="Cultural Week"
                description="Week-long celebration of local culture with performances, exhibitions, and workshops."
                time="October"
                location="Cultural Center, Nasirnagar"
                image="/placeholder.svg?height=200&width=400"
              />

              <EventCard
                name="Winter Fair"
                description="Annual fair featuring handicrafts, traditional food, cultural performances, and recreational activities."
                time="December-January"
                location="Central Ground, Nasirnagar"
                image="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Plan Your Visit
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Need help planning your trip to Nasirnagar? Our tourism office is
            ready to assist you with information, tour bookings, and travel
            arrangements.
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

interface AttractionCardProps {
  name: string;
  description: string;
  location: string;
  timings: string;
  bestTime: string;
  rating: number;
  image: string;
}

function AttractionCard({
  name,
  description,
  location,
  timings,
  bestTime,
  rating,
  image,
}: AttractionCardProps) {
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
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{location}</span>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{timings}</span>
        </div>
        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">Best Time: {bestTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}

interface TourCardProps {
  name: string;
  description: string;
  duration: string;
  includes: string[];
  price: string;
  image: string;
}

function TourCard({
  name,
  description,
  duration,
  includes,
  price,
  image,
}: TourCardProps) {
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
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">Duration: {duration}</span>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">Includes</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="font-semibold text-lg">Price: {price}</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Tour</Button>
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

interface EventCardProps {
  name: string;
  description: string;
  time: string;
  location: string;
  image: string;
}

function EventCard({
  name,
  description,
  time,
  location,
  image,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
              <span className="text-gray-700">{time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
              <span className="text-gray-700">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
