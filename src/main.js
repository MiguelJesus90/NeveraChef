import './style.css';
import { recipes, commonIngredients } from './data/recipes.js';
import { renderRecipe } from './components/renderRecipe.js';

// Estado
const state = {
  selectedIngredients: new Set()
};

// Elementos del DOM
const ingredientSelector = document.getElementById('ingredient-selector');
const recipeList = document.getElementById('recipe-list');

// Inicialización
function init() {
  renderIngredients();
  renderRecipes();
}

// Renderizar botones de ingredientes
function renderIngredients() {
  ingredientSelector.innerHTML = commonIngredients.map(ing => {
    const isSelected = state.selectedIngredients.has(ing);
    return `
      <button 
        class="ingredient-btn ${isSelected ? 'selected' : ''}" 
        data-ingredient="${ing}">
        ${ing}
      </button>
    `;
  }).join('');

  // Añadir event listeners a los nuevos botones
  document.querySelectorAll('.ingredient-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleIngredient(btn.dataset.ingredient));
  });
}

// Alternar selección
function toggleIngredient(ingredient) {
  if (state.selectedIngredients.has(ingredient)) {
    state.selectedIngredients.delete(ingredient);
  } else {
    state.selectedIngredients.add(ingredient);
  }
  renderIngredients(); // Re-renderizar botones para actualizar estilo
  renderRecipes();     // Re-renderizar recetas basado en la nueva selección
}

// Renderizar recetas
function renderRecipes() {
  // 1. Calcular coincidencias para cada receta
  const scoredRecipes = recipes.map(recipe => {
    const matchCount = recipe.ingredients.filter(ing =>
      state.selectedIngredients.has(ing)
    ).length;
    return { ...recipe, matchCount };
  });

  // 2. Filtrar y Ordenar
  // Mostrar recetas con al menos 1 coincidencia, ordenadas por conteo de coincidencias (descendente)
  // Si no hay ingredientes seleccionados, mostrar todas (¿o quizás ninguna? Mostremos todas para descubrir)
  let filtered = [];
  if (state.selectedIngredients.size === 0) {
    filtered = scoredRecipes.sort((a, b) => b.id - a.id); // Orden por defecto
  } else {
    filtered = scoredRecipes
      .filter(r => r.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
  }

  // 3. Renderizar
  if (filtered.length === 0 && state.selectedIngredients.size > 0) {
    recipeList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <h3>🤷‍♂️ No encontramos recetas con esa combinación</h3>
        <p>Prueba a seleccionar menos ingredientes o diferentes.</p>
      </div>
    `;
    return;
  }

  recipeList.innerHTML = filtered
    .map(recipe => renderRecipe(recipe, recipe.matchCount))
    .join('');
}

// Inicio
init();
