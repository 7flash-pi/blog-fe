import axios from 'axios';

export const BASEURL = 'https://blog-service-s08o.onrender.com/';

export async function fetchData(endpointPath:string) {
    try {
        // Construct full URL by prepending BASEURL to endpointPath
        const url = `${BASEURL}${endpointPath}`;
        
        // Replace placeholders in URL with actual path variable value

        const response = await axios.get(url);
        return response.data.data; // Return full response data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}
