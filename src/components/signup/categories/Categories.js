import React from "react";
import styles from "./Categories.module.css";
const categories = props => {
  return (
    <div className={styles.containerCategories}>
      <h2 className={styles.title}>What do you want talk about?</h2>
      <form>
        <select
          size="10"
          className={styles.selectCategory}
          onChange={value => props.selectChange(value)}
          value={props.selectedCategory}
        >
          <option>Cars</option>
          <option>Computers</option>
          <option>Everything</option>
          <option>Feelings</option>
          <option>Games</option>
          <option>Music</option>
          <option>Movies</option>
          <option>Politics</option>
          <option>Relationships</option>
          <option>Science</option>
          <option>Sports</option>
        </select>
        <button type="submit" className={styles.buttonCategory} onClick={props.searchHandler}>
          Search
        </button>
        <button className={styles.buttonCategory} onClick={props.backHandler}>
          Back
        </button>
      </form>
    </div>
  );
};

export default categories;
