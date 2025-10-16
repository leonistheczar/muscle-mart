export const apiData = async () => {
    const response = await fetch('../api.json');
    const data = await response.json();
    return data;
}