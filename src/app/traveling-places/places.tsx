"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Info, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Sample data for historic places
const historicPlacesData = [
  {
    id: 1,
    name: "Machu Picchu",
    location: "Peru",
    year: "15th century",
    description:
      "An ancient Incan citadel set high in the Andes Mountains, Machu Picchu is renowned for its sophisticated dry-stone walls and panoramic views.",
    longDescription:
      "Machu Picchu stands 2,430 meters above sea level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ancient Ruins",
  },
  {
    id: 2,
    name: "Colosseum",
    location: "Rome, Italy",
    year: "70-80 AD",
    description:
      "An oval amphitheatre in the centre of Rome, the largest ever built during the Roman Empire and an iconic symbol of Imperial Rome.",
    longDescription:
      "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ancient Architecture",
  },
  {
    id: 3,
    name: "Petra",
    location: "Jordan",
    year: "312 BC",
    description:
      "A famous archaeological site containing elaborate tomb and temple facades carved into pink sandstone cliffs.",
    longDescription:
      "Petra is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ancient Ruins",
  },
  {
    id: 4,
    name: "Taj Mahal",
    location: "Agra, India",
    year: "1632-1653",
    description:
      "An ivory-white marble mausoleum commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife.",
    longDescription:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Monuments",
  },
  {
    id: 5,
    name: "Angkor Wat",
    location: "Cambodia",
    year: "12th century",
    description:
      "A temple complex and the largest religious monument in the world, originally constructed as a Hindu temple dedicated to Vishnu.",
    longDescription:
      "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares. Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Temples",
  },
  {
    id: 6,
    name: "Great Wall of China",
    location: "China",
    year: "7th century BC - 16th century AD",
    description:
      "A series of fortifications built across the historical northern borders of China to protect against various nomadic groups.",
    longDescription:
      "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fortifications",
  },
];

export default function HistoricPlaces() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPlace, setSelectedPlace] = useState<
    null | (typeof historicPlacesData)[0]
  >(null);

  // Get unique categories for filter tabs
  const categories = [
    "all",
    ...new Set(historicPlacesData.map((place) => place.category)),
  ];

  // Filter places based on search term and active category
  const filteredPlaces = historicPlacesData.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || place.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Search and filter section */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search places..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full md:w-auto"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Historic places grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place) => (
          <Card
            key={place.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{place.name}</CardTitle>
                <Badge variant="outline" className="ml-2">
                  {place.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pb-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {place.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {place.year}
              </div>
              <p className="text-sm line-clamp-2">{place.description}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setSelectedPlace(place)}
                  >
                    Learn More
                  </Button>
                </DialogTrigger>
                {selectedPlace && (
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        {selectedPlace.name}
                      </DialogTitle>
                      <DialogDescription className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {selectedPlace.location} •
                        <Calendar className="h-4 w-4 ml-2" />
                        {selectedPlace.year}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative h-64 w-full my-4">
                      <Image
                        src={selectedPlace.image || "/placeholder.svg"}
                        alt={selectedPlace.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p>{selectedPlace.longDescription}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="text-sm">
                          {selectedPlace.category}
                        </Badge>
                        <Button variant="default">Plan a Visit</Button>
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No historic places found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter to find what you&apos;re looking
            for.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
