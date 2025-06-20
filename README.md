# Scully Map

This project is an embeddable, interactive map showcasing the permanent public sculptures of the artist Sean Scully. It is designed to be hosted on Netlify and embedded into a Readymag website via an iframe.

The map displays the locations of Scully's sculptures around the world. Users can click on a sculpture's marker to view more detailed information, including its name, description, address, and a link to a relevant website.

## Project Structure

This is a modern web project built with Vite, TypeScript, and Tailwind CSS. It uses the Leaflet.js library for the interactive map functionality.

- **`index.html`**: The main entry point of the application.
- **`src/`**: Contains the main application source code.
-   - **`main.ts`**: The main application logic, including the `ScullyMap` class which initializes and controls the map.
-   - **`poi.ts`**: Defines the data structure for the Points of Interest (POIs) and contains the data for each of Sean Scully's sculptures.
-   - **`style.css`**: The main stylesheet for the application, including Tailwind CSS imports.
- **`public/`**: Contains static assets.
- **`package.json`**: Lists the project dependencies and scripts.
- **`vite.config.js`**, **`tailwind.config.js`**, **`postcss.config.js`**: Configuration files for Vite, Tailwind CSS, and PostCSS.

## Development

To run this project locally, you will need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view the application in your browser at `http://localhost:5173`.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the optimized and bundled application files, ready for deployment.

## Deployment

This project is intended to be deployed on Netlify. You can connect your Git repository to Netlify for automatic builds and deployments.

## Embedding

Once deployed, the map can be embedded into a Readymag website using an iframe:

```html
<iframe src="<your-netlify-url>" width="100%" height="600px" frameborder="0"></iframe>
```

## Customization

### Adding or Modifying Points of Interest

The data for the sculptures is located in the `src/poi.ts` file. You can add, remove, or modify the entries in the `pois` array to change the data displayed on the map. Each POI has the following structure:

```typescript
export interface PointOfInterest {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  category: string;
  address?: string;
  website?: string;
}
```

### Customizing the Map

The map is initialized and configured in the `src/main.ts` file within the `ScullyMap` class. You can modify the map's initial center, zoom level, and other options in the `initializeMap` method.

The appearance of the markers and the info panel can be customized by modifying the CSS classes in `src/style.css` and the HTML structure in the `addPOIMarkers` and `showInfoPanel` methods in `src/main.ts`.
