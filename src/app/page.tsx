import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Nasirnagar
          </a>
          <div className="hidden sm:flex space-x-4">
            <Button variant="ghost" asChild>
              <a href="#">Home</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#">About</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8 pb-20 sm:p-20">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Nasirnagar
          </h1>
          <p className="text-center text-lg">
            A simple and elegant solution to manage your notes, tasks, and
            reminders.
          </p>
          <Input placeholder="Search..." className="w-full max-w-md" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Nasirnagar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
