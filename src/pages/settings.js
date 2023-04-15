import TitleCard from '@/components/common/titleCard'
import CompleteProfileForm from '@/components/settings/completeProfileForm'
import React from 'react'

const Settings = () => {
    return (
        <div className='flex-flex-col'>
            <TitleCard headingWithBr={true} beforeBr={'Complete your profile'} afterBr={'to start using the platform'} />
            <CompleteProfileForm/>
        </div>
    )
}

export default Settings