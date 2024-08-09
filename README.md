# Altruist Network

![cover_image](https://github.com/user-attachments/assets/6cdabecb-5136-4a64-bd46-b909429c788e)


<h4 style="text-align:center;" align="center">The Altruist Network project is an innovative platform that aims to revolutionize the NGO donation industry by providing a transparent, reliable, and decentralized solution for campaigns and donation through decentralized giving</h4>

- **Power Point Presentation**: [View here](https://drive.google.com/file/d/1KSW_WyGRWdrxX_MnfmM9Sox7MLQOj4Xm/view?usp=sharing)

## Problem Statement
### 1. Lack of Transparency in NGO Donations
   - Limited real-time information on donation usage
   - Delayed updates on contribution impact
   - Complex financial reports confuse average donors

### 2. Difficulty in Tracking Fund Utilization
   - Lack of granular tracking for individual donations
   - Multiple intermediaries obscure fund destination
   - Error-prone manual record-keeping, time-consuming audits

### 3. Donor Skepticism and Reduced Trust
   - Scandals erode public confidence
   - Increasing demand for proof of impact
   - Suspicion of misuse due to lack of transparency

## Our Solution - A Blockchain-based donation platform
1. **No Need of Any Middlemen**
   - Donations are directly stored in the network and sent to the beneficiary when the campaign target is reached.
   - Thus, fostering trust between NGO and donor.

2. **Review Registration Documents**
   - Donors can review registration documents stored on Filecoin before donating.

3. **Campaign Management**
   - Campaigners/NGOs can register, start campaigns, and receive funds when the target is met.

4. **Smart Contracts for Transparent Fund Management**
   - Transparent fund management
   - Secure decentralized storage


## What it Does

Altruist Network enables transparent and efficient donations to NGOs through a blockchain-based platform. The system allows donors to contribute funds directly to specific campaigns, with all transactions recorded immutably on the blockchain. Smart contracts manage the entire donation process, from campaign creation to fund distribution, ensuring transparency and accountability.


## Key features 

1. **Transparent Donation Tracking**: 
   - Donors can see real-time updates on how their contributions are being used, with all transactions recorded on the blockchain.
   
2. **NGO Verification**: 
   - The platform includes a robust NGO registration system, ensuring that only legitimate organizations can create campaigns and receive funds.
   
3. **Campaign Management**: 
   - NGOs can create and manage fundraising campaigns, setting goals and providing detailed descriptions of their projects.
   
4. **Decentralized Storage**: 
   - Integration with Filecoin ensures that campaign materials, NGO documents, and donation records are stored securely and accessibly in a decentralized manner.
   
5. **Donor Profiles**: 
   - Registered donors can track their contribution history, view their impact, and manage their donations easily.
   
6. **Automated Fund Distribution**: 
   - Smart contracts automatically release funds to NGOs when campaign goals are met, reducing administrative overhead and potential for misuse.
   
7. **Real-time Reporting**: 
   - The platform generates transparent reports on fund utilization and campaign progress, accessible to all stakeholders.



## How we built it

Altruist Network is comprised of four main smart contracts, each serving a specific purpose within the platform:

- [ ] **Campaign.sol**
   - Manages individual donation campaigns
   - Allows donors to contribute funds
   - Tracks raised amounts and campaign status
   - Enables NGOs to withdraw funds when the goal is reached
   - Provides functions to view campaign details and contributors

- [ ] **CampaignFactory.sol**
   - Facilitates the creation of new campaigns
   - Maintains a list of active campaigns
   - Ensures only registered NGOs can create campaigns
   - Provides a function to retrieve active campaigns

- [ ] **DonorRegistry.sol**
   - Manages donor registration
   - Tracks donor information including name and total donated amount
   - Provides functions to register new donors and view top donors

- [ ] **NGORegistry.sol**
   - Handles NGO registration
   - Stores NGO information including name, description, and icon
   - Ensures donors cannot register as NGOs
   - Offers functions to register new NGOs and view all registered NGOs
     
These smart contracts work together to create a transparent and efficient donation system, allowing donors to contribute to campaigns created by registered NGOs while maintaining clear records of all transactions and participants.

## Tech Stack Used
- **Frontend**: Next.js with TypeScript
- **Backend**: Node.js with Express
- **Blockchain**: Ethereum (Smart Contracts)
- **Storage**: Filecoin (via Web3.Storage)
- **Authentication**: via Metamask Wallet

## Filecoin Integerations for 
- **Storing Donation Records**
- **Archiving NGO Documents**
- **Hosting Campaign Materials**
- **Ensuring Data Permanence and Accessibility**

## Impact and Benfits
- **Increased Donor Trust**
- **Improved NGO Accountability**
- **Enhanced Transparency in the Donation Process**
- **Increased Global Reach for Fundraising Campaigns**
- **Potential Higher Donation Volumes**


## Future Enhancements
1. **Mobile App Development**:
   - User-friendly interface for donors on-the-go
   - Push notifications for campaign updates and milestones
   - QR code scanning for quick donations

2. **Integration with More Blockchain Networks**:
   - Cross-chain compatibility for wider reach
   - Support for multiple cryptocurrencies
   - Increased scalability and reduced transaction costs

3. **AI-Powered Fraud Detection**:
   - Machine learning algorithms to identify suspicious patterns
   - Automated flagging of potential misuse or irregularities
   - Predictive analytics for campaign success and impact

**Additional Features**:
   - Implementation of decentralized governance for platform decisions
   - Integration with traditional payment systems for broader accessibility
   - Development of a reputation system for NGOs based on performance metrics


## Challenges we ran into

Developing Altruist Network was not without its challenges. Here are the main struggles I encountered and successfully resolved:

- [ ] **Integrating Filecoin**: 
   - Implementing decentralized storage with Filecoin was initially challenging as I familiarized myself with the technology. However, I overcame this hurdle by leveraging available documentation and community resources.
   
- [ ] **Ensuring User Privacy**: 
   - Balancing transparency with user privacy, especially for donors, required careful consideration and implementation of appropriate data handling practices.
   
- [ ] **Smart Contract Optimization**: 
   - Optimizing the smart contracts for gas efficiency while maintaining robust functionality was a complex task that required multiple iterations and testing.


## Accomplishments that I'm proud of

I take pride in several key achievements with Altruist Network:

- [ ] **Transparent Donation Tracking**: 
   - Successfully implemented a system that allows real-time tracking of donations from source to utilization, enhancing trust and accountability in the donation process.
   
- [ ] **Decentralized Document Storage**: 
   - By integrating Filecoin, ensured that campaign materials and NGO documents are stored securely and accessibly in a decentralized manner.
   
- [ ] **User-Friendly Interface**: 
   - Developed an intuitive interface that makes it easy for donors to contribute and for NGOs to manage campaigns, despite the complexity of the underlying blockchain technology.
   
- [ ] **Smart Contract Interoperability**: 
   - I'm proud of how our smart contracts work together seamlessly to create a comprehensive donation ecosystem.


## What I learned 

Throughout the development of Altruist Network, our team gained valuable insights:

- [ ] **Blockchain for Social Good**: 
   - Learned how blockchain technology can be leveraged to address trust and transparency issues in the charitable sector.
   
- [ ] **Decentralized Storage**: 
   - Integrating Filecoin taught us about the challenges and benefits of decentralized storage solutions.
   
- [ ] **Smart Contract Development**: 
   - Deepened our understanding of writing efficient, secure, and interoperable smart contracts.
   
- [ ] **Balancing Transparency and Privacy**: 
   - Learned the importance of striking the right balance between transparency and user privacy in blockchain applications.

This experience has not only resulted in a promising product but has also significantly enhanced our skills in blockchain development and our understanding of its potential for social impact.

## Conclusion

In conclusion, a blockchain-driven web application offers a promising solution to enhance NGO donations. By ensuring transparency and efficiency, we can empower philanthropy and create a more impactful giving environment.
