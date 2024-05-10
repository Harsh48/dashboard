import { useRef, useState } from "react";
import add from "../assets/add.svg";
import download from "../assets/download.svg";
import upload from "../assets/upload.svg";
import InputFieldSet from "./InputFieldSet";

const EnviromentTab = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState([]);
  const fileHandler = () => {
    inputRef.current?.click();
  };

  const changeHandler = (file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      const lines = text.split(/\r?\n/);
      let inputData = [];
      const regex = /'|"/g;
      for (const line of lines) {
        inputData.push({
          key: line.split("=")[0].trim().replace(regex, ''),
          value: line.split("=")[1].trim().replace(regex, ''),
        });
      }
      console.log(inputData)
      setInputValue(inputData)
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-grayscale-700 font-body-body">
        <div className="self-stretch rounded-lg bg-grayscale-0 box-border flex flex-col items-start justify-start pt-3.5 px-[15px] pb-[289px] gap-[12px] min-h-[363px] max-w-full border-[1px] border-solid border-grayscale-200 mq450:pt-5 mq450:pb-[188px] mq450:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] max-w-full">
            <b className="flex-1 relative tracking-[-0.01em] leading-[24px] inline-block min-w-[136px] max-w-full">
              Environment variables
            </b>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div
                className="rounded flex flex-row items-center justify-start p-1"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
              >
                <img className="h-4 w-4 relative" alt="" src={add} />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-1">
                <img className="h-5 w-5 relative" alt="" src={download} />
              </div>
            </div>
          </div>
          <div className="w-[600px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium inline-block max-w-full">
            No environment variable created.
          </div>
        </div>
      </div>

      <div
        id="drawer-navigation"
        class="fixed top-0 right-0 z-40 w-5/12 h-screen p-4 bg-white dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
          <div className="self-stretch rounded-lg box-border flex flex-col items-end justify-start py-2.5 px-[11px] gap-[24px] max-w-full text-xs text-grayscale-700 border-[1px] border-solid border-grayscale-200">
            <div className="self-stretch flex flex-col items-end justify-start gap-[4px] max-w-full">
              <button className="cursor-pointer pt-[22px] px-[7px] pb-2.5 bg-grayscale-100 self-stretch rounded flex flex-col items-center justify-center border-[1px] border-dashed border-grayscale-300">
                <div
                  onClick={fileHandler}
                  className="self-stretch flex flex-col items-center justify-center py-0 px-5 gap-[8px]"
                >
                  <img className="w-4 h-4 relative" alt="" src={upload} />
                  <input
                    ref={inputRef}
                    type="file"
                    name="image-upload"
                    id="input"
                    className="hidden"
                    onChange={(e) => changeHandler(e.target.files[0])}
                  />
                  <b className="relative text-sm tracking-[-0.01em] leading-[20px] font-button-button-2 text-grayscale-800 text-left">
                    Click or drag file(s) here to upload
                  </b>
                </div>
              </button>
              <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium inline-block max-w-full">
                  Upload a .env file. It should not be greater than 5KB.
                </div>
              </div>
            </div>
            {inputValue.map((item,i)=>{
               return(<InputFieldSet item={item} updateItem={setInputValue} index={i} inputValue={inputValue}/>)
            })}
            <div className="w-[180px] flex flex-row items-center justify-start gap-[8px]">
              <button className="cursor-pointer py-1.5 px-[23px] bg-grayscale-0 flex-1 rounded overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-grayscale-800">
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-[22px] w-[18px] relative hidden"
                    alt=""
                    src="/masked-icon.svg"
                  />
                  <b className="w-12 relative text-sm tracking-[-0.01em] leading-[20px] inline-block font-button-button-2 text-grayscale-800 text-right min-w-[48px]">
                    Cancel
                  </b>
                  <img
                    className="h-[22px] w-[18px] relative hidden"
                    alt=""
                    src="/masked-icon.svg"
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-6 bg-primary-800 rounded overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-[22px] w-[18px] relative hidden"
                    alt=""
                    src="/masked-icon.svg"
                  />
                  <b className="relative text-sm tracking-[-0.01em] leading-[20px] inline-block font-button-button-2 text-grayscale-0 text-right min-w-[28px]">
                    Add
                  </b>
                  <img
                    className="h-[22px] w-[18px] relative hidden"
                    alt=""
                    src="/masked-icon.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviromentTab;
