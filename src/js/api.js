export const products = async () => {
    const response = await fetch('../api.json');
    const data = await response.json();
    return data;
}