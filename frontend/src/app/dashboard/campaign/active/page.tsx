'use client';
import React, { useState } from 'react';
import CaretUp from "../../../../../public/icons/CaretUp";
import CaretDown from "../../../../../public/icons/CaretDown";
import dummyCampaigns from './dummyCampaigns';
import Link from 'next/link';

// CampaignCard component
const CampaignCard = ({ campaign }:any) => (
  <Link href={campaign.id}>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h3 className="text-xl font-semibold mb-2">{campaign.name}</h3>
    <p className="text-gray-600 mb-2">Campaigner: {campaign.campaigner}</p>
    <p className="text-gray-600 mb-2">Category: {campaign.category}</p>
    <div className="flex justify-between items-center">
      <p className="text-green-600 font-semibold">
        ${campaign.amountRaised.toLocaleString()} / ${campaign.target.toLocaleString()}
      </p>
      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-green-600 h-2.5 rounded-full" 
          style={{ width: `${(campaign.amountRaised / campaign.target) * 100}%` }}
        ></div>
      </div>
    </div>
  </div>
  </Link>
);

// SortButton component
const SortButton = ({ label, active, ascending, onClick }:any) => (
  <button
    className={`px-4 py-2 rounded ${
      active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
    }`}
    onClick={onClick}
  >
    {label} {active && (ascending ? <CaretUp/> : <CaretDown />)}
  </button>
);

// ActiveCampaignsPage component
const ActiveCampaignsPage = ({ campaigns }:any) => {
  const [sortedCampaigns, setSortedCampaigns] = useState(dummyCampaigns);
  const [sortBy, setSortBy] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);

  const handleSort = (key:any) => {
    const isAscending = sortBy === key ? !sortAscending : true;
    const sorted = [...sortedCampaigns].sort((a: any, b: any) => {
      if (a[key] < b[key]) return isAscending ? -1 : 1;
      if (a[key] > b[key]) return isAscending ? 1 : -1;
      return 0;
    });
    setSortedCampaigns(sorted);
    setSortBy(key);
    setSortAscending(isAscending);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Active Campaigns</h1>
      
      <div className="mb-4 flex space-x-2">
        <SortButton 
          label="Sort by Campaigner"
          active={sortBy === 'campaigner'}
          ascending={sortAscending}
          onClick={() => handleSort('campaigner')}
        />
        <SortButton 
          label="Sort by Category"
          active={sortBy === 'category'}
          ascending={sortAscending}
          onClick={() => handleSort('category')}
        />
      </div>

      {sortedCampaigns.map((campaign:any) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default ActiveCampaignsPage;