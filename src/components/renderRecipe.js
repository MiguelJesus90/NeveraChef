export function renderRecipe(recipe, matchCount) {
    return `
    <article class="recipe-card" style="animation-delay: ${matchCount * 0.1}s">
      <div class="match-badge">Coinciden ${matchCount} ingr.</div>
      <img src="${recipe.image}" alt="${recipe.name}" class="card-image" loading="lazy">
      <div class="card-content">
        <h3 class="card-title">${recipe.name}</h3>
        <div class="card-meta">
          <span>⏱️ ${recipe.time}</span>
          <span>📊 ${recipe.difficulty}</span>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">
          Ingredientes: ${recipe.ingredients.join(", ")}
        </p>
      </div>
    </article>
  `;
}
