import React, { useState } from "react";

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
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler =(i)=>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }


  return (
    <>
      <h1 className="px-3 py-2 text-white text-4xl bg-zinc-900 text-center">
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
                <p className="text-sm font-semibold">{t.title}</p>
                <button onClick={()=> deleteHandler(i)}  className="bg-red-500 flex items-center justify-between px-3 py-1 rounded-md text-white">
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <div
            className="flex items-center justify-between bg-slate-200 rounded-md my-5 px-3 py-2"
          >
            <h1>no task here</h1>
          </div>
        )}
      </div>
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
