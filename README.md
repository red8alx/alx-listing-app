# ALX Listing App

## Project Description
This project is an Airbnb clone focusing on the listing page. Its primary goal is to establish a well-structured and maintainable Next.js codebase, demonstrating the use of reusable components, TypeScript for type safety, and Tailwind CSS for styling. This foundation will allow for the development of property listings, detailed views, and other related features.

## Project Structure Explanation

The project follows a modular and organized structure:

-   **`pages/`**: Contains the route-based pages of the application (Pages Router). Each file here defines a unique route.
-   **`components/`**: Houses reusable UI components.
    -   **`components/common/`**: Stores highly reusable, generic components like `Card` and `Button` that can be used throughout the application.
-   **`interfaces/`**: Defines TypeScript interfaces and types used across the project to ensure type safety and data consistency.
-   **`constants/`**: Stores global constants, configuration settings, API URLs, and static data.
-   **`public/assets/`**: Contains static assets suchs as images, SVGs, and other media files that are directly served by the application.

## How to Run the Project Locally

Follow these steps to set up and run the ALX Listing App on your local machine:

1.  **Navigate to the project directory:**
    Open your terminal or command prompt and change your current directory to the `alx-listing-app` folder:
    ```bash
    cd D:\ALX ProDev Frontend\sample_next\alx-listing-app
    ```

2.  **Install dependencies:**
    Ensure all required Node.js packages are installed.
    ```bash
    npm install
    ```
    *(Note: `create-next-app` usually runs `npm install` for you, but it's good practice to run it again if you encounter issues or pull new changes.)*

3.  **Run the development server:**
    Start the Next.js development server.
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Once the server is running, open your web browser and navigate to:
    [http://localhost:3000](http://localhost:3000)

You should see the default Next.js welcome page.