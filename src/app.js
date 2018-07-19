import { h, app } from 'hyperapp'
import recipes from './mocks/recipes'

const state = {
    isLoading: true,
    recipeFocused: {},
    recipes: []
}

// TODO: HELPER FUNC
const hash = (val) =>
    val.split('').reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0)
        return a & a
    }, 0)

// TODO: HELPER FUNC
const recipeMap = (recipes) => {
    const recipeMap = new Map()
    recipes.forEach((recipe) => {
        recipeMap.set(hash(recipe.title), recipe)
    })
    return recipeMap
}

// TODO: merge actions from component's actions + global actions
const actions = {
    // TODO: MAKE ASYNC FETCH & HAVE UI FOR EMPTY RECIPES
    loadRecipes: () => () => ({ recipes: recipeMap(recipes), isLoading: false }),
    focusRecipe: () => (recipeFocused) => ({ recipeFocused })
}

// TODO: show recipe details when a recipe is selected
const Recipe = null

// TODO: RecipeSelector shows loading indicator / no recipe status
// TODO: RecipeSelector shows title, tags in a navigation bar / screen
// TODO: RecipeSelector includes search bar, filters
const RecipeSelector = null

const view = (state, actions) => {
    const { isLoading, recipeFocused, recipes } = state
    const { loadRecipes, focusRecipe } = actions

    return (
        <main oncreate={loadRecipes}>
            <RecipeSelector
                isLoading={isLoading}
                recipeFocused={recipeFocused}
                recipes={recipes}
                focusRecipe={focusRecipe}
            />
            {recipeFocused && <Recipe recipe={recipeFocused} />}
        </main>
    )
}

app(state, actions, view, document.body)
