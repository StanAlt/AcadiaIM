import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, BarChart3, Database, DollarSign, Rocket } from "lucide-react";

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
              <p className="text-sm text-muted-foreground">December 8, 2025 Edition</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The AI-Native Finance Revolution: From Blockchain Banks to Intelligent Marketplaces
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This week showcases a dramatic shift in B2B fintech: AI is no longer an add-on feature but the foundational 
            architecture of new platforms. From IBM's $11B bet on data infrastructure to blockchain-powered banks launching 
            with 24/7 programmable payments, the industry is being rebuilt from the ground up for an AI-first, always-on 
            global economy.
          </p>
        </div>
      </section>

      {/* MEGA DEALS & MERGERS Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <DollarSign className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">💰 Mega Deals & Mergers</h2>
        </div>

        <div className="grid gap-6">
          {/* IBM Acquires Confluent */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">$11B Deal</Badge>
                <span className="text-xs text-muted-foreground">Dec 8, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  🚀 IBM Acquires Confluent for $11 Billion to Power Enterprise AI
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                IBM acquiring data infrastructure leader for $31/share cash deal closing mid-2026
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                IBM is acquiring data infrastructure leader Confluent for $31 per share in cash, representing an $11 billion 
                enterprise value. The transaction is expected to close by mid-2026 and has support from 62% of Confluent's 
                voting shareholders. As global data is projected to more than double by 2028 and over 1 billion new applications 
                emerge, Confluent's real-time data streaming platform becomes foundational for AI deployment.
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">What Confluent Does:</p>
                <p className="text-sm text-card-foreground">
                  Enterprise data streaming platform that connects, processes, and governs reusable and reliable data and events 
                  in real time—the nervous system for AI applications.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-accent mt-4">
                <p className="text-sm font-semibold text-card-foreground mb-2">Strategic Synergies:</p>
                <p className="text-sm text-card-foreground">
                  Expected to drive substantial product synergies across IBM's AI products, Automation, Data, and Consulting 
                  portfolios, accelerating revenue growth through IBM's go-to-market reach. Will be accretive to adjusted EBITDA 
                  within the first full year.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Data Streaming</Badge>
                <Badge variant="outline" className="text-xs">Enterprise AI</Badge>
                <Badge variant="outline" className="text-xs">M&A</Badge>
                <Badge variant="outline" className="text-xs">Real-Time Data</Badge>
              </div>
              <a href="https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* EQB PC Financial */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">$800M CAD</Badge>
                <span className="text-xs text-muted-foreground">Dec 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.fintechfutures.com/m-a/eqb-to-acquire-pc-financial-in-800m-deal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  🏦 EQB Acquires PC Financial for $800M CAD
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Canadian financial services group consolidates retail banking presence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Canadian financial services group EQB has agreed to acquire PC Financial from supermarket chain Loblaw Companies 
                for $800 million, marking a significant consolidation in Canadian retail banking. The deal strengthens EQB's 
                retail banking footprint and expands its customer base across Canada.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Retail Banking</Badge>
                <Badge variant="outline" className="text-xs">M&A</Badge>
                <Badge variant="outline" className="text-xs">Canada</Badge>
              </div>
              <a href="https://www.fintechfutures.com/m-a/eqb-to-acquire-pc-financial-in-800m-deal" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* Capitec Walletdoc */}
          <Card className="border-l-4 border-l-chart-2 bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-chart-2 text-accent-foreground">R400M</Badge>
                <span className="text-xs text-muted-foreground">Dec 8, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://techfinancials.co.za/2025/12/08/capitec-acquires-fintech-walletdoc-in-r400m-payments-push/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  💳 Capitec Acquires Walletdoc in R400M Payments Push
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                South African banking giant enters binding agreement for 100% acquisition (~$22M USD)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                South African banking giant Capitec has entered a binding agreement to acquire 100% of fintech innovator 
                Walletdoc for up to R400 million (~$22M USD), signaling a fierce new push into digital payments infrastructure. 
                The acquisition expands Capitec's digital payments capabilities and strengthens its fintech ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Digital Payments</Badge>
                <Badge variant="outline" className="text-xs">Fintech</Badge>
                <Badge variant="outline" className="text-xs">South Africa</Badge>
              </div>
              <a href="https://techfinancials.co.za/2025/12/08/capitec-acquires-fintech-walletdoc-in-r400m-payments-push/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* Global Payments Worldpay */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">Regulatory Approval</Badge>
                <span className="text-xs text-muted-foreground">Dec 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.fintechweekly.com/magazine/articles/global-payments-worldpay-acquisition-regulatory-approval-competition-review" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  ✅ Global Payments-Worldpay Deal Clears Regulatory Hurdles
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Major payments consolidation advances after UK/EU clearance with no competition concerns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                One of the largest moves in payments processing advances after receiving clearances in the UK and EU, with 
                regulators finding no competition concerns in the massive consolidation. The deal represents a significant 
                shift in the global payments landscape and strengthens the combined entity's market position.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Payments Processing</Badge>
                <Badge variant="outline" className="text-xs">Regulatory</Badge>
                <Badge variant="outline" className="text-xs">M&A</Badge>
              </div>
              <a href="https://www.fintechweekly.com/magazine/articles/global-payments-worldpay-acquisition-regulatory-approval-competition-review" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Platform Launches & Innovations Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">🚀 Platform Launches & Innovations</h2>
        </div>

        <div className="grid gap-6">
          {/* Treasury Prime AI Marketplace */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">3,600+ Fintechs</Badge>
                <span className="text-xs text-muted-foreground">Dec 3, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.businesswire.com/news/home/20251203309311/en/Treasury-Prime-Launches-AI-Marketplace-to-Transform-Bank-Fintech-Partnerships" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  🤖 Treasury Prime Launches AI Marketplace for Bank-Fintech Partnerships
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                First AI-native embedded finance platform uses LLM-powered matching across 13 industry verticals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                The first AI-native embedded finance platform has launched an AI Marketplace that uses LLM-powered insights 
                and machine learning to intelligently match banks with fintechs. The platform gives banks access to 3,600+ 
                fintechs seeking partnerships across 13 industry verticals including B2B payments, real estate, healthcare, 
                and high-risk industries.
              </p>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-accent">
                <p className="text-sm italic text-card-foreground">
                  "Artificial intelligence is fundamentally changing how financial partnerships form and scale. Our new AI 
                  Marketplace gives banks and fintechs a more intelligent, transparent, and data-driven way to connect, 
                  helping both sides save time evaluating new partners, reduce friction, and accelerate time to market."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Remy Carole, COO at Treasury Prime</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Banking-as-a-Service</Badge>
                <Badge variant="outline" className="text-xs">AI Matching</Badge>
                <Badge variant="outline" className="text-xs">Embedded Finance</Badge>
                <Badge variant="outline" className="text-xs">LLM</Badge>
              </div>
              <a href="https://www.businesswire.com/news/home/20251203309311/en/Treasury-Prime-Launches-AI-Marketplace-to-Transform-Bank-Fintech-Partnerships" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* N3XT Blockchain Bank */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">24/7/365</Badge>
                <span className="text-xs text-muted-foreground">Dec 4, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.pymnts.com/blockchain/2025/n3xt-launches-blockchain-powered-bank-focused-on-b2b-payments/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  ⛓️ N3XT Launches First Fully Blockchain-Powered Bank for B2B Payments
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Wyoming-chartered full-reserve bank with instant, programmable payments in U.S. dollars
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                N3XT has officially launched as the first fully blockchain-powered bank designed for instant, programmable 
                B2B payments in U.S. dollars, operating 24/7/365. Built by the founders of Signature Bank (Scott Shay and 
                Jeff Wallis), N3XT operates under a Wyoming Special Purpose Depository Institution charter as a full-reserve 
                bank with every dollar backed 1:1 by cash or short-term U.S. Treasuries.
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">Key Architecture:</p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Private, permissioned blockchain with API-first architecture</li>
                  <li>• Smart contracts enable programmable payments</li>
                  <li>• Settles transactions immediately without relying on outside institutions</li>
                  <li>• Designed for interoperability with stablecoins and digital assets</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-primary mt-4">
                <p className="text-sm italic text-card-foreground">
                  "We're applying crypto innovations to banking to deliver instant, programmable payments for institutional 
                  clients. Our platform gives businesses the control and reliability they need in a 24/7 global economy."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Jeffrey Wallis, CEO and President</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Blockchain</Badge>
                <Badge variant="outline" className="text-xs">B2B Payments</Badge>
                <Badge variant="outline" className="text-xs">Smart Contracts</Badge>
                <Badge variant="outline" className="text-xs">Full-Reserve</Badge>
              </div>
              <a href="https://www.pymnts.com/blockchain/2025/n3xt-launches-blockchain-powered-bank-focused-on-b2b-payments/" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI & Data Analytics Breakthroughs Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">🧠 AI & Data Analytics Breakthroughs</h2>
        </div>

        <div className="grid gap-6">
          {/* LSEG Partners with OpenAI */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">26,000 Employees</Badge>
                <span className="text-xs text-muted-foreground">Dec 4, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://fstech.co.uk/fst/Lseg_brings_genai_to_financial_data_in_openai_partnership.php" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  🤝 LSEG Partners with OpenAI to Bring Financial Data to ChatGPT
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                London Stock Exchange Group integrates data directly into ChatGPT via Model Context Protocol
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                The London Stock Exchange Group (LSEG) has announced a major collaboration with OpenAI to integrate its 
                financial data and analytics directly into ChatGPT through a new Model Context Protocol (MCP) connector. 
                Licensed ChatGPT users can access and analyze LSEG financial market data and news directly from chat, 
                providing deeper market analysis and faster insights.
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">Platform Integration:</p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Access to LSEG Workspace and Financial Analytics</li>
                  <li>• 4,000 LSEG employees receive ChatGPT Enterprise access</li>
                  <li>• Operates across 65 countries globally</li>
                  <li>• Conversational access to institutional-grade financial data</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-primary mt-4">
                <p className="text-sm italic text-card-foreground">
                  "LSEG's connector within ChatGPT combines all the benefits of a secure, enterprise AI platform with a 
                  seamless MCP connection and the unparalleled depth, breadth and quality of financial data, analytics, 
                  news and commentary that LSEG provides."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Emily Prince, Group Head of AI at LSEG</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">GenAI</Badge>
                <Badge variant="outline" className="text-xs">Financial Data</Badge>
                <Badge variant="outline" className="text-xs">ChatGPT</Badge>
                <Badge variant="outline" className="text-xs">MCP</Badge>
              </div>
              <a href="https://fstech.co.uk/fst/Lseg_brings_genai_to_financial_data_in_openai_partnership.php" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Funding Rounds Section */}
      <section className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <DollarSign className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">💸 Funding Rounds</h2>
        </div>

        <div className="grid gap-6">
          {/* Airwallex */}
          <Card className="border-l-4 border-l-primary bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary text-primary-foreground">$330M Series G</Badge>
                <span className="text-xs text-muted-foreground">Dec 8, 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://fintech.global/2025/12/08/airwallex-lands-330m-to-boost-ai-finance-platform/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  🌍 Airwallex Raises $330M Series G at $8B Valuation
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                30% valuation increase in 6 months as revenue exceeds $1B annualized
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                $330 million Series G led by Addition, with participation from T. Rowe Price, Activant, Lingotto, 
                Robinhood Ventures, and TIAA Ventures. Valuation reached $8 billion, marking a 30% increase from Series F 
                just six months earlier. Annualized revenue exceeding $1 billion (up 90% YoY as of October 2025), with 
                annualized transaction volume surpassing $235 billion (doubled YoY).
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm font-semibold text-card-foreground mb-2">Growth Metrics:</p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Revenue: $1B+ annualized (90% YoY growth)</li>
                  <li>• Transaction volume: $235B+ annualized (doubled YoY)</li>
                  <li>• ~50% of customer base uses multiple products</li>
                  <li>• 2,000+ employees globally with 80+ licenses worldwide</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-md border-l-2 border-accent mt-4">
                <p className="text-sm font-semibold text-card-foreground mb-2">Expansion Plans:</p>
                <p className="text-sm text-card-foreground">
                  Deploy $1 billion+ from 2026-2029 to expand US operations, opening second global headquarters in San Francisco. 
                  Plans to double US headcount to 400+ over the next year to position core teams closer to the AI ecosystem.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Global Banking</Badge>
                <Badge variant="outline" className="text-xs">Cross-Border Payments</Badge>
                <Badge variant="outline" className="text-xs">AI Automation</Badge>
                <Badge variant="outline" className="text-xs">$8B Valuation</Badge>
              </div>
              <a href="https://fintech.global/2025/12/08/airwallex-lands-330m-to-boost-ai-finance-platform/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                Read full story →
              </a>
            </CardContent>
          </Card>

          {/* Flex $60M */}
          <Card className="border-l-4 border-l-accent bg-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-accent text-accent-foreground">$60M Series B</Badge>
                <span className="text-xs text-muted-foreground">Dec 2025</span>
              </div>
              <CardTitle className="text-xl text-card-foreground">
                <a href="https://www.reuters.com/business/finance/ai-startup-flex-raises-60-million-offer-finance-tools-mid-sized-businesses-2025-12-04/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  🏦 Flex Raises $60M Series B for AI-Native Private Banking
                </a>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Miami/San Francisco startup targets high-net-worth business owners
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-card-foreground leading-relaxed">
                Miami/San Francisco-based Flex has secured $60 million in Series B equity funding led by Portage, with 
                participation from CrossLink Capital, Spice Expedition, and Titanium. The AI startup positions itself as 
                an AI-native private bank for high-net-worth business owners and mid-sized businesses.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Private Banking</Badge>
                <Badge variant="outline" className="text-xs">AI-Native</Badge>
                <Badge variant="outline" className="text-xs">HNW</Badge>
              </div>
              <a href="https://www.reuters.com/business/finance/ai-startup-flex-raises-60-million-offer-finance-tools-mid-sized-businesses-2025-12-04/" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
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
            <h3 className="text-lg font-bold text-card-foreground mb-4">Key Themes: AI-Native Finance Revolution</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">1.</span> AI-Native Architecture is the New Standard
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  From Treasury Prime's AI Marketplace to Airwallex's AI agents, new platforms aren't adding AI 
                  features—they're being built AI-first from the ground up. This represents a fundamental shift in 
                  how financial infrastructure is designed.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">2.</span> Blockchain Goes Institutional
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  N3XT's launch of a fully blockchain-powered bank with a Wyoming charter and full regulatory compliance 
                  shows blockchain technology moving from experimental to institutional-grade infrastructure for B2B payments.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-chart-2">3.</span> The $11 Billion Data Bet
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  IBM's Confluent acquisition signals that real-time data infrastructure is now mission-critical for 
                  enterprise AI. As data volumes double by 2028, the ability to stream, process, and govern data in 
                  real-time becomes the competitive moat.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">4.</span> Alternative Data Becomes Mainstream
                </h4>
                <p className="text-sm text-muted-foreground">
                  From LSEG's OpenAI partnership to Forbes coverage of alt data in M&A, alternative data is no longer 
                  alternative—it's becoming the primary source of competitive intelligence in financial decision-making.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">5.</span> Borderless Banking is Here
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Airwallex's $8B valuation and rapid growth (90% revenue increase YoY) validates the thesis that the 
                  future of business banking is borderless, real-time, and intelligent—not constrained by legacy infrastructure.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-chart-2">6.</span> Strong Funding Environment for Quality
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Despite market uncertainty, quality fintechs are raising significant rounds: $330M for Airwallex, $60M 
                  for Flex, $700M fund for Nexus. Capital is flowing to companies solving real problems with AI-first approaches.
                </p>

                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">7.</span> Regulatory Progress
                </h4>
                <p className="text-sm text-muted-foreground">
                  Global Payments-Worldpay clearing EU/UK regulatory hurdles and N3XT launching with proper charter shows 
                  regulators are becoming more sophisticated in evaluating fintech innovation.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-card-foreground">Market Statistics:</strong> $11B IBM-Confluent deal • 
                $8B Airwallex valuation (30% increase in 6 months) • 90% YoY revenue growth • $1B+ annualized revenue • 
                $235B transaction volume (doubled YoY) • 3,600+ fintechs in Treasury Prime's AI Marketplace • 
                26,000+ LSEG employees • 24/7/365 N3XT bank operations
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Editor's Note Section */}
      <section className="container py-12">
        <Card className="border-l-4 border-l-primary bg-card">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-card-foreground mb-4">📝 Editor's Note</h3>
            <p className="text-sm text-card-foreground leading-relaxed mb-4">
              This week marks an inflection point in B2B fintech. We're witnessing the emergence of a new category: 
              <strong> AI-native financial infrastructure</strong>. These aren't traditional platforms with AI features 
              bolted on—they're fundamentally reimagined systems built from scratch for an AI-first, always-on, global economy.
            </p>
            <p className="text-sm text-card-foreground leading-relaxed mb-4">
              The IBM-Confluent deal is particularly telling. At $11 billion, it's IBM's bet that real-time data streaming 
              is the foundational layer for enterprise AI. Meanwhile, N3XT's blockchain bank and Treasury Prime's AI Marketplace 
              show that the next generation of financial infrastructure will be programmable, intelligent, and borderless by default.
            </p>
            <p className="text-sm text-card-foreground leading-relaxed">
              For B2B fintech marketers and operators, the message is clear: the "AI transformation" isn't coming—it's here, 
              and it's architectural.
            </p>
            <p className="text-sm text-muted-foreground italic mt-4">
              — Acadia.im Team
            </p>
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
