import styles from "./CreateItem.module.css";

function CreateItem({
  logoSrc,
  webTitle,
  category,
  mainTitle,
  description,
  link,
}) {
  return (
    <>
      <div className={styles.item}>
        <a href={link} target="_blank" className={styles.link}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <img src={logoSrc} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.headerInfo}>
              <h3 className={styles.webTitle}>{webTitle}</h3>
              <p className={styles.category}>{category}</p>
            </div>
          </div>
          <div className={styles.mainTitleContainer}>
            <h2 className={styles.mainTitle}>{mainTitle}</h2>
          </div>
        </a>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default CreateItem;
