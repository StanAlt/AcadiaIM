import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Zap, Target, FileText, BarChart3 } from 'lucide-react';

export default function GrowthPlanner() {
  // Agency Profile State
  const [currentRevenue, setCurrentRevenue] = useState(1200000);
  const [acv, setAcv] = useState(30000);
  const [retention, setRetention] = useState(95);
  const [targetGrowth, setTargetGrowth] = useState(50);
  const [pipelineValue, setPipelineValue] = useState(0);
  
  // Growth Levers State
  const [newLeadsMonthly, setNewLeadsMonthly] = useState(100);
  const [conversionRate, setConversionRate] = useState(5);
  const [salesCycle, setSalesCycle] = useState(6);
  
  // Reverse Funnel State
  const [trafficToLeadRate, setTrafficToLeadRate] = useState(1.5);
  const [avgViewsPerPost, setAvgViewsPerPost] = useState(250);
  
  // Active Tab
  const [activeTab, setActiveTab] = useState('forecast');

  // Calculations
  const targetRevenue = currentRevenue * (1 + targetGrowth / 100);
  
  const projectionData = useMemo(() => {
    const data = [];
    let monthlyRecurring = currentRevenue / 12;
    let accumulatedRevenue = 0;
    
    const newClientsMonthly = newLeadsMonthly * (conversionRate / 100);
    
    // Pipeline deals - assume they're at average age (halfway through sales cycle)
    const pipelineDealsPerMonth = pipelineValue > 0 ? pipelineValue / acv : 0;
    const avgPipelineAge = Math.ceil(salesCycle / 2);
    
    for (let i = 1; i <= 12; i++) {
      // Retention/Upsell logic: >100% = net expansion from existing clients
      if (retention > 100) {
        // Upsell mode: existing revenue grows
        const monthlyGrowthRate = ((retention - 100) / 100) / 12;
        monthlyRecurring = monthlyRecurring * (1 + monthlyGrowthRate);
      } else {
        // Churn mode: existing revenue decays
        monthlyRecurring = monthlyRecurring * (1 - ((100 - retention) / 100) / 12);
      }
      
      // New revenue from new client acquisition
      let newRevStream = 0;
      if (i > salesCycle) {
        const monthsGeneratingNewRev = i - salesCycle;
        const totalNewClientsActive = newClientsMonthly * monthsGeneratingNewRev;
        newRevStream = totalNewClientsActive * (acv / 12);
      }
      
      // Pipeline deals converting (if current month >= avg pipeline age)
      let pipelineRevStream = 0;
      if (i >= avgPipelineAge && pipelineDealsPerMonth > 0) {
        const monthsOfPipelineRev = i - avgPipelineAge + 1;
        pipelineRevStream = pipelineDealsPerMonth * (acv / 12) * Math.min(monthsOfPipelineRev, 12);
      }
      
      const totalMonthRev = monthlyRecurring + newRevStream + pipelineRevStream;
      accumulatedRevenue += totalMonthRev;
      
      data.push({
        month: `M${i}`,
        projected: Math.round(totalMonthRev),
        target: Math.round(targetRevenue / 12),
      });
    }
    
    return { 
      data, 
      accumulated: accumulatedRevenue,
      runRate: data[11].projected * 12 
    };
  }, [currentRevenue, acv, retention, newLeadsMonthly, conversionRate, salesCycle, targetRevenue, pipelineValue]);
  
  const reverseFunnel = useMemo(() => {
    const neededRevenue = Math.max(0, targetRevenue - currentRevenue);
    const neededClients = neededRevenue / acv;
    const neededLeadsAnnual = conversionRate > 0 ? neededClients / (conversionRate / 100) : 0;
    const neededLeadsMonthly = neededLeadsAnnual / 12;
    const trafficRate = trafficToLeadRate / 100;
    const neededTraffic = trafficRate > 0 ? neededLeadsMonthly / trafficRate : 0;
    const postsNeeded = avgViewsPerPost > 0 ? neededTraffic / avgViewsPerPost : 0;
    
    return {
      neededRevenue,
      neededClients,
      neededLeadsMonthly,
      neededTraffic,
      postsNeeded
    };
  }, [targetRevenue, currentRevenue, acv, conversionRate, trafficToLeadRate, avgViewsPerPost]);
  
  const gap = targetRevenue - projectionData.runRate;
  const goalAchieved = projectionData.runRate >= targetRevenue;

  return (
    <section id="growth-plan" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-acadia-navy mb-4">
            Growth <span className="gradient-text">Planner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineer your growth: Run scenarios to forecast next year's revenue.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Sidebar - Inputs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Agency Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-acadia-navy mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-acadia-coral" />
                Company Profile
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Revenue
                  </label>
                  <input
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    step="50000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent"
                  />
                  <span className="text-xs text-gray-500">${currentRevenue.toLocaleString()}</span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avg. Contract Value (ACV)
                  </label>
                  <input
                    type="number"
                    value={acv}
                    onChange={(e) => setAcv(Number(e.target.value))}
                    step="1000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent"
                  />
                  <span className="text-xs text-gray-500">${acv.toLocaleString()}</span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Retention Rate: {retention}%
                    {retention > 100 && (
                      <span className="ml-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                        🚀 UPSELL MODE
                      </span>
                    )}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={retention}
                    onChange={(e) => setRetention(Number(e.target.value))}
                    className="w-full accent-acadia-coral"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Churn</span>
                    <span>100% (Flat)</span>
                    <span>120% (Expansion)</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Pipeline Value ($)
                  </label>
                  <input
                    type="number"
                    value={pipelineValue}
                    onChange={(e) => setPipelineValue(Number(e.target.value))}
                    step="10000"
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent"
                  />
                  <span className="text-xs text-gray-500">
                    {pipelineValue > 0 ? `$${pipelineValue.toLocaleString()} - Deals in progress` : 'Deals already in your pipeline'}
                  </span>
                </div>
              </div>
            </div>

            {/* Growth Target Card */}
            <div className="bg-gradient-to-br from-acadia-navy to-acadia-teal rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-acadia-gold" />
                Growth Target
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Target Revenue Growth: {targetGrowth}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={targetGrowth}
                    onChange={(e) => setTargetGrowth(Number(e.target.value))}
                    className="w-full accent-acadia-gold"
                  />
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-sm text-gray-200">Revenue Goal (Next 12M)</div>
                  <div className="text-3xl font-bold text-acadia-gold">
                    ${targetRevenue.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Levers */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-acadia-navy mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-acadia-coral" />
                Growth Levers
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    New Monthly Leads: {newLeadsMonthly}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    value={newLeadsMonthly}
                    onChange={(e) => setNewLeadsMonthly(Number(e.target.value))}
                    className="w-full accent-acadia-coral"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Conversion Rate: {conversionRate}%
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full accent-acadia-coral"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Sales Cycle: {salesCycle} months
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={salesCycle}
                    onChange={(e) => setSalesCycle(Number(e.target.value))}
                    className="w-full accent-acadia-coral"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Panel - Visualizations */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('forecast')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'forecast'
                    ? 'text-acadia-coral border-b-2 border-acadia-coral'
                    : 'text-gray-500 hover:text-acadia-navy'
                }`}
              >
                📊 Financial Forecast
              </button>
              <button
                onClick={() => setActiveTab('funnel')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'funnel'
                    ? 'text-acadia-coral border-b-2 border-acadia-coral'
                    : 'text-gray-500 hover:text-acadia-navy'
                }`}
              >
                🏗️ Reverse Funnel
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'content'
                    ? 'text-acadia-coral border-b-2 border-acadia-coral'
                    : 'text-gray-500 hover:text-acadia-navy'
                }`}
              >
                🧠 Content Strategy
              </button>
            </div>

            {/* Forecast Tab */}
            {activeTab === 'forecast' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-acadia-navy mb-6">Revenue Projection (Next 12 Months)</h4>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={projectionData.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <Tooltip 
                        formatter={(value) => `$${value.toLocaleString()}`}
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="projected" 
                        stroke={goalAchieved ? "#1e5f6f" : "#e86842"}
                        strokeWidth={3}
                        dot={{ fill: goalAchieved ? "#1e5f6f" : "#e86842", r: 4 }}
                        name="Projected Revenue"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="target" 
                        stroke={goalAchieved ? "#10b981" : "#1e5f6f"}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Goal Pacing"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Metrics Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-acadia-coral to-orange-500 rounded-xl p-6 text-white shadow-lg">
                    <div className="text-sm opacity-90 mb-1">Projected 12M Revenue</div>
                    <div className="text-3xl font-bold">${Math.round(projectionData.accumulated).toLocaleString()}</div>
                    <div className="text-sm mt-2">
                      {projectionData.accumulated > currentRevenue ? '+' : ''}
                      ${Math.round(projectionData.accumulated - currentRevenue).toLocaleString()} vs Current
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-acadia-teal to-acadia-navy rounded-xl p-6 text-white shadow-lg">
                    <div className="text-sm opacity-90 mb-1">Projected Run Rate</div>
                    <div className="text-3xl font-bold">${Math.round(projectionData.runRate).toLocaleString()}</div>
                    <div className="text-sm mt-2">End of Year Annual</div>
                  </div>
                  
                  <div className={`rounded-xl p-6 text-white shadow-lg ${
                    gap > 0 
                      ? 'bg-gradient-to-br from-orange-500 to-red-500' 
                      : 'bg-gradient-to-br from-green-500 to-emerald-600'
                  }`}>
                    <div className="text-sm opacity-90 mb-1">Gap to Goal</div>
                    <div className="text-3xl font-bold">${Math.round(Math.abs(gap)).toLocaleString()}</div>
                    <div className="text-sm mt-2">{gap > 0 ? 'Below Target' : 'Above Target'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Reverse Funnel Tab */}
            {activeTab === 'funnel' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-acadia-navy mb-4">What It Takes to Hit Your Goal</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Traffic-to-Lead Rate: {trafficToLeadRate}%
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="5"
                        step="0.1"
                        value={trafficToLeadRate}
                        onChange={(e) => setTrafficToLeadRate(Number(e.target.value))}
                        className="w-full accent-acadia-coral"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Avg Views per Blog Post
                      </label>
                      <input
                        type="number"
                        value={avgViewsPerPost}
                        onChange={(e) => setAvgViewsPerPost(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <MetricCard
                      value={reverseFunnel.neededClients.toFixed(1)}
                      label="New Clients Needed"
                      color="coral"
                    />
                    <MetricCard
                      value={Math.round(reverseFunnel.neededLeadsMonthly)}
                      label="Leads Per Month"
                      color="teal"
                    />
                    <MetricCard
                      value={Math.round(reverseFunnel.neededTraffic).toLocaleString()}
                      label="Monthly Traffic Req."
                      color="gold"
                    />
                    <MetricCard
                      value={Math.round(reverseFunnel.postsNeeded)}
                      label="Active Content Pieces"
                      color="navy"
                    />
                  </div>
                  
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>💡 Insight:</strong> To bridge the revenue gap of{' '}
                      <strong>${reverseFunnel.neededRevenue.toLocaleString()}</strong>, your content engine needs to generate{' '}
                      <strong>{Math.round(reverseFunnel.neededTraffic).toLocaleString()}</strong> visits/month converting at{' '}
                      <strong>{trafficToLeadRate}%</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Content Strategy Tab */}
            {activeTab === 'content' && (
              <div className="space-y-4">
                <ContentStrategyCard
                  title="Top of Funnel (Attract) - SEO Strategy"
                  icon={<FileText className="w-5 h-5" />}
                  defaultOpen={true}
                >
                  <p className="text-sm text-gray-600 italic mb-3">Focus: High-volume, problem-aware keywords.</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-acadia-navy">Suggested Blog Clusters:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>The "Comparison" Post:</strong> "[Competitor] vs [Your Agency] vs In-House"</li>
                      <li><strong>The "How-To" Guide:</strong> "How to solve [Industry Pain] without [Expensive Resource]"</li>
                      <li><strong>Trend Analysis:</strong> "The State of [Client Industry] in 2025"</li>
                    </ul>
                  </div>
                </ContentStrategyCard>

                <ContentStrategyCard
                  title="Middle of Funnel (Engage) - Premium Content"
                  icon={<Target className="w-5 h-5" />}
                >
                  <p className="text-sm text-gray-600 italic mb-3">Focus: Lead Magnets to capture email and qualify.</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-acadia-navy">Recommendations:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Calculator/Tool:</strong> "The [Industry] ROI Calculator" (Like this planner!)</li>
                      <li><strong>Whitepaper:</strong> "Original Research: Benchmarks for [Client Industry]"</li>
                      <li><strong>Webinar:</strong> "Live teardowns of [Customer Process]"</li>
                    </ul>
                  </div>
                </ContentStrategyCard>

                <ContentStrategyCard
                  title="Bottom of Funnel (Convert) - Sales Enablement"
                  icon={<TrendingUp className="w-5 h-5" />}
                >
                  <p className="text-sm text-gray-600 italic mb-3">Focus: Trust and Validation.</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-acadia-navy">Assets Needed:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Case Study:</strong> "How we helped [Similar Client] achieve [Result] in [Timeframe]"</li>
                      <li><strong>Implementation Plan:</strong> A PDF showing exactly what the first 90 days look like</li>
                    </ul>
                  </div>
                </ContentStrategyCard>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Ready to execute your growth plan?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Let's Build Your Strategy
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Helper Components
function MetricCard({ value, label, color }) {
  const colorClasses = {
    coral: 'from-acadia-coral to-orange-500',
    teal: 'from-acadia-teal to-cyan-600',
    gold: 'from-acadia-gold to-yellow-500',
    navy: 'from-acadia-navy to-blue-900',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-transform`}>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-xs opacity-90 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ContentStrategyCard({ title, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-acadia-coral">{icon}</div>
          <h4 className="font-bold text-acadia-navy text-left">{title}</h4>
        </div>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}
