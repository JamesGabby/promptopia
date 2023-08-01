"use client"

import { useState, useEffect } from 'react'
import PromptCardList from './PromptCardList'

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [prompts, setPrompts] = useState([])

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()

            setPrompts(data)
        }

        fetchPrompts()
    }, [])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input className="search_input peer"
                    type="text" 
                    placeholder='Search for a tag, prompt or username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                />
            </form>

            <PromptCardList
                data={prompts}
                handleTagClick={() => {}}
            />

            {searchText}
        </section>
    )
}

export default Feed