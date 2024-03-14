import axios, { AxiosResponse } from 'axios';

import Onboarding from 'components/Forms/OnboardingForm';

export const URL = 'http://72.167.49.215:3002/api/v1';

export interface Onboarding {
  tipo_person: string;
  razon_social: string;
  comercial_name: string;
  email: string;
  description: string;
  phone: string; // Campo adicional
  pais: string; // Campo adicional
  ciudad: string; // Campo adicional
  industry: string; // Campo adicional
  expo_politica: string;
  doc: string; // Cambiado a tipo string para almacenar el nombre del archivo
  doc2: string; // Cambiado a tipo string para almacenar el nombre del archivo
  doc3: string; // Cambiado a tipo string para almacenar el nombre del archivo
  doc4: string; // Cambiado a tipo string para almacenar el nombre del archivo
  doc5: string; // Cambiado a tipo string para almacenar el nombre del archivo
  // Añade el resto de propiedades necesarias aquí
}

export const saleRequest = async (
  onboarding: Onboarding
): Promise<AxiosResponse> => {
  console.log(onboarding);
  const response = await axios.post(
    `${URL}/onboarding/createonboarding`,
    onboarding,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  console.log(onboarding);
  console.log(response.data);
  return response;
};

export const getOnboardings = (): Promise<AxiosResponse> =>
  axios.get(`${URL}/getonboardings`);

// export const getSale = (id: number): Promise<AxiosResponse> =>
//   axios.get(`${URL}/getsale/${id}`);
