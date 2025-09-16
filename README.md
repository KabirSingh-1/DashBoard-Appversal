# React Redux Analytics Dashboard

This project is a comprehensive analytics dashboard for tracking Apple Search Ads performance, built as a pixel-perfect implementation of a Figma design. The application displays real-time metrics, interactive charts, and data tables with a focus on smooth animations and a responsive, modern UI.

## Live Demo

A live demo of the application is available at the following URL:

[**Live Demo URL**](https://your-live-demo-url-here.com)

## Figma Design Reference

The application was designed to meticulously follow the specifications from the following Figma file:

[**Figma Design Link**](https://www.figma.com/design/HdQf17TQGkKEmYL5hbjc4T/Task?node-id=0-1&t=n6CGxFcDKV4mbeKK-1)

---

## Features

-   **Responsive Design**: Fully responsive layout for seamless viewing on desktop, tablet, and mobile devices.
-   **Interactive Dashboard**: A clean and intuitive interface displaying key performance indicators at a glance.
-   **State Management**: Centralized application state managed by Redux Toolkit for predictability and scalability.
-   **Data Visualization**:
    -   **Trends Line Chart**: An elegant line chart with a gradient fill, powered by Recharts.
    -   **Storefronts World Map**: An interactive world map heatmap showing spend distribution by country, complete with zoom, pan, and hover tooltips.
-   **Interactive Data Tables**:
    -   **Top List**: A sortable table displaying campaign performance metrics with color-coded data cells.
    -   **Biggest Changes**: A table featuring inline bar charts to visualize the most significant changes in performance.
-   **Smooth Animations**: Fluid animations and page transitions powered by Framer Motion for an enhanced user experience.
-   **Modular Component Architecture**: Built with reusable React components for maintainability and scalability.

---

## Tech Stack

This project is built with a modern frontend tech stack:

-   **React 18+**: Leveraging functional components and hooks for building the UI.
-   **TypeScript**: For static typing and improved developer experience.
-   **Redux Toolkit**: The recommended approach for efficient Redux development and state management.
-   **Tailwind CSS**: A utility-first CSS framework for rapid and precise styling.
-   **Recharts**: A composable charting library for creating beautiful data visualizations.
-   **Framer Motion**: A production-ready motion library for creating fluid animations.
-   **React Table** (Concept): The table components are built to be interactive, aligning with the principles of libraries like React Table.

---

## Project Structure

The project follows a feature-based structure to keep the code organized and maintainable.

```
/
├── public/
├── src/
│   ├── app/
│   │   └── store.ts             # Redux store configuration
│   ├── components/
│   │   ├── ui/                  # Generic UI components (Card, Tabs)
│   │   ├── BiggestChanges.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Storefronts.tsx
│   │   ├── Summary.tsx
│   │   ├── TopList.tsx
│   │   └── Trends.tsx
│   ├── features/
│   │   └── dashboard/
│   │       └── dashboardSlice.ts # Redux slice for dashboard state
│   ├── App.tsx                  # Main application component
│   ├── constants.tsx            # SVG icons and constant data
│   ├── index.html
│   ├── index.tsx                # Application entry point
│   └── types.ts                 # TypeScript type definitions
└── README.md
```

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and a package manager (npm or yarn) installed on your machine.

-   Node.js (v16 or later recommended)
-   npm (`npm install -g npm`) or yarn (`npm install -g yarn`)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/react-redux-dashboard.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd react-redux-dashboard
    ```
3.  **Install dependencies:**
    This project uses CDN-based imports defined in an `importmap` in `index.html`, so no `npm install` is required for the core libraries. For a typical local setup, you would run:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Application

To start the development server, run:

```sh
npm start
```

or

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified by your development server) to view it in the browser.
# DashBoard-Appversal
