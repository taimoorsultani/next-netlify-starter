export default function SubscribtionWrapper({ title, description, children }) {
  return (
    <div className="container">
      <h6>{title}</h6>
      {description && <p>{description}</p>}
      <div className="row">
        <div className="col-md-10 col-sm-12 subscriptionList">{children}</div>
        <div className="col-md-2 col-sm-12"></div>
      </div>
    </div>
  );
}
