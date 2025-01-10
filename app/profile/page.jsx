"use client"

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

import Profile from '../components/Profile';

const MyProfile = () => {

  const handleEdit = () => {


  }

  const handleDelete = () => {

  }

  return (
    <Profile 
        name='My'
        desc="Welcome back!"
        data={[]}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete} 
    />
)
}

export default MyProfile