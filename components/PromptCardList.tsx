import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="prompt_layout mt-16">
            {data.map((prompt) => (
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