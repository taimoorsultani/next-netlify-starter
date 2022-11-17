export default function Subscribtion({
  id,
  title,
  value,
  description,
  disabled,
  onSubscribtionChange,
}) {
  return (
    <div
      className={`col-md-5 col-sm-12 subscribtion ${
        value ? "subscribtionChecked" : "subscribtionUnChecked"
      }`}
      disabled={disabled}
      onClick={() => (!disabled ? onSubscribtionChange(id) : () => {})}
    >
      <input
        type="checkbox"
        id={title.replace(/[ ]+/g, "").toLowerCase()}
        checked={value}
        disabled={disabled}
        onChange={() => (!disabled ? onSubscribtionChange(id) : () => {})}
      />
      <label htmlFor={title.replace(/[ ]+/g, "").toLowerCase()}>{title}</label>
      <p>{description}</p>
    </div>
  );
}
