import React, { useContext } from 'react'
import Modal from './Modal'
import PostsContext from '../context/PostsContext'
import { useHistory, useParams } from 'react-router-dom'
const DeletePostConfirm = () => {
	const history = useHistory()
	const { category, postTitle } = useParams()
	const { posts, postsDispatch } = useContext(PostsContext)
	const renderContent = () => {
		return `Are you sure you want to delete the blog post "${postTitle}" in post category "${category}"`
	}
	const renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={deletePost} className='ui button negative'>
					Delete
				</button>
				<button
					className='ui button primary'
					onClick={() => history.push(`/posts/view/${category}/${postTitle}`)}
				>
					Cancel
				</button>
			</React.Fragment>
		)
	}
	const deletePost = () => {
		//console.log('***************************** delete post clicked')
		postsDispatch({
			type: 'REMOVE_POST',
			payload: { category, title: postTitle },
		})
		history.push('/')
	}
	return (
		<Modal
			title='Delete Stream'
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => history.push('/')}
		/>
	)
}

export default DeletePostConfirm
