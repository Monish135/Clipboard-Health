import axios from 'axios';

interface Workplace {
  name: string;
  shifts: number;
}

interface ApiWorkplace {
  name: string;
  shifts: {
    id: string;
    status: string;
  }[];
}

async function getTopWorkplaces(): Promise<Workplace[]> {
  try {
    // Fetch data from the API
    const response = await axios.get<ApiWorkplace[]>('https://api.example.com/workplaces');
    const workplaces = response.data;

    // Process the data to count completed shifts
    const processedWorkplaces = workplaces.map(workplace => ({
      name: workplace.name,
      shifts: workplace.shifts.filter(shift => shift.status === 'completed').length
    }));

    // Sort workplaces by number of shifts in descending order
    const sortedWorkplaces = processedWorkplaces.sort((a, b) => b.shifts - a.shifts);

    // Return top 3 workplaces
    return sortedWorkplaces.slice(0, 3);
  } catch (error) {
    console.error('Error fetching workplaces:', error);
    throw error;
  }
}

// Execute the function and log results
getTopWorkplaces()
  .then(topWorkplaces => {
    console.log('Top 3 workplaces by completed shifts:');
    console.log(JSON.stringify(topWorkplaces, null, 2));
  })
  .catch(error => {
    console.error('Failed to get top workplaces:', error);
    process.exit(1);
  }); 