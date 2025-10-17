export const apiData = async () => {
    const response = await fetch('../../api/api.json');
    const data = await response.json();
    return data;
}
export const popularData = async () => {
    const response = await fetch('../../api/popular.json');
    const data = await response.json();
    return data;
}
export const activewearData = async () => {
    const response = await fetch('../../api/activewear.json');
    const data = await response.json();
    return data;
}
export const reviewsData = async () => {
    const response = await fetch('../../api/reviews.json');
    const data = await response.json();
    return data;
}