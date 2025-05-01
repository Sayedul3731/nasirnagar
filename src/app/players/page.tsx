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
import { Calendar, MapPin, Medal, Search, Star, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlayersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Notable Players</h1>
            <p className="text-xl text-gray-300 mb-6">
              Discover the talented athletes who represent Nasirnagar in various
              sports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#players">View Players</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#achievements">Player Achievements</a>
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
                    placeholder="Search by player name"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="sport" className="sr-only">
                  Sport
                </Label>
                <Select>
                  <SelectTrigger id="sport">
                    <SelectValue placeholder="Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                    <SelectItem value="badminton">Badminton</SelectItem>
                    <SelectItem value="other">Other Sports</SelectItem>
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
      <section className="py-12 bg-gray-50" id="players">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Players
          </h2>

          <Tabs defaultValue="football" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="football">Football</TabsTrigger>
              <TabsTrigger value="cricket">Cricket</TabsTrigger>
              <TabsTrigger value="volleyball">Volleyball</TabsTrigger>
              <TabsTrigger value="badminton">Badminton</TabsTrigger>
              <TabsTrigger value="other">Other Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="football" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerCard
                  name="Karim Rahman"
                  position="Forward"
                  age={24}
                  team="Nasirnagar Football Club"
                  achievements={[
                    "Top Scorer (2022)",
                    "Player of the Tournament (2021)",
                    "District Team Selection (2020)",
                  ]}
                  stats={[
                    { label: "Goals", value: "32" },
                    { label: "Assists", value: "15" },
                    { label: "Matches", value: "45" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Fahim Ahmed"
                  position="Midfielder"
                  age={26}
                  team="Nasirnagar Football Club"
                  achievements={[
                    "Best Midfielder (2022)",
                    "Captain (2021-Present)",
                    "Regional Team Selection (2019)",
                  ]}
                  stats={[
                    { label: "Goals", value: "12" },
                    { label: "Assists", value: "28" },
                    { label: "Matches", value: "50" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Nasir Uddin"
                  position="Goalkeeper"
                  age={28}
                  team="Nasirnagar Football Club"
                  achievements={[
                    "Best Goalkeeper (2023)",
                    "Clean Sheets Record (2022)",
                    "District Team (2020-Present)",
                  ]}
                  stats={[
                    { label: "Clean Sheets", value: "18" },
                    { label: "Saves", value: "120" },
                    { label: "Matches", value: "42" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Sadia Khatun"
                  position="Forward"
                  age={22}
                  team="Nasirnagar Women's FC"
                  achievements={[
                    "Top Scorer Women's League (2023)",
                    "Best Young Player (2022)",
                  ]}
                  stats={[
                    { label: "Goals", value: "24" },
                    { label: "Assists", value: "10" },
                    { label: "Matches", value: "38" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Rahim Khan"
                  position="Defender"
                  age={25}
                  team="Nasirnagar Football Club"
                  achievements={[
                    "Best Defender (2022)",
                    "District Team Selection (2021)",
                  ]}
                  stats={[
                    { label: "Goals", value: "5" },
                    { label: "Assists", value: "8" },
                    { label: "Matches", value: "46" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Imran Hossain"
                  position="Midfielder"
                  age={19}
                  team="Nasirnagar Youth FC"
                  achievements={[
                    "Youth Player of the Year (2023)",
                    "Youth League Best Player (2022)",
                  ]}
                  stats={[
                    { label: "Goals", value: "15" },
                    { label: "Assists", value: "20" },
                    { label: "Matches", value: "35" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="cricket" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerCard
                  name="Mahmud Ali"
                  position="Batsman"
                  age={27}
                  team="Nasirnagar Cricket Club"
                  achievements={[
                    "Highest Run Scorer (2023)",
                    "Century in District Final (2022)",
                    "Regional Team (2021)",
                  ]}
                  stats={[
                    { label: "Runs", value: "2450" },
                    { label: "Average", value: "48.5" },
                    { label: "Centuries", value: "8" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Farhan Rahman"
                  position="Bowler"
                  age={25}
                  team="Nasirnagar Cricket Club"
                  achievements={[
                    "Most Wickets (2023)",
                    "Hat-trick in Tournament (2022)",
                    "District Team (2020-Present)",
                  ]}
                  stats={[
                    { label: "Wickets", value: "95" },
                    { label: "Economy", value: "4.2" },
                    { label: "5-Wicket Hauls", value: "6" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Tahmina Akter"
                  position="All-rounder"
                  age={23}
                  team="Nasirnagar Women's Cricket Team"
                  achievements={[
                    "Women's Player of the Year (2023)",
                    "Best All-rounder (2022)",
                  ]}
                  stats={[
                    { label: "Runs", value: "1250" },
                    { label: "Wickets", value: "45" },
                    { label: "Matches", value: "32" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Jamal Hossain"
                  position="Wicket-keeper"
                  age={26}
                  team="Nasirnagar Cricket Club"
                  achievements={[
                    "Best Wicket-keeper (2022)",
                    "Most Dismissals in a Season (2021)",
                  ]}
                  stats={[
                    { label: "Dismissals", value: "85" },
                    { label: "Runs", value: "1350" },
                    { label: "Average", value: "32.5" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Arif Khan"
                  position="Batsman"
                  age={18}
                  team="Young Tigers Cricket Club"
                  achievements={[
                    "Youth Player of the Year (2023)",
                    "Highest Score in Youth League (2022)",
                  ]}
                  stats={[
                    { label: "Runs", value: "1120" },
                    { label: "Average", value: "45.8" },
                    { label: "Centuries", value: "3" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="volleyball" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerCard
                  name="Kabir Ahmed"
                  position="Spiker"
                  age={24}
                  team="Nasirnagar Volleyball Club"
                  achievements={[
                    "MVP District Tournament (2023)",
                    "Best Spiker (2022)",
                    "Regional Team (2021)",
                  ]}
                  stats={[
                    { label: "Points", value: "320" },
                    { label: "Blocks", value: "85" },
                    { label: "Matches", value: "40" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Nadia Islam"
                  position="Setter"
                  age={22}
                  team="School Volleyball Team"
                  achievements={[
                    "Best Setter (2023)",
                    "School Tournament MVP (2022)",
                  ]}
                  stats={[
                    { label: "Assists", value: "450" },
                    { label: "Service Points", value: "120" },
                    { label: "Matches", value: "35" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Rafiq Miah"
                  position="Libero"
                  age={25}
                  team="Nasirnagar Volleyball Club"
                  achievements={[
                    "Best Defender (2022)",
                    "District Team Selection (2021)",
                  ]}
                  stats={[
                    { label: "Digs", value: "380" },
                    { label: "Service Receptions", value: "520" },
                    { label: "Matches", value: "42" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="badminton" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerCard
                  name="Sharif Uddin"
                  position="Singles Player"
                  age={23}
                  team="Nasirnagar Badminton Club"
                  achievements={[
                    "District Champion (2023)",
                    "Regional Tournament Runner-up (2022)",
                  ]}
                  stats={[
                    { label: "Wins", value: "45" },
                    { label: "Tournaments", value: "12" },
                    { label: "Titles", value: "5" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Fatima Begum"
                  position="Doubles Specialist"
                  age={21}
                  team="Nasirnagar Badminton Club"
                  achievements={[
                    "Women's Doubles Champion (2023)",
                    "Mixed Doubles Runner-up (2022)",
                  ]}
                  stats={[
                    { label: "Wins", value: "38" },
                    { label: "Tournaments", value: "10" },
                    { label: "Titles", value: "4" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerCard
                  name="Kamrul Hasan"
                  position="Table Tennis"
                  age={22}
                  team="Nasirnagar Table Tennis Club"
                  achievements={[
                    "District Champion (2023)",
                    "Youth Tournament Winner (2022)",
                  ]}
                  stats={[
                    { label: "Wins", value: "42" },
                    { label: "Tournaments", value: "15" },
                    { label: "Titles", value: "3" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Anika Rahman"
                  position="Chess Player"
                  age={18}
                  team="Nasirnagar Chess Club"
                  achievements={[
                    "District Chess Champion (2023)",
                    "School Tournament Winner (2022)",
                  ]}
                  stats={[
                    { label: "Rating", value: "1850" },
                    { label: "Tournaments", value: "18" },
                    { label: "Titles", value: "4" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />

                <PlayerCard
                  name="Masud Rana"
                  position="Athletics"
                  age={20}
                  team="Nasirnagar Athletics Team"
                  achievements={[
                    "100m District Champion (2023)",
                    "Long Jump Record Holder (2022)",
                  ]}
                  stats={[
                    { label: "Gold Medals", value: "8" },
                    { label: "Silver Medals", value: "5" },
                    { label: "Competitions", value: "12" },
                  ]}
                  image="/placeholder.svg?height=300&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Player Achievements */}
      <section className="py-12 bg-white" id="achievements">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Outstanding Achievements
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <AchievementCard
                title="National Team Selection"
                description="Karim Rahman was selected for the national football team camp, becoming the first player from Nasirnagar to achieve this honor."
                player="Karim Rahman"
                sport="Football"
                year="2023"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Regional Cricket Tournament MVP"
                description="Mahmud Ali was named Most Valuable Player in the Regional Cricket Tournament, scoring three centuries and leading Nasirnagar Cricket Club to victory."
                player="Mahmud Ali"
                sport="Cricket"
                year="2022"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Women's Sports Excellence Award"
                description="Tahmina Akter received the Women's Sports Excellence Award for her outstanding contributions to women's cricket and inspiring young girls in the community."
                player="Tahmina Akter"
                sport="Cricket"
                year="2023"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Youth Talent Recognition"
                description="Imran Hossain was recognized as one of the top 10 youth football talents in the country by the national sports authority."
                player="Imran Hossain"
                sport="Football"
                year="2023"
                image="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Player Development Programs
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProgramCard
              title="Youth Talent Identification"
              description="Program to identify and nurture young sporting talent in Nasirnagar through regular trials and assessments."
              eligibility="Children aged 8-14 years"
              schedule="Monthly trials at various venues"
              contact="+880 1234-567970"
              image="/placeholder.svg?height=200&width=300"
            />

            <ProgramCard
              title="Advanced Skills Training"
              description="Specialized training program for promising athletes to develop advanced skills in their respective sports."
              eligibility="Selected players aged 15-21 years"
              schedule="Weekends at Central Stadium and Indoor Sports Complex"
              contact="+880 1234-567971"
              image="/placeholder.svg?height=200&width=300"
            />

            <ProgramCard
              title="Women's Sports Development"
              description="Program focused on encouraging and developing female athletes in various sports disciplines."
              eligibility="Girls and women of all ages"
              schedule="Weekdays at designated venues"
              contact="+880 1234-567972"
              image="/placeholder.svg?height=200&width=300"
            />

            <ProgramCard
              title="Sports Nutrition & Fitness"
              description="Comprehensive program on nutrition, fitness, and physical conditioning for athletes."
              eligibility="Registered players of all ages"
              schedule="Twice weekly at Youth Sports Complex"
              contact="+880 1234-567973"
              image="/placeholder.svg?height=200&width=300"
            />

            <ProgramCard
              title="Mental Skills & Game Strategy"
              description="Training on mental aspects of sports, game strategy, and competitive psychology."
              eligibility="Players aged 16 and above"
              schedule="Monthly workshops at Community Center"
              contact="+880 1234-567974"
              image="/placeholder.svg?height=200&width=300"
            />

            <ProgramCard
              title="Coach Education Program"
              description="Training program for local coaches to improve coaching skills and knowledge."
              eligibility="Aspiring and current coaches"
              schedule="Quarterly workshops at various venues"
              contact="+880 1234-567975"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Become a Player */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Becoming a Player?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            If you&#39;re interested in pursuing sports and becoming a player,
            Nasirnagar offers various opportunities for training and
            development. Contact our sports office to learn about trials,
            training programs, and sports clubs in your area.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            <Link href="/contact">Contact Sports Office</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface PlayerCardProps {
  name: string;
  position: string;
  age: number;
  team: string;
  achievements: string[];
  stats: { label: string; value: string }[];
  image: string;
}

function PlayerCard({
  name,
  position,
  age,
  team,
  achievements,
  stats,
  image,
}: PlayerCardProps) {
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
        <CardDescription className="flex flex-col items-center gap-1">
          <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
            {position}
          </Badge>
          <span className="text-sm">
            {age} Years • {team}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">
            Achievements
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">Stats</h4>
          <div className="grid grid-cols-3 gap-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-md p-2"
              >
                <div className="text-lg font-semibold">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
}

interface AchievementCardProps {
  title: string;
  description: string;
  player: string;
  sport: string;
  year: string | number;
  image: string;
}

function AchievementCard({
  title,
  description,
  player,
  sport,
  year,
  image,
}: AchievementCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">
                {player} • {sport}
              </span>
            </div>
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">{year}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  eligibility: string;
  schedule: string;
  contact: string;
  image: string;
}

function ProgramCard({
  title,
  description,
  eligibility,
  schedule,
  contact,
  image,
}: ProgramCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <Medal className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">Eligibility: {eligibility}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">Schedule: {schedule}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">Contact: {contact}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
