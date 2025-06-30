"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  ChevronRight,
  Clock,
  Filter,
  Gift,
  Grid3X3,
  Heart,
  List,
  MapPin,
  Phone,
  Scissors,
  Search,
  Shirt,
  ShoppingBag,
  Star,
  Store,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShopsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('clothing');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (shopName: string) => {
    setFavorites(prev => 
      prev.includes(shopName) 
        ? prev.filter(name => name !== shopName)
        : [...prev, shopName]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
              <Store className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Discover Local Businesses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Shopping in Nasirnagar
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our vibrant marketplace featuring local artisans, traditional crafts, modern stores, and authentic culinary experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <a href="#shops" className="flex items-center">
                  Explore Shops
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="#markets">Local Markets</a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Local Shops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4</div>
                <div className="text-sm text-gray-400">Major Markets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-8 bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 shadow-sm border">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                    Search for shops or products
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Try 'traditional clothing' or 'electronics'"
                      className="pl-12 h-12 text-base rounded-xl border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-56">
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2 block">
                    Category
                  </Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category" className="h-12 rounded-xl border-gray-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="clothing">🎽 Clothing & Fashion</SelectItem>
                      <SelectItem value="grocery">🥬 Grocery & Food</SelectItem>
                      <SelectItem value="electronics">💻 Electronics</SelectItem>
                      <SelectItem value="handicrafts">🎨 Handicrafts</SelectItem>
                      <SelectItem value="services">⚙️ Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-12 px-4 rounded-xl border-gray-200 hover:bg-gray-50"
                  >
                    <Filter className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black h-12 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Search
                  </Button>
                </div>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                  Found <span className="font-semibold text-gray-900">24 shops</span> in Nasirnagar
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">View:</span>
                  <div className="flex rounded-lg border border-gray-200 p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="h-8 px-3"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="h-8 px-3"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id="shops">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Local Shops & Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover authentic local businesses that showcase the heart and soul of Nasirnagar&apos;s community
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white shadow-sm border border-gray-200 rounded-xl p-1">
              <TabsTrigger value="clothing" className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                🎽 Clothing
              </TabsTrigger>
              <TabsTrigger value="grocery" className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                🥬 Grocery
              </TabsTrigger>
              <TabsTrigger value="electronics" className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                💻 Electronics
              </TabsTrigger>
              <TabsTrigger value="handicrafts" className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                🎨 Handicrafts
              </TabsTrigger>
              <TabsTrigger value="services" className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                ⚙️ Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clothing" className="mt-8">
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}>
                <ShopCard
                  name="Fashion House Nasirnagar"
                  description="Modern clothing store offering trendy apparel for men, women, and children."
                  category="Clothing & Fashion"
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-568001"
                  hours="10:00 AM - 8:00 PM (Closed on Fridays)"
                  specialties={[
                    "Western Wear",
                    "Traditional Clothing",
                    "Accessories",
                    "Footwear",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.5}
                  reviewCount={127}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Fashion House Nasirnagar")}
                  onToggleFavorite={() => toggleFavorite("Fashion House Nasirnagar")}
                />

                <ShopCard
                  name="Traditional Attire"
                  description="Shop specializing in traditional Bengali clothing and cultural attire."
                  category="Clothing & Fashion"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-568002"
                  hours="9:00 AM - 7:00 PM"
                  specialties={[
                    "Sarees",
                    "Panjabis",
                    "Wedding Attire",
                    "Cultural Clothing",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.8}
                  reviewCount={89}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Traditional Attire")}
                  onToggleFavorite={() => toggleFavorite("Traditional Attire")}
                />

                <ShopCard
                  name="Kids Fashion World"
                  description="Store dedicated to children's clothing, toys, and accessories."
                  category="Clothing & Fashion"
                  address="New Market, Nasirnagar"
                  phone="+880 1234-568003"
                  hours="10:00 AM - 8:00 PM"
                  specialties={[
                    "Children's Clothing",
                    "School Uniforms",
                    "Toys",
                    "Baby Products",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.3}
                  reviewCount={56}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Kids Fashion World")}
                  onToggleFavorite={() => toggleFavorite("Kids Fashion World")}
                />

                <ShopCard
                  name="Men's Collection"
                  description="Specialized store for men's clothing, accessories, and grooming products."
                  category="Clothing & Fashion"
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-568004"
                  hours="10:00 AM - 9:00 PM"
                  specialties={[
                    "Men's Formal Wear",
                    "Casual Clothing",
                    "Accessories",
                    "Grooming Products",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.6}
                  reviewCount={94}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Men's Collection")}
                  onToggleFavorite={() => toggleFavorite("Men's Collection")}
                />
              </div>
            </TabsContent>

            <TabsContent value="grocery" className="mt-8">
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}>
                <ShopCard
                  name="Nasirnagar Supermarket"
                  description="Large grocery store offering a wide range of food items, household products, and daily necessities."
                  category="Grocery & Food"
                  address="Central Market, Nasirnagar"
                  phone="+880 1234-568005"
                  hours="8:00 AM - 10:00 PM"
                  specialties={[
                    "Groceries",
                    "Fresh Produce",
                    "Household Items",
                    "Imported Products",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.2}
                  reviewCount={203}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Nasirnagar Supermarket")}
                  onToggleFavorite={() => toggleFavorite("Nasirnagar Supermarket")}
                />

                <ShopCard
                  name="Fresh Fruits & Vegetables"
                  description="Shop specializing in fresh, locally sourced fruits and vegetables."
                  category="Grocery & Food"
                  address="Daily Market, Nasirnagar"
                  phone="+880 1234-568006"
                  hours="6:00 AM - 8:00 PM"
                  specialties={[
                    "Seasonal Fruits",
                    "Organic Vegetables",
                    "Local Produce",
                    "Herbs & Spices",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.7}
                  reviewCount={156}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Fresh Fruits & Vegetables")}
                  onToggleFavorite={() => toggleFavorite("Fresh Fruits & Vegetables")}
                />

                <ShopCard
                  name="Bakery & Confectionery"
                  description="Fresh bakery products, cakes, pastries, and confectionery items."
                  category="Grocery & Food"
                  address="New Market, Nasirnagar"
                  phone="+880 1234-568007"
                  hours="7:00 AM - 9:00 PM"
                  specialties={["Breads", "Cakes", "Pastries", "Sweets"]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.4}
                  reviewCount={78}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Bakery & Confectionery")}
                  onToggleFavorite={() => toggleFavorite("Bakery & Confectionery")}
                />

                <ShopCard
                  name="Organic Food Store"
                  description="Specializing in organic and health food products."
                  category="Grocery & Food"
                  address="Health Complex Road, Nasirnagar"
                  phone="+880 1234-568008"
                  hours="9:00 AM - 7:00 PM"
                  specialties={[
                    "Organic Products",
                    "Health Foods",
                    "Supplements",
                    "Natural Remedies",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.6}
                  reviewCount={92}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Organic Food Store")}
                  onToggleFavorite={() => toggleFavorite("Organic Food Store")}
                />
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-8">
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}>
                <ShopCard
                  name="Digital World"
                  description="Electronics store offering a range of devices, gadgets, and accessories."
                  category="Electronics"
                  address="Commercial Area, Nasirnagar"
                  phone="+880 1234-568009"
                  hours="10:00 AM - 8:00 PM"
                  specialties={[
                    "Mobile Phones",
                    "Computers",
                    "Accessories",
                    "Home Electronics",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.1}
                  reviewCount={145}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Digital World")}
                  onToggleFavorite={() => toggleFavorite("Digital World")}
                />

                <ShopCard
                  name="Mobile Phone Center"
                  description="Specialized store for mobile phones, accessories, and repair services."
                  category="Electronics"
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-568010"
                  hours="9:00 AM - 9:00 PM"
                  specialties={[
                    "Mobile Phones",
                    "Accessories",
                    "Repair Services",
                    "SIM Cards & Recharge",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.5}
                  reviewCount={189}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Mobile Phone Center")}
                  onToggleFavorite={() => toggleFavorite("Mobile Phone Center")}
                />

                <ShopCard
                  name="Computer Solutions"
                  description="Computer sales, accessories, and repair services."
                  category="Electronics"
                  address="Commercial Area, Nasirnagar"
                  phone="+880 1234-568011"
                  hours="10:00 AM - 7:00 PM"
                  specialties={[
                    "Computers",
                    "Laptops",
                    "Accessories",
                    "Repair & Maintenance",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.3}
                  reviewCount={76}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Computer Solutions")}
                  onToggleFavorite={() => toggleFavorite("Computer Solutions")}
                />
              </div>
            </TabsContent>

            <TabsContent value="handicrafts" className="mt-8">
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}>
                <ShopCard
                  name="Nasirnagar Handicrafts"
                  description="Shop showcasing traditional handicrafts and artisanal products from the region."
                  category="Handicrafts"
                  address="Cultural Center Road, Nasirnagar"
                  phone="+880 1234-568012"
                  hours="9:00 AM - 6:00 PM"
                  specialties={[
                    "Pottery",
                    "Textiles",
                    "Wood Carvings",
                    "Bamboo Crafts",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.9}
                  reviewCount={142}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Nasirnagar Handicrafts")}
                  onToggleFavorite={() => toggleFavorite("Nasirnagar Handicrafts")}
                />

                <ShopCard
                  name="Artisan Gallery"
                  description="Gallery and shop featuring works by local artisans and craftspeople."
                  category="Handicrafts"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-568013"
                  hours="10:00 AM - 7:00 PM (Closed on Thursdays)"
                  specialties={[
                    "Handmade Crafts",
                    "Art Pieces",
                    "Souvenirs",
                    "Decorative Items",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.7}
                  reviewCount={98}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Artisan Gallery")}
                  onToggleFavorite={() => toggleFavorite("Artisan Gallery")}
                />

                <ShopCard
                  name="Traditional Textile Shop"
                  description="Shop specializing in traditional textiles, fabrics, and handloom products."
                  category="Handicrafts"
                  address="Handicraft Village, Nasirnagar"
                  phone="+880 1234-568014"
                  hours="9:00 AM - 6:00 PM"
                  specialties={[
                    "Handloom Fabrics",
                    "Traditional Textiles",
                    "Embroidery",
                    "Weaving Products",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.6}
                  reviewCount={67}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Traditional Textile Shop")}
                  onToggleFavorite={() => toggleFavorite("Traditional Textile Shop")}
                />
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-8">
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'}`}>
                <ShopCard
                  name="Beauty Salon & Spa"
                  description="Full-service beauty salon offering hair, skin, and spa treatments."
                  category="Services"
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-568015"
                  hours="10:00 AM - 8:00 PM"
                  specialties={[
                    "Hair Styling",
                    "Facial Treatments",
                    "Manicure & Pedicure",
                    "Spa Services",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.4}
                  reviewCount={116}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Beauty Salon & Spa")}
                  onToggleFavorite={() => toggleFavorite("Beauty Salon & Spa")}
                />

                <ShopCard
                  name="Tailor Master"
                  description="Professional tailoring services for men's and women's clothing."
                  category="Services"
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-568016"
                  hours="9:00 AM - 7:00 PM (Closed on Fridays)"
                  specialties={[
                    "Custom Tailoring",
                    "Alterations",
                    "Traditional Attire",
                    "Western Wear",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.8}
                  reviewCount={134}
                  isPopular={true}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Tailor Master")}
                  onToggleFavorite={() => toggleFavorite("Tailor Master")}
                />

                <ShopCard
                  name="Photo Studio"
                  description="Professional photography services for portraits, events, and documents."
                  category="Services"
                  address="New Market, Nasirnagar"
                  phone="+880 1234-568017"
                  hours="10:00 AM - 7:00 PM"
                  specialties={[
                    "Portrait Photography",
                    "Event Coverage",
                    "Passport Photos",
                    "Photo Printing",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.2}
                  reviewCount={87}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Photo Studio")}
                  onToggleFavorite={() => toggleFavorite("Photo Studio")}
                />

                <ShopCard
                  name="Printing & Stationery"
                  description="Printing services and stationery supplies for personal and business needs."
                  category="Services"
                  address="Commercial Area, Nasirnagar"
                  phone="+880 1234-568018"
                  hours="9:00 AM - 8:00 PM"
                  specialties={[
                    "Printing",
                    "Photocopying",
                    "Stationery",
                    "Office Supplies",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                  rating={4.1}
                  reviewCount={45}
                  isPopular={false}
                  viewMode={viewMode}
                  isFavorite={favorites.includes("Printing & Stationery")}
                  onToggleFavorite={() => toggleFavorite("Printing & Stationery")}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Local Markets */}
      <section className="py-16 bg-white" id="markets">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Local Markets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant atmosphere of Nasirnagar&apos;s bustling markets
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <MarketCard
              name="Central Market"
              description="The main market of Nasirnagar offering a wide range of products including groceries, clothing, household items, and more."
              operatingHours="Daily: 7:00 AM - 9:00 PM"
              specialDays="Friday Market: Extended hours and special products"
              location="Central Nasirnagar"
              highlights={[
                "Fresh Produce Section",
                "Clothing Stores",
                "Household Items",
                "Food Stalls",
              ]}
              image="/placeholder.svg?height=300&width=500"
            />

            <MarketCard
              name="New Market"
              description="Modern market complex with shops selling fashion, electronics, and specialty items."
              operatingHours="Daily: 9:00 AM - 8:00 PM"
              specialDays="Weekend Bazaar: Saturday and Sunday with special discounts"
              location="Commercial Area, Nasirnagar"
              highlights={[
                "Fashion Outlets",
                "Electronics Shops",
                "Cosmetics",
                "Accessories",
              ]}
              image="/placeholder.svg?height=300&width=500"
            />

            <MarketCard
              name="Daily Bazaar"
              description="Traditional daily market focusing on fresh produce, fish, meat, and daily necessities."
              operatingHours="Daily: 6:00 AM - 2:00 PM"
              specialDays="Morning hours offer the freshest produce"
              location="East Nasirnagar"
              highlights={[
                "Fresh Vegetables",
                "Fish Market",
                "Meat Section",
                "Spices & Herbs",
              ]}
              image="/placeholder.svg?height=300&width=500"
            />

            <MarketCard
              name="Handicraft Market"
              description="Specialized market showcasing traditional handicrafts, artisanal products, and souvenirs."
              operatingHours="Daily: 10:00 AM - 6:00 PM"
              specialDays="Cultural festivals feature special exhibitions"
              location="Handicraft Village, Nasirnagar"
              highlights={[
                "Traditional Crafts",
                "Handloom Products",
                "Souvenirs",
                "Artisanal Goods",
              ]}
              image="/placeholder.svg?height=300&width=500"
            />
          </div>
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shopping Tips</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={<Clock className="h-10 w-10" />}
              title="Best Shopping Hours"
              description="Morning hours (8:00 AM - 11:00 AM) are ideal for fresh produce and less crowded markets. Evening hours (4:00 PM - 7:00 PM) are better for clothing and general shopping."
            />

            <TipCard
              icon={<ShoppingBag className="h-10 w-10" />}
              title="Bargaining"
              description="Bargaining is common in traditional markets and with street vendors. Start by offering 60-70% of the asking price and negotiate from there. Fixed-price shops typically don't allow bargaining."
            />

            <TipCard
              icon={<Store className="h-10 w-10" />}
              title="Local Specialties"
              description="Look for local specialties like handloom textiles, pottery, bamboo crafts, and traditional sweets that make great souvenirs and gifts."
            />

            <TipCard
              icon={<Utensils className="h-10 w-10" />}
              title="Food Shopping"
              description="For the freshest produce, visit the Daily Bazaar in the morning. Local specialties like sweets and snacks are best bought from dedicated shops rather than general stores."
            />

            <TipCard
              icon={<Gift className="h-10 w-10" />}
              title="Souvenirs"
              description="The Handicraft Market offers the best selection of authentic local souvenirs. Look for items with cultural significance that represent the region's heritage."
            />

            <TipCard
              icon={<Shirt className="h-10 w-10" />}
              title="Clothing"
              description="For traditional clothing, visit specialized shops like 'Traditional Attire.' For modern fashion, the New Market offers a good selection of contemporary styles."
            />
          </div>
        </div>
      </section>

      {/* Featured Shop */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Shop</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nasirnagar Handicrafts"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Nasirnagar Handicrafts
              </h3>
              <p className="text-gray-700 mb-6">
                Discover the rich cultural heritage of Nasirnagar through its
                traditional handicrafts. This shop showcases the skilled
                craftsmanship of local artisans, offering a wide range of
                handmade products that reflect the region&apos;s artistic
                traditions and cultural identity.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Scissors className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Handcrafted Items</span>
                </div>
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Unique Souvenirs</span>
                </div>
                <div className="flex items-center">
                  <Shirt className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Traditional Textiles</span>
                </div>
                <div className="flex items-center">
                  <Store className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Artisanal Products</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Cultural Center Road, Nasirnagar
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
                  <span className="text-gray-700">+880 1234-568012</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
                  <span className="text-gray-700">
                    9:00 AM - 6:00 PM (Daily)
                  </span>
                </div>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Visit Shop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Looking for a Specific Shop?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you need help finding a specific shop or product in Nasirnagar,
            our information center can assist you with directions and
            recommendations.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/contact">Contact Information Center</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface ShopCardProps {
  name: string;
  description: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  specialties: string[];
  image: string;
  rating: number;
  reviewCount: number;
  isPopular: boolean;
  viewMode: 'grid' | 'list';
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function ShopCard({
  name,
  description,
  category,
  address,
  phone,
  hours,
  specialties,
  image,
  rating,
  reviewCount,
  isPopular,
  viewMode,
  isFavorite,
  onToggleFavorite,
}: ShopCardProps) {
  if (viewMode === 'list') {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 md:h-auto md:w-80">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {isPopular && (
                <Badge className="bg-red-500 text-white font-medium">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
              <Badge className="bg-yellow-500 text-black font-medium">{category}</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              onClick={onToggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </Button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{rating}</span>
                  <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-yellow-500 mr-2 shrink-0" />
                  <span className="text-sm text-gray-700">{phone}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-yellow-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-700">{hours}</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-sm text-gray-500 mb-2">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                View Details
              </Button>
              <Button variant="outline" className="px-6">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md bg-white group">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {isPopular && (
            <Badge className="bg-red-500 text-white font-medium shadow-md">
              <TrendingUp className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
          <Badge className="bg-yellow-500 text-black font-medium shadow-md">{category}</Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md"
          onClick={onToggleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
        <div className="absolute bottom-3 left-3 flex items-center bg-white/90 rounded-full px-3 py-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-900 ml-1">{rating}</span>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-1">{name}</CardTitle>
            <div className="text-sm text-gray-500">
              <Users className="h-3 w-3 inline mr-1" />
              {reviewCount} reviews
            </div>
          </div>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="space-y-2">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-700">{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-yellow-500 mr-2 shrink-0" />
            <span className="text-sm text-gray-700">{phone}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-yellow-500 mr-2 shrink-0" />
            <span className="text-sm text-gray-700">{hours}</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 text-xs">
                {specialty}
              </Badge>
            ))}
            {specialties.length > 3 && (
              <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200 text-xs">
                +{specialties.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

interface MarketCardProps {
  name: string;
  description: string;
  operatingHours: string;
  specialDays: string;
  location: string;
  highlights: string[];
  image: string;
}

function MarketCard({
  name,
  description,
  operatingHours,
  specialDays,
  location,
  highlights,
  image,
}: MarketCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-2/5">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-3/5">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
              <span className="text-gray-700">{operatingHours}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
              <span className="text-gray-700">{specialDays}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
              <span className="text-gray-700">{location}</span>
            </div>
            <div className="flex items-start">
              <ShoppingBag className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
              <div className="text-gray-700">
                <div className="font-medium text-sm mb-1">Highlights:</div>
                <ul className="list-disc pl-5 space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
