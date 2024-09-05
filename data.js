// data.js
const generateData = (numItems) => {
    return Array.from({ length: numItems }, (_, index) => ({
      id: index.toString(),
      title: `Item ${index + 1}`,
    }));
  };
  
  export const DATA = generateData(10000); // Generate 10,000 items
  