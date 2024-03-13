import axios, { AxiosResponse } from 'axios';

import Onboarding from 'components/Forms/OnboardingForm';

export const URL = 'http://localhost:3000/api/v1';

interface Onboarding {
  tipo_person: string;
  razon_social: string;
  comercial_name: string;
  email: string;
  description: string;
  imagen: string;
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
