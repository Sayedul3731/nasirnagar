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
  ArrowRight,
  Award,
  Bath,
  Bed,
  Calendar,
  Camera,
  Car,
  CheckCircle,
  ChevronDown,
  Clock,
  Coffee,
  Eye,
  Filter,
  Heart,
  MapPin,
  Phone,
  Play,
  Search,
  Share2,
  Shield,
  SortAsc,
  Sparkles,
  Star,
  Users,
  Utensils,
  Wifi
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import "./animations.css";

export default function HotelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("hotels");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Deterministic particle positions to prevent hydration errors
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: ((i * 17 + 23) % 100),
    top: ((i * 13 + 37) % 100),
    delay: (i * 0.3) % 3,
    duration: 3 + (i % 3)
  }));

  const toggleFavorite = (hotelName: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(hotelName)) {
      newFavorites.delete(hotelName);
    } else {
      newFavorites.add(hotelName);
    }
    setFavorites(newFavorites);
  };

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section with Enhanced Parallax Effect */}
      <section className="relative h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[2000ms] hover:scale-105 animate-slow-zoom"
            style={{
              backgroundImage: "url('/placeholder.svg?height=700&width=1400')",
            }}
          ></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="animate-fade-in-up">
            {/* Enhanced Title with Gradient Animation */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              Stay in <span className="text-yellow-400 animate-pulse">Nasirnagar</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-200 leading-relaxed animate-fade-in-up animation-delay-300">
              Discover comfort and luxury in the heart of Bangladesh. From boutique hotels to 
              cozy homestays, find your perfect accommodation with exceptional hospitality.
            </p>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold px-10 py-5 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/30 group"
              >
                <a href="#accommodations" className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Explore Stays
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-110 group"
              >
                <a href="#booking" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Virtual Tour
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-900">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Accommodations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce-slow">
          <div className="flex flex-col items-center">
            <ChevronDown className="h-6 w-6 mb-2" />
            <span className="text-xs font-medium">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Enhanced Search Section with Real-time Interactions */}
      <section className="py-16 bg-white/90 backdrop-blur-xl shadow-2xl relative -mt-24 z-30 border-t border-white/20" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in-up">
                Find Your Perfect Stay
              </h2>
              <p className="text-gray-600 text-lg animate-fade-in-up animation-delay-200">
                Search from over 50+ verified accommodations with real-time availability
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
              <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
                <div className="space-y-3 group">
                  <Label htmlFor="check-in" className="text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Check-in Date
                  </Label>
                  <div className="relative">
                    <Input 
                      id="check-in" 
                      type="date" 
                      className="pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-300" 
                    />
                    <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-3 group">
                  <Label htmlFor="check-out" className="text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Check-out Date
                  </Label>
                  <div className="relative">
                    <Input 
                      id="check-out" 
                      type="date" 
                      className="pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-300" 
                    />
                    <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-3 group">
                  <Label htmlFor="guests" className="text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Guests
                  </Label>
                  <Select>
                    <SelectTrigger id="guests" className="pl-12 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-300">
                      <Users className="h-5 w-5 mr-2 text-gray-400 group-hover:text-yellow-500 transition-colors absolute left-4" />
                      <SelectValue placeholder="Select guests" className="ml-8" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5+">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3 group">
                  <Label htmlFor="budget" className="text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Budget Range
                  </Label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger id="budget" className="py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-300">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="all">All Budgets</SelectItem>
                      <SelectItem value="budget">Under 2,000 BDT</SelectItem>
                      <SelectItem value="mid">2,000 - 4,000 BDT</SelectItem>
                      <SelectItem value="luxury">4,000+ BDT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700">Location</Label>
                  <div className="relative">
                    <Input 
                      placeholder="Search location..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-300" 
                    />
                    <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button 
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold py-3 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:scale-100"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-black/20 border-t-black mr-2"></div>
                        Searching...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Search className="h-5 w-5 mr-2" />
                        Search
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Filters */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group">
                <Wifi className="h-4 w-4 mr-2 group-hover:text-yellow-600" /> Free WiFi
              </Button>
              <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group">
                <Car className="h-4 w-4 mr-2 group-hover:text-yellow-600" /> Parking
              </Button>
              <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group">
                <Utensils className="h-4 w-4 mr-2 group-hover:text-yellow-600" /> Restaurant
              </Button>
              <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group">
                <Coffee className="h-4 w-4 mr-2 group-hover:text-yellow-600" /> Breakfast
              </Button>
              <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group">
                <Shield className="h-4 w-4 mr-2 group-hover:text-yellow-600" /> Verified
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="accommodations">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Accommodations in Nasirnagar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated selection of accommodations, 
              each offering unique experiences and exceptional hospitality.
            </p>
          </div>

          {/* Enhanced Filter and Sort Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={`rounded-full transition-all duration-300 ${showFilters ? 'bg-yellow-100 border-yellow-300 text-yellow-700' : 'hover:bg-yellow-50 hover:border-yellow-300'}`}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {showFilters && <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">Active</span>}
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 rounded-full border-gray-200 hover:border-yellow-300 transition-colors">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              
              <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">
                <Shield className="h-3 w-3 mr-1" />
                All Verified
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1 text-blue-500" />
                <span className="font-medium">15+ accommodations</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-green-500" />
                <span>Updated 2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Enhanced Filter Panel */}
          {showFilters && (
            <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-fade-in-up">
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Amenities</h4>
                  <div className="space-y-2">
                    {['Free WiFi', 'Parking', 'Restaurant', 'Pool', 'Gym'].map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="ml-2 text-sm text-gray-600">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Property Type</h4>
                  <div className="space-y-2">
                    {['Hotel', 'Guesthouse', 'Resort', 'Homestay'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Rating</h4>
                  <div className="space-y-2">
                    {['4.5+ Stars', '4.0+ Stars', '3.5+ Stars', '3.0+ Stars'].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="ml-2 text-sm text-gray-600">{rating}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Distance</h4>
                  <div className="space-y-2">
                    {['City Center', 'Within 1km', 'Within 2km', 'Within 5km'].map((distance) => (
                      <label key={distance} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="ml-2 text-sm text-gray-600">{distance}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col justify-end">
                  <Button variant="outline" className="mb-2 rounded-lg">
                    Reset Filters
                  </Button>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
              <TabsTrigger 
                value="hotels" 
                className="rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg"
              >
                🏨 Hotels
              </TabsTrigger>
              <TabsTrigger 
                value="guesthouses" 
                className="rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg"
              >
                🏠 Guesthouses
              </TabsTrigger>
              <TabsTrigger 
                value="resorts" 
                className="rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg"
              >
                🌴 Resorts
              </TabsTrigger>
              <TabsTrigger 
                value="homestays" 
                className="rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black data-[state=active]:shadow-lg"
              >
                🏡 Homestays
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hotels" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Grand Hotel"
                  description="A premium hotel offering comfortable rooms, restaurant, and business facilities in the heart of Nasirnagar with exceptional hospitality."
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
                    "Room Service"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Nasirnagar Grand Hotel")}
                  onToggleFavorite={() => toggleFavorite("Nasirnagar Grand Hotel")}
                  badge="Most Popular"
                  isHovered={hoveredCard === "Nasirnagar Grand Hotel"}
                  onHover={() => setHoveredCard("Nasirnagar Grand Hotel")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={15}
                />

                <HotelCard
                  name="Hotel Greenview"
                  description="Modern hotel with scenic views, comfortable accommodations, friendly service and eco-friendly practices."
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
                    "Garden View"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Hotel Greenview")}
                  onToggleFavorite={() => toggleFavorite("Hotel Greenview")}
                  badge="Great Value"
                  isHovered={hoveredCard === "Hotel Greenview"}
                  onHover={() => setHoveredCard("Hotel Greenview")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={10}
                />

                <HotelCard
                  name="Central Inn"
                  description="Affordable hotel with clean rooms and basic amenities in a convenient location near major attractions."
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
                    "24/7 Security"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Central Inn")}
                  onToggleFavorite={() => toggleFavorite("Central Inn")}
                  badge="Budget Friendly"
                  isHovered={hoveredCard === "Central Inn"}
                  onHover={() => setHoveredCard("Central Inn")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                />

                <HotelCard
                  name="Business Hotel Nasirnagar"
                  description="Hotel catering to business travelers with meeting facilities, convenient services and modern amenities."
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
                    "Meeting Rooms"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Business Hotel Nasirnagar")}
                  onToggleFavorite={() => toggleFavorite("Business Hotel Nasirnagar")}
                  badge="Business"
                  isHovered={hoveredCard === "Business Hotel Nasirnagar"}
                  onHover={() => setHoveredCard("Business Hotel Nasirnagar")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={8}
                />
              </div>
            </TabsContent>

            <TabsContent value="guesthouses" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Guest House"
                  description="Cozy guest house offering a homely atmosphere, personalized service and authentic local experiences."
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
                    "Local Tours"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Nasirnagar Guest House")}
                  onToggleFavorite={() => toggleFavorite("Nasirnagar Guest House")}
                  badge="Cozy"
                  isHovered={hoveredCard === "Nasirnagar Guest House"}
                  onHover={() => setHoveredCard("Nasirnagar Guest House")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                />

                <HotelCard
                  name="Family Guest House"
                  description="Comfortable guest house ideal for families with spacious rooms, home-cooked meals and children's facilities."
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
                    "Kids Play Area"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Family Guest House")}
                  onToggleFavorite={() => toggleFavorite("Family Guest House")}
                  badge="Family Friendly"
                  isHovered={hoveredCard === "Family Guest House"}
                  onHover={() => setHoveredCard("Family Guest House")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={12}
                />

                <HotelCard
                  name="Budget Guest House"
                  description="Affordable accommodation with essential amenities for budget-conscious travelers seeking value."
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
                    "Travel Desk"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Budget Guest House")}
                  onToggleFavorite={() => toggleFavorite("Budget Guest House")}
                  badge="Budget"
                  isHovered={hoveredCard === "Budget Guest House"}
                  onHover={() => setHoveredCard("Budget Guest House")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="resorts" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <HotelCard
                  name="Nasirnagar Eco Resort"
                  description="Peaceful resort surrounded by nature with eco-friendly facilities, outdoor activities and wellness programs."
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
                    "Spa Services"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Nasirnagar Eco Resort")}
                  onToggleFavorite={() => toggleFavorite("Nasirnagar Eco Resort")}
                  badge="Eco-Friendly"
                  isHovered={hoveredCard === "Nasirnagar Eco Resort"}
                  onHover={() => setHoveredCard("Nasirnagar Eco Resort")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={20}
                />

                <HotelCard
                  name="Riverside Resort"
                  description="Scenic resort located by the river offering relaxation, water activities and breathtaking sunset views."
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
                    "Fishing"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Riverside Resort")}
                  onToggleFavorite={() => toggleFavorite("Riverside Resort")}
                  badge="Scenic"
                  isHovered={hoveredCard === "Riverside Resort"}
                  onHover={() => setHoveredCard("Riverside Resort")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={15}
                />
              </div>
            </TabsContent>

            <TabsContent value="homestays" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <HotelCard
                  name="Traditional Homestay"
                  description="Experience authentic local culture and warm hospitality in a traditional family home with cultural activities."
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
                    "Traditional Crafts"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Traditional Homestay")}
                  onToggleFavorite={() => toggleFavorite("Traditional Homestay")}
                  badge="Authentic"
                  isHovered={hoveredCard === "Traditional Homestay"}
                  onHover={() => setHoveredCard("Traditional Homestay")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                />

                <HotelCard
                  name="Modern Family Homestay"
                  description="Comfortable rooms in a modern family home with all essential amenities and contemporary facilities."
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
                    "Modern Kitchen"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Modern Family Homestay")}
                  onToggleFavorite={() => toggleFavorite("Modern Family Homestay")}
                  badge="Modern"
                  isHovered={hoveredCard === "Modern Family Homestay"}
                  onHover={() => setHoveredCard("Modern Family Homestay")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                  discount={10}
                />

                <HotelCard
                  name="Farm Homestay"
                  description="Unique experience on a working farm with organic food, agricultural activities and peaceful rural setting."
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
                    "Animal Interaction"
                  ]}
                  image="/placeholder.svg?height=300&width=400"
                  isFavorite={favorites.has("Farm Homestay")}
                  onToggleFavorite={() => toggleFavorite("Farm Homestay")}
                  badge="Farm Life"
                  isHovered={hoveredCard === "Farm Homestay"}
                  onHover={() => setHoveredCard("Farm Homestay")}
                  onLeave={() => setHoveredCard(null)}
                  verified={true}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Featured Accommodation with Interactive Elements */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-float animation-delay-100"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-orange-400 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-red-400 rounded-full animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Featured Accommodation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most recommended stay in Nasirnagar with exclusive amenities and services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group animate-fade-in-up animation-delay-200">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Nasirnagar Grand Hotel"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Image Overlay Content */}
              <div className="absolute top-8 right-8">
                <Badge className="bg-white/95 text-black backdrop-blur-sm px-4 py-3 rounded-full shadow-xl">
                  <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" /> 
                  <span className="font-bold text-lg">4.8</span>
                  <span className="text-gray-600 ml-1">Exceptional</span>
                </Badge>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 text-white border border-white/20">
                  <h4 className="font-bold text-xl mb-3 flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    360° Virtual Tour Available
                  </h4>
                  <p className="text-white/90 mb-4 text-sm">
                    Explore every corner of our premium rooms and facilities
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-white/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-full">
                      <Play className="h-4 w-4 mr-2" />
                      Virtual Tour
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-full">
                      <Camera className="h-4 w-4 mr-2" />
                      Photo Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-up animation-delay-400">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-4xl font-bold text-gray-800">
                    Nasirnagar Grand Hotel
                  </h3>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-3 py-1.5 rounded-full">
                    <Award className="h-4 w-4 mr-1" />
                    Premium Choice
                  </Badge>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience unparalleled luxury and comfort at Nasirnagar Grand Hotel. 
                  Our premier accommodation offers world-class amenities, exceptional service, 
                  and an unforgettable stay in the heart of beautiful Nasirnagar with 24/7 concierge service.
                </p>
              </div>

              {/* Enhanced Amenities Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300 group">
                  <Wifi className="h-7 w-7 text-yellow-600 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="font-bold text-gray-800">High-Speed WiFi</div>
                    <div className="text-sm text-gray-600">Complimentary 500 Mbps</div>
                  </div>
                </div>
                <div className="flex items-center p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300 group">
                  <Utensils className="h-7 w-7 text-yellow-600 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="font-bold text-gray-800">Fine Dining</div>
                    <div className="text-sm text-gray-600">Restaurant & Room Service</div>
                  </div>
                </div>
                <div className="flex items-center p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300 group">
                  <Coffee className="h-7 w-7 text-yellow-600 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="font-bold text-gray-800">Premium Breakfast</div>
                    <div className="text-sm text-gray-600">International Buffet</div>
                  </div>
                </div>
                <div className="flex items-center p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300 group">
                  <Car className="h-7 w-7 text-yellow-600 mr-4 group-hover:animate-pulse" />
                  <div>
                    <div className="font-bold text-gray-800">Valet Parking</div>
                    <div className="text-sm text-gray-600">Secure & Covered</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pricing Section */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-gray-500 text-sm font-medium">Special Rate from</span>
                    <div className="text-4xl font-bold text-gray-800 flex items-baseline">
                      3,500 
                      <span className="text-lg font-normal text-gray-600 ml-1">BDT</span>
                    </div>
                    <span className="text-gray-600">per night</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-500 line-through">4,200 BDT</div>
                    <Badge className="bg-green-100 text-green-800 font-bold px-3 py-1.5">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Save 17%
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600 bg-white/60 rounded-xl p-3">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    <span>Free cancellation until 6 PM on day of arrival</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold rounded-2xl py-4 shadow-xl transform transition-all duration-300 hover:scale-105">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" className="px-8 rounded-2xl border-2 hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300">
                      <Phone className="h-5 w-5 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex items-center text-gray-600 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                <Phone className="h-6 w-6 mr-4 text-yellow-600" />
                <div>
                  <div className="font-bold text-gray-800">24/7 Reservations & Concierge</div>
                  <div className="text-sm">+880 1234-567980 • reservations@nasirnagargrand.com</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-5 w-5 mr-2 text-green-500" />
                  <span className="font-medium">Verified Hotel</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  <span className="font-medium">Best Service Award 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-5 w-5 mr-2 text-blue-500" />
                  <span className="font-medium">4.8/5 Guest Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Accommodation Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Travel Smart Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your stay with these insider tips from local experts
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={<Calendar className="h-12 w-12" />}
              title="Book in Advance"
              description="During peak tourist seasons (October-March) and local festivals, accommodations fill up quickly. Book at least 2-3 weeks in advance to secure your preferred option and get better rates."
              color="yellow"
            />

            <TipCard
              icon={<MapPin className="h-12 w-12" />}
              title="Choose the Right Location"
              description="Central accommodations are convenient for exploring the town, while resorts on the outskirts offer more peace and natural surroundings. Consider your priorities when selecting."
              color="blue"
            />

            <TipCard
              icon={<Star className="h-12 w-12" />}
              title="Check Reviews"
              description="Before booking, check reviews from previous guests to get a better understanding of the accommodation's quality, service, and actual conditions."
              color="green"
            />

            <TipCard
              icon={<Wifi className="h-12 w-12" />}
              title="Verify Amenities"
              description="If specific amenities like Wi-Fi, air conditioning, or hot water are important to you, confirm their availability before booking, especially in budget accommodations."
              color="purple"
            />

            <TipCard
              icon={<Phone className="h-12 w-12" />}
              title="Direct Booking"
              description="Consider calling the accommodation directly for booking. You might get better rates or room options than through online platforms."
              color="orange"
            />

            <TipCard
              icon={<Utensils className="h-12 w-12" />}
              title="Meal Options"
              description="Many accommodations offer meal packages. Local homestays often provide authentic home-cooked meals, which can be a highlight of your stay."
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about accommodations in Nasirnagar
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="What is the best area to stay in Nasirnagar?"
              answer="The central area of Nasirnagar is ideal for easy access to government offices, markets, and local attractions. If you prefer a quieter environment, consider accommodations in the residential areas or on the outskirts near natural attractions. The riverside area offers scenic views and peaceful surroundings."
            />

            <FaqItem
              question="Are credit cards accepted at hotels in Nasirnagar?"
              answer="Major hotels like Nasirnagar Grand Hotel and Business Hotel Nasirnagar accept credit cards and digital payments. However, smaller guesthouses and homestays typically accept only cash payments. It's advisable to carry sufficient cash, especially when staying in budget accommodations."
            />

            <FaqItem
              question="Is it necessary to book accommodations in advance?"
              answer="Yes, especially during peak tourist seasons (October-March) and local festivals. For weekends, it's recommended to book at least a week in advance. During weekdays in off-peak seasons, you might find accommodations without prior booking, but advance booking ensures better rates and room selection."
            />

            <FaqItem
              question="Are there any luxury accommodations in Nasirnagar?"
              answer="Nasirnagar Grand Hotel and Nasirnagar Eco Resort offer the most luxurious accommodations in the area with premium amenities and services. While they may not match international luxury standards, they provide comfortable and upscale options with excellent local hospitality."
            />

            <FaqItem
              question="What amenities can I expect in budget accommodations?"
              answer="Budget accommodations typically offer clean beds, fans or air conditioning, and shared or private bathrooms. Wi-Fi may be available but could be limited. Most include basic toiletries, and breakfast might be included or available for an additional charge. Some offer common areas and local meal options."
            />

            <FaqItem
              question="Is it safe for solo travelers, especially women?"
              answer="Nasirnagar is generally safe for solo travelers, including women. Most accommodations have 24/7 reception and security measures. Homestays and guesthouses often provide a family-like environment. It's recommended to inform the accommodation of your arrival time and keep emergency contacts handy."
            />
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help with Accommodation?
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Our tourism experts are here to help you find the perfect stay in Nasirnagar. 
              Get personalized recommendations, special deals, and booking assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-xl"
              >
                <Link href="/contact">Contact Tourism Office</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold"
              >
                <a href="tel:+8801234567000">Call Now: +880 123-456-7000</a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Local Area Expertise</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 mr-2" />
                <span>Best Rate Guarantee</span>
              </div>
            </div>
          </div>
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
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  badge?: string;
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  verified?: boolean;
  discount?: number;
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
  isFavorite = false,
  onToggleFavorite,
  badge,
  isHovered = false,
  onHover,
  onLeave,
  verified = false,
  discount,
}: HotelCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Calculate discounted price to prevent hydration issues
  const originalPrice = useMemo(() => {
    if (!discount) return null;
    try {
      const priceRange = price.split('-');
      const lowPrice = parseInt(priceRange[0].replace(/\D/g, ''));
      const highPrice = parseInt(priceRange[1].replace(/\D/g, ''));
      return {
        low: Math.round(lowPrice * (1 + discount/100)),
        high: Math.round(highPrice * (1 + discount/100))
      };
    } catch {
      return null;
    }
  }, [price, discount]);
  
  return (
    <Card 
      className={`h-full overflow-hidden group transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm ${
        isHovered ? 'shadow-2xl -translate-y-3 scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-2'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-115' : 'group-hover:scale-110'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Enhanced Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`} />
        
        {/* Top Badges and Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <div className="flex flex-col gap-2">
            {badge && (
              <Badge className={`font-semibold px-3 py-1.5 rounded-full shadow-lg ${
                badge === "Most Popular" ? "bg-gradient-to-r from-red-500 to-pink-500 text-white" :
                badge === "Great Value" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" :
                badge === "Budget Friendly" ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" :
                badge === "Business" ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white" :
                "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
              } animate-pulse-glow`}>
                {badge}
              </Badge>
            )}
            
            {verified && (
              <Badge className="bg-white/90 text-green-700 border-green-300 backdrop-blur-sm animate-fade-in">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            
            {discount && (
              <Badge className="bg-red-500 text-white font-bold animate-bounce-gentle">
                {discount}% OFF
              </Badge>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              variant="ghost"
              className={`h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 p-0 transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white/40' : ''
              }`}
              onClick={onToggleFavorite}
            >
              <Heart className={`h-5 w-5 transition-all duration-300 ${
                isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-white hover:text-red-400'
              }`} />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className={`h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 p-0 transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white/40' : ''
              }`}
            >
              <Share2 className="h-5 w-5 text-white hover:text-blue-400 transition-colors" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className={`h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 p-0 transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white/40' : ''
              }`}
            >
              <Camera className="h-5 w-5 text-white hover:text-purple-400 transition-colors" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced Rating Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white/95 text-black backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-600 ml-1">Excellent</span>
          </Badge>
        </div>
        
        {/* Quick Action Buttons (visible on hover) */}
        <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <Button
            size="sm"
            className="bg-white/90 text-black hover:bg-white font-semibold rounded-full px-4"
          >
            <Eye className="h-4 w-4 mr-1" />
            Quick View
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className={`text-xl font-bold transition-all duration-300 ${
            isHovered ? 'text-yellow-600' : 'text-gray-800 group-hover:text-yellow-600'
          }`}>
            {name}
          </CardTitle>
          {verified && (
            <Award className="h-5 w-5 text-yellow-500 animate-pulse-gentle" />
          )}
        </div>
        <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-5 pb-4">
        <div className="flex items-center text-sm text-gray-600 group/location hover:text-yellow-600 transition-colors">
          <MapPin className="h-4 w-4 text-yellow-500 mr-2 shrink-0 group-hover/location:animate-bounce" />
          <span className="truncate">{address}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 group/phone hover:text-yellow-600 transition-colors">
          <Phone className="h-4 w-4 text-yellow-500 mr-2 shrink-0 group-hover/phone:animate-pulse" />
          <span>{phone}</span>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
            Premium Amenities
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {amenities.slice(0, 4).map((amenity, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100 transition-colors"
              >
                {amenity}
              </Badge>
            ))}
            {amenities.length > 4 && (
              <Badge 
                variant="outline" 
                className="text-xs bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                +{amenities.length - 4} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500">Starting from</span>
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold text-gray-800">{price}</div>
                {discount && originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    {originalPrice.low}-{originalPrice.high} BDT
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-500">per night</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span className="text-xs">2-4</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span className="text-xs">Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-xs">1-6</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex gap-3 w-full">
          <Button 
            variant="outline" 
            className="flex-1 rounded-xl hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 group/btn"
          >
            <Eye className="h-4 w-4 mr-2 group-hover/btn:text-yellow-600 transition-colors" />
            View Details
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Book Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function TipCard({
  icon,
  title,
  description,
  color = "yellow",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}) {
  const colorClasses = {
    yellow: "from-yellow-100 to-orange-100 text-yellow-600",
    blue: "from-blue-100 to-cyan-100 text-blue-600",
    green: "from-green-100 to-emerald-100 text-green-600",
    purple: "from-purple-100 to-pink-100 text-purple-600",
    orange: "from-orange-100 to-red-100 text-orange-600",
    red: "from-red-100 to-pink-100 text-red-600",
  };

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} mb-6 transform transition-transform duration-300 hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 border-t border-white/50">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
