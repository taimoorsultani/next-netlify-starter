export default function Subscribtion({
  id,
  selection,
  image,
  text,
  onSubscribtionChange,
}) {
  const onClick = () => onSubscribtionChange(id);
  return (
    <div key={id} className="subscriptionItem" onClick={onClick}>
      <input
        className="checkbox"
        type="checkbox"
        id={`item-${id}`}
        checked={selection}
        onChange={onClick}
      />
      <label htmlFor={`item-${id}`} onClick={onClick}>
        <div className="inner-content" onClick={onClick}>
          {image && <img src={image} />}
          {text && <p>{text}</p>}
        </div>
      </label>
    </div>
  );
}
