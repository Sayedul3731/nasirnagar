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
import { Award, Calendar, ChevronRight, Clock, Mail, MapPin, Medal, Phone, Star, Trophy, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Champions of the District</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Local Sports Teams
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover the sports teams and clubs that represent Nasirnagar in
              various competitions. Join our community of champions and athletes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <a href="#teams" className="flex items-center">
                  View Teams <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="#achievements" className="flex items-center">
                  <Trophy className="mr-2 w-4 h-4" />
                  Achievements
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Active Teams</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Athletes</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Championships</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Sports</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="teams">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Our Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented athletes and teams that make Nasirnagar proud in sports competitions
            </p>
          </div>

          <Tabs defaultValue="football" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
              <TabsTrigger 
                value="football" 
                className="rounded-full font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Football
              </TabsTrigger>
              <TabsTrigger 
                value="cricket" 
                className="rounded-full font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Cricket
              </TabsTrigger>
              <TabsTrigger 
                value="volleyball" 
                className="rounded-full font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Volleyball
              </TabsTrigger>
              <TabsTrigger 
                value="other" 
                className="rounded-full font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Other Sports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="football" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  featured={true}
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

            <TabsContent value="cricket" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  featured={true}
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

            <TabsContent value="volleyball" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

            <TabsContent value="other" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 bg-gradient-to-br from-white to-yellow-50" id="achievements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
              Major Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the victories and milestones that define our sporting excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Upcoming Tournaments & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on the exciting sports events coming up in Nasirnagar
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Training Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class facilities that nurture champions and support athletic excellence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
              Join a Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to be part of something amazing? Join our sports community today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Get Involved in Sports</h3>
                    <p className="text-yellow-100 mt-1">
                      Information for those interested in joining sports teams in Nasirnagar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-blue-900">Youth Programs</h4>
                    <p className="text-blue-800 mb-4 text-sm leading-relaxed">
                      Young athletes aged 8-18 can join various youth programs offered by sports clubs.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                        Football Youth Academy
                      </li>
                      <li className="text-sm text-blue-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                        Cricket Youth Program
                      </li>
                      <li className="text-sm text-blue-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                        Volleyball School Program
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-green-900">Adult Teams</h4>
                    <p className="text-green-800 mb-4 text-sm leading-relaxed">
                      Adults interested in joining sports teams can contact respective clubs for tryouts.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm text-green-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2"></span>
                        Nasirnagar FC tryouts
                      </li>
                      <li className="text-sm text-green-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2"></span>
                        Cricket Club membership
                      </li>
                      <li className="text-sm text-green-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2"></span>
                        Volleyball & Badminton
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-purple-900">Women&apos;s Teams</h4>
                    <p className="text-purple-800 mb-4 text-sm leading-relaxed">
                      Women&apos;s sports are actively promoted with dedicated teams and training programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm text-purple-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2"></span>
                        Women&apos;s Football Team
                      </li>
                      <li className="text-sm text-purple-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2"></span>
                        Women&apos;s Cricket Team
                      </li>
                      <li className="text-sm text-purple-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2"></span>
                        Mixed Badminton & Tennis
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2 text-lg">Contact Information</h4>
                      <p className="text-blue-800 mb-3">
                        For more information about joining sports teams in Nasirnagar, please contact our Sports Development Office.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-blue-800 font-medium">+880 1234-567960</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-blue-800 font-medium">sports.nasirnagar@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Our Teams
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Interested in supporting local sports teams through sponsorship,
              donations, or volunteering? Contact us to learn how you can
              contribute to sports development in Nasirnagar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Contact Sports Office
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="#teams" className="flex items-center">
                  <Trophy className="mr-2 w-5 h-5" />
                  View Teams
                </Link>
              </Button>
            </div>
          </div>
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
  featured?: boolean;
}

function TeamCard({
  name,
  category,
  established,
  members,
  location,
  achievements,
  image,
  featured = false,
}: TeamCardProps) {
  return (
    <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
      featured ? 'ring-2 ring-yellow-400 shadow-xl' : ''
    }`}>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2">
          <Badge className={`${
            featured 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
              : 'bg-yellow-500 text-black'
          } font-medium`}>
            {category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors duration-300">{name}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-1 text-yellow-500" />
          Established {established} • {members} Members
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-4 w-4 text-yellow-500 mr-2 mt-1 shrink-0" />
          <span className="text-gray-700 text-sm">{location}</span>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center">
            <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
            Key Achievements
          </h4>
          <ul className="space-y-1">
            {achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <Medal className="w-3 h-3 mr-1 mt-0.5 text-yellow-500 shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium transition-all duration-300 transform hover:scale-105">
          View Team Details
        </Button>
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold">
              <Trophy className="w-3 h-3 mr-1" />
              Champion
            </Badge>
          </div>
        </div>
        <div className="p-8 md:w-3/5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-700 font-medium">{team}</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-700 font-bold text-lg">{year}</span>
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
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium mb-2">
            <Calendar className="w-3 h-3 mr-1" />
            Upcoming Event
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
              <Calendar className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{date}</span>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700">{location}</span>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <Users className="h-4 w-4 text-white" />
            </div>
            <div className="text-gray-700 flex-1">
              <div className="font-medium text-sm mb-1">
                Participating Teams:
              </div>
              <ul className="space-y-1">
                {teams.slice(0, 2).map((team, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-2 shrink-0"></span>
                    {team}
                  </li>
                ))}
                {teams.length > 2 && (
                  <li className="text-sm text-gray-500 italic">
                    +{teams.length - 2} more teams
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300">
          Learn More
        </Button>
      </CardFooter>
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
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <Medal className="h-4 w-4 text-white" />
            </div>
            <div className="text-gray-700 flex-1">
              <div className="font-semibold text-sm mb-2">Features:</div>
              <div className="grid grid-cols-1 gap-1">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
                {features.length > 4 && (
                  <div className="text-sm text-gray-500 italic">
                    +{features.length - 4} more features
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium transition-all duration-300">
          Visit Facility
        </Button>
      </CardFooter>
    </Card>
  );
}
