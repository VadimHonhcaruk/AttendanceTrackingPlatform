import c from './CreatePage.module.css';

export const Input = ({ label, name, setName, pattern, type = 'text', style, onInput, maxLength = 30, min, max, onfocus, onBlur }) => {

    return (
        <div className={c.inputCont}>
            <label className={c.label}>{label}</label>
            <input className={c.input + ' ' + style} maxLength={maxLength} value={name} onChange={(e) => setName(e.target.value)} type={type} pattern={pattern} onInput={onInput} onFocus={onfocus} onBlur={onBlur} min={min} max={max} />
        </div>
    )
}