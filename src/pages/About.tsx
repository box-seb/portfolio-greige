import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Wrench, LayoutGrid, GraduationCap, Target, Heart, Camera, Brain, Icon } from "lucide-react";
import { tennisRacket } from "@lucide/lab";
import profileImg from "@/assets/profile.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <Card className="mb-8 border bg-card">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row">
                {/* Left: Avatar + Bio */}
                <div className="flex-1">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
                      <img src={profileImg} alt="Meg Kowalew" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h1 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                      Product leader across SaaS, Marketplace and Payments
                      </h1>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        I'm a product leader with 15 years across SaaS, marketplace and payments businesses, building customer experiences people return to. I've led cross-functional teams from strategy through delivery: setting direction through roadmaps and OKRs, running discovery, coaching PMs and designers, and partnering with engineering, data, sales and customer teams to improve the metrics that matter—activation, engagement, retention and growth.
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Most recently, owned the end-to-end product experience for top-rated NZ property app and the platform behind it, balancing a high-quality consumer experience with enterprise and industry requirements. I thrive in ambiguous problem spaces where clarity must be created through research, insight and prioritisation.
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Now based in Melbourne, I'm looking for a role where product is expected to lead outcomes while building a team that learns fast and ships with confidence.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["SaaS", "Payments", "Marketplace", "PropTech"].map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Profile */}
                <div className="lg:w-72 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 shadow-[0_4px_30px_rgba(99,102,241,0.08)] backdrop-blur-sm ring-1 ring-primary/5">
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                    Quick Profile
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      15+ product management experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Product strategy: vision → roadmap → outcomes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Positioning & pricing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      B2C, B2B, and B2B2C models
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Acquisition and post-merger integration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      AI-powered recommendations and personalisation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Mobile apps, websites, and internal tools/workflows
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      User research practice; discovery coaching
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Melbourne-based
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How I work + What I'm looking for */}
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} custom={1}>
            <Card className="h-full border bg-card">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2"><Wrench className="h-5 w-5 text-primary" /> How I work</h2>
                <ul className="mb-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><span className="font-medium text-foreground">Clear about trade-offs and outcomes.</span> I explain what we're choosing, what we're not, and why. I'm open about what worked and what didn't so we can learn quickly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><span className="font-medium text-foreground">Pragmatic.</span> I do enough to reduce risk and unblock delivery, but I don't let process become the work.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><span className="font-medium text-foreground">Close to users.</span> I spend time understanding their context and constraints, not just what they click. That empathy shapes better decisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><span className="font-medium text-foreground">Create culture in the day-to-day.</span> Be clear on what matters, say the hard things kindly, and do what we said we'd do.</span>
                  </li>
                </ul>

                <h3 className="mb-3 text-base font-bold text-foreground flex items-center gap-2"><LayoutGrid className="h-4 w-4 text-primary" /> Day-to-day</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Frameworks</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        North-star metrics, OKRs, outcome roadmaps
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Assumptions mapping, experiment design, AB testing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Growth loops
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Tools</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Jira, Confluence, Miro, Prouctboard, Roadmunk
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Figma, Lovable, Replit
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        HotJar, Maze, UserTesting
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        AirOps, Braze
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="mt-6 mb-3 text-base font-bold text-foreground flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /> Education</h3>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Master of Economic Sciences</strong> — Poznan University of Economics</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Recent courses:</strong> Reforge AI Strategy, Reforge AI Leadership</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <Card className="h-full border bg-card">
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h2 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Where I can add most value</h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    I'm looking for a role where product is expected to lead measurable outcomes—growth, retention, revenue, or step-change capability—and where I can build teams that learn fast and ship with confidence.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    I'm drawn to cultures that value transparency, autonomy, and continuous learning, and that treat delivery as a shared craft. I work best in tight partnership with design and engineering: shaping direction together, testing ideas early, and making trade-offs openly.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    I value environments where collaboration is deliberate (clear ownership, strong rituals, high-quality critique) and where honest discussion is encouraged—so decisions are understood, teams stay aligned, and the product improves through iteration rather than politics.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    I'm a player-coach: I lead by example and stay close to the work. That means getting hands-on in discovery, problem framing, and delivery—writing crisp product narratives, mapping workflows, defining measures of success, and partnering with engineers on trade-offs—while still creating the conditions for the team to do great work.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I care deeply about enabling teams to do their best work: giving people context, sharing knowledge openly, and investing in growth through coaching, thoughtful feedback, and regular reflection—so our craft improves over time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Beyond work */}
        <motion.div variants={fadeUp} custom={3} className="mt-8">
          <Card className="border bg-card">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" /> Beyond work
              </h2>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon iconNode={tennisRacket} className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>
                    <span className="font-medium text-foreground">Tennis:</span> playing, watching, and unapologetically nerding out. I've followed tennis for years, and finally started learning to play last year.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Camera className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>
                    <span className="font-medium text-foreground">Photography:</span> I try to keep my creative side busy with a camera. I enjoy landscape and wildlife photography—especially bird photography, which is a great lesson in patience.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>
                    <span className="font-medium text-foreground">Cognitive psychology:</span> I find the science of how we think, learn, and remember fascinating, and I've been deepening my knowledge of cognitive psychology for years. Decision-making patterns and biases are especially interesting to me, and highly relevant to product management and leadership. In 2020, I gave{" "}
                    <a href="https://youtu.be/aejXCHpq26Q?si=i3GtCezcD34g-nvV" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                      a talk on cognitive biases in product management
                    </a>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
