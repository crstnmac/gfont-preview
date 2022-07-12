import styles from './Card.module.css';
interface CardProps {
    title: string
    author: string
    stylesCount: number
    previewText: string
    className?: string
 }

export function Card(props: CardProps) {
    const { title, author, stylesCount, previewText, className } = props
    
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.title}>{stylesCount}</div>
            <div className={styles.content}>{ title }</div>
            <div className={styles.content}>{ author }</div>
 
            <div className={styles.content}>{ previewText }</div>
        </div>
    )
}