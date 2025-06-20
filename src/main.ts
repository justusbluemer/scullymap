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
  'Sculpture': '#DC2626'        // Dark Red
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
      touchZoom: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
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

    const color = categoryColors[poi.category] || '#6B7280';
    
    infoContent.innerHTML = `
      <div class="flex items-center gap-2 mb-3">
        <div class="w-4 h-4 rounded-full" style="background-color: ${color};"></div>
        <span class="text-sm font-medium text-gray-600 uppercase tracking-wide">${poi.category}</span>
      </div>
      <h2 class="font-bold text-xl text-gray-800 mb-3">${poi.name}</h2>
      <p class="text-gray-600 mb-4 leading-relaxed">${poi.description}</p>
      ${poi.imageUrl ? `<img src="${poi.imageUrl}" alt="${poi.name}" class="w-full h-auto rounded-lg mb-4">` : ''}
      ${poi.address ? `<div class="mb-3"><strong class="text-gray-700">Address:</strong><br><span class="text-gray-600">${poi.address}</span></div>` : ''}
      ${poi.website ? `<a href="${poi.website}" target="_blank" class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm">Visit website <span>→</span></a>` : ''}
    `;

    infoPanel.classList.remove('hidden');
    infoPanel.classList.add('info-panel-enter');
    
    setTimeout(() => {
      infoPanel.classList.add('info-panel-enter-active');
    }, 10);
  }

  private setupEventListeners(): void {
    const closeButton = document.getElementById('close-info');
    const infoPanel = document.getElementById('info-panel');
    
    if (closeButton && infoPanel) {
      closeButton.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
        infoPanel.classList.remove('info-panel-enter', 'info-panel-enter-active');
      });
    }

    // Close info panel when clicking on map
    this.map.on('click', () => {
      if (infoPanel && !infoPanel.classList.contains('hidden')) {
        infoPanel.classList.add('hidden');
        infoPanel.classList.remove('info-panel-enter', 'info-panel-enter-active');
      }
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