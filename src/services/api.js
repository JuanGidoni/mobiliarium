const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json";

export async function getAllItems() {
  try {
    const response = await fetch(`${BASE_URL}?$limit=25`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all items: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching all items:", error);
    return { success: false, error: error.message };
  }
}

export async function getById(id) {
  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID provided. ID must be a non-empty string.");
  }
  try {
    const response = await fetch(`${BASE_URL}?codi=${encodeURIComponent(id)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch item by ID: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching item by ID:", error);
    return { success: false, error: error.message };
  }
}

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
  if (!categories || (Array.isArray(categories) && categories.length === 0)) {
    throw new Error(
      "Invalid categories provided. Must be a non-empty string or array."
    );
  }
  try {
    console.log(categories);
    const categoryFilter = Array.isArray(categories)
      ? categories
          .map((cat) => `agenda:categories/${encodeURIComponent(cat)}`)
          .join(",")
      : `agenda:categories/${encodeURIComponent(categories)}`;
    const url = `${BASE_URL}?$limit=25&tags_categor_es=${categoryFilter}`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch items by category: ${response.statusText}`
      );
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching items by category:", error);
    return { success: false, error: error.message };
  }
}
