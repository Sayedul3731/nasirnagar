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
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EducationalInstitutesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Educational Institutes</h1>
            <p className="text-xl text-gray-300 mb-6">
              Discover schools, colleges, and educational institutions in
              Nasirnagar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <a href="#institutes">View Institutes</a>
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
      <section className="py-12 bg-gray-50" id="institutes">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Educational Institutions
          </h2>

          <Tabs defaultValue="schools" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="schools">Schools</TabsTrigger>
              <TabsTrigger value="colleges">Colleges</TabsTrigger>
              <TabsTrigger value="madrasas">Madrasas</TabsTrigger>
              <TabsTrigger value="vocational">
                Vocational Institutes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schools" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <InstituteCard
                  name="Nasirnagar Government Primary School"
                  type="Government Primary School"
                  established={1960}
                  students={850}
                  teachers={25}
                  address="School Road, Nasirnagar"
                  phone="+880 1234-567940"
                  email="ngps@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Nasirnagar Model High School"
                  type="Government High School"
                  established={1965}
                  students={1200}
                  teachers={40}
                  address="High School Road, Nasirnagar"
                  phone="+880 1234-567941"
                  email="nmhs@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Nasirnagar Girls' High School"
                  type="Government High School"
                  established={1970}
                  students={950}
                  teachers={35}
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567942"
                  email="nghs@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Ideal Kindergarten School"
                  type="Private Primary School"
                  established={1995}
                  students={450}
                  teachers={20}
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-567943"
                  email="iks@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Modern English Medium School"
                  type="Private English Medium School"
                  established={2005}
                  students={350}
                  teachers={25}
                  address="New Town, Nasirnagar"
                  phone="+880 1234-567944"
                  email="mems@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="colleges" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <InstituteCard
                  name="Nasirnagar Government College"
                  type="Government College"
                  established={1980}
                  students={1800}
                  teachers={60}
                  address="College Road, Nasirnagar"
                  phone="+880 1234-567945"
                  email="ngc@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Nasirnagar Women's College"
                  type="Government College"
                  established={1985}
                  students={1200}
                  teachers={45}
                  address="Central Road, Nasirnagar"
                  phone="+880 1234-567946"
                  email="nwc@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="madrasas" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <InstituteCard
                  name="Nasirnagar Alia Madrasa"
                  type="Government Madrasa"
                  established={1975}
                  students={750}
                  teachers={30}
                  address="Madrasa Road, Nasirnagar"
                  phone="+880 1234-567947"
                  email="nam@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Darul Uloom Qawmi Madrasa"
                  type="Private Madrasa"
                  established={1968}
                  students={650}
                  teachers={25}
                  address="East Nasirnagar"
                  phone="+880 1234-567948"
                  email="duqm@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="vocational" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <InstituteCard
                  name="Nasirnagar Technical School and College"
                  type="Government Technical Institute"
                  established={1990}
                  students={600}
                  teachers={35}
                  address="Technical Road, Nasirnagar"
                  phone="+880 1234-567949"
                  email="ntsc@gmail.com"
                  image="/placeholder.svg?height=200&width=300"
                />

                <InstituteCard
                  name="Nasirnagar Computer Training Institute"
                  type="Private Vocational Institute"
                  established={2000}
                  students={250}
                  teachers={15}
                  address="Market Area, Nasirnagar"
                  phone="+880 1234-567950"
                  email="ncti@gmail.com"
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
            Academic Achievements
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AchievementCard
              title="National Merit Scholarships"
              description="Students from Nasirnagar have consistently received national merit scholarships for their outstanding academic performance."
              institute="Nasirnagar Model High School"
              year="2023"
              image="/placeholder.svg?height=200&width=300"
            />

            <AchievementCard
              title="Science Fair Champions"
              description="Nasirnagar Government College students won the regional science fair competition with innovative projects."
              institute="Nasirnagar Government College"
              year="2022"
              image="/placeholder.svg?height=200&width=300"
            />

            <AchievementCard
              title="Math Olympiad Winners"
              description="Students from Nasirnagar have represented the district in the National Mathematics Olympiad and secured top positions."
              institute="Nasirnagar Model High School"
              year="2023"
              image="/placeholder.svg?height=200&width=300"
            />

            <AchievementCard
              title="Technical Skills Competition"
              description="Nasirnagar Technical School and College students won multiple awards in the regional technical skills competition."
              institute="Nasirnagar Technical School and College"
              year="2022"
              image="/placeholder.svg?height=200&width=300"
            />

            <AchievementCard
              title="Cultural Program Excellence"
              description="Nasirnagar Girls' High School students received national recognition for their cultural performances."
              institute="Nasirnagar Girls' High School"
              year="2023"
              image="/placeholder.svg?height=200&width=300"
            />

            <AchievementCard
              title="Sports Championships"
              description="Nasirnagar educational institutions have excelled in district and regional sports competitions, winning multiple trophies."
              institute="Multiple Institutions"
              year="2022-2023"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Notable Alumni
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AlumniCard
              name="Dr. Abdul Karim"
              profession="Renowned Physician"
              institute="Nasirnagar Government College"
              batch="1985"
              achievements="Pioneered medical research in tropical diseases and established multiple healthcare facilities."
              image="/placeholder.svg?height=200&width=200"
            />

            <AlumniCard
              name="Prof. Nasima Begum"
              profession="University Professor"
              institute="Nasirnagar Girls' High School"
              batch="1980"
              achievements="Published numerous research papers and books on Bengali literature and culture."
              image="/placeholder.svg?height=200&width=200"
            />

            <AlumniCard
              name="Eng. Rafiqul Islam"
              profession="Civil Engineer"
              institute="Nasirnagar Technical School and College"
              batch="1995"
              achievements="Led major infrastructure projects across Bangladesh and received national engineering awards."
              image="/placeholder.svg?height=200&width=200"
            />

            <AlumniCard
              name="Tahmina Akhter"
              profession="Entrepreneur"
              institute="Nasirnagar Women's College"
              batch="2000"
              achievements="Founded a successful textile business that employs hundreds of local women."
              image="/placeholder.svg?height=200&width=200"
            />

            <AlumniCard
              name="Mohammad Hossain"
              profession="Government Official"
              institute="Nasirnagar Model High School"
              batch="1975"
              achievements="Served in various high-ranking government positions and contributed to regional development."
              image="/placeholder.svg?height=200&width=200"
            />

            <AlumniCard
              name="Farhana Rahman"
              profession="Author & Poet"
              institute="Nasirnagar Girls' High School"
              batch="1990"
              achievements="Published multiple award-winning books and poetry collections."
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* Education Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Educational Resources
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              title="Nasirnagar Public Library"
              description="A comprehensive library with thousands of books, journals, and digital resources for students and researchers."
              address="Central Road, Nasirnagar"
              hours="Sun-Thu: 9:00 AM - 8:00 PM, Fri-Sat: 10:00 AM - 5:00 PM"
              image="/placeholder.svg?height=200&width=300"
            />

            <ResourceCard
              title="Digital Learning Center"
              description="Modern computer lab with internet access and digital learning resources for students."
              address="College Road, Nasirnagar"
              hours="Sun-Thu: 9:00 AM - 6:00 PM"
              image="/placeholder.svg?height=200&width=300"
            />

            <ResourceCard
              title="Science & Innovation Hub"
              description="Equipped with science labs and innovation spaces for hands-on learning and experimentation."
              address="Technical Road, Nasirnagar"
              hours="Sun-Thu: 10:00 AM - 5:00 PM"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Admission Information
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-yellow-500 text-black p-6">
              <h3 className="text-2xl font-bold">Admission Guidelines</h3>
              <p className="mt-2">
                Important information for students seeking admission to
                educational institutions in Nasirnagar.
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    School Admissions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Primary School (Class 1): Children aged 6 years are
                      eligible for admission.
                    </li>
                    <li>
                      High School (Class 6): Students who have completed primary
                      education can apply.
                    </li>
                    <li>
                      Required Documents: Birth certificate, previous academic
                      records, passport-sized photographs.
                    </li>
                    <li>
                      Admission Period: Usually December-January for the
                      academic year starting in January.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    College Admissions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Higher Secondary (Class 11): Students who have passed SSC
                      or equivalent exams can apply.
                    </li>
                    <li>
                      Required Documents: SSC certificate, mark sheet,
                      passport-sized photographs, character certificate.
                    </li>
                    <li>
                      Admission Period: Usually July-August after SSC results
                      are published.
                    </li>
                    <li>
                      Selection Process: Based on SSC results and entrance tests
                      for some institutions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Technical & Vocational Admissions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Eligibility: Varies by program, generally requires
                      completion of Class 8 or SSC.
                    </li>
                    <li>
                      Required Documents: Academic certificates, mark sheets,
                      passport-sized photographs.
                    </li>
                    <li>
                      Admission Period: Multiple intakes throughout the year for
                      different programs.
                    </li>
                    <li>
                      Selection Process: Based on academic records and
                      interviews.
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-blue-800">
                    Admission requirements and procedures may vary by
                    institution. It is recommended to contact the specific
                    institution for the most up-to-date information regarding
                    admissions.
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
            Need More Information?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            If you have questions about educational institutions or admission
            procedures, our team is ready to help you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface InstituteCardProps {
  name: string;
  type: string;
  established: number;
  students: number;
  teachers: number;
  address: string;
  phone: string;
  email: string;
  image: string;
}

function InstituteCard({
  name,
  type,
  established,
  students,
  teachers,
  address,
  phone,
  email,
  image,
}: InstituteCardProps) {
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
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {type} • Established {established}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">
            {students} Students • {teachers} Teachers
          </span>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <span className="text-gray-700">{email}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}

interface AchievementCardProps {
  title: string;
  description: string;
  institute: string;
  year: string;
  image: string;
}

function AchievementCard({
  title,
  description,
  institute,
  year,
  image,
}: AchievementCardProps) {
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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-700">{institute}</span>
          </div>
          <Badge variant="outline" className="bg-gray-100">
            {year}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

interface AlumniCardProps {
  name: string;
  profession: string;
  institute: string;
  batch: string;
  achievements: string;
  image: string;
}

function AlumniCard({
  name,
  profession,
  institute,
  batch,
  achievements,
  image,
}: AlumniCardProps) {
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
            {profession}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 pt-4">
        <div className="flex items-center">
          <GraduationCap className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
          <div>
            <div className="font-medium">{institute}</div>
            <div className="text-sm text-gray-500">Batch of {batch}</div>
          </div>
        </div>
        <div className="flex items-start">
          <Award className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-700">{achievements}</span>
        </div>
      </CardContent>
    </Card>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  address: string;
  hours: string;
  image: string;
}

function ResourceCard({
  title,
  description,
  address,
  hours,
  image,
}: ResourceCardProps) {
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
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-700">{address}</span>
          </div>
          <div className="flex items-start">
            <BookOpen className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-700">{hours}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
