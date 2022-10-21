// import './Paragraph.css'
import styles from './Paragraph.module.css'

console.log(styles); //return {paragraph: 'Paragraph_paragraph__y9svy', heading: 'Paragraph_heading__iQvjv'}


function Paragraph(){
    return(
        <p className={styles.paragraph}>Ha! I try to stay serious here, but...this is just so much fun.</p>
    )
}

export default Paragraph