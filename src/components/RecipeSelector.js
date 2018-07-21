import { h } from 'hyperapp'
import { RecipeListItem } from './RecipeListItem'

// TODO: RecipeSelector shows loading indicator / no recipe status
// TODO: RecipeSelector shows title, tags in a navigation bar / screen
// TODO: RecipeSelector includes search bar, filters (filters write to and load from URL)
// TODO: check out whether it would make sense to have this as an async function
export const RecipeSelector = ({ isLoading, recipeFocused, recipes, focusRecipe }) => (
    <nav>{Array.from(recipes.values()).map((recipe) => <RecipeListItem recipe={recipe} />)}</nav>
)
