"use client";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ValueBand } from "@/components/home/ValueBand";
import { Review } from "@/components/Review";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  HeartHandshake,
  Home as HomeIcon,
  Package,
  Palette,
  PencilRuler,
  Scissors,
  Sofa,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={images[currentImageIndex]}
          alt="Project image"
          fill
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const serviceGroups = [
    {
      title: "Moving & shifting",
      subtitle:
        "Scheduled crews, proper equipment, and clear communication from survey to handover.",
      items: [
        {
          icon: <HomeIcon className="h-12 w-12 mb-4 text-primary" />,
          title: "Home & villa moves",
          description:
            "Full or partial relocations for apartments and villas — careful handling of furniture, appliances, and fragile items.",
          features: [
            "Pre-move planning & survey",
            "Floor and door protection",
            "Placement at destination",
          ],
        },
        {
          icon: <Building2 className="h-12 w-12 mb-4 text-primary" />,
          title: "Office & commercial",
          description:
            "Minimise downtime with phased packing, labelled inventory, and desk-to-desk delivery.",
          features: [
            "After-hours options",
            "IT-friendly handling",
            "Storage coordination",
          ],
        },
        {
          icon: <Package className="h-12 w-12 mb-4 text-primary" />,
          title: "Packing & unpacking",
          description:
            "Materials supplied or bring your own — we wrap, box, and unpack so you can focus on settling in.",
          features: [
            "Fragile & glass packing",
            "Wardrobe cartons",
            "Unpack & debris removal",
          ],
        },
        {
          icon: <Truck className="h-12 w-12 mb-4 text-primary" />,
          title: "Transport & delivery",
          description:
            "Right-sized vehicles for Qatar roads — single pieces, bulk delivery, or last-mile to your door.",
          features: [
            "Load securing & blankets",
            "Lift / stair planning",
            "Insured handling options",
          ],
        },
      ],
    },
    {
      title: "Furniture & interior",
      subtitle:
        "When your space needs more than a move — the same team can design, build, and install.",
      items: [
        {
          icon: <PencilRuler className="h-12 w-12 mb-4 text-primary" />,
          title: "Custom furniture",
          description:
            "Bespoke pieces from dining tables to wardrobes — measured for your layout.",
          features: [
            "Design consultation",
            "Premium materials",
            "Fit & finish guarantee",
          ],
        },
        {
          icon: <Scissors className="h-12 w-12 mb-4 text-primary" />,
          title: "Curtains & blinds",
          description:
            "Fabric selection through to professional installation and dressing.",
          features: [
            "Made-to-measure",
            "Motorised options",
            "Wide fabric library",
          ],
        },
        {
          icon: <Palette className="h-12 w-12 mb-4 text-primary" />,
          title: "Wood & SPC flooring",
          description:
            "SPC, Barkiya PVC, and waterproof systems — supplied and fitted.",
          features: [
            "Subfloor assessment",
            "Waterproof systems",
            "Clean handover",
          ],
        },
        {
          icon: <Sofa className="h-12 w-12 mb-4 text-primary" />,
          title: "Upholstery",
          description:
            "Reupholstery and cushion refresh — leather, fabric, and bespoke stitching.",
          features: [
            "Fabric sourcing",
            "Leather work",
            "Frame inspection",
          ],
        },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Khalid Al Muhannadi",
      role: "Villa relocation — West Bay",
      content:
        "Two days, villa to villa, labels on every carton. Crew showed up when they said they would — rare in this town.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [],
    },
    {
      name: "Mohammed Al Naimi",
      role: "Villa Owner",
      content:
        "Majlis build and curtains afterwards — same team, same standards. The room finally feels like ours.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/curtain/curtain1.jpg",
        "/curtain/curtain2.jpg",
        "/curtain/curtain3.jpg",
      ],
    },
    {
      name: "Fatima Al Sayed",
      role: "Home Owner",
      content:
        "Reupholstery that looks factory-new. They were honest about which fabrics would survive our kids.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/sofa/sofa-living-room-3.jpg"],
    },
    {
      name: "Ahmed Al Emadi",
      role: "Business Owner",
      content:
        "Retail unit move over a weekend — shelves back up for Monday opening. Zero drama.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7c576?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/cabinet/tv1.jpg",
        "/cabinet/tv-cabinet2.jpg",
        "/cabinet/tv-cabinet-3.jpg",
      ],
    },
    {
      name: "Maryam Al Thani",
      role: "Interior Designer",
      content:
        "SPC installs for my clients stay flat and quiet — I keep sending them here.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/carpet/carpet1.jpg",
        "/carpet/carpet2.jpg",
        "/carpet/carpet3.jpg",
      ],
    },
    {
      name: "Abdullah Al Kuwari",
      role: "Property Developer",
      content:
        "Multiple units, wardrobes and kitchens — schedules actually match the Gantt for once.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: ["/almira/almira1.jpg"],
    },
    {
      name: "Sara Al Mansouri",
      role: "Home Owner",
      content:
        "Whole-house curtains — tracks level, pleats even, and they hoovered after. Small thing, big difference.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      rating: 5,
      projectImages: [
        "/curtain/curtain7.jpg",
        "/curtain/curtain8.jpg",
        "/curtain/curtain9.jpg",
      ],
    },
  ];

  const projects = [
    {
      title: "High-rise pack & move",
      image:
        "https://images.unsplash.com/photo-1600566752355-3577003e8e7a?auto=format&fit=crop&q=85&w=1200",
      category: "Moving",
    },
    {
      title: "Luxury Curtain Design",
      image: "/curtain/curtain1.jpg",
      category: "Curtains",
    },
    {
      title: "Modern TV Table",
      image: "/cabinet/tv1.jpg",
      category: "Table",
    },
    {
      title: "Custom Wardrobe",
      image: "/almira/almira1.jpg",
      category: "Wardrobe",
    },
    {
      title: "Premium Sofa",
      image: "/sofa/sofa-living-room-3.jpg",
      category: "Sofa",
    },
    {
      title: "Barkiya SPC",
      image: "/carpet/carpet1.jpg",
      category: "Barkiya",
    },
    {
      title: "Modern Curtain Design",
      image: "/curtain/curtain4.jpg",
      category: "Curtains",
    },
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const hasMoreTestimonials = visibleTestimonials < testimonials.length;

  const loadMore = () => {
    setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
  };

  const beforeAfterWork = [
    {
      title: "Sofa Transformation",
      category: "Sofa",
      description: "Complete sofa reupholstery with premium fabric",
      beforeImage: "/work/before-after/sofa/sofa-1-before.jpg",
      afterImage: "/work/before-after/sofa/sofa-1-after.jpg",
      location: "Pearl Qatar",
    },
    // Add 3-4 more showcase items
  ];

  return (
    <div>
      {/* 1. Hero Slider - First impression */}
      <HeroSlider />

      {/* 2. Value proposition — plan, pack, deliver */}
      <ValueBand />

      {/* 3. Why Choose Us Cards - Build trust early */}
      <section className="layout-section bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout-container"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Why families and offices choose us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fast responses, careful handling, and crews who know Qatar&apos;s
              compounds, towers, and villas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                  <p className="text-muted-foreground">
                    Quick response time and efficient service delivery. We value
                    your time and ensure timely completion of projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Using only the finest materials and expert craftsmanship to
                    ensure lasting quality and beauty.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <HeartHandshake className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customer Satisfaction
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicated to exceeding expectations with personalized
                    service and attention to detail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Logistics mindset</h3>
                  <p className="text-muted-foreground">
                    Route planning, parking, and access sorted before trucks
                    arrive — fewer surprises on moving day.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">One partner</h3>
                  <p className="text-muted-foreground">
                    Move first, then furnish — upholstery, curtains, and
                    wardrobes from the same trusted team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <BadgeCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clear handover</h3>
                  <p className="text-muted-foreground">
                    Walkthrough at delivery, labelled rooms, and support if
                    something needs adjusting after the move.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Our Services - Show what you offer */}
      <section className="layout-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout-container"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              What we offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moving and shifting first — plus furniture, curtains, and
              flooring when you need the full package.
            </p>
          </div>

          <div className="space-y-14">
            {serviceGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <div className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {group.subtitle}
                  </p>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {group.items.map((service) => (
                    <motion.div key={service.title} variants={item}>
                      <Card className="h-full hover:shadow-lg transition-shadow border-border/80">
                        <CardHeader>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex justify-center"
                          >
                            {service.icon}
                          </motion.div>
                          <CardTitle className="text-center mb-2 font-display text-lg">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-center mb-4 text-sm leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Recent Work - Show proof of quality */}
      <section className="layout-section bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout-container"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Recent projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moves, interiors, and installs — a snapshot of what we deliver
              across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Testimonials - Social proof */}
      <section className="layout-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout-container"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              What our clients say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From full villa moves to upholstery and curtains — feedback from
              across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {testimonials
              .slice(0, visibleTestimonials)
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <Review
                        name={testimonial.name}
                        text={testimonial.content}
                      />
                      <p className="text-sm text-muted-foreground ml-16 -mt-2">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {hasMoreTestimonials && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="min-w-[200px] text-lg font-semibold hover:bg-primary hover:text-primary-foreground relative z-20"
              >
                View All Reviews
              </Button>
            </div>
          )}
        </motion.div>
      </section>

      {/* 7. Call to Action - Final push for conversion */}
      <section className="layout-section bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout-container text-center"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to book your move?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us your dates, locations, and what needs to move — we&apos;ll
            reply with a clear plan and quote. Interior work can be scheduled
            after you land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
