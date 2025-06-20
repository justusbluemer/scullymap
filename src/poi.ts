// Hamburg Points of Interest Configuration
export interface PointOfInterest {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  category: string;
  address?: string;
  website?: string;
  imageUrl?: string;
}

export const pois: PointOfInterest[] = [
  {
    name: "Landline",
    coordinates: [51.51389, -0.14417],
    description: "A major new work by Sean Scully comprised of layered colored marble slabs in a vertical tower, unveiled in April 2023 at Hanover Square in London. The sculpture's stacked bands of grey, sand, ochre, green and blue-green marble evoke the layered landscape of the square's gardens and surroundings. As Scully's first permanent public sculpture in London, *Landline* stands as a beacon in this historic Georgian square, reflecting the area's musical history and ever-changing sky.",
    category: "Sculpture",
    address: "Hanover Square, Mayfair, London W1, UK",
    website: "https://www.lissongallery.com/news/sean-scully-unveils-first-permanent-public-sculpture-in-london-at-hanover-square",
    imageUrl: "https://www.lissongallery.com/uploads/images/Scully_Lisson_News_Thumbnail.jpg",
  },
  {
    name: "Stone Tower",
    coordinates: [46.9519, -0.0773],
    description: "A monumental stone tower created by Scully for the Château d'Oiron in western France. Built from local stone, this formidable 'fortress' echoes the scale and architecture of the Renaissance castle. Unveiled in late 2024, it is Scully's first permanent sculpture in a French public institution, inviting visitors to discover new viewpoints across the historic parkland.",
    category: "Sculpture",
    address: "Château d'Oiron, 79100 Oiron, Deux-Sèvres, France",
    website: "http://www.chateau-oiron.fr",
  },
  {
    name: "Wall Dale Cubed",
    coordinates: [53.609386, -1.576314],
    description: "A colossal dry-stone wall sculpture at Yorkshire Sculpture Park (UK), constructed from over 1,000 tonnes of locally quarried Yorkshire stone. Completed in 2018, this monumental cuboid wall was built in the manner of ancient Irish stone walls – uniformly throughout – so that 'when looking at the outside of the block, one can feel the inside without being able to see it'. The piece stretches ~30m in length and stands in the open landscape of YSP's Lower Park, where its weathered stone grid integrates with the pastoral surroundings.",
    category: "Sculpture",
    address: "Yorkshire Sculpture Park, West Bretton, Wakefield, UK",
    website: "https://ysp.org.uk/art-outdoors/wall-dale-cubed",
    imageUrl: "https://ysp.org.uk/media/whqn0hfk/sean-scully-wall-dale-cubed-2018-photo-jonty-wilde-courtesy-ysp-1.jpg?anchor=center&mode=crop&width=1600&height=1000&rnd=132646395346170000",
  },
  {
    name: "Crann Saoilse (Wall of Light)",
    coordinates: [52.67348, -8.56409],
    description: "A massive stone wall sculpture at the main entrance of the University of Limerick in Ireland, known in Irish as *Crann Saoilse* ('Tree of Light'). Completed in 2003, it consists of a 30.5m long, 3m high wall built from alternating blocks of white Portuguese limestone and black Chinese basalt, arranged in a checkerboard pattern. Internally lit at the base, this monumental wall – part of UL's outdoor art collection – creates a dramatic gateway to the campus, embodying Scully's *Wall of Light* series in solid stone.",
    category: "Sculpture",
    address: "University of Limerick main entrance, Plassey Park Rd, Castletroy, Limerick, Ireland",
    website: "https://publicart.ie/main/directory/directory/view/crann-saoilse-wall-of-light/18063a965ad06b5af608cbaf84271315/",
  },
  {
    name: "Wall of Light Cubed",
    coordinates: [43.637, 5.421],
    description: "A monumental granite block sculpture on the art and architecture trail at Château La Coste in Provence, France. Realized in 2007, it comprises meticulously assembled tiers of massive stone blocks in grey, blue and red hues. Scully used over a thousand tonnes of stone to construct this cube-like structure, translating the layered 'Wall of Light' motif of his paintings into an imposing three-dimensional form. Visitors can observe *Wall of Light Cubed* from multiple angles as it anchors the vineyard's sculpture park with its ancient wall–like presence.",
    category: "Sculpture",
    address: "Château La Coste, 2750 Route de la Cride, 13610 Le Puy-Sainte-Réparade, France",
    website: "https://chateau-la-coste.com/en/art-architecture/artists-architects.html",
  },
  {
    name: "Boxes Full of Air",
    coordinates: [43.637, 5.421],
    description: "A formidable open-frame sculpture in weathering steel, sited on the grounds of Château La Coste since 2015. Measuring 3 m tall by 15 m long, this Corten steel work consists of large rectangular 'boxes' stacked and interlocked, yet paradoxically holding nothing but air and light. As viewers move around it, the rust-colored latticework frames shifting vistas of the sky and vineyards. Originally conceived for Scully's *Different Places* exhibition, *Boxes Full of Air* has become a centerpiece of the outdoor art walk at La Coste, inviting contemplation of solidity versus emptiness.",
    category: "Sculpture",
    address: "Château La Coste, 2750 Route de la Cride, 13610 Le Puy-Sainte-Réparade, France",
    website: "https://chateau-la-coste.com/en/art-architecture/artists-architects.html",
  },
  {
    name: "Colored Stacked Frames",
    coordinates: [29.986389, -90.093417],
    description: "A towering stack of painted metal frames installed in 2017 at the Besthoff Sculpture Garden in New Orleans, USA. This work consists of six layers of stainless-steel rectangular frames, each coated in a different bold automotive color, stacked to about 3.05 m (10 ft) high. The glossy, artificial coloration and sharp geometry contrast with the surrounding oaks and lagoons of the garden, creating a playful dialogue between the industrial and the natural. Acquired by NOMA in 2017, *Colored Stacked Frames* highlights the intersection of Scully's stripe/block motifs with three-dimensional form.",
    category: "Sculpture",
    address: "Sydney & Walda Besthoff Sculpture Garden, 1 Collins Diboll Circle, New Orleans, LA, USA",
    website: "https://noma.org/collection/colored-stacked-frames/",
  }
]
