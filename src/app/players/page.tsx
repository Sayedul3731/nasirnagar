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
import { Award, Calendar, Eye, Filter, Heart, MapPin, Medal, Search, Star, TrendingUp, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlayersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Enhanced Visual Design */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Celebrating Athletic Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Notable Players
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover the talented athletes who represent Nasirnagar in various
              sports and inspire the next generation of champions.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Active Players</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">25+</div>
                <div className="text-sm text-gray-300">Championships</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">10+</div>
                <div className="text-sm text-gray-300">Sports</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-300">Achievements</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#players">Explore Players</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300"
              >
                <a href="#achievements">View Achievements</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-8 bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
              <div className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1">
                  <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                    Search Players
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search by player name, team, or achievements..."
                      className="pl-12 h-12 bg-white border-gray-200 focus:border-yellow-500 focus:ring-yellow-500/20 rounded-xl shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-64">
                  <Label htmlFor="sport" className="text-sm font-medium text-gray-700 mb-2 block">
                    Filter by Sport
                  </Label>
                  <Select>
                    <SelectTrigger id="sport" className="h-12 bg-white border-gray-200 rounded-xl shadow-sm">
                      <SelectValue placeholder="All Sports" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      <SelectItem value="football">⚽ Football</SelectItem>
                      <SelectItem value="cricket">🏏 Cricket</SelectItem>
                      <SelectItem value="volleyball">🏐 Volleyball</SelectItem>
                      <SelectItem value="badminton">🏸 Badminton</SelectItem>
                      <SelectItem value="other">🏆 Other Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full lg:w-64">
                  <Label htmlFor="achievement" className="text-sm font-medium text-gray-700 mb-2 block">
                    Achievement Level
                  </Label>
                  <Select>
                    <SelectTrigger id="achievement" className="h-12 bg-white border-gray-200 rounded-xl shadow-sm">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="national">🥇 National</SelectItem>
                      <SelectItem value="regional">🥈 Regional</SelectItem>
                      <SelectItem value="district">🥉 District</SelectItem>
                      <SelectItem value="local">🏅 Local</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="h-12 px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id="players">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Player Profiles</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Players
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the exceptional athletes who bring pride to Nasirnagar through their dedication and achievements
            </p>
          </div>

          <Tabs defaultValue="football" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-white shadow-lg rounded-xl p-1 border">
                <TabsTrigger 
                  value="football" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-medium rounded-lg"
                >
                  ⚽ Football
                </TabsTrigger>
                <TabsTrigger 
                  value="cricket"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-medium rounded-lg"
                >
                  🏏 Cricket
                </TabsTrigger>
                <TabsTrigger 
                  value="volleyball"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-medium rounded-lg"
                >
                  🏐 Volleyball
                </TabsTrigger>
                <TabsTrigger 
                  value="badminton"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-medium rounded-lg"
                >
                  🏸 Badminton
                </TabsTrigger>
                <TabsTrigger 
                  value="other"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-medium rounded-lg"
                >
                  🏆 Other
                </TabsTrigger>
              </TabsList>
            </div>

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

      {/* Enhanced Player Achievements */}
      <section className="py-16 bg-white" id="achievements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Hall of Fame</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Outstanding Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating milestone moments and exceptional performances that have put Nasirnagar on the sporting map
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">`
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

      {/* Enhanced Training Programs */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Development Programs</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Player Development Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to nurture talent and develop the next generation of champions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Enhanced Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Join Our Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Become a Player?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Join Nasirnagar's thriving sports community! Whether you're a beginner or experienced athlete, 
              we have programs and opportunities to help you reach your potential and represent our region with pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  <Eye className="h-5 w-5 mr-2" />
                  Contact Sports Office
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-black/30 text-black hover:bg-black/10 backdrop-blur-sm font-semibold transition-all duration-300"
              >
                <Link href="#programs">
                  <Users className="h-5 w-5 mr-2" />
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
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
    <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="text-center pb-4 relative z-10">
        <div className="mx-auto relative w-36 h-36 rounded-full overflow-hidden mb-4 ring-4 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all duration-300">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-yellow-600 transition-colors duration-300">{name}</CardTitle>
        <CardDescription className="flex flex-col items-center gap-2">
          <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 font-medium shadow-md">
            {position}
          </Badge>
          <span className="text-sm text-gray-600 font-medium">
            {age} Years • {team}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-0 px-6 relative z-10">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-yellow-500" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
            <Medal className="h-4 w-4 text-green-500" />
            Performance Stats
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 px-6 pb-6 relative z-10">
        <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <Eye className="h-4 w-4 mr-2" />
          View Full Profile
        </Button>
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
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="relative h-64 lg:h-auto lg:w-2/5 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Trophy className="h-4 w-4 text-black" />
              </div>
              <span className="font-semibold text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {year}
              </span>
            </div>
          </div>
        </div>
        <div className="p-8 lg:w-3/5 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 mb-3">
              <Award className="h-3 w-3" />
              <span className="text-xs font-medium uppercase tracking-wide">{sport}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{player}</div>
                <div className="text-sm text-gray-500">Featured Athlete</div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Eye className="h-4 w-4 mr-1" />
              Learn More
            </Button>
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
    <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">{description}</p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Medal className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Eligibility</div>
                <div className="text-sm text-gray-600">{eligibility}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Schedule</div>
                <div className="text-sm text-gray-600">{schedule}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Contact</div>
                <div className="text-sm text-gray-600 font-mono">{contact}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Users className="h-4 w-4 mr-2" />
            Join Program
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
