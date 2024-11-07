import styles from "./introStyle.module.css"
import profilePic from "./profilePic.jpg"

function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.introText}>
        <p className={styles.title}>My name is Kelvin Ohaya</p>
        <p className={styles.description}>An aspiring software enginner with an interest in web and game development</p>
      </div>
      <img className={styles.picture} src={profilePic} alt="A picture of me"/>
    </div>
  )
}

export default Intro
