const Item = ({ userInput, itemList, setItemList }) => {
	const checkItem = (e) => {
		const groceryItem = e.target.parentElement;
		groceryItem.classList.toggle('checked');
	};

	const removeItem = (e) => {
		setItemList(itemList.filter((item) => e.target.parentElement.firstChild.textContent !== item));
		console.log(e.target.parentElement.firstChild);
	};

	return (
		<div className='item__div'>
			<li className='item'>{userInput}</li>
			<button onClick={checkItem} className='check item__button'>
				Check
			</button>
			<button onClick={removeItem} className='remove item__button'>
				Remove
			</button>
		</div>
	);
};

export default Item;
