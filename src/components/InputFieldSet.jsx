import deleteIcon from "../assets/delete.svg";

const InputFieldSet = ({ item, updateItem, index, inputValue }) => {
  const changeHandler = (e, type) => {
    let data = inputValue;
    data[index][type] = e.target.value;
    updateItem(data);
  };
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[24px] mq750:flex-wrap">
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[190px] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start">
          <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[39px]">
            Name
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[154px] text-xs">
          <div className="self-stretch h-[18px] relative tracking-[-0.01em] leading-[18px] font-medium hidden">
            Filled form field (text optional)
          </div>
          <div className="self-stretch rounded bg-grayscale-0 flex flex-row items-center justify-start py-1.5 px-[7px] border-[1px] border-solid border-grayscale-500">
            <input
              className="w-full [border:none] [outline:none] font-medium font-button-button-2 text-sm bg-[transparent] h-5 flex-1 relative tracking-[-0.01em] leading-[20px] text-grayscale-800 text-left inline-block min-w-[133px] p-0"
              placeholder="abc"
              type="text"
              onChange={(e) => changeHandler(e, "key")}
              value={item.key}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[190px] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start">
          <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[37px]">
            Value
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[129px] text-xs">
          <div className="self-stretch h-[18px] relative tracking-[-0.01em] leading-[18px] font-medium hidden">
            Value
          </div>
          <div className="self-stretch rounded bg-grayscale-0 flex flex-row items-center justify-start py-1.5 px-[7px] gap-[8px] border-[1px] border-solid border-grayscale-500">
            <input
              className="w-[calc(100%_-_30px)] [border:none] [outline:none] font-medium font-button-button-2 text-sm bg-[transparent] h-5 flex-1 relative tracking-[-0.01em] leading-[20px] text-grayscale-800 text-left inline-block min-w-[110px] p-0"
              placeholder="123"
              type="text"
              onChange={(e) => changeHandler(e, "value")}
              value={item.value}
            />
          </div>
        </div>
        <div className="rounded flex flex-row items-center justify-center p-1">
          <img className="h-4 w-4 relative" alt="" src={deleteIcon} />
        </div>
      </div>
    </div>
  );
};

export default InputFieldSet;
