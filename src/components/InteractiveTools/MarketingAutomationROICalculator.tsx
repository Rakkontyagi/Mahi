import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Users, TrendingUp, Zap, BarChart3, Briefcase } from 'lucide-react';
import BaseCard from '../Shared/BaseCard'; // Assuming path for BaseCard

// Constants for ROI calculation assumptions
const ASSUMED_LEAD_TIME_REDUCTION_PERCENT = 0.70; // 70% time saved per lead
const ASSUMED_CAMPAIGN_TIME_REDUCTION_PERCENT = 0.50; // 50% time saved per campaign
const HOURS_PER_WORK_DAY = 8;
const WORK_DAYS_PER_MONTH = 20; // Approx.

const MarketingAutomationROICalculator: React.FC = () => {
  // Input States
  const [monthlyLeads, setMonthlyLeads] = useState<number>(100);
  const [timePerLeadManually, setTimePerLeadManually] = useState<number>(1); // in hours
  const [manualEmailCampaignsPerMonth, setManualEmailCampaignsPerMonth] = useState<number>(4);
  const [timePerEmailCampaignManually, setTimePerEmailCampaignManually] = useState<number>(8); // in hours
  const [teamMembersInvolved, setTeamMembersInvolved] = useState<number>(2);
  const [avgHourlyCostPerTeamMember, setAvgHourlyCostPerTeamMember] = useState<number>(30); // in USD

  // Output States
  const [currentMonthlyHoursOnLeads, setCurrentMonthlyHoursOnLeads] = useState<number>(0);
  const [currentMonthlyHoursOnCampaigns, setCurrentMonthlyHoursOnCampaigns] = useState<number>(0);
  const [totalCurrentMonthlyManualHours, setTotalCurrentMonthlyManualHours] = useState<number>(0);
  const [hoursSavedOnLeadsPerMonth, setHoursSavedOnLeadsPerMonth] = useState<number>(0);
  const [hoursSavedOnCampaignsPerMonth, setHoursSavedOnCampaignsPerMonth] = useState<number>(0);
  const [totalHoursSavedPerMonth, setTotalHoursSavedPerMonth] = useState<number>(0);
  const [costSavingsPerMonth, setCostSavingsPerMonth] = useState<number>(0);
  const [costSavingsPerYear, setCostSavingsPerYear] = useState<number>(0);
  const [equivalentFTEsSavedPerMonth, setEquivalentFTEsSavedPerMonth] = useState<number>(0);

  // Calculation Logic
  useEffect(() => {
    const leadsHours = monthlyLeads * timePerLeadManually;
    setCurrentMonthlyHoursOnLeads(leadsHours);

    const campaignHours = manualEmailCampaignsPerMonth * timePerEmailCampaignManually;
    setCurrentMonthlyHoursOnCampaigns(campaignHours);

    const totalManual = leadsHours + campaignHours;
    setTotalCurrentMonthlyManualHours(totalManual);

    const savedLeads = leadsHours * ASSUMED_LEAD_TIME_REDUCTION_PERCENT;
    setHoursSavedOnLeadsPerMonth(savedLeads);

    const savedCampaigns = campaignHours * ASSUMED_CAMPAIGN_TIME_REDUCTION_PERCENT;
    setHoursSavedOnCampaignsPerMonth(savedCampaigns);

    const totalSaved = savedLeads + savedCampaigns;
    setTotalHoursSavedPerMonth(totalSaved);

    const monthlyCostSavings = totalSaved * avgHourlyCostPerTeamMember;
    setCostSavingsPerMonth(monthlyCostSavings);
    setCostSavingsPerYear(monthlyCostSavings * 12);

    const ftesSaved = totalSaved / (WORK_DAYS_PER_MONTH * HOURS_PER_WORK_DAY);
    setEquivalentFTEsSavedPerMonth(ftesSaved);

  }, [
    monthlyLeads,
    timePerLeadManually,
    manualEmailCampaignsPerMonth,
    timePerEmailCampaignManually,
    teamMembersInvolved, // Though not directly in formulas above, it's context for cost
    avgHourlyCostPerTeamMember
  ]);

  const inputFields = [
    { id: 'monthlyLeads', label: 'Monthly Leads Generated', value: monthlyLeads, setter: setMonthlyLeads, type: 'number', step: 10, icon: <Users className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 150" },
    { id: 'timePerLeadManually', label: 'Avg. Time per Lead (Manual Follow-up, hours)', value: timePerLeadManually, setter: setTimePerLeadManually, type: 'number', step: 0.1, icon: <Clock className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 0.75 (for 45 mins)" },
    { id: 'manualEmailCampaignsPerMonth', label: 'Manual Email Campaigns / Month', value: manualEmailCampaignsPerMonth, setter: setManualEmailCampaignsPerMonth, type: 'number', step: 1, icon: <Zap className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 4" },
    { id: 'timePerEmailCampaignManually', label: 'Avg. Time per Campaign (Manual, hours)', value: timePerEmailCampaignManually, setter: setTimePerEmailCampaignManually, type: 'number', step: 1, icon: <Clock className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 6" },
    { id: 'teamMembersInvolved', label: 'Team Members Involved in These Tasks', value: teamMembersInvolved, setter: setTeamMembersInvolved, type: 'number', step: 1, icon: <Users className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 3" },
    { id: 'avgHourlyCostPerTeamMember', label: 'Avg. Hourly Cost per Team Member ($)', value: avgHourlyCostPerTeamMember, setter: setAvgHourlyCostPerTeamMember, type: 'number', step: 1, icon: <DollarSign className="w-5 h-5 text-gray-400" />, placeholder: "e.g., 35", description: "Include avg. salary, benefits, and overheads for relevant team members." },
  ];

  const resultsData = [
    { title: 'Potential Monthly Hours Saved', value: `${totalHoursSavedPerMonth.toFixed(0)} hours`, icon: <Clock size={32} className="text-green-400"/>, description: "Time reclaimed through automation." },
    { title: 'Potential Monthly Cost Savings', value: costSavingsPerMonth.toLocaleString('en-US', { style: 'currency', currency: 'USD' }), icon: <DollarSign size={32} className="text-green-400"/>, description: "Direct operational cost reduction." },
    { title: 'Potential Annual Cost Savings', value: costSavingsPerYear.toLocaleString('en-US', { style: 'currency', currency: 'USD' }), icon: <TrendingUp size={32} className="text-green-400"/>, description: "Yearly impact on your bottom line." },
    { title: 'Equivalent FTE Hours Reclaimed/Month', value: `${equivalentFTEsSavedPerMonth.toFixed(1)} FTEs`, icon: <Briefcase size={32} className="text-green-400"/>, description: "Full-Time Equivalents' worth of work automated." },
  ];


  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-900 to-purple-900 text-white rounded-xl shadow-2xl border border-slate-700">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
        Marketing Automation ROI Estimator
      </h2>

      {/* Input Section */}
      <section className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-300">Your Current Marketing Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {inputFields.map(field => (
            <div key={field.id} className="mb-3">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-400 mb-1.5 flex items-center">
                {field.icon && React.cloneElement(field.icon, { className: "w-4 h-4 mr-2 text-gray-500"})}
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={field.value}
                onChange={(e) => field.setter(parseFloat(e.target.value) || 0)}
                min="0"
                step={field.step}
                placeholder={field.placeholder}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-md text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 placeholder-slate-500"
              />
              {field.description && (
                <p className="text-xs text-gray-400 mt-1 ml-1">{field.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Results Display Section */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-gray-300 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-purple-400" /> Estimated Monthly & Annual ROI
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {resultsData.map(result => (
            <BaseCard key={result.title} variant="glass" className="p-4 sm:p-5 text-center hover:shadow-purple-500/30 transition-shadow">
              <div className="flex justify-center mb-3">
                 {result.icon}
              </div>
              <h4 className="text-md sm:text-lg font-semibold text-purple-300 mb-1 break-words">{result.title}</h4>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2 break-words">{result.value}</p>
              <p className="text-xs text-gray-400">{result.description}</p>
            </BaseCard>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-8">
          *Estimates are based on assumed time reductions of {ASSUMED_LEAD_TIME_REDUCTION_PERCENT*100}% for lead management and {ASSUMED_CAMPAIGN_TIME_REDUCTION_PERCENT*100}% for campaign creation after implementing marketing automation. Actual results may vary.
        </p>
      </section>
    </div>
  );
};

export default MarketingAutomationROICalculator;
