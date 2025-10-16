export const apiData = async () => {
    const response = await fetch('../api.json');
    const data = await response.json();
    return data;
}
export const popularData = async () => {
    const response = await fetch('../popular.json');
    const data = await response.json();
    return data;
}
export const activewearData = async () => {
    const response = await fetch('../activewear.json');
    const data = await response.json();
    return data;
}
export const reviewsData = async () => {
    const response = await fetch('../reviews.json');
    const data = await response.json();
    return data;
}