import React, { Component } from 'react';
import styles from './Item.module.css';

class Item extends Component {
    render() {
        const { strDrink, strDrinkThumb, strInstructions } = this.props;

        const ingredients = [];
        for (let i = 1 ; i <= 15; i++) {
            if (this.props[`strIngredient${i}`]) {
                ingredients.push(`${this.props[`strIngredient${i}`]} - ${this.props[`strMeasure${i}`]}`);
            } else {
                break;
            }
        }

        return (
            <section className={styles.container}>
                <div className={styles.container__header}>
                    <img className={styles.header__image} src={strDrinkThumb} />
                    <span className={styles.header__name}>{strDrink}</span>
                </div>
                <div className={styles.container__segment}>
                    Ingredients
                    <div className={styles.container__ingredients}>
                        {ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
                    </div>
                </div>
                <div className={`${styles.container__segment} ${styles.end}`}>
                    <span>{strInstructions}</span>
                </div>
            </section>
        )
    }
}

export default Item;