import deleteIcon from "../assets/delete.svg";

const EnviromentDisplay = ({ item, updateItem, index, inputValue }) => {
    
    const changeHandler = (e, type) => {
        console.log(index)
      let data = [...inputValue];
      data[index][type] = e.target.value;
      updateItem(data);
    };
  
    const deleteHandler = () =>{
       let data = [...inputValue]
       data.splice(index,index)
       if(index===0) data.shift()
       updateItem(data)
    }

    return (
        <div className="w-[474px] rounded-lg box-border flex flex-row flex-wrap items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-grayscale-200">
              <div className="w-40 flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  {item.key}
                </b>
              </div>
              <input
                className="w-[calc(100%_-_38px)] [border:none] [outline:none] font-medium font-body-body text-sm bg-[transparent] h-5 flex-1 relative tracking-[-0.01em] leading-[20px] text-grayscale-700 text-left inline-block min-w-[157px] p-0"
                placeholder="test"
                type="text"
                onChange={(e)=>changeHandler(e ,'value')}
                value={item.value}
              />
              <div onClick={deleteHandler} className="rounded flex flex-row items-center justify-center p-1">
                <img
                  className="h-4 w-4 relative"
                  alt=""
                  src={deleteIcon}
                />
              </div>
            </div>
    )
}

export default EnviromentDisplay