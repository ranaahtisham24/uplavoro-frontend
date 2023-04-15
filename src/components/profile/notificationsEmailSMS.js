import React from 'react'
import { useForm } from 'react-hook-form'
import CheckBox from '../common/checkBox';


const NotificationsEmailSMS = () => {
  const { control, errors, handleSubmit } = useForm({});
  return (
    <div className='px-6 py-6 flex flex-col gap-y-4'>
      <p className='text-hero text-[22px] 2xl:text-[30px] tracking-[-0.9px] font-extrabold'>Manage notifications</p>
      <div className='flex flex-col gap-y-3'>
        <CheckBox
          title={'Email Notifications'}
          control={control}
          name={'email'}
        />
        <CheckBox
          title={'SMS Notifications'}
          control={control}
          name={'sms'}
        />
        <CheckBox
          title={'I just want the important communications'}
          control={control}
          name={'communications'}
        />
      </div>
    </div>
  )
}

export default NotificationsEmailSMS