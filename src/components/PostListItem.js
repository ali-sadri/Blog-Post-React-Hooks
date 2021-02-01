import React from 'react'
import { useHistory } from 'react-router-dom'

const PostListItem = ({ post }) => {
	const { category, title, text, time } = post
	const history = useHistory()
	return (
		// <div role='listitem' className='item'>
		<div className='ui fluid card'>
			<div
				className='content'
				style={{ cursor: 'pointer', color: 'blue' }}
				onClick={() => history.push(`/posts/view/${category}/${title}`)}
			>
				<div style={{ fontSize: '16px' }}>
					{title}
					{'\u00a0'}
					{'\u00a0'}
					{'\u00a0'}
					{'\u00a0'}

					{time}
				</div>
			</div>
		</div>
	)
}

export default PostListItem
