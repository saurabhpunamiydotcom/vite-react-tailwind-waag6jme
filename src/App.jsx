import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Globe, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  ChevronDown,
  Award, 
  Briefcase, 
  Mic,
  Leaf,
  TrendingUp,
  Building2,
  ExternalLink,
  MapPin,
  FileText,
  Users,
  Zap,
  Camera,
  PenTool,
  Sparkles,
  X,
  Loader2,
  Calendar,
  Clock,
  Tag,
  MessageSquare
} from 'lucide-react';

// --- SYSTEM FOR UPDATING BLOGS ---
const BLOG_DATA = [
  {
    id: 1,
    title: "The Future of Carbon Markets: Beyond COP28",
    date: "October 14, 2024",
    readTime: "5 min read",
    excerpt: "Analyzing the trajectory of voluntary carbon markets and the shift towards high-integrity credits post-Dubai consensus.",
    tags: ["Carbon Markets", "COP28", "Policy"],
    content: [
      "The conclusion of COP28 marked a pivotal moment for global carbon markets. While the consensus on transitioning away from fossil fuels grabbed headlines, the subtle shifts in Article 6 negotiations have set the stage for a new era of integrity.",
      "For voluntary carbon markets (VCM), the message is clear: quality over quantity. The era of loose verification is ending, replaced by rigorous standards like the Core Carbon Principles (CCPs)."
    ]
  }
];

// --- RESUME CONTEXT FOR AI ASSISTANT ---
const SAURABH_CONTEXT = `
  Name: Saurabh Jain Punamiya
  Role: Global Environmental Policy Strategist (9+ years exp)
  Location: Berlin, Germany
  Email: saurabhpunamiya.sp@gmail.com
  
  Key Highlights:
  - Senior Policy Advisor at Voluntary Carbon Markets Initiative (VCMI).
  - Drafted Shared Policy Principles for Coalition to Grow Carbon Markets (12+ govts).
  - Negotiated $1.2 Billion financing for 20,000 e-buses in India.
  - Co-authored Mumbai Climate Action Plan (South Asia's first 2050 net-zero plan).
  - Managed relationships with officials in 6 major EU countries, USA, Japan, Singapore & UK.
  
  Experience:
  - VCMI (Berlin): Policy & Partnerships Manager / Senior Advisor. Led EU engagement, briefed MEPs on CSRD/Green Claims.
  - Complex Earth (Berlin): Investor & Advisor.
  - UN Climate Change Envoy (COP27/28): Engagements Manager. Integrity checks for Race to Zero.
  - Minister for Climate Change, Maharashtra: Advisor. Led climate budgeting, EV policy.
  - Invest India: Investment Associate ($10B energy proposals).
  - Office of MP Rammohan Naidu: Legislative Assistant.
  
  Education:
  - Hertie School, Berlin: Master of Public Policy (Energy Economics).
  - ACCA, London.
  - H.R. College & R.A. Podar College, Mumbai.
`;

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'impact', label: 'Impact' },
    { id: 'media', label: 'Media' },
    { id: 'ask-ai', label: 'Ask AI' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333; 
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555; 
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            Saurabh Jain Punamiya
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              Global Environmental Policy Strategist
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              Policy, Public Finance & Market Infrastructure Expert
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
            Bridging governments, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-slate-400">
              multilaterals & corporates.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
            Expert in mapping regulatory landscapes and transforming complex policy trends into strategic business intelligence. 9+ years shaping globally recognized sustainability standards.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 items-center">
            <SocialLink icon={<Linkedin size={20} />} label="LinkedIn" href="https://www.linkedin.com/in/saurabh-jain-punamiya-26a07aa3/" />
            <SocialLink icon={<Mail size={20} />} label="saurabhpunamiya.sp@gmail.com" href="mailto:saurabhpunamiya.sp@gmail.com" />
            <div className="ml-auto flex items-center gap-2 text-sm text-slate-500 border-l border-white/10 pl-4 h-10">
              <MapPin size={14} className="text-green-500" />
              <span>Based in Berlin, Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Impact Ticker */}
      <section id="impact" className="py-20 border-y border-white/5 bg-[#050505] overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 mb-12">
           <SectionHeader title="Impact Headlines" subtitle="Strategic Milestones" />
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-max animate-scroll">
            {/* First Set */}
            <div className="flex gap-6 px-3">
              <ImpactTickerCard icon={<Globe className="text-blue-400" />} title="Global Policy Consensus" stat="12+ Nations" desc="Drafted shared policy principles for the Coalition to Grow Carbon Markets, endorsed by over 12 national governments." />
              <ImpactTickerCard icon={<TrendingUp className="text-green-400" />} title="Green Transport Finance" stat="$1.2 Billion" desc="Negotiated financing for 20,000 electric buses across India to boost public transport capacity." />
              <ImpactTickerCard icon={<Zap className="text-yellow-400" />} title="EV Policy in Maharashtra" stat="Statewide" desc="Instituted the Electric Vehicle Policy for the state of Maharashtra, India, incentivizing mass adoption of passenger EVs." />
              <ImpactTickerCard icon={<Building2 className="text-purple-400" />} title="Urban Decarbonization" stat="200 Cities" desc="Catalyzed commitments from 200 cities and sub-national governments at COP27 & COP28." />
              <ImpactTickerCard icon={<Briefcase className="text-amber-400" />} title="Energy Investment Strategy" stat="$10 Billion" desc="Managed due diligence for major renewable energy and oil & gas investment proposals in India." />
              <ImpactTickerCard icon={<Users className="text-cyan-400" />} title="Diplomatic Relations" stat="6 Major Nations" desc="Managed key relationships with officials in EU, USA, Japan, Singapore & UK." />
              <ImpactTickerCard icon={<Leaf className="text-emerald-400" />} title="Net-Zero Planning" stat="South Asia's First" desc="Co-authored the Mumbai Climate Action Plan, South Asia's first 2050 Net-Zero Roadmap." />
            </div>
            {/* Duplicate Set */}
            <div className="flex gap-6 px-3">
              <ImpactTickerCard icon={<Globe className="text-blue-400" />} title="Global Policy Consensus" stat="12+ Nations" desc="Drafted shared policy principles for the Coalition to Grow Carbon Markets, endorsed by over 12 national governments." />
              <ImpactTickerCard icon={<TrendingUp className="text-green-400" />} title="Green Transport Finance" stat="$1.2 Billion" desc="Negotiated financing for 20,000 electric buses across India to boost public transport capacity." />
              <ImpactTickerCard icon={<Zap className="text-yellow-400" />} title="EV Policy in Maharashtra" stat="Statewide" desc="Instituted the Electric Vehicle Policy for the state of Maharashtra, India, incentivizing mass adoption of passenger EVs." />
              <ImpactTickerCard icon={<Building2 className="text-purple-400" />} title="Urban Decarbonization" stat="200 Cities" desc="Catalyzed commitments from 200 cities and sub-national governments at COP27 & COP28." />
              <ImpactTickerCard icon={<Briefcase className="text-amber-400" />} title="Energy Investment Strategy" stat="$10 Billion" desc="Managed due diligence for major renewable energy and oil & gas investment proposals in India." />
              <ImpactTickerCard icon={<Users className="text-cyan-400" />} title="Diplomatic Relations" stat="6 Major Nations" desc="Managed key relationships with officials in EU, USA, Japan, Singapore & UK." />
              <ImpactTickerCard icon={<Leaf className="text-emerald-400" />} title="Net-Zero Planning" stat="South Asia's First" desc="Co-authored the Mumbai Climate Action Plan, South Asia's first 2050 Net-Zero Roadmap." />
            </div>
          </div>
        </div>
      </section>

      {/* Media & Publications */}
      <section id="media" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Thought Leadership" subtitle="In the Media" />
            <div className="space-y-4 mb-12">
              <MediaCard source="South China Morning Post" title="On Pollution: Chinese lesson for India" url="https://www.scmp.com/news/china/science/article/3258747/chinese-lesson-india-how-can-air-pollution-make-or-break-your-economy" />
              <MediaCard source="Bloomberg" title="Mumbai Climate Action Plan" url="https://www.bloomberg.com/news/articles/2022-03-13/mumbai-becomes-first-south-asian-city-to-detail-net-zero-roadmap#xj4y7vzkg" />
              <MediaCard source="Climate Group" title="Financing Climate Action: Priorities & Reflections" url="https://www.theclimategroup.org/our-work/news/financing-climate-action-india-priorities-and-reflections-cop26-indian-states" />
              <MediaCard source="Reuters Context" title="Climate Initiatives: Flood-prone Mumbai digs deep" url="https://www.context.news/climate-risks/long-read/flood-prone-mumbai-digs-deep-to-turn-climate-change-tide" />
            </div>
            <SectionHeader title="Publications" subtitle="Author / Contributor" />
            <div className="space-y-4">
               <PublicationCard title="Mumbai Climate Action Plan 2022" publisher="GHHIN" url="https://ghhin.org/resources/mumbai-climate-action-plan-2022/" />
               <PublicationCard title="Professional Service Providers Working Paper" publisher="Oxford / UN Climate Change" url="https://www.climatechampions.net/media/xhyoxmhp/professional-service-providers-draft-working-paper-for-upload.pdf" />
               <PublicationCard title="VCMI Statement on EU Green Claims Directive" publisher="VCMI" url="https://vcmintegrity.org/wp-content/uploads/2025/06/VCMI-Statement-on-EU-Green-Claims-Directive_3.6.pdf" />
            </div>
          </div>
          <div>
            <SectionHeader title="Advisory Boards" subtitle="Strategic Guidance" />
            <div className="mt-8 space-y-6">
              <AdvisoryCard title="Rihla Initiative for Green Economic Growth" role="Advisory Council Member (Mar 2025 - Present)" location="Doha" url="https://www.bourseandbazaar.org/rihla-initiative" />
              <AdvisoryCard title="Climate Liabilities and Assets Initiative" role="Advisory Board Member (Sep 2025 - Present)" location="New York" url="https://www.environmentalledger.org/team" />
            </div>
            <div className="mt-16">
               <SectionHeader title="Regulatory Frameworks" subtitle="Expertise" />
               <div className="flex flex-wrap gap-2 mt-4">
               {['CSRD', 'Green Claims Directive', 'CBAM', 'GHG Protocol', 'SBTI', 'ISSB', 'VCMI Standards', 'IC-VCM'].map((tag) => (
                 <span key={tag} className="px-3 py-1.5 rounded-full bg-slate-900 text-slate-300 text-sm border border-slate-800 hover:border-blue-500/50 transition-colors cursor-default">{tag}</span>
               ))}
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT SECTION */}
      <AIAssistantSection />

      {/* Photo Gallery */}
      <section id="gallery" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Global Engagement" subtitle="In Action" />
          <PhotoGallery />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Professional Journey" subtitle="9+ Years of Excellence" />
          <div className="space-y-6 mt-12 relative">
            <div className="absolute left-0 md:left-[8.5rem] top-4 bottom-0 w-px bg-slate-800 hidden md:block"></div>
            <ExperienceItem role="Senior Policy Advisor" company="Voluntary Carbon Markets Initiative" location="Berlin" period="May 2024 - Present" description={["Led policy engagement with EU institutions, briefing MEPs and the EU- Commission to align CSRD and GCD with VCMI standards.", "Orchestrated cross-functional project timelines, mapped risk management workflows and led multi-country negotiations, bilateral engagements for the Coalition to Grow Carbon Markets (CGCM) across 20+ nations.", "Managed and held key relationships with government officials in 6 major EU countries, Switzerland, USA, Japan, Singapore and UK, as well as with business coalitions and NGOs, to advance coherent environmental and climate policy signals.", "Mapped and analyzed evolving climate and environmental regulation, drafted position papers and made VCMI representations to FASB, ISSB, SBTI, US, UK and Canadian government, communicating complex technical issues in accessible language for non-specialist stakeholders.", "Represented VCMI as a thought leader in corporate engagement events held across Europe, Americas and APAC.", "Conceived and advanced grant proposals on accounting treatment and balance-sheet recognition of carbon credits."]} isOpenDefault={true} expandable={true} />
            <ExperienceItem role="Investor and Advisor" company="Complex Earth" location="Berlin" period="Nov 2024 - Present" description={["Designed go-to-market strategy and facilitated 15+ partnerships, directly advising the founder.", "Identified bottlenecks in product discovery phase, accelerating MVP launch by 8 weeks through agile process redesign."]} expandable={true} />
            <ExperienceItem role="Engagements Manager" company="UN Climate Change Envoy COP27 & COP28" location="Berlin" period="Apr 2022 - May 2024" description={["Managed evaluation of leading global climate alliances' net-zero guidance against the Race to Zero campaign criteria, effectively performing \"integrity and compliance checks\" on environmental commitments across finance, industry and city networks.", "Managed Expert Peer Review Group of 20+ global climate experts, reconciling scientific, policy and market perspectives to define the \"next frontier\" of credible decarbonisation commitments for non-state actors.", "Conceptualized and steered two Working Groups, 1.5 aligned serviced emissions and role of credits, offsets in net-zero, balancing environmental integrity, regulatory expectations and private-sector feasibility.", "Catalyzed COP27 and COP28's platform to step-up decarbonization commitments from 2 sub-national governments, 200 cities, aligning global campaigns with UNFCCC processes and emerging national climate and environmental policy."]} expandable={true} />
            <ExperienceItem role="Advisor" company="Minister for Climate Change, Maharashtra" location="Mumbai" period="Feb 2020 - July 2022" description={["Led Mumbai city's climate budgeting exercise as a public finance expert in a pilot program led by C40 and Oslo city government.", "Co-authored the Mumbai Climate Action Plan with World Resources Institute, South Asia's first 2050 net-zero plan.", "Negotiated on infrastructure financing worth USD 1.2 billion to augment 42 cities' procurement capacity to 20,000 e-buses.", "Instituted the state electric vehicle policy with ministry of transport for incentivizing uptake of passenger EVS.", "Strategized narratives drafted speech inputs and articles for the minister's policy stances on decarbonization.", "Created a state-level assistance program on decarbonization and facilitated grant support of CIFF and Bloomberg Philanthropies."]} expandable={true} />
            <ExperienceItem role="Investment Associate" company="Invest India, Govt. of India" location="New Delhi" period="Nov 2019 - Feb 2020" expandable={false} />
            <ExperienceItem role="Legislative Assistant to MP Rammohan Naidu" company="Parliament of India" location="New Delhi" period="Jun 2018 - May 2019" expandable={false} />
            <ExperienceItem role="Apprenticeship (Audit & Valuation)" company="Institute of Chartered Accountants of India" location="India" period="Sep 2015 - Sep 2017" expandable={false} />
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Education & Skills" subtitle="Academic Background" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2 space-y-4">
              <EducationCard school="Hertie School" degree="Master of Public Policy (Energy Economics & Emissions Pricing)" year="2021-2023" location="Berlin, Germany" honors="2-year KAS Stipendium Scholarship" />
              <EducationCard school="ACCA" degree="Strategic Professional (Performance Management)" year="2014-2019" location="London, United Kingdom" />
              <EducationCard school="H.R. College of Commerce & Economics" degree="Master of Commerce (Financial Accounting & Business Economics)" year="2016-2018" location="Mumbai, India" />
              <EducationCard school="R.A. Podar College of Commerce & Economics" degree="Bachelor of Commerce (Financial Accounting & Auditing)" year="2013-2016" location="Mumbai, India" />
            </div>
            <div className="bg-slate-900/30 rounded-3xl p-8 border border-white/5 backdrop-blur-sm h-fit sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2"><Award size={18} className="text-blue-400" /> Competencies</h3>
              <div className="space-y-6">
                <SkillGroup title="Languages" skills={['English (Native/C2)', 'German (B2.2)', 'Hindi', 'Marwari', 'Marathi']} />
                <SkillGroup title="Policy & Strategy" skills={['Regulatory Impact Assessment', 'EU Advocacy', 'Consultation Responses', 'Multi-stakeholder Facilitation', 'Government Relations']} />
                <SkillGroup title="Technical Tools" skills={['Power BI', 'SAP', 'Capital IQ', 'Factiva', 'Jira', 'Monday.com', 'Asana', 'HubSpot', 'Advanced Excel']} />
                <SkillGroup title="AI & Emerging Tech" skills={['NotebookLM', 'Gemini', 'Claude', 'ChatGPT', 'Prompt Engineering']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 text-center bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Let's shape the future of climate policy.</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Available for advisory roles, speaking engagements, and strategic partnerships.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <a href="mailto:saurabhpunamiya.sp@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105"><Mail size={18} /> saurabhpunamiya.sp@gmail.com</a>
          </div>
          <div className="mt-16 text-slate-600 text-sm">© 2025 Saurabh Jain Punamiya. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

// --- AI ASSISTANT SECTION ---
const AIAssistantSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="ask-ai" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <Sparkles className="text-blue-400" />
            Ask My Digital Twin
          </h2>
          <p className="text-slate-400 max-w-xl">
            Want to know more about my work in Carbon Markets, Climate Finance, or Policy Strategy? 
            Ask my AI assistant anything about my professional background.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex-shrink-0 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <MessageSquare size={20} />
          Start Chat
        </button>
      </div>

      {isModalOpen && (
        <AIAssistantModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
};

const AIAssistantModal = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // For local dev/Vercel deployment, you'd use: import.meta.env.VITE_GEMINI_API_KEY
  // For this preview environment, ensure the key is set correctly or injected.
  const apiKey = "AIzaSyAoD9fLVbqJ9B9H9VautvHPteV_8VlGJC4"; 

  const handleAsk = async () => {
    if (!question) return;
    setIsTyping(true);
    setAnswer('');

    const prompt = `
      You are an AI assistant for Saurabh Jain Punamiya. Use the following context about him to answer the user's question.
      
      CONTEXT:
      ${SAURABH_CONTEXT}

      USER QUESTION: "${question}"

      INSTRUCTIONS:
      - Answer in the third person (e.g., "Saurabh has...").
      - Be professional, concise, and friendly.
      - Only answer based on the provided context. If you don't know, say "I don't have that information."
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer(text || "Sorry, I couldn't generate an answer at the moment.");
    } catch (error) {
      setAnswer("Error connecting to AI service.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Sparkles className="text-blue-500" size={20} />
            Saurabh's AI Assistant
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors"><X size={24} /></button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {/* Answer Area */}
          {answer && (
            <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-slate-200 leading-relaxed animate-fade-in-up">
              <div className="flex gap-2 mb-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
                <Sparkles size={12} /> AI Response
              </div>
              {answer}
            </div>
          )}

          {/* Input Area */}
          <div className="space-y-4">
            <label className="block text-sm text-slate-400">Ask me about Saurabh's experience...</label>
            <div className="relative">
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What is his experience with carbon markets?"
                className="w-full h-24 bg-slate-900/50 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
              <button 
                onClick={handleAsk}
                disabled={isTyping || !question}
                className="absolute bottom-3 right-3 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 transition-all"
              >
                {isTyping ? <Loader2 className="animate-spin" size={20} /> : <ArrowRight size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Components ---
const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryImages = [
    { url: "/SAURABH1.jpg" },
    { url: "/SAURABH2.jpg" },
    { url: "/SAURABH3.jpg" },
    { url: "/SAURABH4.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000); 
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 group">
      {galleryImages.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <img src={image.url} alt={image.caption} className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transform" style={{ transition: 'transform 6s ease-out, opacity 0.5s' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-blue-500/10">Gallery</span>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{image.caption}</h3>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-3 z-20">
        {galleryImages.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/60'}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">{title}</h2>
  </div>
);

const SocialLink = ({ icon, label, href }) => (
  <a href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel={href.startsWith('http') ? "noopener noreferrer" : ""} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all text-sm group">
    <span className="group-hover:text-blue-400 transition-colors">{icon}</span>
    {label}
  </a>
);

const ImpactTickerCard = ({ icon, title, stat, desc }) => (
  <div className="flex-shrink-0 w-80 p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-white/5 text-white">{icon}</div>
      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider">{title}</div>
        <div className="text-xl font-bold text-white">{stat}</div>
      </div>
    </div>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const ExperienceItem = ({ role, company, location, period, description = [], isOpenDefault = false, expandable = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  if (!expandable) {
    return (
      <div className="relative pl-0 md:pl-12 pb-6 md:ml-[8.5rem] group opacity-70 hover:opacity-100 transition-opacity">
        <div className="hidden md:flex absolute -left-[5px] top-6 w-3 h-3 rounded-full border-2 bg-black border-slate-700 z-10"></div>
        <div className="md:absolute md:-left-[9.5rem] md:top-6 md:text-right md:w-32 mb-1 md:mb-0">
          <span className="text-sm font-semibold text-slate-500 block">{period.split(' - ')[0]}</span>
          <span className="text-xs text-slate-700">{period.split(' - ')[1]}</span>
        </div>
        <div className="bg-transparent p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div>
              <h3 className="text-lg font-bold text-white">{role}</h3>
              <div className="text-slate-500 text-sm font-medium flex items-center gap-2 mt-1">{company} <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {location}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative pl-0 md:pl-12 pb-12 md:ml-[8.5rem] group">
      <div className={`hidden md:flex absolute -left-[5px] top-6 w-3 h-3 rounded-full border-2 ${isOpen ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-black border-slate-600 group-hover:border-blue-400'} z-10 transition-all`}></div>
      <div className="md:absolute md:-left-[9.5rem] md:top-6 md:text-right md:w-32 mb-2 md:mb-0">
        <span className="text-sm font-semibold text-slate-400 block">{period.split(' - ')[0]}</span>
        <span className="text-xs text-slate-600">{period.split(' - ')[1]}</span>
      </div>
      <div className={`bg-slate-900/20 rounded-2xl border border-white/5 hover:bg-slate-900/40 hover:border-white/10 transition-all cursor-pointer overflow-hidden ${isOpen ? 'ring-1 ring-blue-500/30' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{role}</h3>
              <div className="text-slate-400 font-medium flex items-center gap-2 mt-1">{company} <span className="w-1 h-1 bg-slate-600 rounded-full"></span> {location}</div>
            </div>
            <div className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><ChevronDown size={20} /></div>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
             <div className="overflow-hidden">
                <ul className="space-y-3 border-t border-white/10 pt-4">
                  {description.map((item, idx) => (
                    <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 opacity-80"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
          {!isOpen && <p className="text-xs text-slate-500 mt-2">Click to view {description.length} key achievements...</p>}
        </div>
      </div>
    </div>
  );
};

const AdvisoryCard = ({ title, role, location, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">{title} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
      <span className="text-xs text-slate-500 font-mono">{location}</span>
    </div>
    <p className="text-slate-400">{role}</p>
  </a>
);

const MediaCard = ({ source, title, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-colors"><Mic size={18} /></div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{source}</p>
        <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors flex items-center gap-2">{title} <ExternalLink size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" /></h4>
      </div>
    </div>
    <ChevronRight size={16} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
  </a>
);

const PublicationCard = ({ title, publisher, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-dashed border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors"><FileText size={18} /></div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{publisher}</p>
        <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">{title}</h4>
      </div>
    </div>
    <ExternalLink size={16} className="text-slate-600 group-hover:text-blue-400 transition-all" />
  </a>
);

const EducationCard = ({ school, degree, year, location, honors }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold text-white">{school}</h3>
        <p className="text-blue-400 text-sm">{degree}</p>
      </div>
      <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 text-right min-w-fit ml-2">{year}</span>
    </div>
    <p className="text-slate-500 text-sm mt-2">{location}</p>
    {honors && (
      <div className="mt-3 inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs">{honors}</div>
    )}
  </div>
);

const SkillGroup = ({ title, skills }) => (
  <div>
    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors cursor-default">{skill}</span>
      ))}
    </div>
  </div>
);

export default Portfolio;