import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, BarChart3, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                <span className="text-accent">Momentum</span> Weekly
              </h1>
              <p className="text-muted-foreground">by Acadia.im</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Issue #1</p>
              <p className="text-sm text-muted-foreground">November 18-23, 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Weekly Pulse on Institutional FinTech Innovation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Momentum Weekly, your essential briefing on the B2B fintech platforms transforming 
            institutional investing. We track the AI research tools, risk analytics platforms, alternative 
            data providers, and workflow automation solutions that hedge funds, asset managers, and investment 
            banks rely on to stay ahead. From AlphaSense to Addepar, from alternative data to AI-powered due 
            diligence—we cover the innovations that power your competitive edge.
          </p>
        </div>
      </section>

      {/* AI Research Platforms Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">AI Research & Intelligence Platforms</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* AlphaSense */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">$500M ARR</Badge>
                <span className="text-xs text-muted-foreground">Nov 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.alpha-sense.com/resources/product-articles/alphasummit-2025-product-announcements/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  AlphaSense Crosses $500M ARR Milestone
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Market intelligence platform unveils Financial Data and AI Workflow Agents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src="/dashboard.png" 
                alt="AI research platform" 
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="text-sm text-card-foreground leading-relaxed">
                At its inaugural AlphaSummit conference, AlphaSense announced crossing the $500M ARR threshold 
                and unveiled groundbreaking innovations. The new **Financial Data** suite unifies quantitative 
                and qualitative intelligence, enabling natural language queries that return ranked deal lists 
                with values, multiples, and citations. **Workflow Agents** automate end-to-end research tasks 
                like company primers and meeting prep, while **AI-Led Expert Calls** scale expert insights 
                through an AI Interviewer adding hundreds of transcripts weekly to the 220,000+ Tegus library.
              </p>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-accent">
                <p className="text-sm italic text-card-foreground">
                  "In a world where AI is moving at a million miles per hour, what makes AlphaSense unique? 
                  It's the combination of the market's broadest content universe, purpose-built AI, and 
                  workflows designed for high-stakes decision making."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Jack Kokko, CEO of AlphaSense</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Market Intelligence</Badge>
                <Badge variant="outline" className="text-xs">AI Agents</Badge>
                <Badge variant="outline" className="text-xs">Expert Networks</Badge>
                <Badge variant="outline" className="text-xs">Financial Data</Badge>
              </div>
              <a href="https://www.alpha-sense.com/resources/product-articles/alphasummit-2025-product-announcements/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* Finster AI */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">$15M Series A</Badge>
                <span className="text-xs text-muted-foreground">Oct 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://pulse2.com/finster-ai-15-million-closed-to-transform-future-of-financial-intelligence/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Finster AI Raises $15M for Investment Banking Workflows
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                DeepMind-founded platform partners with Preqin for private markets intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Founded by former Google DeepMind AI researcher Sid Jayakumar, Finster AI secured $15M from 
                FinTech Collective and Peak XV to transform investment banking workflows. The platform handles 
                confidential data and MNPI while delivering real-time analytics for investment memo drafting, 
                research, and client deliverables. Finster appointed Chris Andrews (former Morgan Stanley Global 
                COO of Research) as COO and Veeral Manek (Revolut) as Product Lead, signaling aggressive expansion 
                into New York and London.
              </p>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-primary">
                <p className="text-sm font-semibold text-card-foreground mb-2">🤝 Strategic Partnership</p>
                <p className="text-sm text-card-foreground">
                  Finster partnered with **Preqin** (BlackRock) to integrate the industry's most comprehensive 
                  private markets intelligence datasets directly into the platform, expanding alternative assets 
                  coverage for institutional clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Investment Banking</Badge>
                <Badge variant="outline" className="text-xs">Private Markets</Badge>
                <Badge variant="outline" className="text-xs">AI-Native</Badge>
                <Badge variant="outline" className="text-xs">MNPI Compliant</Badge>
              </div>
              <a href="https://pulse2.com/finster-ai-15-million-closed-to-transform-future-of-financial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* Hebbia */}
          <Card className="border-l-4 border-l-chart-2 bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-chart-2 text-accent-foreground">$700M Valuation</Badge>
                <span className="text-xs text-muted-foreground">Nov 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.netnewsledger.com/2025/11/07/hebbia-expands-to-san-francisco-appoints-aabhas-sharma-as-chief-technology-officer/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Hebbia Expands to San Francisco, Appoints New CTO
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                AI platform serving BlackRock, KKR, and Carlyle scales document intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Hebbia opened a San Francisco office and appointed Aabhas Sharma (former CTO at Found, engineering 
                director at Uber) as CTO to scale its AI-powered document intelligence platform. Serving over one-third 
                of the largest asset managers by AUM—including BlackRock, KKR, Carlyle, and Centerview Partners—Hebbia 
                achieves 92% accuracy on complex financial document benchmarks. The platform saves investment banks 
                30-40 hours per deal and private equity firms 20-30 hours on due diligence.
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">Recent Acquisitions & Partnerships:</p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• <strong>FlashDocs</strong> (June 2025): Automated slide generation, 10K+ slides daily</li>
                  <li>• <strong>Third Bridge</strong>: Expert network interviews integrated</li>
                  <li>• <strong>FactSet</strong>: Market data and financials integration</li>
                  <li>• <strong>Microsoft Azure AI</strong>: Enterprise-grade security infrastructure</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Document AI</Badge>
                <Badge variant="outline" className="text-xs">Due Diligence</Badge>
                <Badge variant="outline" className="text-xs">$130M Series B</Badge>
                <Badge variant="outline" className="text-xs">1,000+ Use Cases</Badge>
              </div>
              <a href="https://www.netnewsledger.com/2025/11/07/hebbia-expands-to-san-francisco-appoints-aabhas-sharma-as-chief-technology-officer/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wealth & Risk Analytics Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">Wealth & Risk Analytics Platforms</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Addepar */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">$8T AUM</Badge>
                <span className="text-xs text-muted-foreground">Nov 18, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.prnewswire.com/news-releases/addepar-appoints-peter-obrien-as-chief-revenue-officer-and-janeen-france-as-the-companys-first-chief-client-officer-302618069.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Addepar Appoints First European C-Suite Executive
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Wealth platform aggregating $8 trillion expands global leadership
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src="/b2b_fintech.jpeg" 
                alt="Wealth management platform" 
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="text-sm text-card-foreground leading-relaxed">
                Addepar appointed Peter O'Brien as Chief Revenue Officer—its first C-suite executive based in 
                Europe—and Janeen France as inaugural Chief Client Officer. The wealth management platform 
                aggregates portfolio, market, and client data for over $8 trillion in assets across 55+ countries, 
                serving 1,300+ firms. Following a $230M funding round at $3.25B valuation in May 2025, Addepar 
                opened new offices in Switzerland and the UAE, integrating with 100+ software and data partners.
              </p>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-accent">
                <p className="text-sm italic text-card-foreground">
                  "Peter and Janeen have each played a critical role in building Addepar into the industry-leading 
                  platform it is today. They embody the leadership and vision driving our next phase of growth."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Eric Poirier, CEO of Addepar</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Wealth Management</Badge>
                <Badge variant="outline" className="text-xs">Portfolio Aggregation</Badge>
                <Badge variant="outline" className="text-xs">55+ Countries</Badge>
                <Badge variant="outline" className="text-xs">$3.25B Valuation</Badge>
              </div>
              <a href="https://www.prnewswire.com/news-releases/addepar-appoints-peter-obrien-as-chief-revenue-officer-and-janeen-france-as-the-companys-first-chief-client-officer-302618069.html" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* MSCI */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">Risk Analytics</Badge>
                <span className="text-xs text-muted-foreground">Nov 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://seekingalpha.com/article/4845283-msci-inc-msci-presents-at-j-p-morgan-2025-ultimate-services-investor-conference-transcript" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  MSCI Launches Private Credit Risk Model
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Analytics segment expands with institutional-quality risk metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                MSCI unveiled its private credit risk model, expanding the Analytics segment with institutional-quality 
                risk metrics for the rapidly growing private credit market. The launch demonstrates innovation across 
                MSCI's research-based data, analytics, and indexes that set standards for global investors. The Barra 
                global equity factor risk model (GEMLT) continues to evolve, while the ESG Ratings 2026 Model Update 
                progresses with enhanced risk management indicators.
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">Platform Capabilities:</p>
                <p className="text-sm text-card-foreground">
                  MSCI's risk analytics help investors understand portfolio volatility, construct resilient portfolios, 
                  and navigate market stress scenarios. The private credit risk model addresses growing institutional 
                  demand for transparency in alternative credit strategies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Risk Modeling</Badge>
                <Badge variant="outline" className="text-xs">Private Credit</Badge>
                <Badge variant="outline" className="text-xs">Barra GEMLT</Badge>
                <Badge variant="outline" className="text-xs">ESG Analytics</Badge>
              </div>
              <a href="https://seekingalpha.com/article/4845283-msci-inc-msci-presents-at-j-p-morgan-2025-ultimate-services-investor-conference-transcript" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Data & Market Trends Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <Database className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Alternative Data & Market Intelligence</h2>
        </div>

        <div className="grid gap-6">
          {/* Neudata Survey */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">Industry Survey</Badge>
                <span className="text-xs text-muted-foreground">Nov 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.neudata.co/insights" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Neudata: Alternative Data Budgets Rising, AI Adoption Doubles
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                2025 industry survey reveals accelerating investment in alternative data and AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Neudata's 2025 industry survey shows alternative data budgets rising across investment firms, 
                with market data stability maintained and AI adoption doubling worldwide. Index data, tracking 
                datasets, and rebalancing forecasts are increasingly shaping investment strategies, improving 
                portfolio construction and performance benchmarking. The findings underscore institutional 
                investors' commitment to data-driven decision-making and advanced analytics.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-primary">↑</p>
                  <p className="text-xs text-muted-foreground mt-1">Alt Data Budgets</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-accent">2x</p>
                  <p className="text-xs text-muted-foreground mt-1">AI Adoption Rate</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-md text-center">
                  <p className="text-2xl font-bold text-chart-2">✓</p>
                  <p className="text-xs text-muted-foreground mt-1">Market Data Stable</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Alternative Data</Badge>
                <Badge variant="outline" className="text-xs">AI Adoption</Badge>
                <Badge variant="outline" className="text-xs">Index Data</Badge>
                <Badge variant="outline" className="text-xs">Portfolio Construction</Badge>
              </div>
              <a href="https://www.neudata.co/insights" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* JPMorgan Data Aggregation */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">Open Banking</Badge>
                <span className="text-xs text-muted-foreground">Nov 14-15, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.fintechweekly.com/magazine/articles/jpmorgan-paid-fintech-data-access-agreements-open-banking" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  JPMorgan Secures Paid Data Access from 95% of Aggregators
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Major shift in U.S. open banking as data aggregators agree to commercial terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                JPMorgan reached paid data-access agreements with 95% of fintech aggregators, including Yodlee, 
                Plaid, Fiserv, and Finicity, reshaping the U.S. open banking landscape. Data aggregators, which 
                serve as intermediaries linking banks with fintech firms, previously accessed customer account 
                data without payment. The regulatory shift drives new commercial terms, setting a precedent for 
                bank-fintech data sharing as national data-sharing rules undergo review.
              </p>
              <div className="bg-destructive/10 p-4 rounded-md border-l-2 border-destructive">
                <p className="text-sm font-semibold text-card-foreground mb-1">🔄 Industry Impact</p>
                <p className="text-sm text-card-foreground">
                  This landmark agreement establishes commercial frameworks for data access, potentially influencing 
                  how other major banks negotiate with aggregators and reshaping the economics of open banking in 
                  the United States.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Data Aggregation</Badge>
                <Badge variant="outline" className="text-xs">Open Banking</Badge>
                <Badge variant="outline" className="text-xs">Yodlee</Badge>
                <Badge variant="outline" className="text-xs">Plaid</Badge>
              </div>
              <a href="https://www.fintechweekly.com/magazine/articles/jpmorgan-paid-fintech-data-access-agreements-open-banking" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Context Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">Market Context</h2>
        </div>

        <Card className="border-l-4 border-l-accent bg-card">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-card-foreground mb-4">Five Key Themes Shaping Institutional FinTech</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">•</span> AI-Native Platforms
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Purpose-built AI platforms (AlphaSense, Finster, Hebbia) are replacing generic tools with 
                  finance-specific workflows that handle MNPI, deliver verifiable outputs, and compress weeks 
                  of analysis into minutes.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">•</span> Workflow Automation
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  End-to-end automation is replacing manual processes across due diligence, research, and 
                  client deliverables. Investment banks save 30-40 hours per deal; PE firms save 20-30 hours 
                  on screening and diligence.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-chart-2">•</span> Data Integration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Unified platforms combining structured data (FactSet, Preqin) with unstructured intelligence 
                  (expert calls, documents) eliminate toggling between systems and deliver contextualized insights.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">•</span> Alternative Data Growth
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Budgets rising across hedge funds and asset managers as AI adoption doubles. Index data, 
                  tracking datasets, and rebalancing forecasts increasingly shape portfolio construction and 
                  performance benchmarking.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">•</span> Risk Analytics Innovation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Private credit risk models, portfolio risk management advances, and ESG analytics expansion 
                  address institutional demand for transparency in alternative strategies and market stress 
                  scenario planning.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-card-foreground">By the Numbers:</strong> Alternative data budgets ↑ • 
                AI adoption rate: 2x year-over-year • $8T+ assets on unified platforms • 30-40 hours saved per 
                deal through AI automation • 92% accuracy on complex financial document analysis
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                <span className="text-accent">Momentum</span> Weekly
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your weekly briefing on B2B fintech platforms serving institutional investors. Every Monday morning, 
                we deliver insights on AI research tools, risk analytics, alternative data, and workflow automation 
                that power hedge funds, asset managers, and investment banks.
              </p>
              <p className="text-xs text-muted-foreground">
                Crafted by <a href="https://acadia.im" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Acadia.im</a> — 
                Engineering growth through AI-powered content strategy for B2B fintech.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">About Acadia.im</h4>
              <p className="text-sm text-muted-foreground mb-3">
                With 15+ years of institutional finance experience—from hedge funds to building and selling 
                fintech company Novus—we understand the platforms that drive your competitive edge.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-card-foreground">
                  <strong>Contact:</strong> <a href="mailto:hello@acadia.im" className="text-primary hover:underline">hello@acadia.im</a>
                </p>
                <p className="text-sm text-card-foreground">
                  <strong>Web:</strong> <a href="https://acadia.im" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">acadia.im</a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Acadia.im. All rights reserved. • Momentum Weekly is published every Monday morning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
