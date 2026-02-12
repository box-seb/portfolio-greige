import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Phone, Linkedin, MapPin, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-primary" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
};

const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Hero */}
        <motion.div variants={fadeUp} custom={0}>
          <Card className="mb-8 border bg-card">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
                  <img src={profileImg} alt="Meg Kowalew" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    Contact
                  </p>
                  <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
                    Let's talk.
                  </h1>
                  <p className="mb-5 text-muted-foreground">
                    I am open to permanent or contract roles, full time or fractional.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="rounded-full" asChild>
                      <a href="/MegKowalew_CV.pdf" download>Download CV</a>
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      View Work
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} custom={1}>
          <Card className="border bg-card">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-6 text-lg font-bold text-foreground">Details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <Card className="border bg-background">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">Email</h3>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="mailto:meg.kowalew@gmail.com"
                        className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        meg.kowalew@gmail.com
                      </a>
                      <CopyButton text="meg.kowalew@gmail.com" />
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border bg-background">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="tel:+61403070049"
                        className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        +61 403 070 049
                      </a>
                      <CopyButton text="+61 403 070 049" />
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card className="border bg-background">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">LinkedIn</h3>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/meg-ma%C5%82gorzata-kowalew-10ab471b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border bg-background">
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">Location</h3>
                    </div>
                    <Badge variant="secondary" className="rounded-full mb-2">
                      Melbourne, Australia
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Available for hybrid, on site or fully remote roles.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
