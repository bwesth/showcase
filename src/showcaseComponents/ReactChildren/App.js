import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuWithChildren from "./MenuWithChildren";
import "../../App.css";

function App() {
  const menuItems = [
    { name: "Home" },
    { name: "Something" },
    { name: "Something else" },
    { name: "Profile" },
  ];

  return (
    <div className="app">
      <div className="menu-demo">
        <Menu items={menuItems} />

        <MenuWithChildren>
          {/* {menuItems.map((item) => ( */}
            <MenuItem name={menuItems[0].name} />
            <MenuItem name={menuItems[1].name} />
          {/* ))} */}
        </MenuWithChildren>
      </div>
    </div>
  );
}

export default App;
