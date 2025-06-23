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
    description: "2018, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Shadowing_Stack.JPG",
  },
  {
    name: "Coin Stack 2",
    coordinates: [50.593453608848044, 12.643785381402827],
    description: "2020, Bronze",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Coin_Stack_2.JPG",
  },
  {
    name: "Coin Stack",
    coordinates: [51.96235726361686, 7.623959509418155],
    description: "2018, Bronze",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Coin_Stack.JPG",
  },
  {
    name: "Wall of Light Cubed",
    coordinates: [51.25313134299275, 7.167964419585401],
    description: "2020, Stone",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Wall_of_Light_Cubed.JPG",
  },
  {
    name: "Landline London",
    coordinates: [51.51413518989138, -0.14324496584902113],
    description: "2022, Various marbles",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Landline_London.JPG",
  },
  {
    name: "Crate of Air",
    coordinates: [52.82729210778863, 0.656592461074662],
    description: "2018, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Crate_of_Air.JPG",
  },
  {
    name: "Tower Light Cubed",
    coordinates: [52.82702008390219, 0.6578694349327129],
    description: "2023, Limestone",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Tower_Light_Cubed.JPG",
  },
  {
    name: "Wall Dale Cubed",
    coordinates: [53.6117282578879, -1.5764125533985756],
    description: "2018, Yorkshire stone",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Wall_Dale_Cubed.JPG",
  },
  {
    name: "Crann Soilse",
    coordinates: [52.67374269758876, -8.572483357606394],
    description: "2003, Chinese black basalt and Portuguese limestone",
    category: "Sculpture",
    imageUrl: "",
  },
   {
    name: "Stack",
    coordinates: [39.893728676524766, -75.17474592307161],
    description: "2016, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Stack.JPG",
  },
  {
    name: "Colored Stacked Frames",
    coordinates: [29.986655745634952, -90.09347546495617],
    description: "2017, Stainless steel and automotive paint",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Colored_Stacke_Frames.JPG",
  },
   {
    name: "30",
    coordinates: [38.21866989129697, -85.76081300298662],
    description: "2018, Aluminum and automotive paint",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/30.JPG",
  },
     {
    name: "Wall of Light Cubed",
    coordinates: [43.63529894355468, 5.419787250019146],
    description: "2007, Granite",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/France-Wall_of_Light_Cubed.JPG",
  },
    {
    name: "Boxes of Air",
    coordinates: [43.63487879390965, 5.419948264242545],
    description: "2015, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Boxes_of_Air.JPG",
  },
  {
    name: "Untitled (Tower)",
    coordinates: [55.74162168399717, 37.598814298044275],
    description: "2015, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Untitled__Tower_.JPG",
  },
  {
    name: "Glass Stack 2",
    coordinates: [37.57000091450529, 126.9721755140687],
    description: "2020, Murano glass",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Glass_Stack_2.JPG",
  },
   {
    name: "Daegu Stack",
    coordinates: [35.82744502065254, 128.67454368308753],
    description: "2025, Corten steel",
    category: "Sculpture",
    imageUrl: "https://www.buceriuskunstforum.de/fileadmin/Dateien/Ausstellungen/67_Scully/Daegu_Stack.JPG",
  },
]
