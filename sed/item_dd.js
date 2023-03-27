async function fetchRandomEquipment() {
  const EQUIPMENT_COLLECTION = "https://dnd5eapi.co/api/equipment";
  // Get a list of all items
  const listRes = await fetch(EQUIPMENT_COLLECTION);
  const { count, results } = await listRes.json();

  // Select a random item's index
  const { index } = results[Math.floor(Math.random() * count)];

  // Fetch the random item
  const equipmentRes = await fetch(`${EQUIPMENT_COLLECTION}/${index}`);
  const equipment = await equipmentRes.json();

  return equipment;
}

module.exports = fetchRandomEquipment;
