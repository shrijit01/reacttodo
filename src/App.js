import React, { useRef, useState } from "react";

const App = () => {
  /*
  const [formData, setformData] = useState({ name: "", email: "" });
  const [submittedData, setsubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmittedData((prev) => [...prev, formData]);
    setformData({ name: "", enail: "" });
  };
  */
  const inputRef = useRef(null);
  const [city, setCity] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [previousSearch, setPreviousSearch] = useState([]);
  const [comp, setComp] = useState("previousSearch");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const tabHandler = (dets) => {
    setComp(dets);
  };

  const handleCity = (e) => {
    e.preventDefault();
    setCityData([...cityData,city]);
    setCity("");
    if(!previousSearch.includes(city)){
      setPreviousSearch([...previousSearch,city]);
    }
    inputRef.current.focus();
    console.log("city",city)
    console.log("cityData",cityData)
    console.log("previousSearch",previousSearch)
  };

  return (
    <>
      {/* tab container */}
      <div className=" w-full h-14 flex items-center justify-start gap-x-4 px-10 ">
        <div
          onClick={() => tabHandler("todolist")}
          className="border-2 border-black active:bg-black active:text-white cursor-pointer px-3 py-1 flex items-center justify-center rounded-md"
        >
          todo list
        </div>
        <div
          onClick={() => tabHandler("apicall")}
          className="border-2 border-black active:bg-black active:text-white cursor-pointer px-3 py-1 flex items-center justify-center rounded-md"
        >
          api call
        </div>
        <div
          onClick={() => tabHandler("previousSearch")}
          className="border-2 border-black active:bg-black active:text-white cursor-pointer px-3 py-1 flex items-center justify-center rounded-md"
        >
          previous Search
        </div>
      </div>
      {/* todo list  */}
      {comp === "todolist" ? (
        <div>
          <h1 className="px-3 py-2 text-white text-4xl bg-zinc-900 text-center ">
            Todo List
          </h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="border-zinc-900 border-2 rounded-md m-5 px-4 py-2"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="border-zinc-900 border-2 rounded-md m-5 px-4 py-2"
              placeholder="Enter description here"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              required
            />
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>

          <hr />
          <div className="p-8 ">
            {mainTask.length > 0 ? (
              mainTask.map((t, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-slate-200 rounded-md my-5 px-3 py-2"
                  >
                    <h4 className="text-md font-semibold">{t.title}</h4>
                    <p className="text-sm font-semibold">{t.desc}</p>
                    <button
                      onClick={() => deleteHandler(i)}
                      className="bg-red-500 flex items-center justify-between px-3 py-1 rounded-md text-white"
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-between bg-slate-200 rounded-md my-5 px-3 py-2">
                <h1>no task here</h1>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      {comp === "apicall" ? (
        <div className="h-[100%] relative">
          <h1 className="px-3 py-2 text-white text-4xl bg-zinc-900 text-center ">
            Api call
          </h1>
          <div className="bg-gray-100 h-[600px] flex items-center justify-between  w-full overflow-hidden px-10 py-4">
            <div className="bg-gray-200 h-[250px]  w-[200px] rounded-md relative overflow-hidden">
              <div className=" h-[70%]">
                <img
                  className="h-[100%] w-[100%] bg-cover bg-center"
                  src="./favicon.ico"
                  alt="api call "
                />
              </div>
              <div className=" h-[30%] tracking-tighter px-2 py-2">
                <h2 className="text-xl font-semibold">title</h2>
                <p>lorem ipsum dollar sit amet</p>
              </div>
            </div>
            <div className="bg-gray-200 h-[250px]  w-[200px] rounded-md relative overflow-hidden">
              <div className=" h-[70%]">
                <img
                  alt="api call "
                  className="h-[100%] w-[100%] bg-cover bg-center"
                  src="./favicon.ico"
                />
              </div>
              <div className=" h-[30%] tracking-tighter px-2 py-2">
                <h2 className="text-xl font-semibold">title</h2>
                <p>lorem ipsum dollar sit amet</p>
              </div>
            </div>
            <div className="bg-gray-200 h-[250px]  w-[200px] rounded-md relative overflow-hidden">
              <div className=" h-[70%]">
                <img
                  alt="api call "
                  className="h-[100%] w-[100%] bg-cover bg-center"
                  src="./favicon.ico"
                />
              </div>
              <div className=" h-[30%] tracking-tighter px-2 py-2">
                <h2 className="text-xl font-semibold">title</h2>
                <p>lorem ipsum dollar sit amet</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {comp === "previousSearch" ? (
        <div className="h-[100%] relative">
          <h1 className="px-3 py-2 text-white text-4xl bg-zinc-900 text-center ">
            previous Search
          </h1>
          <div className="bg-gray-100 h-[600px]   w-full overflow-hidden px-10 py-4">
            <div>
              <form onSubmit={handleCity}>
                <input
                ref={inputRef}
                  className="h-12 w-96 rounded-md border- border-gray-500 px-2"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <button className="bg-zinc-900 text-white ml-2 px-4 py-2 rounded-md">
                  search
                </button>
              </form>
              <div className="flex items-center justify-start gap-2 mt-4">
              {cityData && cityData.map((elem,idx)=>(
                <p key={idx}>{elem}</p>
              ))}
              </div>
              <div>
              {previousSearch.map((elem, idx) => (
                 <button key={idx} className=" border-2 border-black mt-4 text-black ml-2 px-[12px] py-[5px] rounded-md">
                  {elem} {/* <span className="bg-red-500 px-[8px]  rounded-xl">X</span> */}
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <div>
        <div className=" gap-3 p-2   flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <input
              className="px-3 py-2 border rounded-md border-black-800 w-[80%]"
              value={formData.name || ""}
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Set Your Name"
              required
              autoComplete="name"
            />
            <input
              className="px-3 py-2 border rounded-md border-black-800 w-[80%]"
              value={formData.email || ""}
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Set Your Email"
              required
              autoComplete="email"
            />
            <Button name="submit" />
          </form>
          {submittedData.map((elem, i) => (
            <div key={i} className="mt-4 border p-4 rounded shadow bg-white">
              <p>
                <strong>Name:</strong> {elem.name || "-"}
              </p>
              <p>
                <strong>Email:</strong> {elem.email || "-"}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default App;
