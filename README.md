# APNI YATRA

APNI YATRA is a comprehensive travel platform designed to provide personalized travel experiences, promote various tour packages, and showcase India's rich biodiversity and wildlife. The platform offers a range of services including famous place recommendations, customizable travel experiences, and 24/7 customer support.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- **Video Background**: Engaging video background on the homepage.
- **Famous Places**: Slideshow showcasing famous travel destinations.
- **Tour & Packages**: Detailed tour packages with images and overlays.
- **Customized Experience**: Tailored travel experiences based on user preferences.
- **24/7 Support**: Round-the-clock customer support for travelers.
- **About Us**: Information about the company and its strengths in the travel industry.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Sarthak2426/apni-yatra.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd apni-yatra
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up the MongoDB database**:
   - Make sure you have MongoDB installed and running on your local machine.
   - Create a database named `apniYatra`.

5. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following line with your MongoDB connection string:
     ```
     MONGODB_URI=mongodb://localhost:27017/apniYatra
     ```

## Usage

To start the server, run:
```bash
npm start
