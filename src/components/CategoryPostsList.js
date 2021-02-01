import React, { useContext } from 'react'
import PostsContext from '../context/PostsContext'
import PostListItem from './PostListItem'

const CategoryPostsList = (props) => {
	const { posts } = useContext(PostsContext)
	return (
		// <div style={{ width: '700px' }} role='list' className='ui celled list'>
		<div style={{ width: '700px' }} className='ui cards'>
			{posts &&
				props.category &&
				posts[props.category].map((post) => (
					<PostListItem key={post.title} post={post} />
				))}
		</div>
	)
}

export default CategoryPostsList
