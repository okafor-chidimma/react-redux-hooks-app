export const loadFoodData =  async () => {
    const res = await window.fetch('/food-menu.json');
    if (!res.ok) {
      throw new Error('API failed');
    }
  
    const data = await res.json();
    return data;
  }