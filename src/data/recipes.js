export const commonIngredients = [
    "Huevos", "Patatas", "Cebolla", "Arroz", "Tomate", "Ajo", "Carne", "Pollo", "Pimiento", "Aceite", "Pan", "Leche"
];

export const recipes = [
    {
        id: 1,
        name: "Tortilla de Patata",
        ingredients: ["Huevos", "Patatas", "Cebolla", "Aceite"],
        image: "/images/tortilla.png",
        time: "30 min",
        difficulty: "Media"
    },
    {
        id: 2,
        name: "Arroz a la Cubana",
        ingredients: ["Arroz", "Huevos", "Tomate", "Ajo", "Aceite"],
        image: "/images/arroz.png",
        time: "20 min",
        difficulty: "Fácil"
    },
    {
        id: 3,
        name: "Huevos Rotos con Jamón",
        ingredients: ["Huevos", "Patatas", "Aceite", "Carne"], // Using 'Carne' as generic for Jamón/Meat
        image: "/images/huevos-rotos.png",
        time: "25 min",
        difficulty: "Fácil"
    },
    {
        id: 4,
        name: "Estofado de Carne",
        ingredients: ["Carne", "Patatas", "Zanahoria", "Cebolla", "Ajo", "Tomate"],
        image: "/images/estofado.png",
        time: "90 min",
        difficulty: "Difícil"
    },
    {
        id: 5,
        name: "Pollo al Ajillo",
        ingredients: ["Pollo", "Ajo", "Aceite", "Perejil"],
        image: "/images/pollo.png",
        time: "45 min",
        difficulty: "Media"
    },
    {
        id: 6,
        name: "Pan Tumaca",
        ingredients: ["Pan", "Tomate", "Ajo", "Aceite"],
        image: "/images/pan-tumaca.png",
        time: "5 min",
        difficulty: "Muy Fácil"
    }
];
