import { useEffect, useRef, useState } from "react"
import { Font } from "../../types/schema"
import { RangeSlider } from "../RangeSlider"
import style from "./FontCard.module.css"

interface FontCardProps {
    data: Font
    onClick?: (font: Font) => void
    fontSize?: number
}


function fontDataToCSS(data: Font) {
    const { subsets, family, variants, files } = data
    const weight = variants.includes('regular') ? 'regular' : variants[0]
    const url = files[weight]
    const surl = url.slice(0, 4) + 's' + url.slice(4)

    return `
    @font-face{
        font-family: '${family} script=${subsets.includes('latin') ? 'latin' : subsets[0]} rev=1';
        font-style: ${weight === 'regular' ? 'normal' : 'italic'};
        font-weight: ${weight};
        font-display: block;
        src: url(${surl}) format('woff2');
    }`
}

function fontDataToInlineStyle(data: Font, fontSize: number,fontWeight: string) {
    const { subsets, family, variants } = data
    const props: string[] = []
    props.push(
        `"${family} script=${subsets.includes('latin') ? 'latin' : subsets[0]} rev=1"`
    )
    props.push(
        `font-weight: ${fontWeight}`
    )

    props.push('font-style: normal')
    props.push('font-stretch: normal')
    props.push('line-height: initial')
    props.push(`font-size: ${fontSize}px`)

    return `font-family: ${props.join('; ')}`

}

export function FontCard(props: FontCardProps) {
    const { data, onClick, fontSize = 40 } = props
    const fontRef = useRef<HTMLInputElement>(null)
    const variantLen = data.variants.length
    const [fontOption, setFontOption] = useState({
        size: 40,
        weight: data.variants[0] === 'regular' ? '400' : data.variants[0] === 'italic' ? '400' : data.variants[0],
        variant: data.variants[0],
        leading: 0
    })
    const [previewText, setPreviewText] = useState('Hello World')
    
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setPreviewText(e.target.value)
    }

    const handleChange = (e: any, key:any) => {
        setFontOption({...fontOption, [key]: e.target.value})
    }

    useEffect(() => {
        if (fontRef.current) {
            fontRef.current.setAttribute(
                'style',
                fontDataToInlineStyle(data, fontOption.size, fontOption.weight)
            )
        }
    }, [data, fontOption.size,fontOption.weight])

    useEffect(() => {
        const style = document.createElement('style')
        style.id = `google-font-${data.family.replace(/\s+/g, '-').toLowerCase()}`
        style.innerHTML = fontDataToCSS(data)

        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [data])


    return (
        <div>
            <p>{data.family}</p>
            <p>{data.variants.length} {`style${variantLen > 1 ? 's' : ''}`}</p>

            <div className={style.row}>
                <RangeSlider title='Size' min={20} max={280} value={fontOption.size} onChange={(e) => handleChange(e,'size')} />
                <RangeSlider title='Weight' min={200} max={900} step={100} value={parseInt(fontOption.weight)} onChange={(e) => handleChange(e,'weight')} />
                <RangeSlider title='Leading' min={20} max={280} value={fontOption.leading} onChange={(e) => handleChange(e, 'leading')} />
            </div>

            <p>{data.family}</p>

            <input type={"text"} className={style.input} ref={fontRef} value={previewText} onChange={handleChangeText} />
        </div>
    )
}