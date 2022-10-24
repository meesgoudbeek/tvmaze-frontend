interface alertProps {
    type: string
    message: string
}

const Alert: React.FC<alertProps> = ({ type, message }) => {
    return (
        <div className={`alert alert-${type}`}>
            <i className="fas fa-info-circle"></i>
            {message}
        </div>
    )
}

export default Alert
