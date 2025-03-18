
# CarbonTrackr
The CarbonTrackr website is a minimal proof-of-concept application designed to help users track and offset their carbon footprint through travel activities. 
# live :https://carbon-trackr.vercel.app/

## Features
### Core Features

1. **Carbon Footprint Calculator**
   - Simple form to calculate carbon footprint based on travel mode and distance
   - Numerical display of carbon footprint results

2. **AI Integration**
   - Generates recommendations for reducing carbon footprint based on user inputs
   - Displays relevant suggestions to the user

3. **Data Storage**
   - Stores calculations and recommendations in local storage (browser)
   - Option to view history of previous calculations

# 1. Carbon Footprint Calculator

Transport Mode Selection: Users can select their mode of transportation (car, bus, train, or airplane) from a dropdown menu.
Distance Input: Users enter the distance traveled in kilometers.
Calculation Logic: The application uses predefined emission factors for each transport mode to calculate carbon footprint:

Car: 0.192 kg CO2 per km
Bus: 0.105 kg CO2 per km
Train: 0.041 kg CO2 per km



Result Display: After clicking "Calculate," the application displays the carbon footprint in kilograms of CO2.
### Technical Implementation

- **Frontend**: React with Bootstarp components
- **Backend**: Node.js with Express
- **AI Integration**: Basic rule-based recommendations with option to connect to OpenAI API
- **Deployment**: Frontend on Vercel, Backend on any free hosting service

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/ada2003/CarbonTrackr.git
cd carbontrackr
```

2. Install dependencies for frontend
```bash
cd frontend
npm install
```

3. Install dependencies for backend
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory
```
PORT=5000
# Add your OpenAI API key if using AI feature
# OPENAI_API_KEY
```

### Running the Application Locally

1. Start the backend server
```bash
cd backend
npm start
```

2. In a new terminal, start the frontend
```bash
cd frontend
npm start
```

## Technologies Used

### Frontend
- React
- Bootstarp And CSS 
- localStorage for client-side storage

### Backend
- Node.js
- Express
- OpenAI API for advanced recommendations

## Output

- OpenAI for AI technology
- ![image](https://github.com/user-attachments/assets/cd052d99-ddce-4140-b2fb-003ad3c56a85)

![image](https://github.com/user-attachments/assets/4e43b2f2-0642-4f1d-b215-4868ca40224f)

