import './LoadMoreButton.scss'

export const LoadMoreButton = ({onClick}:{onClick: () => void}) => {
    return (
        <button className='LoadMoreButton' onClick={onClick}>Load more</button>
    )
}