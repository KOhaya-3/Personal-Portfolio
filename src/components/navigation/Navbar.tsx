import styles from "./style.module.css"

function Navbar() {
  return (
    <ol className={styles.container}>
      <li className={styles.option}>Intro</li>
      <li className={styles.option}>About Me</li>
      <li className={styles.option}>Projects</li>
      <li className={styles.option}>Socials</li>
    </ol>
  )
}

export default Navbar
