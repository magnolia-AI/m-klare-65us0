'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hem</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Till Salu</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Om Oss</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kontakt</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Hitta Ditt Drömhem
          </h1>
          <p className="mt-6 text-xl text-white">
            Vi hjälper dig hitta den perfekta bostaden för dig och din familj
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex gap-2">
              <Input placeholder="Sök område eller adress..." className="bg-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">Sök</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Utvalda Objekt</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <div className="aspect-[16/9] relative">
                <img
                  src={`https://images.unsplash.com/photo-156047799155-c333d64ab943?auto=format&fit=crop&w=800`}
                  alt="Property"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Modern Villa</h3>
                <p className="text-gray-500">Stockholm, Sverige</p>
                <p className="text-xl font-bold mt-2">5 495 000 kr</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>4 rum</span>
                  <span>120 m²</span>
                  <span>Tomt: 600 m²</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Avatar className="w-32 h-32" />
              <h2 className="text-3xl font-bold text-gray-900 mt-6">Din Personliga Mäklare</h2>
              <p className="mt-4 text-lg text-gray-500">
                Med över 10 års erfarenhet i branschen hjälper jag dig genom hela köp- och säljprocessen. 
                Mitt mål är att göra din bostadsaffär så smidig och trygg som möjligt.
              </p>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Kontakta Mig</Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Real estate agent"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <p>Email: info@maklare.se</p>
              <p>Tel: 08-123 45 67</p>
              <p>Adress: Storgatan 1, Stockholm</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Öppettider</h3>
              <p>Måndag-Fredag: 09:00-17:00</p>
              <p>Lördag: 10:00-15:00</p>
              <p>Söndag: Stängt</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Följ Oss</h3>
              <div className="flex gap-4">
                <Button variant="outline">Facebook</Button>
                <Button variant="outline">Instagram</Button>
                <Button variant="outline">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}