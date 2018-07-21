// app
import { h, app } from 'hyperapp'
// data
import recipes from './data/recipes'
// UI components
import { RecipeSelector } from './components/RecipeSelector'
import { Recipe } from './components/Recipe'
// helpers
import { recipeArrayToMap } from './helpers'

const state = {
    isLoading: true,
    recipeFocused: {},
    recipes: new Map()
}

// TODO: scope actions
const actions = {
    loadRecipes: () => () => ({ recipes: recipeArrayToMap(recipes), isLoading: false }),
    focusRecipe: () => (recipeFocused) => ({ recipeFocused })
}

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
