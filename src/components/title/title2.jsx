const Title2 = (props) => {
  return (
    <div>
      <p className="text-[8px] font-semibold">{props.year}</p>
      <p className="text-[8px]">{props.organization}</p>
      <p className="text-[10px] font-bold">{props.role}</p>
    </div>
  );
};
export default Title2;
