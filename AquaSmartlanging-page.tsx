'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Fish, Leaf, Droplet, Sun, LineChart, Waves, Smartphone, Users, Utensils, DollarSign, MapPin } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const ImpactMetric = ({ icon: Icon, value, label }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="h-12 w-12 text-blue-500 mb-2" />
    <p className="text-3xl font-bold text-blue-700">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </motion.div>
)

const foodProductionData = [
  { year: 2025, traditional: 100, aquaponics: 150 },
  { year: 2030, traditional: 110, aquaponics: 300 },
  { year: 2035, traditional: 120, aquaponics: 550 },
  { year: 2040, traditional: 130, aquaponics: 900 },
]

const IoTMetric = ({ title, value, unit, icon: Icon }) => (
  <Card className="bg-white shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}{unit}</div>
    </CardContent>
  </Card>
)

export default function Component() {
  const [activePhase, setActivePhase] = useState(0)
  //const [showIoTDetails, setShowIoTDetails] = useState(false) // Removed as not needed anymore

  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <nav className="flex-1 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Waves className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">AquaSmart East Africa</span>
          </div>
          <div className="flex items-center space-x-4">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Vision
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Impact
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Join Us
            </a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-16 md:mb-24 lg:mb-32 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming East Africa's Waters into Food Security
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harnessing the power of Lake Victoria and IoT to revolutionize agriculture and feed millions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transform transition hover:scale-105">
              Dive Into Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>
        
        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Our Geographical Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.img
                alt="Map of Lake Victoria and surrounding countries"
                className="rounded-lg shadow-2xl"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lake%20Victoria_JPG-3sDdBi9TXwhtzraBl6WvsMthAEN36L.webp"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-2xl font-bold">68,800 km²</p>
                <p className="text-sm">Lake Victoria's Area</p>
              </motion.div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-green-700">Lake Victoria: The Heart of Our Project</h3>
              <p className="text-lg text-gray-700">
                Lake Victoria, the largest freshwater lake in Africa, is the centerpiece of our aquaponics revolution. Spanning across Uganda, Kenya, and Tanzania, it provides an ideal foundation for our sustainable food production systems.
              </p>
              <ul className="list-none space-y-4">
                {[
                  { icon: MapPin, text: "Serves as a vital water source for our aquaponics systems" },
                  { icon: Fish, text: "Home to diverse fish species ideal for aquaculture" },
                  { icon: Users, text: "Supports millions of people in the surrounding regions" },
                  { icon: Leaf, text: "Offers potential for large-scale, sustainable agriculture" },
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <item.icon className="h-6 w-6 text-blue-500 mr-3" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-16 md:mb-24 bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Our 40-Year Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { years: "0-10", coverage: "5-10%", focus: "Pilot projects & local adoption" },
              { years: "10-20", coverage: "15-20%", focus: "Expansion & network creation" },
              { years: "20-30", coverage: "25-30%", focus: "Technological innovations" },
              { years: "30-40", coverage: "40%", focus: "Mainstream adoption" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className={`bg-gradient-to-br ${activePhase === index ? 'from-blue-400 to-green-400' : 'from-blue-50 to-green-50'} border-none shadow-lg cursor-pointer transition-colors duration-300`}
                  onClick={() => setActivePhase(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-700">Phase {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-green-600 mb-2">{phase.coverage}</p>
                    <p className="text-sm text-gray-700">Food Coverage</p>
                    <p className="mt-4 text-sm text-gray-600">Years {phase.years}</p>
                    <p className="mt-2 text-md font-medium text-blue-600">{phase.focus}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Sustainable Aquaponics Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fish Species", icon: Fish, items: ["Tilapia", "Catfish", "Nile Perch", "Rainbow Trout"] },
              { title: "Crops", icon: Leaf, items: ["Leafy Greens", "Herbs", "Tomatoes", "Peppers", "Cucumbers"] },
              { title: "Flowers", icon: Sun, items: ["Nasturtium", "Marigolds", "Lavender", "Water Lilies", "Roses"] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg border-t-4 border-blue-500 h-full">
                  <CardHeader>
                    <category.icon className="h-12 w-12 text-blue-500 mb-2" />
                    <CardTitle className="text-2xl font-bold text-blue-700">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="mb-16 md:mb-24 bg-blue-600 text-white rounded-xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold mb-10 text-center">Innovative Real-Time Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Smart Farming with IoT</h3>
              <p className="text-lg">
                Our cutting-edge IoT technology revolutionizes aquaponics management:
              </p>
              <ul className="list-none space-y-4">
                {[
                  { icon: Smartphone, text: "Real-time monitoring of water quality, temperature, and pH levels" },
                  { icon: LineChart, text: "AI-powered data analysis for optimal growing conditions" },
                  { icon: Waves, text: "Automated control of water flow and nutrient distribution" },
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <item.icon className="h-6 w-6 mr-3" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              {/* Removed Button component */}
            </div>
            <div className="relative">
              <motion.img
                alt="IoT monitoring dashboard"
                className="rounded-lg shadow-2xl"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iot_monitoring_dashboard_in_smart_smart_agriculture_using_iot_system_iot_ss_v_slide01-QkQOoTyx13rBxsi8mz4H0k6s6TkO5I.jpg"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm">Continuous Monitoring</p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >

          </motion.div>
        </section>
        
        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactMetric icon={Users} value="50,000+" label="People Fed" />
            <ImpactMetric icon={Utensils} value="20%" label="Local Food Demand" />
            <ImpactMetric icon={DollarSign} value="$10M+" label="Economic Impact" />
          </div>
        </section>
        
        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">Food Production Projection</h2>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={foodProductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Production (tons)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="traditional" fill="#8884d8" name="Traditional Farming" />
                <Bar dataKey="aquaponics" fill="#82ca9d" name="AquaSmart Aquaponics" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Projected food production comparison between traditional farming and AquaSmart Aquaponics (2025-2040)
          </p>
        </section>
        
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Join the Aquaponics Revolution</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Be part of our mission to achieve 40% food coverage in 40 years, transforming lives and ecosystems around
            Lake Victoria and beyond.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transform transition hover:scale-105">
            Get Involved Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg">&copy; 2024 AquaSmart East Africa. Nurturing a sustainable future through aquaponics innovation.</p>
        </div>
      </footer>
    </div>
  )
}
