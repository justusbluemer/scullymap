import './style.css';
import L from 'leaflet';
import {
  pois, PointOfInterest
} from './poi.ts'

// Category colors for different types of POIs
const categoryColors: Record<string, string> = {
  'Attraction': '#3B82F6',      // Blue
  'Historical': '#8B5CF6',      // Purple  
  'Culture': '#EF4444',         // Red
  'Market': '#F59E0B',          // Orange
  'Nature': '#10B981',          // Green
  'Entertainment': '#EC4899',   // Pink
  'Museum': '#6366F1',          // Indigo
  'Sculpture': '#763c28'        // Dark Red
};

class ScullyMap {
  private map!: L.Map;
  private markers: L.Marker[] = [];

  constructor() {
    this.initializeMap();
    this.addPOIMarkers();
    this.setupEventListeners();
  }

  private initializeMap(): void {
    // Initialize the map centered on Europe
    this.map = L.map('map', {
      center: [54.5260, 15.2551], // Europe coordinates
      zoom: 4,
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
	  attributionControl: false,
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.map);

	L.control.attribution({
		position: 'bottomright',
		prefix: 'Daten von &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> unter <a href="https://opendatacommons.org/licenses/odbl/">ODbL.</a>'
	}).addTo(this.map);
  }

  private addPOIMarkers(): void {
    pois.forEach((poi) => {
	  const color = categoryColors[poi.category] || '#6B7280';

      // Create custom icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="w-4 h-4 rounded-full border-2 border-white shadow-lg" style="background-color: ${color};"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -8]
      });

      // Create marker
      const marker = L.marker(poi.coordinates, { 
        icon: customIcon,
        title: poi.name
      }).addTo(this.map);

      // Add hover tooltip with just the name
      marker.bindTooltip(poi.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
        className: 'custom-tooltip'
      });

      // Add click event for info panel (no popup)
      marker.on('click', () => {
        this.showInfoPanel(poi);
      });

      this.markers.push(marker);
    });
  }

  private showInfoPanel(poi: PointOfInterest): void {
    const infoPanel = document.getElementById('info-panel');
    const infoContent = document.getElementById('info-content');
    
    if (!infoPanel || !infoContent) return;
    
    infoContent.innerHTML = `
      <h2 class="font-bold text-xl text-gray-800 mb-3">${poi.name}</h2>
      <p class="text-gray-600 mb-4 leading-relaxed">${poi.description}</p>
      ${poi.imageUrl ? `<img src="${poi.imageUrl}" alt="${poi.name}" class="w-full h-auto object-contain rounded-lg mb-4 max-h-[50vh]">` : ''}
    `;

    infoPanel.classList.remove('opacity-0', 'pointer-events-none');
    infoPanel.classList.add('opacity-100');
  }

  private setupEventListeners(): void {
    const closeButton = document.getElementById('close-info');
    const infoPanel = document.getElementById('info-panel');
    
    const closePanel = () => {
      if (infoPanel) {
        infoPanel.classList.remove('opacity-100');
        infoPanel.classList.add('opacity-0', 'pointer-events-none');
      }
    };

    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        closePanel();
      });
    }

    // Close info panel when clicking on map
    this.map.on('click', () => {
      closePanel();
    });
  }

  // Public method to add new POIs dynamically
  public addPOI(poi: PointOfInterest): void {
    pois.push(poi);
    // Remove existing markers and re-add all
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];
    this.addPOIMarkers();
  }

  // Public method to get all POIs
  public getPOIs(): PointOfInterest[] {
    return [...pois];
  }

  // Public method to filter POIs by category
  public filterByCategory(category: string): void {
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];

    const filteredPOIs = pois.filter(poi => poi.category === category);
    // Temporarily replace the POI array for rendering
    const originalPOIs = [...pois];
    pois.length = 0;
    pois.push(...filteredPOIs);
    this.addPOIMarkers();
    // Restore original array
    pois.length = 0;
    pois.push(...originalPOIs);
  }

  // Public method to show all POIs
  public showAllPOIs(): void {
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];
    this.addPOIMarkers();
  }
}

// Initialize the map when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ScullyMap();
});

// Export for potential use by developers
export { ScullyMap, pois, categoryColors };
export type { PointOfInterest };