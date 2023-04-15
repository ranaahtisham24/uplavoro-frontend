import React, { useState } from 'react'
import { disponibilitaList } from '../cvData';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import CheckBox from '@/components/common/checkBox';

const Disponibilita = () => {
  const {control} = useForm({});
  const [disponibilitaForm, setDisponibilitaForm] = useState([]);
  useEffect(() => {
    setDisponibilitaForm(disponibilitaList);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {disponibilitaForm?.map((item, ind) => {
        return (
          <div key={ind}>
          <CheckBox
            title={item?.title}
            control={control}
            name={item?.slug}
          />
          </div>
        );
      })}
    </div>
  );
};

export default Disponibilita