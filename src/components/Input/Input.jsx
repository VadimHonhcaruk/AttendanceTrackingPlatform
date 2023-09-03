import c from './Input.module.css';

export const Input = ({ inputname, label, type, value, onchange }) => {

    return (
        <div className={c.inputCont}>
            <label className={c.label} htmlFor={inputname}>{label}</label>
            <input className={c.input} id={inputname} type={type} value={value} onChange={(e) => onchange(e.target.value)} />
        </div>
    )
}