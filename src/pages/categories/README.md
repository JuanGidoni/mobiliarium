# Categories Pages

This directory contains the pages related to the categories of the application. It handles both the general view of categories and the specific views for each category.

## Page Structure

### 1. `CategoriesPage.jsx`
- **Route:** `/categories`
- **Description:** 
  - This page displays a list of buttons or links for each available category.
  - Users can click on a button to navigate to the specific category page.
- **Functionality:**
  - List of categories such as "Concerts", "Theater", "Exhibitions", etc.
  - Each button redirects to the route `/categories/:category`.

### 2. `CategoryDetailPage.jsx`
- **Route:** `/categories/:category`
- **Description:** 
  - This page displays events related to a specific category selected by the user.
  - For example, if the user selects "Concerts", all concert events will be displayed.
- **Functionality:**
  - Fetches data from the API filtered by the selected category.
  - Allows additional filtering, such as by date, location, etc.

## Navigation Example

1. **Categories Page (`/categories`):**
   - Displays buttons like:
     ```
     [ Concerts ] [ Theater ] [ Exhibitions ] [ Kids ] ...
     ```

2. **Category Detail Page (`/categories/concerts`):**
   - Displays a list of events related to the "Concerts" category. It has filters inside each category.
   - Example events:
     ```
     - Rock Concert in Barcelona
     - Jazz Festival in Madrid
     ```

## Included Files

- `CategoriesPage.jsx`: Main categories page.
- `CategoryDetailPage.jsx`: Detail page for a specific category.

## Notes

