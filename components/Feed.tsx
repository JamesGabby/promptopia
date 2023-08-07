"use client"

import { useState, useEffect } from 'react'
import PromptCardList from './PromptCardList'

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [prompts, setPrompts] = useState([])

    const handleSearchChange = (event) => {
        setSearchText(event.target.value.toLowerCase())
    }

    const handleTagClick = (tag) => {
        setSearchText(tag)
    }

    const search = (data) => {
        return data.filter((item) => 
            item.prompt.toLowerCase().includes(searchText) ||
            item.tag.toLowerCase().includes(searchText) ||
            item.creator.username.toLowerCase().includes(searchText)
        )
    }

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()
            console.log(data);

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
                data={search(prompts)}
                handleTagClick={handleTagClick}
            />
        </section>
    )
}

export default Feed