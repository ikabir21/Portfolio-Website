import "./styles.scss";
const ContextMenu = ({coordinate, contextItem}) => {
  return (
    <ul className="context_menu" style={{left: `${coordinate.x}px`, top: `${coordinate.y}px`}}>
        {contextItem.map((data) => (<li className="context_menu_item mt-2" key={data.id}>{data.name}</li>))}
    </ul>
  );
};
export default ContextMenu;