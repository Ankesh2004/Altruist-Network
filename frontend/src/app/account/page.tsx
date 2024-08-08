import React, { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../hooks/useAuth'; // Custom auth hook

interface Donation {
  id: string;
  amount: number;
  date: string;
  campaignName: string;
}

interface Campaign {
  id: string;
  name: string;
  description: string;
  goal: number;
  raised: number;
}

interface UserData {
  role: 'donor' | 'ngo';
  profilePic?: string;
  nickname?: string;
  totalDonated?: number;
  donations?: Donation[];
  ngoIcon?: string;
  ngoName?: string;
  ngoDescription?: string;
  ngoManager?: string;
  campaigns?: Campaign[];
}

const UserAccountPage: React.FC = () => {
  const [user,setUser] = useState("donor");
  const [userData, setUserData] = React.useState<UserData | null>(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const response = await fetch(`/api/user/${user.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {userData.role === 'donor' ? (
        <DonorProfile userData={userData} />
      ) : (
        <NGOProfile userData={userData} />
      )}
    </div>
  );
};

const DonorProfile: React.FC<{ userData: UserData }> = ({ userData }) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Donor Profile</h1>
    <div className="flex items-center mb-4">
      <Image
        src={userData.profilePic || '/default-avatar.png'}
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold">{userData.nickname}</h2>
        <p>Total Donated: ${userData.totalDonated?.toFixed(2)}</p>
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">Donation History</h3>
    <ul>
      {userData.donations?.map((donation) => (
        <li key={donation.id} className="mb-2">
          <p>Amount: ${donation.amount.toFixed(2)}</p>
          <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          <p>Campaign: {donation.campaignName}</p>
        </li>
      ))}
    </ul>
  </div>
);

const NGOProfile: React.FC<{ userData: UserData }> = ({ userData }) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">NGO Profile</h1>
    <div className="flex items-center mb-4">
      <Image
        src={userData.ngoIcon || '/default-ngo-icon.png'}
        alt="NGO Icon"
        width={100}
        height={100}
        className="rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold">{userData.ngoName}</h2>
        <p>Manager: {userData.ngoManager}</p>
      </div>
    </div>
    <p className="mb-4">{userData.ngoDescription}</p>
    <h3 className="text-xl font-semibold mb-2">Campaigns</h3>
    <ul>
      {userData.campaigns?.map((campaign) => (
        <li key={campaign.id} className="mb-2">
          <h4 className="font-semibold">{campaign.name}</h4>
          <p>{campaign.description}</p>
          <p>Goal: ${campaign.goal.toFixed(2)}</p>
          <p>Raised: ${campaign.raised.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default UserAccountPage;