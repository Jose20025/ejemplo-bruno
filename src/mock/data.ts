export const structuresData = [
  {
    name: "Torre Eiffel",
    city: "París",
    country: "Francia",
  },
  {
    name: "Arco del Triunfo",
    city: "París",
    country: "Francia",
  },
  {
    name: "Empire State Building",
    city: "Nueva York",
    country: "Estados Unidos",
  },
  {
    name: "Estatua de la Libertad",
    city: "Nueva York",
    country: "Estados Unidos",
  },
  {
    name: "Burj Khalifa",
    city: "Dubái",
    country: "Emiratos Árabes Unidos",
  },
  {
    name: "Torre de Tokio",
    city: "Tokio",
    country: "Japón",
  },
  {
    name: "Templo Senso-ji",
    city: "Tokio",
    country: "Japón",
  },
  {
    name: "Torre CN",
    city: "Toronto",
    country: "Canadá",
  },
  {
    name: "Opera House",
    city: "Sídney",
    country: "Australia",
  },
  {
    name: "Sagrada Familia",
    city: "Barcelona",
    country: "España",
  },
  {
    name: "Alhambra",
    city: "Granada",
    country: "España",
  },
  {
    name: "Big Ben",
    city: "Londres",
    country: "Reino Unido",
  },
  {
    name: "Torre de Londres",
    city: "Londres",
    country: "Reino Unido",
  },
  {
    name: "Torre de Pisa",
    city: "Pisa",
    country: "Italia",
  },
  {
    name: "Coliseo Romano",
    city: "Roma",
    country: "Italia",
  },
  {
    name: "Cristo Redentor",
    city: "Río de Janeiro",
    country: "Brasil",
  },
  {
    name: "Petronas Towers",
    city: "Kuala Lumpur",
    country: "Malasia",
  },
  {
    name: "Torre Taipei 101",
    city: "Taipéi",
    country: "Taiwán",
  },
  {
    name: "Torre Ostankino",
    city: "Moscú",
    country: "Rusia",
  },
  {
    name: "Catedral de San Basilio",
    city: "Moscú",
    country: "Rusia",
  },
];

export interface CountryStructureCount {
  country: string;
  count: number;
}

export const getStructuresPerCountry = (): CountryStructureCount[] => {
  //! Usando reduce
  // const countByCountry = structuresData.reduce((acc, structure) => {
  //   acc[structure.country] = (acc[structure.country] || 0) + 1;
  //   return acc;
  // }, {} as Record<string, number>);

  // return Object.entries(countByCountry).map(([country, count]) => ({
  //   country,
  //   count
  // }));

  //! Usando groupBy
  const data = Object.groupBy(structuresData, (structure) => structure.country);

  const normalizedData: CountryStructureCount[] = Object.entries(data).map(
    ([country, structures]) => ({
      country,
      count: structures?.length || 0,
    }),
  );

  return normalizedData;
};
