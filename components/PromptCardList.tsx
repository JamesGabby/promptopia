import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick, query }) => {
    return (
        <div className="prompt_layout mt-16">
            {data.filter(d => d.prompt.toLowerCase().includes(query)).map((prompt) => (
                <PromptCard
                    key={prompt._id}
                    prompt={prompt}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

export default PromptCardList