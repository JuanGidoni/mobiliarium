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

export async function getById(id) {
    try {
        const response = await fetch(`${BASE_URL}?codi=${id}`);
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error fetching item by ID:', error);
    }
};
/*
This should be the members of the categories array:
activitats-virtuals
rutes-i-visites
dansa
concerts
teatre
exposicions
conferencies
infantil
festivals-i-mostres
*/
export async function getByCategory(categories) {
    try {
        const categoryFilter = Array.isArray(categories) 
            ? categories.map(cat => `agenda:categories/${encodeURIComponent(cat)}`).join(',')
            : `agenda:categories/${encodeURIComponent(categories)}`;

        const url = `${BASE_URL}?tags_categor_es=${categoryFilter}`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error fetching items by category:', error);
    }
}