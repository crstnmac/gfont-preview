import React, { ChangeEventHandler } from 'react'
import style from './RangeSlider.module.css'

interface RangeSliderProps {
    title: string
    min: string
    max: string
    value: string
    step?: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export function RangeSlider(props: RangeSliderProps) {

    const [isHovering, setIsHovering] = React.useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const { title, min, max, value, onChange,step } = props
    return (
        <div className={style.wrapper} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <div>
                <p className={style.title}>{isHovering ? value + (title === "Size" ? "px" : title === "Leading" ? "em": '') : title}</p>
            </div>

            <input className={style.slider} type="range" min={min} max={max} value={value} step={step} onChange={onChange} />
        </div>
    )
}