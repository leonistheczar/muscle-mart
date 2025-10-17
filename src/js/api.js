const fetchJSON = async (path) => {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.json();
};
export const apiData = () => fetchJSON('/api/api.json');
export const popularData = () => fetchJSON('/api/popular.json');
export const activewearData = () => fetchJSON('/api/activewear.json');
export const reviewsData = () => fetchJSON('/api/reviews.json');
