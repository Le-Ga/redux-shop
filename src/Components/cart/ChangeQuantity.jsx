function ChangeQuantity(props) {
  const { quantity, setQuantity } = props;

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="block-quantity">
      <button onClick={addQuantity}>
        <i className="material-icons">add</i>
      </button>
      <span>{quantity}</span>
      <button onClick={removeQuantity}>
        <i className="material-icons">remove</i>
      </button>
    </div>
  );
}

export { ChangeQuantity };
