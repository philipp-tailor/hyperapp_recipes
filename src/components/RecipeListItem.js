import { h } from 'hyperapp'
import { FilterTag } from './FilterTag'

export const RecipeListItem = ({ recipe, recipeFocused, onClick }) => (
    <a onclick={() => onClick(recipe)} class={recipeFocused.id === recipe.id ? 'focused' : ''}>
        <h2>{recipe.title}</h2>
        {recipe.tags.map((tag) => <FilterTag tag={tag} />)}
    </a>
)
