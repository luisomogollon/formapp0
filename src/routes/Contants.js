import { type } from "@testing-library/user-event/dist/type";

const types = ["date", "text", "number"];

const tipoEscrituras = [
  {
    title: "CONSTITUCION DE REGIMEN EN CONDOMINIO Y DIVISION DE HIPOTECA",
    form: [
      { label: "Día ", type: types[0], name: "dia" },
      {
        label: "Personas Involucradas ",
        type: types[1],
        name: "personaInvolucrada ",
      },
      { label: "Dirección del condominio ", name: "direccionCondo", type: types[1]},
      { label: "Tipo de Hipoteca ", type: types[1], name: "tipoHipoteca" },
      { label: "Costo ", type: types[2], name: "costo" },
      { label: "Antecedentes ", name: "antecedentes" },
    ],
  },

  {
    title: "CONTRATO DE APERTURA DE CREDITO EN CUENTA CORRIENTE CON GARANTIA",
    form: [
      { label: "Día ", type: types[0], name: "dia" },
      {
        label: "Personas Involucradas",
        type: types[1],
        name: "personaInvolucrada *",
      },
      { label: "Cuenta", name: "Cuenta", type: types[2] },
      { label: "Tipo de Credito", type: types[1], name: "tipoCredito" },
      { label: "Costo", type: types[2], name: "costo" },
      { label: "Antecedentes", name: "antecedentes" },
      { label: "Numero de Contrato", type: types[1], name: "contrato" },
    ],
  },

  {
    title: "CONTRATO DE ASOCIACION EN PARTICIPACION",
    form: [
      { label: "Día", type: types[0], name: "dia" },
      {
        label: "Personas Involucradas ",
        type: types[1],
        name: "personaInvolucrada",
      },
      { label: "Empresa Involucrada", type: types[1], name: "empresa" },
      {
        label: "Porcentajes Con Maximo 100 y minimo .01",
        type: types[2],
        name: "porcentaje",
      },
      { label: "Antecedentes", name: "antecedentes" },
      { label: "Numero de Contrato", type: types[1], name: "contrato" },
    ],
  },

  {
    title: "CONTRATO DE COINVERSION",
    form: [
      { label: "Día", type: types[0], name: "dia" },
      {
        label: "Personas Involucradas",
        type: types[1],
        name: "personaInvolucrada",
      },
      { label: "Empresa Involucrada", type: types[1], name: "empresa" },
      { label: "Inversion", type: types[2], name: "inversion" },
      { label: "Inversion TOTAL", type: types[2], name: "inversionTotal" },
      { label: "Antecedentes", name: "antecedentes" },
      { label: "Numero de Contrato", type: types[1], name: "contrato" },
    ],
  },
];

export default tipoEscrituras;
