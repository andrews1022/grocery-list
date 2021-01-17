import Item from './Item';

const ItemList = ({ itemList, setItemList }) => {
	return (
		<ul className='item__list'>
			{itemList.map((item, idx) => (
				<Item userInput={item} itemList={itemList} setItemList={setItemList} key={idx} />
			))}
		</ul>
	);
};

export default ItemList;
