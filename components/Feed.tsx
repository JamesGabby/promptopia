"use client"

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="prompt_layout mt-16">
            {data.map((prompt) => (
                <PromptCard
                    key={prompt._id}
                    prompt={prompt}
                    handleTagClick={handleTagClick}
                    handleEdit={[]}
                    handleDelete={[]}
                />
            ))}
        </div>
    )
}

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
                    placeholder='Search for a tag or username'
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