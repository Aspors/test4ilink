import './buttons.scss'

// TODO че с пропсами? почему name - это класс, а span - это человекочитабельный title? 

const Button = ({span, name}) => {
    return <button className={name}><span>{span}</span></button>
}

export default Button;