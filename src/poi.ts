// Hamburg Points of Interest Configuration
export interface PointOfInterest {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  category: string;
  imageUrl?: string;
}

export const pois: PointOfInterest[] = [
  {
    name: "Shadowing Stack",
    coordinates: [50.36278317528439, 7.605046925030399],
    description: "2018<br>Corten steel",
    category: "Sculpture",
    imageUrl: "",
  },
  {
    name: "Coin Stack 2",
    coordinates: [50.593453608848044, 12.643785381402827],
    description: "2020<br>Bronze",
    category: "Sculpture",
    imageUrl: "",
  },
  {
    name: "Coin Stack",
    coordinates: [51.96235726361686, 7.623959509418155],
    description: "2018<br>Bronze",
    category: "Sculpture",
    imageUrl: "",
  },
  {
    name: "Crann Saoilse (Wall of Light)",
    coordinates: [52.67348, -8.56409],
    description: "A massive stone wall sculpture at the main entrance of the University of Limerick in Ireland, known in Irish as *Crann Saoilse* ('Tree of Light'). Completed in 2003, it consists of a 30.5m long, 3m high wall built from alternating blocks of white Portuguese limestone and black Chinese basalt, arranged in a checkerboard pattern. Internally lit at the base, this monumental wall – part of UL's outdoor art collection – creates a dramatic gateway to the campus, embodying Scully's *Wall of Light* series in solid stone.",
    category: "Sculpture",
  },
  {
    name: "Wall of Light Cubed",
    coordinates: [43.637, 5.421],
    description: "A monumental granite block sculpture on the art and architecture trail at Château La Coste in Provence, France. Realized in 2007, it comprises meticulously assembled tiers of massive stone blocks in grey, blue and red hues. Scully used over a thousand tonnes of stone to construct this cube-like structure, translating the layered 'Wall of Light' motif of his paintings into an imposing three-dimensional form. Visitors can observe *Wall of Light Cubed* from multiple angles as it anchors the vineyard's sculpture park with its ancient wall–like presence.",
    category: "Sculpture",
  },
  {
    name: "Boxes Full of Air",
    coordinates: [43.637, 5.421],
    description: "A formidable open-frame sculpture in weathering steel, sited on the grounds of Château La Coste since 2015. Measuring 3 m tall by 15 m long, this Corten steel work consists of large rectangular 'boxes' stacked and interlocked, yet paradoxically holding nothing but air and light. As viewers move around it, the rust-colored latticework frames shifting vistas of the sky and vineyards. Originally conceived for Scully's *Different Places* exhibition, *Boxes Full of Air* has become a centerpiece of the outdoor art walk at La Coste, inviting contemplation of solidity versus emptiness.",
    category: "Sculpture",
  },
  {
    name: "Colored Stacked Frames",
    coordinates: [29.986389, -90.093417],
    description: "A towering stack of painted metal frames installed in 2017 at the Besthoff Sculpture Garden in New Orleans, USA. This work consists of six layers of stainless-steel rectangular frames, each coated in a different bold automotive color, stacked to about 3.05 m (10 ft) high. The glossy, artificial coloration and sharp geometry contrast with the surrounding oaks and lagoons of the garden, creating a playful dialogue between the industrial and the natural. Acquired by NOMA in 2017, *Colored Stacked Frames* highlights the intersection of Scully's stripe/block motifs with three-dimensional form.",
    category: "Sculpture",
  }
]
