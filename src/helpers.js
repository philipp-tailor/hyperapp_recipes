export const recipeArrayToMap = (recipes) => {
    const recipeMap = new Map()
    recipes.forEach((recipe) => recipeMap.set(recipe.id, recipe))
    return recipeMap
}
