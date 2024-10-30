import PropTypes from "prop-types"

export function Button(props){
    return <button>
        {props.text} - {props.name}
    </button>
}

