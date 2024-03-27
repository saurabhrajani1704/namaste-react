const ItemList = ({items}) => {
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2">
                    <div>
                        <span className="text-xl">{item.card.info.name}</span>
                        <span>{item.card.info.price}</span>
                    </div>
                    <p>{item.card.info.description}</p>
                </div>
            ))}
        </div>
    ); 
};

export default ItemList;