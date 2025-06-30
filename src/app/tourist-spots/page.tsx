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
  ArrowRight,
  Building,
  Calendar,
  Camera,
  Car,
  Church,
  Clock,
  Compass,
  Eye,
  Globe,
  Heart,
  MapPin,
  Palette,
  Share2,
  Star,
  TreePine,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TouristSpotsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-gray-900/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[20000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1400')",
          }}
        ></div>

        {/* Floating elements for visual enhancement */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Discover <span className="text-yellow-400 drop-shadow-lg">Nasirnagar</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-200 leading-relaxed">
              🌟 Explore the natural beauty, historical sites, and cultural heritage
              of Nasirnagar - Where every corner tells a story 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <a href="#attractions" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Explore Attractions
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <a href="#tours" className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Guided Tours
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50" id="attractions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ✨ Tourist Attractions ✨
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the hidden gems and popular destinations that make Nasirnagar a magical place to visit
            </p>
          </div>

          <Tabs defaultValue="natural" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <TabsTrigger 
                value="natural" 
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300"
              >
                <TreePine className="h-4 w-4" />
                Natural Beauty
              </TabsTrigger>
              <TabsTrigger 
                value="historical" 
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Building className="h-4 w-4" />
                Historical Sites
              </TabsTrigger>
              <TabsTrigger 
                value="religious" 
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Church className="h-4 w-4" />
                Religious Places
              </TabsTrigger>
              <TabsTrigger 
                value="cultural" 
                className="rounded-xl flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Palette className="h-4 w-4" />
                Cultural Attractions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="natural" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Nasirnagar Lake"
                  description="A serene lake surrounded by lush greenery, perfect for boating and picnics."
                  location="Central Nasirnagar"
                  timings="Open 24/7"
                  bestTime="October to March"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                  category="natural"
                />

                <AttractionCard
                  name="Eco Park"
                  description="A beautiful park with diverse flora and fauna, walking trails, and recreational facilities."
                  location="North Nasirnagar"
                  timings="6:00 AM - 8:00 PM"
                  bestTime="Year-round"
                  rating={4.2}
                  image="/placeholder.svg?height=300&width=400"
                  category="natural"
                />

                <AttractionCard
                  name="Riverside Gardens"
                  description="Scenic gardens along the riverbank with beautiful flowers, trees, and walking paths."
                  location="East Nasirnagar"
                  timings="7:00 AM - 7:00 PM"
                  bestTime="Winter and Spring"
                  rating={4.0}
                  image="/placeholder.svg?height=300&width=400"
                  category="natural"
                />

                <AttractionCard
                  name="Tea Gardens"
                  description="Expansive tea plantations with rolling hills and scenic views."
                  location="South Nasirnagar"
                  timings="9:00 AM - 5:00 PM"
                  bestTime="Year-round"
                  rating={4.3}
                  image="/placeholder.svg?height=300&width=400"
                  category="natural"
                />
              </div>
            </TabsContent>

            <TabsContent value="historical" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Nasirnagar Fort"
                  description="Ancient fort with historical significance, showcasing traditional architecture."
                  location="Central Nasirnagar"
                  timings="9:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.7}
                  image="/placeholder.svg?height=300&width=400"
                  category="historical"
                />

                <AttractionCard
                  name="Heritage Museum"
                  description="Museum displaying artifacts, photographs, and exhibits about the history of Nasirnagar."
                  location="Museum Road, Nasirnagar"
                  timings="10:00 AM - 5:00 PM (Closed on Fridays)"
                  bestTime="Year-round"
                  rating={4.4}
                  image="/placeholder.svg?height=300&width=400"
                  category="historical"
                />

                <AttractionCard
                  name="Colonial Buildings"
                  description="Well-preserved buildings from the colonial era showcasing unique architectural styles."
                  location="Old Town, Nasirnagar"
                  timings="External viewing anytime"
                  bestTime="Year-round"
                  rating={4.1}
                  image="/placeholder.svg?height=300&width=400"
                  category="historical"
                />
              </div>
            </TabsContent>

            <TabsContent value="religious" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Central Mosque"
                  description="Beautiful mosque with intricate designs and religious significance."
                  location="Central Nasirnagar"
                  timings="Open for prayers (Non-Muslims: 10:00 AM - 4:00 PM)"
                  bestTime="Year-round"
                  rating={4.6}
                  image="/placeholder.svg?height=300&width=400"
                  category="religious"
                />

                <AttractionCard
                  name="Ancient Temple"
                  description="Historic Hindu temple with beautiful architecture and religious importance."
                  location="Temple Road, Nasirnagar"
                  timings="6:00 AM - 8:00 PM"
                  bestTime="Year-round"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                  category="religious"
                />

                <AttractionCard
                  name="Buddhist Monastery"
                  description="Peaceful monastery with beautiful statues and meditation spaces."
                  location="East Nasirnagar"
                  timings="8:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.3}
                  image="/placeholder.svg?height=300&width=400"
                  category="religious"
                />
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AttractionCard
                  name="Cultural Center"
                  description="Venue for cultural performances, exhibitions, and events showcasing local traditions."
                  location="Central Nasirnagar"
                  timings="10:00 AM - 8:00 PM"
                  bestTime="Year-round (Check for special events)"
                  rating={4.4}
                  image="/placeholder.svg?height=300&width=400"
                  category="cultural"
                />

                <AttractionCard
                  name="Handicraft Village"
                  description="Traditional village where local artisans showcase and sell their handmade crafts."
                  location="West Nasirnagar"
                  timings="9:00 AM - 6:00 PM"
                  bestTime="Year-round"
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=400"
                  category="cultural"
                />

                <AttractionCard
                  name="Folk Museum"
                  description="Museum dedicated to preserving and showcasing the folk culture and traditions of the region."
                  location="Museum Road, Nasirnagar"
                  timings="10:00 AM - 5:00 PM (Closed on Mondays)"
                  bestTime="Year-round"
                  rating={4.2}
                  image="/placeholder.svg?height=300&width=400"
                  category="cultural"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" id="tours">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🎯 Guided Tours 🎯
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expertly curated tours and experience Nasirnagar like never before
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              💡 Travel Tips 💡
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tips to make your journey to Nasirnagar unforgettable and hassle-free
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              🎉 Seasonal Events & Festivals 🎉
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant culture and traditions of Nasirnagar through our seasonal celebrations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
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
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              🚀 Plan Your Visit 🚀
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Need help planning your trip to Nasirnagar? Our tourism office is
              ready to assist you with information, tour bookings, and travel
              arrangements. Let&apos;s make your journey extraordinary! ✨
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Contact Tourism Office
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
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
  category: string;
}

function AttractionCard({
  name,
  description,
  location,
  timings,
  bestTime,
  rating,
  image,
  category,
}: AttractionCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'natural': return 'from-green-500 to-emerald-500';
      case 'historical': return 'from-amber-500 to-orange-500';
      case 'religious': return 'from-purple-500 to-indigo-500';
      case 'cultural': return 'from-pink-500 to-rose-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
          <Badge className={`bg-gradient-to-r ${getCategoryColor(category)} text-white border-0 shadow-lg`}>
            <Star className="h-4 w-4 mr-1 fill-current" /> {rating}
          </Badge>
        </div>

        {/* Action buttons that appear on hover */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* View overlay */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button size="sm" className={`bg-gradient-to-r ${getCategoryColor(category)} text-white border-0 rounded-full`}>
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-start group/item hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
          <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
          <span className="text-gray-700 font-medium">{location}</span>
        </div>
        <div className="flex items-start group/item hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
          <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
          <span className="text-gray-700">{timings}</span>
        </div>
        <div className="flex items-start group/item hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
          <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
          <span className="text-gray-700">Best Time: {bestTime}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className={`w-full bg-gradient-to-r ${getCategoryColor(category)} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white border-0 rounded-xl font-semibold`}>
          Explore Now
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
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
    <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Popular badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 shadow-lg animate-pulse">
            ⭐ Popular
          </Badge>
        </div>

        {/* Price overlay that appears on hover */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-bold text-gray-900">{price}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-start group/item hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg p-2 -m-2 transition-all duration-200">
          <Clock className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
          <span className="text-gray-700 font-medium">Duration: {duration}</span>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2"></span>
            Tour Includes
          </h4>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3 shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-2">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Starting from</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {price}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white border-0 rounded-xl font-semibold">
          Book This Tour
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
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
    <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="p-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Decorative element */}
        <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-56 md:h-auto md:w-2/5 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Event type badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
              🎪 Festival
            </Badge>
          </div>
        </div>
        
        <div className="p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
              {name}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center group/item hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-lg p-2 -m-2 transition-all duration-200">
              <Calendar className="h-5 w-5 text-orange-500 mr-3 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
              <span className="text-gray-700 font-medium">{time}</span>
            </div>
            <div className="flex items-center group/item hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-lg p-2 -m-2 transition-all duration-200">
              <MapPin className="h-5 w-5 text-red-500 mr-3 shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
              <span className="text-gray-700 font-medium">{location}</span>
            </div>
            
            {/* Learn more button */}
            <div className="pt-2">
              <Button variant="outline" className="group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
