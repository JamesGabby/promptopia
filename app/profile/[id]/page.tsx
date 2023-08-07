'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Profile from '@/components/Profile'

const UserProfile = ({ params }) => {
    const [prompts, setPrompts] = useState([])
    const searchParams = useSearchParams()
    const username = searchParams.get('username')

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch(`/api/users/${params?.id}/prompts`)
            const data = await response.json()

            setPrompts(data)
        }

        if (params?.id) fetchPrompts()
    }, [])

    return (
        <Profile
            name={`${username}'s`}
            desc={`Welcome to ${username}'s profile page.`}
            data={prompts}
        />
    )
}

export default UserProfile