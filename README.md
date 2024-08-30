## Index 📑  
- [Project Description](#project-description-)  
- [Features](#features-)  
- [Technologies and Libraries Used](#technologies-and-libraries-used-)  
- [Installation](#installation-)  
- [Developers](#developers-)

## Project Description 📖 

Trip Planner is a web application that allows users to receive personalized travel recommendations through a form. The frontend of the application, developed in React, provides a user-friendly interface that facilitates trip planning by searching for itineraries based on city and travel days.

## Features 📋

- **Registration and Login:** Users can create an account or log in to access personalized features.
- **Destination Search Form:** Users can search for travel destinations by entering the city and the days they plan to travel. The application will display recommended itineraries based on these parameters.
- **Search Destinations by Days:** Users can search and explore different cities and choose between 1 or 3 days.
- **Preferences History:** The system automatically saves user preferences to improve future recommendations.

### Motivation for Implementing this System

Implementing this system provides an interactive and personalized user experience for travel planning. By using a search form, the application simplifies the process of finding and selecting destinations and activities, allowing users to make informed decisions quickly.

## Technologies and Libraries Used 🛠️

- **React:** Main library for building the user interface.
- **Axios:** To make HTTP requests to the Django backend.
- **React Router:** To handle navigation within the application.
- **Styled Components:** For design and styling.

## Installation ⚙️

Follow these steps to set up the frontend development environment:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GabyRosas/trip_planner_front
   cd travelbot-frontend

2. **Install the dependencies:**

    bash

    Copiar código

    `npm install`

    `npm install react-router-dom@6`


3. **Start the application:**

    bash

    Copiar código

    `npm run dev`

   The application will be available at http://localhost:5173/


## Vite Installation and Test Configuration 🧪

To set up the development environment with Vite and Vitest, follow the steps below:

1. **Create a new project with Vite:**

  If you don't have a project set up with Vite yet, you can create one using the following command:

   ```bash

   npm create vite@latest nombre-del-proyecto

   cd nombre-del-proyecto

2. **Run tests with Vite:**

       `npm run test`

 ### Additional Documentation

For more information on Vite and its advanced configuration, see the official Vite documentation.[Additional Documentation](https://vitejs.dev/).


## Backend Connection (Django)

The React frontend communicates with a backend developed in **Django**. Django handles user authentication, the logic for the destination search form, and manages data related to destinations and itineraries. The connection is made through an API exposed by Django and consumed by the frontend using Axios. **Axios**.

> **Nota:** Details about the Django backend configuration can be found in its own README file.


## Developers 👩‍💻👩‍💻

- **Angelica** - [GitHub](https://github.com/Angelica2013)

- **Esther** - [GitHub](https://github.com/Fire-Fairy84)

- **Gabriela** - [GitHub](https://github.com/GabyRosas)

- **Lara** - [GitHub](https://github.com/laradrb)

- **Noemi** - [GitHub](https://github.com/noemipeteilh)