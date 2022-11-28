export const getToday = () => {
    let today = new Date();
    return today.toISOString().slice(0,10);
}