"use client"; // Add this if using React hooks or client components
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
  Clock,
  Gift,
  MapPin,
  Phone,
  Scissors,
  Search,
  Shirt,
  ShoppingBag,
  Store,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Shopping in Nasirnagar</h1>
            <p className="text-xl text-gray-300 mb-6">
              Discover local markets, shops, and businesses offering a variety
              of products and services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#shops">Explore Shops</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#markets">Local Markets</a>
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
                    placeholder="Search for shops or products"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="clothing">Clothing & Fashion</SelectItem>
                    <SelectItem value="grocery">Grocery & Food</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="handicrafts">Handicrafts</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
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
      <section className="py-12 bg-gray-50" id="shops">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Local Shops & Businesses
          </h2>

          <Tabs defaultValue="clothing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="grocery">Grocery</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="handicrafts">Handicrafts</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="clothing" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            </TabsContent>

            <TabsContent value="grocery" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            </TabsContent>

            <TabsContent value="handicrafts" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Local Markets */}
      <section className="py-12 bg-white" id="markets">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Local Markets</h2>

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
}: ShopCardProps) {
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
          <Badge className="bg-yellow-500 text-black">{category}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
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
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
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
