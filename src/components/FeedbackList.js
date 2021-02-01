import React, { useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FeedbackItem from './FeedbackItem'

import PostsContext from '../context/PostsContext'
const FeedbackList = () => {
	const { feedbacks } = useContext(PostsContext)
	const { category, postTitle } = useParams()
	const history = useHistory()
	//console.log('******* feedback in FeedbackList', feedbacks)
	return (
		<div>
			{feedbacks && (
				<div>
					<div>
						<h2>Feedbacks</h2>
					</div>
					<div>
						<span>
							<button
								onClick={() =>
									history.push(`/posts/view/${category}/${postTitle}`)
								}
							>
								Back to Blog Post
							</button>
						</span>
						<span>
							<button onClick={() => history.push('/')}>Home</button>
						</span>
						<br />
						<br />
					</div>
					<div>
						<b>
							Categoy:{'\u00a0'}
							{'\u00a0'} {category}
						</b>
					</div>
					<div>
						<b>
							Post Title: {'\u00a0'}
							{'\u00a0'} {postTitle}
						</b>
						<br />
						<br />
					</div>
				</div>
			)}
			{feedbacks &&
				feedbacks[category]
					.filter(
						(feedback) =>
							postTitle.trim().toLowerCase() ===
							feedback.blogTitle.trim().toLowerCase(),
					)
					.map((postFeedback) => (
						<FeedbackItem
							key={`${postFeedback.blogTitle}-${postFeedback.time}`}
							feedback={postFeedback}
						/>
					))}
		</div>
	)
}

export default FeedbackList
