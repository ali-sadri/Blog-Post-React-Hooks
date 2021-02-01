import React, { useContext, useEffect, useState } from 'react'
import PostsContext from '../context/PostsContext'
import { useHistory, useParams } from 'react-router-dom'
const FeedbackForm = () => {
	const { feedbacksDispatch } = useContext(PostsContext)
	const [feedbackText, setFeedbackText] = useState('')
	const { category, postTitle } = useParams()
	const history = useHistory()

	const feedbackFormSubmit = (e) => {
		e.preventDefault()
		feedbacksDispatch({
			type: 'ADD_FEEDBACK',
			payload: {
				blogCategory: category,
				blogTitle: postTitle,
				feedbackText,
				time: 'a new time to be formatted',
			},
		})
		history.push('/')
	}
	return (
		<form onSubmit={feedbackFormSubmit}>
			<div>
				<div>
					<label>Post Category:</label>
					<label>{category}</label>
				</div>
				<div>
					<label>Post Title: </label>
					<label>{postTitle}</label>
				</div>
				<div>
					<label>Enter Feedback: </label>
					<div>
						<textarea
							value={feedbackText}
							onChange={(e) => setFeedbackText(e.target.value)}
						/>
					</div>
				</div>
				<div>
					<button disabled={!feedbackText.trim()}>Submit</button>
					<button
						onClick={() => history.push(`/posts/view/${category}/${postTitle}`)}
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	)
}

export default FeedbackForm
