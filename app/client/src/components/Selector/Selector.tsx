import "./Selector.style.scss";

type SelectorProps = {
  label: string;
  name: string;
  placeHolder: string;
  value: string;
  handler: Function;
  LabelIcon: any
};

const Selector = ({
  label,
  name,
  placeHolder,
  value,
  handler,
  LabelIcon,
}: SelectorProps) => {  
  return (
    <div className="selector">
      <div className="input-bloc">
        <label>
          {LabelIcon}
          {label}
        </label>
        <select
          onChange={(e) => handler(e.target.value)}
          name={name}
          placeholder={placeHolder}
          value={value}
        >
          <option value="">Option1</option>
          <option value="">Option2</option>
        </select>
      </div>
    </div>
  );
};

export default Selector;
