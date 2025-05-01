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
import { Calendar, MapPin, Medal, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Local Sports Teams</h1>
            <p className="text-xl text-gray-300 mb-6">
              Discover the sports teams and clubs that represent Nasirnagar in
              various competitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#teams">View Teams</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                <a href="#achievements">Achievements</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50" id="teams">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Teams</h2>

          <Tabs defaultValue="football" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="football">Football</TabsTrigger>
              <TabsTrigger value="cricket">Cricket</TabsTrigger>
              <TabsTrigger value="volleyball">Volleyball</TabsTrigger>
              <TabsTrigger value="other">Other Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="football" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TeamCard
                  name="Nasirnagar Football Club"
                  category="Senior Team"
                  established={1985}
                  members={25}
                  location="Central Stadium, Nasirnagar"
                  achievements={[
                    "District Champions (2022)",
                    "Regional Runners-up (2021)",
                    "Youth Cup Winners (2020)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Nasirnagar Youth FC"
                  category="Under-19 Team"
                  established={2005}
                  members={22}
                  location="Youth Sports Complex, Nasirnagar"
                  achievements={[
                    "Youth League Champions (2023)",
                    "Inter-School Tournament Winners (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Nasirnagar Women's FC"
                  category="Women's Team"
                  established={2010}
                  members={20}
                  location="Central Stadium, Nasirnagar"
                  achievements={[
                    "Women's District Cup Winners (2022)",
                    "Regional Tournament Runners-up (2021)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="cricket" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TeamCard
                  name="Nasirnagar Cricket Club"
                  category="Senior Team"
                  established={1980}
                  members={18}
                  location="Cricket Ground, Nasirnagar"
                  achievements={[
                    "District T20 Champions (2023)",
                    "Regional Tournament Winners (2022)",
                    "Inter-District Cup (2020)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Young Tigers Cricket Club"
                  category="Under-19 Team"
                  established={2008}
                  members={16}
                  location="Youth Sports Complex, Nasirnagar"
                  achievements={[
                    "Youth Cricket League Champions (2023)",
                    "School Cricket Tournament Winners (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Nasirnagar Women's Cricket Team"
                  category="Women's Team"
                  established={2015}
                  members={15}
                  location="Cricket Ground, Nasirnagar"
                  achievements={[
                    "Women's District Tournament Runners-up (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="volleyball" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TeamCard
                  name="Nasirnagar Volleyball Club"
                  category="Senior Team"
                  established={1990}
                  members={14}
                  location="Indoor Sports Complex, Nasirnagar"
                  achievements={[
                    "District Volleyball Champions (2023)",
                    "Regional Tournament Runners-up (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="School Volleyball Team"
                  category="School Team"
                  established={2000}
                  members={12}
                  location="Nasirnagar Model High School"
                  achievements={[
                    "Inter-School Tournament Champions (2023)",
                    "Youth Volleyball Cup Winners (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TeamCard
                  name="Nasirnagar Badminton Club"
                  category="Mixed Team"
                  established={2005}
                  members={16}
                  location="Indoor Sports Complex, Nasirnagar"
                  achievements={[
                    "District Badminton Championship (2023)",
                    "Regional Tournament Participants (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Nasirnagar Table Tennis Club"
                  category="Mixed Team"
                  established={2010}
                  members={12}
                  location="Youth Sports Complex, Nasirnagar"
                  achievements={[
                    "District Table Tennis Champions (2022)",
                    "Youth Tournament Winners (2021)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />

                <TeamCard
                  name="Nasirnagar Chess Club"
                  category="Mixed Team"
                  established={2008}
                  members={20}
                  location="Community Center, Nasirnagar"
                  achievements={[
                    "District Chess Championship (2023)",
                    "Regional Tournament Runners-up (2022)",
                  ]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-white" id="achievements">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Major Achievements
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <AchievementCard
                title="District Football Championship"
                description="Nasirnagar Football Club won the District Football Championship, defeating all competing teams with outstanding performance."
                team="Nasirnagar Football Club"
                year="2022"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Regional Cricket Tournament"
                description="Nasirnagar Cricket Club emerged as champions in the Regional Cricket Tournament, showcasing exceptional batting and bowling skills."
                team="Nasirnagar Cricket Club"
                year="2022"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Youth Volleyball Cup"
                description="School Volleyball Team won the prestigious Youth Volleyball Cup, demonstrating teamwork and athletic excellence."
                team="School Volleyball Team"
                year="2022"
                image="/placeholder.svg?height=200&width=400"
              />

              <AchievementCard
                title="Women's District Cup"
                description="Nasirnagar Women's FC made history by winning the Women's District Cup for the first time, inspiring young girls in the community."
                team="Nasirnagar Women's FC"
                year="2022"
                image="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Tournaments & Events
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="District Football League"
              description="Annual football league featuring teams from across the district competing for the championship title."
              date="Starting September 15, 2023"
              location="Central Stadium, Nasirnagar"
              teams={[
                "Nasirnagar FC",
                "Nasirnagar Youth FC",
                "Neighboring district teams",
              ]}
              image="/placeholder.svg?height=200&width=300"
            />

            <EventCard
              title="Inter-School Cricket Tournament"
              description="Cricket tournament for school teams to showcase their talent and compete for the school championship."
              date="October 10-20, 2023"
              location="Cricket Ground, Nasirnagar"
              teams={["School teams from Nasirnagar and surrounding areas"]}
              image="/placeholder.svg?height=200&width=300"
            />

            <EventCard
              title="Women's Sports Festival"
              description="Multi-sport event celebrating women's participation in sports with competitions in football, cricket, and volleyball."
              date="November 5-12, 2023"
              location="Various venues in Nasirnagar"
              teams={["Women's teams from Nasirnagar and neighboring areas"]}
              image="/placeholder.svg?height=200&width=300"
            />

            <EventCard
              title="Youth Badminton Championship"
              description="Badminton tournament for young players to compete and develop their skills."
              date="December 3-5, 2023"
              location="Indoor Sports Complex, Nasirnagar"
              teams={["Young badminton players from Nasirnagar"]}
              image="/placeholder.svg?height=200&width=300"
            />

            <EventCard
              title="Friendly Football Match"
              description="Exhibition match between Nasirnagar FC and a visiting team from a neighboring district."
              date="September 5, 2023"
              location="Central Stadium, Nasirnagar"
              teams={["Nasirnagar FC", "Visiting team"]}
              image="/placeholder.svg?height=200&width=300"
            />

            <EventCard
              title="Chess Tournament"
              description="Open chess tournament for players of all ages and skill levels."
              date="October 15, 2023"
              location="Community Center, Nasirnagar"
              teams={[
                "Chess enthusiasts from Nasirnagar and surrounding areas",
              ]}
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Training Facilities
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FacilityCard
              name="Central Stadium"
              description="Main football stadium with a well-maintained grass field, seating capacity, and training facilities."
              features={[
                "Football field",
                "Running track",
                "Seating for spectators",
                "Changing rooms",
                "Training equipment",
              ]}
              location="Central Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />

            <FacilityCard
              name="Cricket Ground"
              description="Dedicated cricket ground with proper pitch, outfield, and practice nets."
              features={[
                "Cricket pitch",
                "Practice nets",
                "Outfield",
                "Pavilion",
                "Equipment storage",
              ]}
              location="East Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />

            <FacilityCard
              name="Indoor Sports Complex"
              description="Multi-purpose indoor facility for various sports including volleyball, badminton, and table tennis."
              features={[
                "Volleyball courts",
                "Badminton courts",
                "Table tennis tables",
                "Changing rooms",
                "Spectator area",
              ]}
              location="Central Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />

            <FacilityCard
              name="Youth Sports Complex"
              description="Facility dedicated to youth sports development with various training areas and equipment."
              features={[
                "Multi-sport fields",
                "Training equipment",
                "Coaching facilities",
                "Meeting rooms",
              ]}
              location="North Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />

            <FacilityCard
              name="School Sports Grounds"
              description="Sports facilities within school premises used for training and inter-school competitions."
              features={[
                "Football fields",
                "Basketball courts",
                "Volleyball courts",
                "Basic equipment",
              ]}
              location="Various schools in Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />

            <FacilityCard
              name="Community Center"
              description="Indoor facility used for chess, carrom, and other indoor sports and activities."
              features={[
                "Chess tables",
                "Carrom boards",
                "Meeting space",
                "Air conditioning",
              ]}
              location="Central Nasirnagar"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Join a Team */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join a Team</h2>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-yellow-500 text-black p-6">
              <h3 className="text-2xl font-bold">Get Involved in Sports</h3>
              <p className="mt-2">
                Information for those interested in joining sports teams in
                Nasirnagar.
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Youth Programs</h4>
                  <p className="text-gray-700 mb-4">
                    Young athletes aged 8-18 can join various youth programs
                    offered by sports clubs in Nasirnagar. These programs focus
                    on skill development, physical fitness, and teamwork.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Football Youth Academy: Training sessions on weekends at
                      the Central Stadium.
                    </li>
                    <li>
                      Cricket Youth Program: Training sessions on weekdays at
                      the Cricket Ground.
                    </li>
                    <li>
                      Volleyball School Program: Training at the Indoor Sports
                      Complex after school hours.
                    </li>
                    <li>
                      Multi-sport Youth Program: Various sports activities at
                      the Youth Sports Complex.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Adult Teams</h4>
                  <p className="text-gray-700 mb-4">
                    Adults interested in joining sports teams can contact the
                    respective clubs for tryouts and membership information.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Nasirnagar FC: Open tryouts held quarterly for senior and
                      reserve teams.
                    </li>
                    <li>
                      Nasirnagar Cricket Club: Membership open to skilled
                      players with regular practice sessions.
                    </li>
                    <li>
                      Volleyball and Badminton Clubs: Regular practice sessions
                      open to interested players.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Women&apos;s Teams
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Women&apos;s sports are actively promoted in Nasirnagar with
                    dedicated teams and training programs.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Women&apos;s Football Team: Training sessions on weekends
                      at the Central Stadium.
                    </li>
                    <li>
                      Women&apos;s Cricket Team: Regular practice at the Cricket
                      Ground on weekdays.
                    </li>
                    <li>
                      Mixed Badminton and Table Tennis: Open to all at the
                      Indoor Sports Complex.
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Contact Information
                  </h4>
                  <p className="text-blue-800">
                    For more information about joining sports teams in
                    Nasirnagar, please contact the Sports Development Office at
                    +880 1234-567960 or email sports.nasirnagar@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Support Our Teams
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Interested in supporting local sports teams through sponsorship,
            donations, or volunteering? Contact us to learn how you can
            contribute to sports development in Nasirnagar.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/contact">Contact Sports Office</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface TeamCardProps {
  name: string;
  category: string;
  established: number;
  members: number;
  location: string;
  achievements: string[];
  image: string;
}

function TeamCard({
  name,
  category,
  established,
  members,
  location,
  achievements,
  image,
}: TeamCardProps) {
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
        <CardDescription>
          Established {established} • {members} Members
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{location}</span>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-500 mb-1">
            Key Achievements
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Team</Button>
      </CardFooter>
    </Card>
  );
}

interface AchievementCardProps {
  title: string;
  description: string;
  team: string;
  year: string;
  image: string;
}

function AchievementCard({
  title,
  description,
  team,
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
              <Users className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">{team}</span>
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

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  teams: string[];
  image: string;
}

function EventCard({
  title,
  description,
  date,
  location,
  teams,
  image,
}: EventCardProps) {
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
            <Calendar className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <span className="text-gray-700">{date}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-700">{location}</span>
          </div>
          <div className="flex items-start">
            <Users className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <div className="text-gray-700">
              <div className="font-medium text-sm mb-1">
                Participating Teams:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {teams.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface FacilityCardProps {
  name: string;
  description: string;
  features: string[];
  location: string;
  image: string;
}

function FacilityCard({
  name,
  description,
  features,
  location,
  image,
}: FacilityCardProps) {
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
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-start">
            <Medal className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <div className="text-gray-700">
              <div className="font-medium text-sm mb-1">Features:</div>
              <ul className="list-disc pl-5 space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-700">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
