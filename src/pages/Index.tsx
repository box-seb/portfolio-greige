import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Layers, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    description: "Every detail is considered — from spacing to colour, nothing is accidental.",
  },
  {
    icon: Layers,
    title: "Built to Scale",
    description: "A solid foundation that grows with your ambitions without compromising quality.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimised for performance so your users never have to wait.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Best practices baked in from day one — your data stays safe.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Studio<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <Button size="sm">
            Get Started <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
            >
              Welcome to Studio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Build something
              <br />
              <span className="text-primary">remarkable.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              A clean, polished foundation for your next project. Designed with
              intention, built for clarity.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex gap-3">
              <Button size="lg">
                Start Building <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Features */}
        <section id="features" className="border-t bg-card py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-14 max-w-md">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Crafted with care
              </h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need, nothing you don't. Each feature is designed to help you move faster.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Card className="h-full border bg-background transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Join thousands of creators who are building polished products with confidence.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Get Started Free <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
