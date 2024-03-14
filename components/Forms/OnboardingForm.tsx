import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import Swal from 'sweetalert2';

import styles from './OnboardingForm.module.css';
import { saleRequest } from './helper/service';
import { Onboarding } from './helper/service';

const OnboardingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showAdditionalFields, setShowAdditionalFields] = useState(true);
  const [showOtroField, setShowOtroField] = useState(true);
  const [prueba, setPrueba] = useState('No');
  const [errors, setErrors] = useState([]);
  const [hideError, setHideError] = useState(false);
  console.log(hideError);
  const [isChecked, setIsChecked] = useState(false);
  const [ciudades, setCiudades] = useState([]);
  const [paises, setPaises] = useState([]);

  console.log(errors);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const onSubmit = handleSubmit(async data => {
    try {
      console.log('guardando!!!');
      const newData = { ...data };
      if (!newData.nombre) newData.nombre = null;
      if (!newData.apellido) newData.apellido = null;
      if (!newData.razon_social) newData.razon_social = null;
      if (!newData.expo_politica) newData.expo_politica = null;

      const onboardingData: Onboarding = {
        tipo_person: data.tipo_person,
        razon_social: data.razon_social,
        comercial_name: data.comercial_name,
        email: data.email,
        description: data.description,
        phone: data.phone,
        pais: data.pais,
        ciudad: data.ciudad,
        industry: data.industry,
        expo_politica: data.expo_politica,
        doc: data.doc[0] ? data.doc[0] : '',
        doc2: data.doc2[0] ? data.doc2[0] : '',
        doc3: data.doc3[0] ? data.doc3[0] : '',
        doc4: data.doc4[0] ? data.doc4[0] : '',
        doc5: data.doc5[0] ? data.doc5[0] : '',
        // Añade el resto de propiedades necesarias aquí
      };
      // const formData = new FormData();
      // formData.append('tipo_person', data.tipo_person);
      // formData.append('razon_social', data.razon_social);
      // formData.append('nombre', data.nombre);
      // formData.append('apellido', data.apellido);
      // formData.append('comercial_name', data.comercial_name);
      // formData.append('email', data.email);
      // formData.append('description', data.description);
      // formData.append('phone', data.phone);
      // formData.append('pais', data.pais);
      // formData.append('ciudad', data.ciudad);
      // formData.append('industry', data.industry);
      // formData.append('expo_politica', data.expo_politica);
      // formData.append('doc', data.doc[0] ? data.doc[0] : '');
      // formData.append('doc2', data.doc2[0] ? data.doc2[0] : '');
      // formData.append('doc3', data.doc3[0] ? data.doc3[0] : '');
      // formData.append('doc4', data.doc4[0] ? data.doc4[0] : '');
      // formData.append('doc5', data.doc5[0] ? data.doc5[0] : '');
      const response = await saleRequest(onboardingData);
      console.log('respuesta');

      if (response.data.message) {
        handleSuccess(response);
        setIsChecked(false);
        setErrors([]);
        reset();
      }
    } catch (error: any) {
      console.error('Error al hacer la solicitud:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
        console.log(errors);
        handleError(errors);
      }
    }
  });

  const handleSuccess = (response: any) => {
    console.log('exitoo');
    // if (errors.length === 0 && success) {
    Swal.fire(`${response.data.message}!`, 'Transaccion con Exito!', 'success');
    // }
  };

  const handleError = async (errors: any) => {
    if (errors.length > 0) {
      for (const error of errors) {
        toast.error('Ops! Algo ha ido Mal!', {
          description: `${error.msg}`,
          position: 'top-center',
        });
      }
      setHideError(true);
      setTimeout(() => {
        setHideError(false);
      }, 3000);
    }
  };

  const handlePaisChange = async (event: any) => {
    const countryCode = event.target.value;
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?country=${countryCode}&featureCode=PPL&username=chernan`
      );
      setCiudades(response.data.geonames);
    } catch (error) {
      console.error('Error al obtener las ciudades:', error);
    }
  };

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await axios.get(
          'http://api.geonames.org/countryInfoJSON?username=chernan'
        );
        setPaises(response.data.geonames);
      } catch (error) {
        console.error('Error al obtener la lista de países:', error);
        return error;
      }
    };

    fetchPaises();
  }, []);

  return (
    <div>
      <Toaster expand={true} richColors visibleToasts={3}></Toaster>

      <h1>Formulario Onboarding</h1>
      <p>
        Al diligenciar este formulario usted está solicitando utilizar los
        servicios de Benky para el primer nivel de transaccionalidad.{' '}
      </p>
      <form
        encType={'multipart/form-data'}
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div>
          <label>Tipo de Persona</label>
          <select
            {...register('tipo_person')}
            name='tipo_person'
            onChange={e => {
              setShowAdditionalFields(e.target.value === 'NIT');
            }}
          >
            <option selected value='NIT'>
              NIT
            </option>
            <option value='CC'>Cedula de Ciudadania</option>
          </select>
          {showAdditionalFields ? (
            <div>
              <label>Razon Social</label>
              <input type='text' {...register('razon_social')} />
              <span className={styles.span_red}> *</span>
            </div>
          ) : (
            <div>
              <div>
                <label>Nombre</label>
                <input
                  type='text'
                  {...register('nombre', { required: false })}
                />
                <span className={styles.span_red}> *</span>
              </div>
              <div>
                <label>Apellido</label>
                <input
                  type='text'
                  {...register('apellido', { required: false })}
                />
                <span className={styles.span_red}> *</span>
              </div>
            </div>
          )}
        </div>
        <div>
          <label>Nombre Comercial</label>
          <input
            type='text'
            {...register('comercial_name', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Correo Electronico</label>
          <input type='email' {...register('email', { required: false })} />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Descripcion Actividad Economica</label>
          <input
            type='text'
            {...register('description', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Telefono</label>
          <input type='tel' {...register('phone')} />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>País:</label>
          <select onChange={handlePaisChange} name='pais'>
            <option value=''>Selecciona un país</option>
            {paises.map((pais: any) => (
              <option key={pais.countryCode} value={pais.countryName}>
                {pais.countryName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Ciudad:</label>
          <select {...register('ciudad')} name='ciudad'>
            <option value=''>Selecciona una ciudad</option>
            {ciudades.map((ciudad: any) => (
              <option key={ciudad.geonameId} value={ciudad.name}>
                {ciudad.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>A que industria pertenece? </label>
          <select
            {...register('industry')}
            name='industry'
            onChange={e => {
              setShowOtroField(e.target.value === 'otro');
            }}
          >
            <option value=''>Seleccione la Industria</option>
            <option value='industria 2'>Industria 2</option>
            <option value='industria 3'>Industria 3</option>
            <option value='otro'>Otro</option>
          </select>
          <span className={styles.span_red}> *</span>
          {showOtroField && (
            <div>
              <textarea name='' id='' cols={50} rows={5}></textarea>
            </div>
          )}
        </div>
        <div>
          <label>Persona expuesta políticamente: </label>
          SI
          <input
            type='radio'
            onChange={e => {
              setPrueba(e.target.value);
            }}
            value={'Si'}
            name='prueba'
          />
          NO
          <input
            type='radio'
            onChange={e => {
              setPrueba(e.target.value);
            }}
            value={'No'}
            name='prueba'
          />
          <span className={styles.span_red}> *</span>
        </div>
        {prueba === 'Si' && (
          <div>
            <select {...register('expo_politica')} name='prueba'>
              <option value='Nacional'>Nacional</option>
              <option value='Internacional'>Internacional</option>
              <option value='Extranjera'>Extranjera</option>
            </select>
          </div>
        )}
        <div>
          <label>Certificado de existencia y Representacion legal</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Certificacion Accionaria</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc2', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Documento Prueba de Fondos</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc3', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Identificacion de los Accionistas</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc4', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>Identificacion del Representante legal</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc5', { required: false })}
          />
          <span className={styles.span_red}> *</span>
        </div>
        <div>
          <label>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Certifico que soy mayor de edad, que estoy autorizado para
            diligenciar el presente formulario y que autorizo el tratamiento de
            los datos personales conforme con la Política de Tratamiento
            <span className={styles.span_red}> *</span>
          </label>
        </div>
        {/* <div>
          <label>Estado cuenta bancaria???</label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            {...register('doc6', { required: false })}
          />
        </div> */}
        <button type='submit'>ENVIAR</button>
      </form>
    </div>
  );
};

export default OnboardingForm;
