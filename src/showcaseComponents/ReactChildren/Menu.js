import MenuItem from './MenuItem'
function Menu(props){
    return (
        <nav className="nav">
            <h2 className="title">Menu</h2>
            <ul className="list">
                {props.items.map(item => <MenuItem name={item.name}/>)}
            </ul>
        </nav>
    )
}

export default Menu;