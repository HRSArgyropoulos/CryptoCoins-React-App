import  {MdAddCircle} from 'react-icons/md'

const Button = (props) => {
    return (
        <div className={props.id+"Button"}>
            <MdAddCircle size="25px" style={{color: '#3a83f8', verticalAlign: "middle"}}/>
        </div>
    )
}

export default Button
