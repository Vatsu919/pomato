const filterItems = (items, filterType) => {
    if(filterType==='none')
    {
        return items;
    }
    const newItems = items.filter(item => item.cuisineType === filterType);
    return newItems;
}
export default filterItems;