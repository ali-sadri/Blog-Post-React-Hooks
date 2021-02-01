import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PostsContext from '../context/PostsContext'
const ViewBlogPost = (props) => {
	const history = useHistory()
	let { posts } = useContext(PostsContext)

	const { category, postTitle } = useParams()

	// console.log('&&&&& ', posts)
	// console.log(category)
	// console.log(postTitle)

	const [post, setPost] = useState(null)
	if (!posts) {
		//console.log('***** no posts in viewblogpost')
		posts = JSON.parse(localStorage.getItem('posts'))
	}
	useEffect(() => {
		//console.log('***** useEffect in viewblogpost', posts)
		if (posts) {
			const post = posts[category].filter(
				(post) =>
					post.title.trim().toLowerCase() === postTitle.trim().toLowerCase(),
			)[0]
			setPost(post)
			//console.log('***** useEffect in viewblogpost', post)
		}
	}, [posts, category, postTitle])
	return (
		<div>
			<h4>ViewBlogPost component</h4>
			<div>
				<button
					onClick={() => history.push(`/posts/edit/${category}/${postTitle}`)}
				>
					Edit
				</button>
				<button
					onClick={() => history.push(`/posts/delete/${category}/${postTitle}`)}
				>
					Delete
				</button>
				<button
					onClick={() =>
						history.push(`/feedbacks/new/${category}/${postTitle}`)
					}
				>
					New Feedback
				</button>
				<button
					onClick={() => history.push(`/feedbacks/${category}/${postTitle}`)}
				>
					Current Feedbacks
				</button>
				<button
					onClick={() => history.push(`/`)}
				>
					Home
				</button>
			</div>
			<div>
				<h4>Category</h4> {post && post.category}
			</div>
			<div>
				<h4>Time</h4>
				{post && post.time}
			</div>
			<div>
				<h4>Title</h4>
				{post && post.title}
			</div>
			<div>
				<h4>Text</h4>
				{post && post.text}
			</div>
		</div>
	)
}

export default ViewBlogPost
