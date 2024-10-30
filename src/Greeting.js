export function Greeting({title, name="user"}){
    return <div>
        <h1>{title}, dice {name}</h1>
    </div>
}

export function UserCard(props){
    console.log(props)
    return <div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.married ? 'married':'single'}</p>
        <ul>
            <li>City: {props.address.city}</li>
            <li>Address: {props.address.street}</li>
        </ul>
    </div>
}