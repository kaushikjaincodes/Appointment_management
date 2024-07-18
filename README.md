# Customer Appointment Management System

This is a simple React application for managing customer appointments. Users can add customers with their appointment times, and the appointments are displayed in ascending order of time. Clicking on an appointment in the sidebar displays the customer's details.

## Features

- Add customer names and appointment times.
- Appointments are sorted in ascending order of time.
- Display customer details by clicking on an appointment.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kaushikjaincodes/Appointment_management.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Appointment_management
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

3. Use the form to add customer names and appointment times.

4. Click on an appointment in the sidebar to view the customer's details.

## Project Structure

- `src/`: Source code directory
  - `App.js`: Main application component
  - `Addbar.jsx`: Component for adding customer details
  - `Leftpanel.jsx`: Component displaying the list of appointments
  - `Rightpanel.jsx`: Component displaying selected customer details
  - `App.css and more`: Styles for the application

## Components

### App.js

The main component that holds the state and handles adding and sorting customers.

### Addbar.js

Component with a form to add customer names and appointment times. It uses the `onAddCustomer` prop to add a new customer.

### Leftpanel.js

Component that displays the list of sorted appointments. It uses the `onSelectCustomer` prop to set the selected customer.

### Rightpanel.js

Component that displays the details of the selected customer.

## Styling

Basic CSS styling is applied through `App.css and more`. Adjust the styles according to your preferences.

## Contributing

Feel free to open issues or submit pull requests with improvements. Any contributions are greatly appreciated!

## Contact

If you have any questions or suggestions, please feel free to contact me at [ x: KaushikJain2266].





