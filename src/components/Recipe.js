import { h } from 'hyperapp'

const ingredient = (text) => <li>{text}</li>
const step = (text) => <li>{text}</li>

export const Recipe = ({ recipe }) => {
    const { title, duration, source, tags, ingredients, steps } = recipe
    return (
        <article class="recipe">
            <h1>{title}</h1>
            <p class="metadata">
                {duration && <div>Duration: </div>}
                {duration && <div>{duration} min</div>}
                {source && <div>Source: </div>}
                {source && <div>{source}</div>}
            </p>
            <div class="content">
                <div class="ingredients">
                    <h2>Ingredients</h2>
                    <ul>{ingredients.map(ingredient)}</ul>
                </div>
                <div class="steps">
                    <h2>Steps</h2>
                    <ol>{steps.map(step)}</ol>
                </div>
            </div>
        </article>
    )
}
