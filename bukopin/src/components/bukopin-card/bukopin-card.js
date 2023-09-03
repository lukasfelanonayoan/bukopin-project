import "./bukopin-card.css";

export default function BukopinCard(props) {
  const dataProps = props.data;
  const image = dataProps.image ? require("../../images/" + dataProps.image) : null;
  return (
    <div className="width-box px-3 py-2">
      <div className="card-box">
        {image ? (
          <div className="w-100">
            <img className="w-100" src={image} alt="item"></img>
          </div>
        ) : (
          <div className="w-100"></div>
        )}

        <div className={`d-flex justify-content-between ${image ? "pt-3" : ""}`}>
          <div className="col-md-7 col-12 pe-md-2 text-md-start text-center">
            <h3 className="title mb-0">{dataProps.title}</h3>
          </div>
          <div className="col-5 ps-2 text-end d-md-block d-none">
            <button className="button-add">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
