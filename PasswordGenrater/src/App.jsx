import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(null);

  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(true);
  const [number, setNumber] = useState(true);
  const [password, setPassword] = useState("");


  // 🔥 Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (character) {
      str += "!@#$%^&*(){}";
    }

    if (number) {
      str += "1234567890";
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
  }, [length, character, number]);

  // 🔥 Auto generate
  useEffect(() => {
    passwordGenerator();
  }, [length, character, number]);

  // 🔥 Auto focus on load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-700">
      <div className="bg-gray-900 text-white p-10 rounded-2xl shadow-lg w-130">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex justify-between  gap-2 ">
          <input
            ref={inputRef}
            type="text"
            value={password}
            readOnly
            placeholder="Generated Password"
            className=" rounded-lg p-2 text-black text-2xl w-5xl bg-amber-50"
          />

          {/* Copy Button */}
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(password);
              inputRef.current.focus(); // 🔥 focus after copy
            }}
            className="bg-blue-500 px-4 rounded-lg"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block mb-1">Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between mb-4">
          <div>
            <input
              type="checkbox"
              id="character"
              checked={character}
              onChange={() => setCharacter(!character)}
            />
            <label htmlFor="character" className="ml-2">
              Special Char
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="number"
              checked={number}
              onChange={() => setNumber(!number)}
            />
            <label htmlFor="number" className="ml-2">
              Numbers
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          type="button"
          onClick={passwordGenerator}
          className="w-full bg-green-500 py-2 rounded-lg font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default App;
