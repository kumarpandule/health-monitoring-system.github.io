import AuthCheck from '@components/Auth/AuthCheck'
import ProfileView from '@components/Profile/ProfileView'
import React from 'react'

export default function Profile() {

  return (
    <AuthCheck>
    <ProfileView />
    </AuthCheck>
  )
}
