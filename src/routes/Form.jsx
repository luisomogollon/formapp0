import React from "react";
import { useState } from "react";
import tipoEscrituras from "./Contants.js";
import PreviewLocalFile from "./PreviewLocalfile.jsx";
import axios, { buildKeyParams } from "../lib/Axios";

const fetchAddress = async (address) => {
  const response = await axios.get(buildKeyParams(address));
  const { features } = response.data;
  const addressList = features.map((feature) => {
    const { properties } = feature;
    return properties.formatted;
  });

  return addressList;
};

const Form = () => {
  const [formContent, setFormContent] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  const [addressinput, setAddressInput] = useState("");

  function handleSelectorChange({ target: { value } }) {
    const nextContent = value >= 0 ? tipoEscrituras[value].form : [];
    setFormContent(nextContent);
  }
  async function handleAddressInput({ target: { value } }) {
    setAddressInput(value);

    const results = await fetchAddress(value);
    setSuggestions(results);
  }
  function renderFormItem(item, index) {
    if (item.type) {
      if (item.name === "direccionCondo") {
        return (
          <div key={index} className="md:col-span-5">
            <label
              className="font-medium   text-gray-900 md:col-span-2"
              htmlFor={item.name}
            >
              {item.label}
            </label>

            <input
              onChange={handleAddressInput}
              value={addressinput}
              type={item.type}
              name={item.name}
              id={`item-${index}`}
              className="h-9 border bg-gray-100 focus:outline-blue-500 mt-1 rounded px-4 w-full "
              placeholder="por favor, rellene ese campo "
            />
            <div className="  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              {suggestions.map((item, index) => (
                <div
                  onClick={() => handleSelectedSuggestions(item)}
                  className="block  py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white-row"
                  key={index}
                  data-dropdown-toggle="dropdown"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="md:col-span-5">
          <label
            className="font-medium   text-gray-900 md:col-span-2"
            htmlFor={item.name}
          >
            {item.label}
          </label>

          <input
            type={item.type}
            name={item.name}
            id={`item-${index}`}
            className="h-9 border bg-gray-100 focus:outline-blue-500 mt-1 rounded px-4 w-full "
            placeholder="por favor, rellene este campo..."
          />
        </div>
      );
    }

    return (
      <div key={index} className="font-medium text-gray-900 md:col-span-2">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          htmlFor={item.name}
        >
          {item.label}
        </label>

        <textarea
          className="block p-2.5 w-full text-sm mt-1.5  focus:outline-blue-500 bg-gray-50 rounded-ms border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name={item.name}
          placeholder="Mensaje"
        ></textarea>
      </div>
    );
  }
  function handleSelectedSuggestions(item) {
    setAddressInput(item);
    setSuggestions([]);
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl italic text-Slate-900">
            Formulario
          </h2>
          <p className="text-gray-500 italic mb-6">
            Rellenar Con Datos Personales.
          </p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg"></p>
                <p></p>
              </div>

              <div className="lg:col-span-2 ">
                <div className="grid gap-4 gap-y-2  text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 ">
                    <label
                      htmlFor="escrituras"
                      className=" font-medium  text-gray-900 md:col-span-2"
                    >
                      Tipo de Escrituras
                    </label>

                    <select
                      id="escrituras"
                      className="h-9 border mt-2 rounded focus:border-blue-400 flex flex  focus:outline-none px-4 w-full bg-gray-200"
                      onChange={handleSelectorChange}
                    >
                      <option defaultValue={null}>Seleccione una opción</option>
                      <option value={0}>{tipoEscrituras[0].title}</option>
                      <option value={1}>{tipoEscrituras[1].title}</option>
                      <option value={2}>{tipoEscrituras[2].title}</option>
                      <option value={3}>{tipoEscrituras[3].title}</option>
                    </select>
                  </div>
                  {formContent.map(renderFormItem)}
                </div>

                <div className="mt-4 space-y-2 ">
                  <span className=" font-medium grid gap-4 gap-y-2  text-sm grid-cols-1 lg:grid-cols-3  text-gray-900 md:col-span-2">
                    {" "}
                    Carga Archivo PDF
                  </span>
                  <PreviewLocalFile />
                </div>
              </div>

              <div className="md:col-span-5 mt-3 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white pt-3 font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
