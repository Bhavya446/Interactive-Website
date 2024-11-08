Wellness Tracker
A simple and interactive web application that helps users track daily water intake and sleep hours. This project also includes options to upgrade to a premium version and a login details tab.

Table of Contents
Project Overview
Features
File Structure
Installation
Usage
Customization
Technologies Used
License
Project Overview
The Wellness Tracker application allows users to monitor their water intake and sleep hours with easy-to-use visual components. The app includes:

Water Intake Tracker to measure water consumption through interactive buttons.
Sleep Tracker to log daily hours of sleep.
A Premium Upgrade and Login Details section to simulate a premium feature setup.
The project is designed with a dark theme for better visual contrast and a user-friendly layout.

Features
Water Intake Tracker: Users can click on small glasses representing 250 ml each to log their daily water intake and see the remaining amount.
Sleep Tracker: Users can enter the hours of sleep they've had, with feedback on their progress toward a recommended goal of 8 hours.
Go Premium Button: Displays a prompt to upgrade to a premium version.
Login Details Button: Placeholder button for login or account information.
Responsive Design: The layout adapts to different screen sizes.
File Structure
bash
Copy code
Wellness-Tracker/
├── index.html      # Main HTML file with layout and structure
├── style.css       # CSS file with styles for dark theme and layout
├── script.js       # JavaScript file for functionality and interactivity
└── README.md       # Project documentation
Installation
To set up and run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/wellness-tracker.git
Navigate to the project folder:
bash
Copy code
cd wellness-tracker
Open the application: Open index.html in a web browser to view the application.
Usage
Water Intake Tracker
Click on the 250 ml buttons to log each glass of water you consume.
The large central cup updates with your remaining water goal (starting from 2 liters).
The percentage display will show how much of your goal you’ve reached.
Sleep Tracker
Enter the hours of sleep you’ve had in the input field and click Add Sleep.
The app will display both hours slept and remaining hours to reach the goal of 8 hours.
Premium and Login Tabs
Go Premium: Click the "Go Premium" button to simulate upgrading to a premium version.
Login Details: The blue "Login Details" button is a placeholder for potential login information or user settings.
Customization
The project is easily customizable:

Change Goals: Update the water goal or sleep goal by modifying the values in script.js.
Styling: Modify colors, fonts, or layout by editing style.css.
Additional Features: Implement more wellness features such as exercise tracking, calorie counting, or meditation timers.
Technologies Used
HTML5: For structuring the application.
CSS3: For styling and responsive design, including a dark theme.
JavaScript: For interactivity, handling user input and updating the display.