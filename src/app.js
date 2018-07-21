import { h, app } from 'hyperapp'
import recipes from './mocks/recipes'

const state = {
    isLoading: true,
    recipeFocused: {},
    recipes: new Map()
}

// TODO: HELPER FUNC
const recipeMap = (recipes) => {
    const recipeMap = new Map()
    recipes.forEach((recipe) => recipeMap.set(recipe.id, recipe))
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
const RecipeSelector = ({ isLoading, recipeFocused, recipes, focusRecipe }) => (
    <ul>{Array.from(recipes.values()).map((recipe) => <RecipeListItem recipe={recipe} />)}</ul>
)

const RecipeListItem = ({ recipe }) => <li>{recipe.title}</li>

const view = (state, actions) => {
    const { isLoading, recipeFocused, recipes } = state
    const { loadRecipes, focusRecipe } = actions

    console.log(recipes)

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
