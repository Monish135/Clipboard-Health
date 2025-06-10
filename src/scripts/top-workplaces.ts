import axios from 'axios';

interface Workplace {
  name: string;
  shifts: number;
}

interface ApiWorkplace {
  name: string;
  shifts: number;
}

async function getTopWorkplaces(): Promise<Workplace[]> {
  try {
    // Fetch workplaces from the API
    const response = await axios.get<ApiWorkplace[]>('https://api.example.com/workplaces');
    const workplaces = response.data;

    // Process the data to count shifts for each workplace
    const workplaceShifts = new Map<string, number>();
    
    for (const workplace of workplaces) {
      const currentCount = workplaceShifts.get(workplace.name) || 0;
      workplaceShifts.set(workplace.name, currentCount + workplace.shifts);
    }

    // Convert to array and sort by number of shifts
    const sortedWorkplaces = Array.from(workplaceShifts.entries())
      .map(([name, shifts]) => ({ name, shifts }))
      .sort((a, b) => b.shifts - a.shifts)
      .slice(0, 3);

    return sortedWorkplaces;
  } catch (error) {
    console.error('Error fetching workplaces:', error);
    throw error;
  }
}

// Execute the script
getTopWorkplaces()
  .then(workplaces => {
    console.log(JSON.stringify(workplaces, null, 2));
  })
  .catch(error => {
    console.error('Failed to get top workplaces:', error);
    process.exit(1);
  }); 