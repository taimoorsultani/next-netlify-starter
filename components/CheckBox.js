export default function Checkbox({
  id,
  selection,
  text,
  onSubscribtionChange,
}) {
  const onClick = () => onSubscribtionChange(id);
  return (
    <div key={id} className="checkBoxItem" onClick={onClick}>
      <input
        className="checkbox"
        type="checkbox"
        id={`item-${id}`}
        checked={selection}
        onChange={onClick}
      />
      <label htmlFor={`item-${id}`} onClick={onClick}>
        <div className="inner-content" onClick={onClick}>
          <p>{text}</p>
        </div>
      </label>
    </div>
  );
}
