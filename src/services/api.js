const BASE_URL = 'https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json';

export async function getAllItems() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error fetching all items:', error);
    }
};
    