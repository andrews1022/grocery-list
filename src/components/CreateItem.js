const CreateItem = ({ userInput, setUserInput, setItemList, itemList }) => {
	const userInputHandler = (e) => {
		setUserInput(e.target.value);
	};

	const submitItemHandler = (e) => {
		e.preventDefault();

		setItemList([...itemList, userInput]);

		setUserInput('');
	};

	return (
		<form className='input__form' onSubmit={submitItemHandler}>
			<input value={userInput} type='text' className='item__input' onChange={userInputHandler} />
			<button className='item__submit' type='submit'>
				+<i className='fas fa-cart-plus'></i>
			</button>
		</form>
	);
};

export default CreateItem;
