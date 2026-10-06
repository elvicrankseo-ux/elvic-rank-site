import {
  Code,
  Search,
  MapPin,
  Bot,
  Cpu,
  Megaphone,
  MessageSquare,
  Target,
  type LucideIcon,
} from "lucide-react";

export type ServiceFaq = { question: string; answer: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceProcess = { title: string; description: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  points: string[];
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  whoItsFor: string;
  problemsSolved: string[];
  whatWeDo: string;
  process: ServiceProcess[];
  benefits: ServiceBenefit[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  layoutStyle: "a" | "b" | "c";
  ctaHeading?: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code,
    title: "Web Development",
    shortDescription: "Your website is often the first serious interaction a potential customer has with your business. We design and develop websites that combine strong visual design, intuitive user experience, technical performance, and conversion-focused structure.",
    points: [
      "Website Design & Development",
      "Responsive Development",
      "Landing Pages",
      "Website Redesign",
      "Performance Optimization",
      "SEO-Ready Architecture",
      "Custom Functionality"
    ],
    metaTitle: "Web Development Services | Elvic Rank",
    metaDescription: "Build a fast, modern, conversion-focused website designed to represent your business, support search visibility, and turn visitors into customers.",
    heroIntro: "Your website should do more than look good. It should communicate your value, build trust, perform well, and make it easy for the right customers to take action. Elvic Rank builds modern, high-performance websites designed around your business, your customers, and your growth goals.",
    whoItsFor: "Local and service-based businesses, growing companies, professional service businesses, startups, businesses with outdated websites, businesses launching a new digital presence, and companies that need custom functionality.",
    problemsSolved: [
      "Outdated or unprofessional websites",
      "Poor mobile experience",
      "Slow loading times",
      "Confusing navigation",
      "Weak calls to action",
      "Poor conversion paths",
      "Difficult-to-manage websites",
      "Poor technical foundations",
      "Websites that don't clearly communicate what the business does"
    ],
    whatWeDo: "Whether you're starting from scratch or replacing an outdated website, we build around what your business actually needs. A website is not simply a digital brochure. It is part of your sales and marketing infrastructure. A strong website can help visitors understand your business faster, trust your brand, find the information they need, and take the next step.",
    process: [
      { title: "01 — Discover", description: "Understand your business, audience, competitors, goals, and requirements." },
      { title: "02 — Plan", description: "Create the structure, user journey, content hierarchy, and technical direction." },
      { title: "03 — Design", description: "Develop the visual language and interface." },
      { title: "04 — Build", description: "Turn the approved design into a responsive, functional website." },
      { title: "05 — Test", description: "Check responsiveness, functionality, performance, forms, navigation, and usability." },
      { title: "06 — Launch", description: "Deploy the website and make sure everything is working correctly." }
    ],
    benefits: [
      { title: "Website Design & Development", description: "Modern websites designed around your brand and business objectives." },
      { title: "Responsive Development", description: "Experiences that work across phones, tablets, laptops, and large screens." },
      { title: "Landing Pages", description: "Focused pages designed around specific campaigns, services, or offers." },
      { title: "Website Redesign", description: "Transform outdated websites into modern digital experiences." },
      { title: "Performance Optimization", description: "Improve technical performance and the overall user experience." },
      { title: "SEO-Ready Architecture", description: "Build the technical foundation with search visibility in mind." },
      { title: "Custom Functionality", description: "Develop features and integrations around your business requirements." }
    ],
    faqs: [
      { question: "How long does a website take to build?", answer: "The timeline depends on the size and complexity of the project." },
      { question: "Can you redesign my existing website?", answer: "Yes. We can improve an existing website or rebuild it when the current foundation is limiting the business." },
      { question: "Will my website work on mobile?", answer: "Yes. Responsive behavior is part of the development process." },
      { question: "Can you build a website with SEO in mind?", answer: "Yes. We can establish a strong technical and structural foundation that supports ongoing SEO." }
    ],
    relatedSlugs: ["seo", "local-seo", "ai-solutions"],
    layoutStyle: "a",
    ctaHeading: "Ready for a website that works as hard as your business? Let's build a digital presence designed to support your next stage of growth."
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    shortDescription: "Search Engine Optimization is the process of improving your website and digital presence so search engines can better understand, evaluate, and surface your business for relevant searches.",
    points: [
      "Technical SEO",
      "Keyword & Search Research",
      "On-Page SEO",
      "Content Strategy",
      "Internal Linking",
      "Authority Development",
      "SEO Monitoring"
    ],
    metaTitle: "SEO Services | Elvic Rank",
    metaDescription: "Increase organic search visibility with technical SEO, content strategy, on-page optimization, and a strategy built around your business goals.",
    heroIntro: "A strong business deserves to be visible when potential customers are looking for what it offers. Elvic Rank builds SEO strategies designed to improve organic visibility, attract relevant traffic, and create sustainable opportunities for growth.",
    whoItsFor: "Local businesses, service businesses, growing companies, e-commerce businesses, professional services, businesses entering competitive markets, and businesses with declining organic traffic.",
    problemsSolved: [
      "Low organic visibility",
      "Poor rankings",
      "Technical SEO issues",
      "Weak website structure",
      "Thin or poorly targeted content",
      "Poor keyword targeting",
      "Weak internal linking",
      "Declining organic traffic",
      "Competitors consistently outranking you"
    ],
    whatWeDo: "Effective SEO isn't simply about ranking for keywords. It's about becoming more visible to the people who matter to your business. People don't always search for your company by name. They search for problems, services, solutions, products, businesses, and questions. SEO helps your business become part of those discovery moments.",
    process: [
      { title: "Audit", description: "Identifying technical, content, and authority gaps." },
      { title: "Research", description: "Understanding search demand and competitor strategies." },
      { title: "Strategy", description: "Building a roadmap for improved visibility." },
      { title: "Optimize", description: "Executing technical, on-page, and content improvements." },
      { title: "Build Authority", description: "Strengthening external signals that build trust." },
      { title: "Measure & Improve", description: "SEO is an ongoing process rather than a one-time switch." }
    ],
    benefits: [
      { title: "Technical SEO", description: "Identify and resolve technical issues affecting search visibility." },
      { title: "Keyword & Search Research", description: "Understand what potential customers search for and why." },
      { title: "On-Page SEO", description: "Optimize important pages, content, headings, links, and search signals." },
      { title: "Content Strategy", description: "Create a strategic roadmap for content that addresses real search demand." },
      { title: "Internal Linking", description: "Build stronger connections between relevant pages across your website." },
      { title: "Authority Development", description: "Strengthen signals that help establish your website as a credible resource." },
      { title: "SEO Monitoring", description: "Track visibility, performance, opportunities, and areas requiring improvement." }
    ],
    faqs: [
      { question: "How long does SEO take?", answer: "SEO results vary based on competition, website condition, market, authority, and strategy. Sustainable SEO generally requires consistent work over time." },
      { question: "Can you guarantee rankings?", answer: "No legitimate SEO strategy can guarantee a specific Google ranking. We focus on improving the factors within our control and building sustainable visibility." },
      { question: "Do you only work with local businesses?", answer: "Local and service businesses are a major focus, but our SEO capabilities can support other types of businesses as well." }
    ],
    relatedSlugs: ["local-seo", "geo", "content-social-media"],
    layoutStyle: "b",
    ctaHeading: "Your customers are already searching. Let's work on making sure they can find you."
  },
  {
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    shortDescription: "Local SEO focuses on improving your visibility when people search for businesses and services in a specific geographic area. It connects your business with local search intent.",
    points: [
      "Google Business Profile Optimization",
      "Local Search Strategy",
      "Citation Management",
      "Local Landing Pages",
      "Local Content",
      "Review Strategy",
      "Local Performance Monitoring"
    ],
    metaTitle: "Local SEO Services | Elvic Rank",
    metaDescription: "Improve local search and Google Maps visibility with Local SEO, Google Business Profile optimization, citations, content, and local strategy.",
    heroIntro: "When customers search for a service near them, your business needs to be easy to discover, understand, and trust. Elvic Rank helps local businesses strengthen their presence across Google Search, Maps, and local discovery.",
    whoItsFor: "Restoration companies, roofing companies, HVAC businesses, plumbers, towing companies, remodeling businesses, cleaning companies, home service businesses, and other location-dependent businesses.",
    problemsSolved: [
      "Weak Google Maps visibility",
      "Poor local rankings",
      "Incomplete Google Business Profile",
      "Inconsistent business information",
      "Weak location pages",
      "Poor local relevance",
      "Limited local content",
      "Weak review strategy",
      "Competitors dominating local search"
    ],
    whatWeDo: "A customer searching 'water damage restoration near me' isn't looking for an article explaining water damage. They're looking for a business. Local SEO helps connect your business with those high-intent discovery moments.",
    process: [
      { title: "Understand the Market", description: "Analyze the local landscape and competitors." },
      { title: "Audit Your Local Presence", description: "Review current visibility across directories and Maps." },
      { title: "Optimize Your Profiles", description: "Improve Google Business Profile and local listings." },
      { title: "Strengthen Local Signals", description: "Build citations and localized links." },
      { title: "Build Relevant Content", description: "Create location pages and local service content." },
      { title: "Monitor & Improve", description: "Track rankings, insights, and reviews over time." }
    ],
    benefits: [
      { title: "Google Business Profile Optimization", description: "Improve the accuracy, completeness, and relevance of your business profile." },
      { title: "Local Search Strategy", description: "Identify opportunities based on services, locations, and customers." },
      { title: "Citation Management", description: "Help establish consistent business information across relevant directories." },
      { title: "Local Landing Pages", description: "Create useful pages targeting important services and locations." },
      { title: "Local Content", description: "Develop content that demonstrates relevance to your local market." },
      { title: "Review Strategy", description: "Help businesses develop a structured approach to earning genuine customer reviews." },
      { title: "Local Performance Monitoring", description: "Track local visibility and identify opportunities for improvement." }
    ],
    faqs: [
      { question: "Do you create Google Business Profiles?", answer: "We can assist with setup and optimization where appropriate and where the business meets Google's eligibility requirements." },
      { question: "Can you guarantee Google Maps rankings?", answer: "No. Local rankings depend on numerous factors and can change over time." },
      { question: "Do reviews matter?", answer: "Genuine customer reviews can contribute to trust and local visibility. We do not recommend buying or fabricating reviews." }
    ],
    relatedSlugs: ["seo", "google-ads", "web-development"],
    layoutStyle: "c",
    ctaHeading: "Your next customer could be searching right now. Let's make your business easier to discover locally."
  },
  {
    slug: "geo",
    icon: Bot,
    title: "GEO",
    shortDescription: "Generative Engine Optimization (GEO) focuses on improving how clearly and accurately a business's information can be understood and represented by AI-powered search and answer systems.",
    points: [
      "Entity Optimization",
      "Answer-Focused Content",
      "Content Architecture",
      "Structured Data",
      "Brand Consistency",
      "Digital Authority",
      "AI Visibility Strategy"
    ],
    metaTitle: "Generative Engine Optimization (GEO) Services | Elvic Rank",
    metaDescription: "Build stronger visibility across AI-powered search and discovery with Generative Engine Optimization, structured content, entity clarity, and digital authority.",
    heroIntro: "Search is changing. People are increasingly asking AI-powered systems questions instead of relying exclusively on traditional search results. GEO helps businesses prepare their digital presence for this changing discovery landscape.",
    whoItsFor: "Businesses entering competitive markets, established brands, local businesses, professional service companies, companies investing in content, and businesses concerned about changing search behavior.",
    problemsSolved: [
      "Unclear brand information",
      "Weak entity signals",
      "Poorly structured content",
      "Inconsistent information across the web",
      "Content that doesn't directly answer user questions",
      "Limited demonstration of expertise",
      "Weak digital authority",
      "Lack of strategy for AI-powered discovery"
    ],
    whatWeDo: "Instead of optimizing only for traditional blue-link rankings, GEO considers how your brand, expertise, services, entities, and content are structured across the web. The way people discover businesses is evolving. Your website should not only be built for today's search environment, it should communicate your business clearly enough to remain useful as discovery becomes increasingly conversational and AI-assisted.",
    process: [
      { title: "Audit", description: "Evaluating existing entity clarity and structure." },
      { title: "Entity & Content Analysis", description: "Identifying gaps in how AI models interpret your brand." },
      { title: "Strategy", description: "Developing an approach for AI-focused visibility." },
      { title: "Optimize", description: "Implementing structured data, entity connections, and content." },
      { title: "Monitor", description: "Tracking presence within emerging AI-driven discovery experiences." }
    ],
    benefits: [
      { title: "Entity Optimization", description: "Help establish clearer relationships between your brand, services, people, locations, and areas of expertise." },
      { title: "Answer-Focused Content", description: "Develop content that directly addresses questions potential customers ask." },
      { title: "Content Architecture", description: "Organize information so users and machines can understand your expertise more clearly." },
      { title: "Structured Data", description: "Use appropriate structured data where it helps communicate page and entity information." },
      { title: "Brand Consistency", description: "Improve consistency across your website and relevant external sources." },
      { title: "Digital Authority", description: "Strengthen the overall ecosystem of useful, trustworthy information surrounding your business." },
      { title: "AI Visibility Strategy", description: "Develop a strategy for improving your presence within emerging AI-driven discovery experiences." }
    ],
    faqs: [
      { question: "Does GEO replace SEO?", answer: "No. GEO and SEO should work together. Strong technical SEO, useful content, structured information, and authoritative digital signals can support both traditional and AI-powered discovery." },
      { question: "Can you guarantee AI citations?", answer: "No. AI systems control their own outputs. We focus on improving the underlying digital signals and content." },
      { question: "Is GEO only for large companies?", answer: "No. Smaller and local businesses can also benefit from building clear, authoritative digital information." }
    ],
    relatedSlugs: ["seo", "ai-solutions", "content-social-media"],
    layoutStyle: "a",
    ctaHeading: "Search is becoming more conversational. Is your business ready?"
  },
  {
    slug: "ai-solutions",
    icon: Cpu,
    title: "AI Solutions",
    shortDescription: "We focus on practical applications of AI. Instead of adding AI simply because it's trending, we identify repetitive processes where automation can create real value.",
    points: [
      "AI Workflow Automation",
      "AI Content Systems",
      "Business Process Automation",
      "AI Integrations",
      "Lead & Customer Workflows",
      "AI Strategy"
    ],
    metaTitle: "AI Solutions & Automation Services | Elvic Rank",
    metaDescription: "Use AI and automation to streamline business processes, improve productivity, create content, and build smarter digital workflows.",
    heroIntro: "AI should do more than generate text. We help businesses identify practical ways to use AI and automation to save time, improve workflows, and create better digital experiences.",
    whoItsFor: "Growing businesses, agencies, service companies, teams with repetitive workflows, businesses producing large amounts of content, and companies looking to automate manual processes.",
    problemsSolved: [
      "Repetitive manual work",
      "Slow internal processes",
      "Content bottlenecks",
      "Disconnected tools",
      "Poor workflow organization",
      "Time-consuming administrative tasks",
      "Inefficient lead management",
      "Difficulty scaling operations"
    ],
    whatWeDo: "The goal isn't to replace everything with AI. The goal is to give your team more time to focus on work that actually requires human judgment. We build intelligent systems that work alongside your team.",
    process: [
      { title: "Identify", description: "Finding the repetitive, inefficient processes." },
      { title: "Design", description: "Mapping out the automated workflow." },
      { title: "Build", description: "Connecting tools, writing prompts, and configuring AI systems." },
      { title: "Test", description: "Ensuring accuracy, reliability, and security." },
      { title: "Improve", description: "Refining the workflow based on real-world usage." }
    ],
    benefits: [
      { title: "AI Workflow Automation", description: "Connect tools and processes to reduce repetitive work." },
      { title: "AI Content Systems", description: "Create structured systems for producing and managing content more efficiently." },
      { title: "Business Process Automation", description: "Identify repetitive processes that can be streamlined." },
      { title: "AI Integrations", description: "Connect AI capabilities with existing business tools and workflows where appropriate." },
      { title: "Lead & Customer Workflows", description: "Build systems that help organize, qualify, and manage customer interactions." },
      { title: "AI Strategy", description: "Identify realistic AI opportunities based on your business rather than forcing unnecessary technology into your workflow." }
    ],
    faqs: [
      { question: "Do you build custom AI applications?", answer: "Depending on the project, we can develop AI-powered functionality or integrate existing AI technologies into business workflows." },
      { question: "Will AI replace my employees?", answer: "AI can automate certain repetitive tasks, but the right implementation should support people rather than blindly replace human judgment." },
      { question: "Can you automate my entire business?", answer: "Automation should be selective. We first identify processes where automation is practical and valuable." }
    ],
    relatedSlugs: ["web-development", "geo", "content-social-media"],
    layoutStyle: "b",
    ctaHeading: "Don't just use AI. Use it strategically."
  },
  {
    slug: "google-ads",
    icon: Target,
    title: "Google Ads",
    shortDescription: "Google Ads can put your business in front of people actively searching for products and services like yours. We build campaigns focused on relevant traffic.",
    points: [
      "Campaign Strategy",
      "Keyword & Search Intent Research",
      "Campaign Setup",
      "Ad Copy",
      "Landing Pages",
      "Conversion Tracking",
      "Optimization"
    ],
    metaTitle: "Google Ads Management | Elvic Rank",
    metaDescription: "Reach high-intent customers with strategic Google Ads campaigns, conversion-focused landing pages, tracking, and ongoing optimization.",
    heroIntro: "Organic visibility takes time. Google Ads can put your business in front of people actively searching for products and services like yours. Elvic Rank builds and manages campaigns focused on relevant traffic, measurable actions, and efficient growth.",
    whoItsFor: "Local service businesses, businesses launching new services, businesses that need faster visibility, businesses with measurable conversion goals, and companies operating in competitive markets.",
    problemsSolved: [
      "Wasted ad spend",
      "Poor targeting",
      "Irrelevant traffic",
      "Low conversion rates",
      "Weak landing pages",
      "Poor campaign structure",
      "Lack of meaningful tracking"
    ],
    whatWeDo: "Paid advertising works best when the entire journey is considered. Getting a click is only the beginning. The goal is to connect: Search → Ad → Landing Page → Action → Customer.",
    process: [
      { title: "Research", description: "Understanding search intent and competition." },
      { title: "Strategy", description: "Defining targeting, budget, and messaging." },
      { title: "Build", description: "Setting up campaigns, ad groups, and tracking." },
      { title: "Launch", description: "Going live and monitoring initial performance." },
      { title: "Measure", description: "Analyzing conversions, costs, and quality." },
      { title: "Optimize", description: "Refining bids, copy, and targeting over time." }
    ],
    benefits: [
      { title: "Campaign Strategy", description: "Build campaigns around your business objectives and customer intent." },
      { title: "Keyword & Search Intent Research", description: "Identify searches that are relevant to your offer." },
      { title: "Campaign Setup", description: "Structure campaigns, ad groups, targeting, and budgets." },
      { title: "Ad Copy", description: "Create relevant messaging designed to attract qualified clicks." },
      { title: "Landing Pages", description: "Improve the experience customers encounter after clicking." },
      { title: "Conversion Tracking", description: "Measure meaningful actions rather than clicks alone." },
      { title: "Optimization", description: "Review performance and continuously identify opportunities for improvement." }
    ],
    faqs: [
      { question: "Can you guarantee leads?", answer: "No. Advertising performance depends on the market, offer, competition, budget, landing page, and many other variables." },
      { question: "Do you handle the ad budget?", answer: "The advertising budget is separate from our management/service fees." },
      { question: "Can you manage an existing campaign?", answer: "Yes. We can audit existing campaigns and identify opportunities for improvement." }
    ],
    relatedSlugs: ["seo", "meta-ads", "local-seo"],
    layoutStyle: "c",
    ctaHeading: "Stop paying for clicks that don't move your business forward."
  },
  {
    slug: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads",
    shortDescription: "Meta advertising helps businesses reach potential customers based on interests, behaviors, demographics, and other available targeting signals.",
    points: [
      "Campaign Strategy",
      "Audience Research",
      "Creative Strategy",
      "Campaign Setup",
      "Lead Generation",
      "Retargeting",
      "Performance Optimization"
    ],
    metaTitle: "Meta Ads Management | Facebook & Instagram Advertising | Elvic Rank",
    metaDescription: "Reach your ideal audience with strategic Facebook and Instagram advertising campaigns designed around awareness, leads, conversions, and growth.",
    heroIntro: "Your next customer may not be searching for you yet. Meta advertising helps businesses reach potential customers based on interests, behaviors, demographics, and other targeting signals. Elvic Rank creates campaigns designed to attract attention and move people toward action.",
    whoItsFor: "Service businesses, e-commerce businesses, local businesses, brands launching products, businesses building awareness, and businesses with strong visual offers.",
    problemsSolved: [
      "Low brand awareness",
      "Inconsistent social advertising",
      "Poor campaign structure",
      "Unqualified leads",
      "Weak creative",
      "Poor conversion paths",
      "Advertising without measurable objectives"
    ],
    whatWeDo: "People don't always discover businesses because they are searching. Sometimes the business needs to reach the right person first. Meta Ads can create that first interaction and help businesses build awareness, generate demand, and drive action.",
    process: [
      { title: "Research", description: "Understanding the audience and market." },
      { title: "Strategy", description: "Defining objectives, targeting, and budgets." },
      { title: "Creative", description: "Developing ad concepts, copy, and visuals." },
      { title: "Launch", description: "Publishing the campaigns and configuring tracking." },
      { title: "Measure", description: "Monitoring cost per lead, reach, and engagement." },
      { title: "Optimize", description: "Testing new creatives and refining audiences." }
    ],
    benefits: [
      { title: "Campaign Strategy", description: "Determine the objective, audience, offer, and creative direction." },
      { title: "Audience Research", description: "Identify the people most relevant to your campaign." },
      { title: "Creative Strategy", description: "Develop concepts and messaging designed for social environments." },
      { title: "Campaign Setup", description: "Configure campaigns and advertising structures." },
      { title: "Lead Generation", description: "Build campaigns around qualified inquiries and potential customers." },
      { title: "Retargeting", description: "Reconnect with people who have already interacted with your business where appropriate." },
      { title: "Performance Optimization", description: "Review results and continuously improve campaign performance." }
    ],
    faqs: [
      { question: "Do you create the ad creatives?", answer: "Creative requirements can be included depending on the project scope." },
      { question: "Do you manage Facebook and Instagram campaigns?", answer: "Yes. Meta advertising can cover both platforms where appropriate." },
      { question: "Can you guarantee leads?", answer: "No. Campaign performance depends on many factors, including audience, offer, creative, market, budget, and landing experience." }
    ],
    relatedSlugs: ["google-ads", "content-social-media", "web-development"],
    layoutStyle: "a",
    ctaHeading: "Your next customer may not be searching yet. Let's put your business in front of the right audience."
  },
  {
    slug: "content-social-media",
    icon: MessageSquare,
    title: "Content & Social Media",
    shortDescription: "Build a stronger digital presence with strategic content, social media marketing, AI-assisted content creation, and consistent brand communication.",
    points: [
      "Content Strategy",
      "AI-Assisted Content Creation",
      "Social Media Strategy",
      "Content Calendars",
      "Educational Content",
      "Promotional Content",
      "Brand Content"
    ],
    metaTitle: "Content & Social Media Marketing | Elvic Rank",
    metaDescription: "Build a stronger digital presence with strategic content, social media marketing, AI-assisted content creation, and consistent brand communication.",
    heroIntro: "Your digital presence should tell people what you do, why they should trust you, and why they should choose you. Elvic Rank helps businesses create strategic content and maintain a consistent presence across digital channels.",
    whoItsFor: "Businesses struggling to stay consistent online, brands building awareness, service businesses, businesses launching new offers, companies with limited internal content resources, and businesses looking to strengthen their online presence.",
    problemsSolved: [
      "Inconsistent posting",
      "Weak content strategy",
      "Content that doesn't generate engagement",
      "Unclear brand messaging",
      "Lack of ideas",
      "Poor social presence",
      "Content created without a clear business objective"
    ],
    whatWeDo: "Posting simply for the sake of posting isn't a strategy. Good content should have a purpose. It can educate, build trust, demonstrate expertise, create awareness, support SEO, generate conversations, and move potential customers closer to a decision.",
    process: [
      { title: "Understand Your Brand", description: "Aligning on voice, tone, and brand identity." },
      { title: "Research Your Audience", description: "Identifying where your customers are and what they care about." },
      { title: "Build the Strategy", description: "Defining pillars, formats, and channels." },
      { title: "Create the Content", description: "Writing, designing, and structuring content assets." },
      { title: "Publish & Distribute", description: "Sharing content across the right platforms." },
      { title: "Measure & Improve", description: "Analyzing engagement to refine future content." }
    ],
    benefits: [
      { title: "Content Strategy", description: "Build a content direction around your audience, services, goals, and brand." },
      { title: "AI-Assisted Content Creation", description: "Use AI responsibly to improve content production while maintaining human oversight and brand quality." },
      { title: "Social Media Strategy", description: "Determine what platforms, content formats, and messages make sense for your business." },
      { title: "Content Calendars", description: "Organize publishing so your digital presence remains consistent." },
      { title: "Educational Content", description: "Create useful content that demonstrates expertise and answers customer questions." },
      { title: "Promotional Content", description: "Develop content around offers, services, products, and campaigns." },
      { title: "Brand Content", description: "Create messaging that makes your business recognizable and consistent." }
    ],
    faqs: [
      { question: "Do you manage social media accounts?", answer: "Depending on the project, we can support content strategy, creation, and social media management." },
      { question: "Do you use AI to create content?", answer: "AI can be part of our workflow, but content should still be reviewed and aligned with the brand, audience, and purpose." },
      { question: "Which social platforms do you work with?", answer: "The appropriate platforms depend on where the business's customers actually spend their time." }
    ],
    relatedSlugs: ["seo", "geo", "meta-ads"],
    layoutStyle: "b",
    ctaHeading: "Give your business something worth paying attention to."
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
