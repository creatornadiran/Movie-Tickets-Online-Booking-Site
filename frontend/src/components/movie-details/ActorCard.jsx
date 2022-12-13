const ActorCard = ({ image, name, roleName }) => {
  return (
    <button>
      <div style={{ backgroundImage: `url(${image})` }} className="bg-actor">
        <div className="d">
          <h3 className="mb-5">{roleName}</h3>
          <h5 className="mb-5">{name}</h5>
        </div>
      </div>
    </button>
  );
};

export default ActorCard;
