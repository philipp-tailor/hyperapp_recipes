import { h } from 'hyperapp'
import { FilterTag } from './FilterTag'

export const RecipeListItem = ({ recipe }) => (
    <div>
        {recipe.title}
        {recipe.tags.map((tag) => <FilterTag tag={tag} />)}
    </div>
)
