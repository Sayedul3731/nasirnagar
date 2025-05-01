"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Sample data for historic places
const historicPlacesData = [
  {
    id: 1,
    name: "Dak Banglo",
    location: "Nasirnagar Sadar, Brahmanbaria",
    year: "19th century",
    description:
      "A colonial-era rest house situated along the banks of the Titas River, offering a picturesque riverside setting that has made it a beloved local landmark.",
    longDescription: `​The Nasirnagar Dak Bungalow is a colonial-era rest house situated in Nasirnagar Upazila of Brahmanbaria District, Bangladesh. Positioned along the banks of the Titas River, it offers a picturesque riverside setting that has made it a beloved local landmark.​

Historical Background
Dak bungalows were established during British colonial rule in the 19th century as part of a network of rest houses for government officials and mail carriers. Typically spaced 12 to 15 miles apart, these structures provided essential accommodations for traveling officers and served as administrative outposts in remote areas. They often featured simple architecture with long verandahs, high ceilings, and basic furnishings. ​

While specific historical records about the Nasirnagar Dak Bungalow are limited, its design and function align with the typical characteristics of these colonial rest houses. Over time, it has become an integral part of the local heritage, reflecting the architectural and administrative legacy of the British era.​

Cultural Significance
Beyond its historical role, the Nasirnagar Dak Bungalow has served as a venue for various community and political events. For instance, in November 2016, it was the site of a press briefing by the then Fisheries and Livestock Minister, Muhammed Sayedul Hoque, addressing communal tensions in the area. ​

Present-Day Relevance
Today, the Nasirnagar Dak Bungalow continues to be a point of interest for both locals and visitors. Its riverside location offers scenic views, making it a popular spot for relaxation and photography. The bungalow's enduring presence serves as a tangible link to the region's colonial past and its evolution over time.`,
    image: "https://i.ibb.co/DgrsGqmb/images-6.jpg",
    category: "Colonial",
  },
  {
    id: 2,
    name: "Haripur Zamindar Bari",
    location: "Haripur, Nasirnagar, Brahmanbaria",
    year: "Late 19th century",
    description:
      "A magnificent example of Bengal's zamindari architecture, showcasing the opulent lifestyle of the local aristocracy during the British colonial period.",
    longDescription: `The Haripur Zamindar Bari, also known as Haripur Rajbari, stands as a testament to the aristocratic legacy of Bengal during the colonial era. Located in Haripur village of Nasirnagar Upazila in Brahmanbaria District, this historical mansion was once the residence of prominent local zamindars (landlords).

Historical Background
Built in the late 19th century, the Haripur Zamindar Bari served as the administrative headquarters and residence for the zamindari estate that controlled significant portions of the surrounding lands. The zamindar family was known for their patronage of arts, culture and religious festivals in the region.

Architectural Features
The palatial structure exemplifies traditional Bengali architecture with colonial influences. Its design includes large courtyards, ornate columns, spacious rooms with high ceilings, and intricate woodwork. The estate comprised the main residential building, outbuildings for servants and staff, temples, and water bodies that were integral to the landscape design of Bengali aristocratic homes.

Current Status
Like many zamindari estates in Bangladesh, the Haripur Zamindar Bari has faced challenges of preservation over the decades since the abolition of the zamindari system in 1950. Parts of the structure have deteriorated, though it remains an important historical landmark that attracts visitors interested in the region's cultural heritage.

Cultural Significance
The Zamindar Bari is not just an architectural monument but also represents an important chapter in the social and economic history of Bengal. It reflects the complex relationship between landowners, tenants, and colonial authorities, and stands as a symbol of the pre-independence feudal system that shaped much of rural Bengal's landscape and society.`,
    image: "https://i.ibb.co.com/GfYPqcpn/zamida.jpg",
    category: "Heritage Buildings",
  },
  {
    id: 3,
    name: "Gokarna Nawab Bari Complex",
    location: "Gokarna, Nasirnagar, Brahmanbaria",
    year: "18th-19th century",
    description:
      "A historical complex featuring palatial buildings that once belonged to Muslim nobles, reflecting the architectural fusion of Mughal and colonial styles.",
    longDescription: `The Gokarna Nawab Bari Complex is a significant architectural and historical site located in Gokarna village within Nasirnagar Upazila of Brahmanbaria District. This elegant complex represents the legacy of Muslim aristocracy in the region and their influential role in local governance and culture.

Historical Context
Constructed during the late 18th to early 19th century, the complex was established by Muslim nobles who held considerable political and economic power under the later Mughal period and subsequent British colonial rule. The term "Nawab" traditionally referred to governors or high-ranking nobles in the Mughal administrative system, though in later periods it was also used for aristocratic Muslim families of considerable wealth and influence.

Architectural Elements
The complex comprises multiple buildings, including the main residential quarters, a diwan khana (reception hall), a family mosque, and auxiliary structures. The architecture displays a fascinating blend of Mughal aesthetics with later colonial influences - featuring elements such as arched doorways, decorative cornices, symmetrical layouts, and ornate interior spaces. The buildings are arranged around central courtyards, following traditional Indo-Islamic architectural principles.

Cultural Importance
During its heyday, the Gokarna Nawab Bari served as a center for Islamic learning, cultural patronage, and local governance. The family maintained a madrasah (Islamic school) and supported religious scholars, artists, and poets. Various religious and cultural festivals were celebrated here, making it a vibrant center of community life.

Present Condition
While parts of the complex have suffered from neglect and the ravages of time, significant portions still stand as a reminder of the region's rich cultural heritage. The site attracts history enthusiasts, architectural students, and tourists interested in Bangladesh's diverse historical narrative.

The complex represents an important chapter in the cultural history of Nasirnagar, illustrating the confluence of Islamic traditions with local Bengali culture and colonial influences that characterized much of Bengal's history in the 18th and 19th centuries.`,
    image: "https://i.ibb.co.com/4ZPvhfqb/nowab.jpg",
    category: "Heritage Buildings",
  },
  {
    id: 4,
    name: "Guniyauk Bagan Bari",
    location: "Guniyauk Village, Nasirnagar, Brahmanbaria",
    year: "Early 20th century",
    description:
      "A charming garden house built during the later colonial period, featuring unique architectural elements and surrounded by lush orchards and gardens.",
    longDescription: `Guniyauk Bagan Bari is a picturesque garden estate located in Guniyauk village of Nasirnagar Upazila in Brahmanbaria District. The name "Bagan Bari" literally translates to "Garden House," aptly describing this charming property surrounded by extensive gardens and orchards.

Historical Development
Established in the early 20th century, the Guniyauk Bagan Bari was developed by a wealthy local family during the later British colonial period. Unlike the formal zamindari estates, the Bagan Bari represented a more leisure-oriented approach to rural architecture, focusing on the harmonious integration of living spaces with natural surroundings. The property was conceived as both a productive agricultural estate and a retreat from urban life.

Architectural Features
The main building features a blend of colonial and traditional Bengali architectural styles, characterized by spacious verandahs, high ceilings to promote air circulation, and large windows that offer panoramic views of the surrounding landscape. The layout typically includes a central structure with symmetrical rooms arranged around a central hall or courtyard.

Gardens and Surroundings
The most distinctive feature of Guniyauk Bagan Bari is its extensive gardens and orchards, which historically included various fruit trees indigenous to Bangladesh, ornamental plants, and water features. The agricultural component of the estate traditionally produced mangoes, jackfruit, litchi, and other tropical fruits that were both consumed by the family and sold in local markets.

Cultural Significance
The Bagan Bari represents a particular lifestyle that developed among the Bengali gentry during the late colonial period—one that valued rural retreat, agricultural productivity, and aesthetic appreciation of the natural environment. The estate hosted seasonal celebrations related to harvests and traditional Bengali festivals, serving as a gathering place for extended family and social networks.

Current Status
Today, Guniyauk Bagan Bari stands as a reminder of Bengal's horticultural heritage and changing patterns of rural elite residences. While the property has experienced some changes over the decades, it remains an important example of how architecture and landscape design were integrated in traditional Bengali estate planning.`,
    image: "https://i.ibb.co.com/4gJfcvdj/mqdefault.jpg",
    category: "Colonial",
  },
  {
    id: 5,
    name: "Jagannath Dev Temple",
    location: "Nasirnagar Sadar, Brahmanbaria",
    year: "17th century",
    description:
      "An ancient Hindu temple dedicated to Lord Jagannath, featuring traditional Bengali temple architecture with terracotta decorations and intricate carvings.",
    longDescription: `The Jagannath Dev Temple is a significant Hindu religious site located in Nasirnagar Sadar of Brahmanbaria District. Dedicated to Lord Jagannath, a form of Lord Vishnu particularly revered in eastern India and Bangladesh, this temple represents an important piece of the region's religious and architectural heritage.

Historical Origins
Dating back to the 17th century, the temple was established during a period when Bengali Hindu temple architecture was flourishing under the patronage of various local rulers and wealthy landowners. The specific founding date and patron of the temple are subjects of local oral history, with various accounts attributing its construction to different benefactors who sought divine blessings through this sacred endowment.

Architectural Style
The temple exemplifies traditional Bengali temple architecture, characterized by its distinctive curved roof structure known as "bangla chala" or "do-chala" (two-sloped) roof. The facade features intricate terracotta decorations depicting scenes from Hindu mythology, particularly stories related to Lord Krishna (of whom Jagannath is considered a form). The temple structure is built on a raised platform, with the main shrine housing the deity and surrounding spaces for ritual performances and congregation.

Religious Significance
For the local Hindu community, the Jagannath Dev Temple has served as a central place of worship for centuries. The temple follows rituals associated with Vaishnavite traditions, including daily puja (worship) ceremonies, special observances during auspicious dates in the Hindu calendar, and celebration of festivals such as Rath Yatra (Chariot Festival) when the deity is ceremonially moved in a procession.

Cultural Context
The temple represents more than just a religious structure; it has been a center for cultural activities, including traditional music performances, recitations of religious texts, and community gatherings. The architectural and artistic elements of the temple provide invaluable insights into the aesthetic sensibilities and craftsmanship of historical Bengal.

Preservation Challenges
Like many historical temples in Bangladesh, the Jagannath Dev Temple has faced challenges of preservation due to natural deterioration, changing demographics, and occasional periods of communal tension. However, efforts by local communities, cultural organizations, and governmental bodies have helped in maintaining this important piece of cultural heritage.

The Jagannath Dev Temple stands as a testament to the rich religious diversity and cultural synthesis that has characterized the Bengal region throughout its history, reflecting the artistic and spiritual expressions of generations of devotees.`,
    image: "https://placehold.co/600x400/png",
    category: "Religious Sites",
  },
  {
    id: 6,
    name: "Fandauk Hindu Temple",
    location: "Fandauk Village, Nasirnagar, Brahmanbaria",
    year: "18th century",
    description:
      "A historic Hindu temple complex known for its unique architectural style, religious sculptures, and cultural significance to the local Hindu community.",
    longDescription: `The Fandauk Hindu Temple is a historically significant religious structure located in Fandauk village of Nasirnagar Upazila in Brahmanbaria District. This temple holds great religious and cultural importance for the Hindu community of the region and stands as an architectural landmark reflecting Bengal's rich tradition of temple construction.

Historical Development
Constructed during the 18th century, the temple was built during a period when Bengali Hindu temple architecture was experiencing significant development under the patronage of local zamindars and merchants. The temple's founding is associated with local patrons who commissioned its construction as an act of religious devotion and community service.

Architectural Features
The temple follows the traditional Bengali style of temple architecture, characterized by its distinctive curved roof structure (typically "aat-chala" or "ratna" style), ornate terracotta decorations, and intricate sculptural work. The facade and interior walls feature detailed carvings depicting scenes from Hindu mythology, particularly stories from the Ramayana, Mahabharata, and Puranas. The temple complex includes the main shrine and several smaller auxiliary structures that serve various ritual purposes.

Religious Significance
Dedicated primarily to Lord Shiva, Krishna, or a specific form of the Divine Mother (specific deity information varies in local accounts), the temple follows traditional Hindu ritual practices. It serves as a center for daily worship (puja), seasonal religious festivals, and community gatherings. The temple observes major Hindu festivals including Durga Puja, Kali Puja, and Janmashtami with special ceremonies.

Cultural Impact
Beyond its religious function, the Fandauk Temple has historically served as a cultural center where traditional arts like devotional music, dance, and recitation flourished. The temple complex often hosted performances of traditional Bengali religious performing arts such as Kirtan (devotional songs) and Pala Gaan (narrative musical performances).

Current Status
The temple has survived various historical challenges including natural deterioration and periods of political upheaval. While some aspects of the original structure may have been altered through repairs and renovations over the centuries, the temple continues to be an active place of worship and an important heritage site. Local communities, cultural organizations, and occasional government initiatives have contributed to its preservation.

The Fandauk Hindu Temple represents not only the religious devotion of generations of worshippers but also showcases the artistic and architectural achievements of historical Bengal, making it an invaluable cultural asset of Nasirnagar.`,
    image: "https://placehold.co/600x400/png",
    category: "Religious Sites",
  },
  {
    id: 7,
    name: "Noagaon Bhuiyan Bari",
    location: "Noagaon Village, Nasirnagar, Brahmanbaria",
    year: "Late 19th century",
    description:
      "An ancestral mansion belonging to the influential Bhuiyan family, featuring traditional Bengali residential architecture with elements of colonial influence.",
    longDescription: `The Noagaon Bhuiyan Bari is a historical residence located in Noagaon village within Nasirnagar Upazila of Brahmanbaria District. This ancestral home belonged to the prominent Bhuiyan family, who were influential landowners and community leaders in the region during the late colonial period.

Historical Context
Constructed in the late 19th century, the Bhuiyan Bari emerged during a time when the traditional Bengali rural elite were adapting to changing political and economic conditions under British colonial rule. The Bhuiyan family held the title of local talukdars (landholders) and exercised considerable influence in local administration and social affairs. Unlike the more opulent zamindari estates, Bhuiyan Bari represented the residences of the middle-tier rural gentry who formed an important component of Bengal's social structure.

Architectural Features
The Bhuiyan Bari exemplifies traditional Bengali residential architecture with subtle colonial influences. The structure typically follows the courtyard-centered design common to Bengal homesteads, with rooms arranged around a central open space that serves both practical and social functions. The building features high ceilings, spacious verandahs for socializing during different seasons, ornate wooden doors and windows, and decorative elements that reflect the family's status without the ostentatious display found in larger estates.

Social and Cultural Significance
During its prime, the Bhuiyan Bari served not merely as a residence but as a center for local governance, dispute resolution, and cultural activities. The family often played important roles in facilitating community events, religious festivals, and educational initiatives. The house would have contained spaces for receiving guests, conducting business, and hosting cultural performances during special occasions.

Historical Transitions
The changing political landscape after the partition of India in 1947 and the abolition of the zamindari system in East Pakistan (now Bangladesh) in 1950 significantly affected families like the Bhuiyans. Their social and economic roles underwent transformation as the traditional landholding systems dissolved.

Present Condition
Today, the Noagaon Bhuiyan Bari stands as a physical reminder of the region's social history and architectural traditions. Like many such structures across Bangladesh, it may have experienced various levels of modification, repurposing, or deterioration over the decades. However, it remains an important landmark for understanding the social stratification and lifestyle of rural Bengal during the late colonial and early post-colonial periods.

The Bhuiyan Bari represents a crucial link in understanding how the Bengali rural elite adapted their living spaces to changing times while maintaining connections to traditional architectural forms and social functions.`,
    image: "https://placehold.co/600x400/png",
    category: "Heritage Buildings",
  },
];

export default function HistoricPlaces() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-slate-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-30"></div>
        <div className="relative container h-full flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Discover Historic Places
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Explore the world&apos;s most fascinating historical sites and
            ancient wonders
          </p>
          <div className="relative w-full max-w-md mt-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search historic places..."
              className="w-full py-3 pl-10 pr-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>
      {/* Search and filter section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full md:w-auto"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-auto md:flex h-auto gap-2">
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
          <div
            key={place.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <Image
                src={place.image}
                alt={place.name}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-amber-500 hover:bg-amber-600">
                {place.category}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {place.name}
              </h3>
              <div className="flex items-center text-sm text-slate-300 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {place.location}
              </div>
              <div className="flex items-center text-sm text-slate-300 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {place.year}
              </div>
              <p className="text-sm text-slate-300 line-clamp-2 mb-4">
                {place.description}
              </p>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                Learn More
              </Button>
            </div>
          </div>
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
