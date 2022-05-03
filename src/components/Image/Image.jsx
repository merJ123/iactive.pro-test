import PropTypes from "prop-types"

const Image = (props) => {
    return(
        <img 
            src={props.src}
            alt={props.alt}
            className={props.className} 
        />
    )
}

Image.propTypes ={
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

Image.defaultProps = {
    src: 'https://via.placeholder.com/300x300',
    alt: 'image name',
    className: ''
}

export default Image;