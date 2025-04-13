import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About | Blooming Roses",
  description: "Learn more about the Blooming Roses event organized by Jesus Youth Pala.",
}

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 z-[-1]" />
      
      <Container>
        <div className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in">
                About Blooming Roses
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up">
                A spiritual journey of renewal and growth
              </p>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Who We Are</CardTitle>
                  <CardDescription>Jesus Youth Pala</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jesus Youth is a missionary movement at the service of the Church, that seeks to 
                    evangelize young people and empower them to evangelize others. We are a group of 
                    young Catholics committed to living and sharing the Gospel values in today's challenging world.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Why Blooming Roses</CardTitle>
                  <CardDescription>Our Vision</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Just as roses bloom into their fullness with care and nurturing, we believe young people 
                    can bloom in their spiritual journey when provided with the right environment. Blooming Roses
                    is designed to be that nurturing space where young hearts can encounter Christ's love,
                    experience spiritual growth, and be inspired to live out their faith with renewed vigor and passion.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Event Schedule</CardTitle>
                  <CardDescription>April 24–27, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-lg">Day 1: Wednesday, April 24</h4>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">6:00 PM:</span> 
                          <span>Registration & Welcome</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">7:00 PM:</span> 
                          <span>Opening Ceremony & Worship</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">8:30 PM:</span> 
                          <span>Ice-Breakers & Community Building</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Day 2: Thursday, April 25</h4>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">9:00 AM:</span> 
                          <span>Morning Prayer & Reflection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">10:30 AM:</span> 
                          <span>Small Group Discussions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">2:00 PM:</span> 
                          <span>Workshop Session - "Growing in Faith"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">7:00 PM:</span> 
                          <span>Evening Worship & Adoration</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Day 3: Friday, April 26</h4>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">9:00 AM:</span> 
                          <span>Morning Prayer & Testimony</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">11:00 AM:</span> 
                          <span>Holy Mass</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">2:00 PM:</span> 
                          <span>Workshop - "Sharing Your Faith"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">7:00 PM:</span> 
                          <span>Praise & Worship Concert</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Day 4: Saturday, April 27</h4>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">9:00 AM:</span> 
                          <span>Closing Prayer Session</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">10:30 AM:</span> 
                          <span>Small Group Sharing & Commitment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">12:00 PM:</span> 
                          <span>Closing Mass</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">2:00 PM:</span> 
                          <span>Farewell Celebration</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">
                      * Schedule is subject to minor changes.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                  <CardDescription>Program Highlights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Inspiring spiritual talks and sessions</li>
                    <li>• Prayerful worship experiences</li>
                    <li>• Fellowship and community building</li>
                    <li>• Personal reflection opportunities</li>
                    <li>• Faith sharing in small groups</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                  <CardDescription>Save the Date</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Date:</strong> April 24–27
                    </p>
                    <p>
                      <strong>Organized by:</strong> Jesus Youth Pala
                    </p>
                    <p>
                      To participate in this transformative event, please register using the link below.
                    </p>
                    <div>
                      <Link
                        href="https://bit.ly/blooming25Registration"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 