
# Mobiliarium

A React-based web application that allows users to explore and discover cultural places and things to do in Barcelona. The app fetches data from an API and provides various features for users to filter, navigate, and view detailed information about each place or activity.

## Features

- **Homepage**: The main entry point to the app, showcasing a brief introduction and quick links to explore the cultural places in Barcelona.
  
- **Categories Page**: A categorized view of the available cultural spots and activities, allowing users to browse and filter based on interests (e.g., museums, parks, landmarks).

- **Filtering**: Users can filter results dynamically using various parameters, such as type of activity or location, to find exactly what they’re looking for.

- **Detailed View**: Users can click on any item to see more detailed information, including descriptions, images, and other relevant details about the place or activity.

- **Responsive Navigation**: Easy-to-use navigation with options to go back, go to the homepage, or explore different categories.

## Technologies Used

- **React**: Frontend framework for building the app's user interface.
- **React Router**: For handling navigation between different pages (Homepage, Categories, and Details).
- **Axios/Fetch**: For fetching data from the API to display the cultural places and activities.
- **CSS/SCSS**: For styling the app and making it responsive and user-friendly.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser:

   ```bash
   http://localhost:3000
   ```

## API

The app fetches data from an external API that provides information on cultural places and things to do in Barcelona. 

Make sure to get the API key (if needed) and set it in your `.env` file:

```env
REACT_APP_API_KEY=your-api-key
```

## Folder Structure

```
/src
  /components        - React components for various parts of the UI (e.g., homepage, categories, item card).
  /pages             - React components for each page (e.g., Homepage, CategoriesPage, ItemDetailPage).
  /services          - API calls and data handling.
  /styles            - Styles for the app (CSS/SCSS).
  /assets            - Static assets like images or icons.
```

## License

This project is licensed under the MIT License.

This README will be updated without notice.
