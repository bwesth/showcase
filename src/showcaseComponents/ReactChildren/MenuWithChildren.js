
function Menu(props){
    return (
        <nav className="nav">
            <h2 className="title">Menu</h2>
            <ul className="list">
                {props.children}
            </ul>
        </nav>
    )
}

export default Menu;