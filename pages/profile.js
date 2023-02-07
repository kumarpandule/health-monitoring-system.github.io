import AuthCheck from '@components/AuthCheck'
import ProfileView from '@components/ProfileView'
import React from 'react'

export default function Profile() {

  return (
    <AuthCheck>
    <ProfileView />
    </AuthCheck>
  )
}
