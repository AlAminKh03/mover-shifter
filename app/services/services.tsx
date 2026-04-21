"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fadeIn,
  scaleHover,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Building2,
  CarFront,
  Hammer,
  Home,
  Package,
  PencilRuler,
  Scissors,
  Settings,
  Sofa,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: <Truck className="h-12 w-12 text-primary" />,
    title: "Home & villa moves",
    description:
      "Full or partial relocations with blanket-wrapped furniture, appliance handling, and room-by-room placement.",
    features: [
      "Pre-move survey",
      "Access & lift planning",
      "Unpacking support",
    ],
  },
  {
    icon: <Building2 className="h-12 w-12 text-primary" />,
    title: "Office & retail moves",
    description:
      "Phased packing, labelled inventory, and desk-to-desk delivery to reduce business downtime.",
    features: [
      "After-hours slots",
      "Workstation breakdown & setup",
      "Coordination with building management",
    ],
  },
  {
    icon: <Package className="h-12 w-12 text-primary" />,
    title: "Packing & materials",
    description:
      "Boxes, bubble wrap, and wardrobe cartons — we pack to survive Qatar roads and stairs.",
    features: [
      "Fragile & glass packing",
      "Crating for art or glass tops",
      "Debris removal",
    ],
  },
  {
    icon: <CarFront className="h-12 w-12 text-primary" />,
    title: "Transport & delivery",
    description:
      "Right-sized vehicles for single pieces, bulk delivery, or last-mile drop-offs.",
    features: [
      "Load securing",
      "Blankets & straps",
      "Proof of delivery walkthrough",
    ],
  },
  {
    icon: <PencilRuler className="h-12 w-12 text-primary" />,
    title: "Custom Furniture Design",
    description:
      "Bespoke furniture pieces crafted to your exact specifications.",
    features: [
      "Personalized consultation",
      "3D design visualization",
      "Premium material selection",
      "Expert craftsmanship",
    ],
  },
  {
    icon: <Hammer className="h-12 w-12 text-primary" />,
    title: "SPC Flooring Installation",
    description:
      "Professional SPC flooring installation with meticulous attention to detail. We handle residential and commercial projects of any size.",
    features: [
      "Subfloor preparation",
      "Moisture barrier",
      "Precision cutting",
      "Perfect finishing",
    ],
  },
  {
    icon: <Scissors className="h-12 w-12 text-primary" />,
    title: "Curtain & Drapery Services",
    description: "Complete curtain solutions from design to installation.",
    features: [
      "Custom curtain design",
      "Professional installation",
      "Wide fabric selection",
      "Smart motorized options",
    ],
  },
  {
    icon: <Settings className="h-12 w-12 text-primary" />,
    title: "Furniture Maintenance",
    description:
      "Regular maintenance services to keep your furniture in perfect condition.",
    features: [
      "Preventive care",
      "Hardware replacement",
      "Surface treatment",
      "Joint tightening",
    ],
  },
  {
    icon: <Sofa className="h-12 w-12 text-primary" />,
    title: "Upholstery Services",
    description:
      "Transform your furniture with our premium upholstery services.",
    features: [
      "Fabric reupholstery",
      "Leather work",
      "Cushion replacement",
      "Style updates",
    ],
  },
  {
    icon: <Home className="h-12 w-12 text-primary" />,
    title: "Home Furniture Assembly",
    description:
      "Professional assembly and installation of all types of furniture.",
    features: [
      "Expert assembly",
      "Secure mounting",
      "Location setup",
      "Quality inspection",
    ],
  },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="layout-container layout-section"
    >
      <motion.div className="text-center mb-16" variants={staggerItem}>
        <motion.h1
          variants={fadeIn}
          className="font-display text-4xl font-bold mb-4"
        >
          Our services
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Moving and shifting first — then furniture, curtains, flooring, and
          care for everything you install.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <motion.div {...scaleHover} className="flex justify-center">
                  {service.icon}
                </motion.div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  {service.description}
                </p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={staggerItem}
                      className="flex items-center space-x-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
