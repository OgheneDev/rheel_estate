import axiosInstance from "../axios";

export const getProperties = async () => {
    try {
        const response = await axiosInstance.get('/data/properties');
        console.log('API response:', response); // Debug log
        const { data, status } = response;

        if (status !== 200) {
            throw new Error('Failed to fetch properties');
        }
        return data.data; // Adjust this line based on the actual API response structure
    } catch (err) {
        console.error('Error fetching properties: ', err);
        return [];
    }
};