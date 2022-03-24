import './buttons.scss'



const Button = ({span, name}) => {
    return <button className={name}><span>{span}</span></button>
}

export default Button;