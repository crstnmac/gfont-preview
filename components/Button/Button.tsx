import styles from './Button.module.css';

interface ButtonProps { 
    icon?: string
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export function Button(props: ButtonProps) {
    const { icon, className, onClick } = props
    return (
        <button className={`${styles.button} btn ${className}`} onClick={onClick}>
            {icon && <i className={`fa fa-${icon}`}></i>} {props.children}
        </button>
    )
}