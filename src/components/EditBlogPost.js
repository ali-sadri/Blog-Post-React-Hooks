import React from 'react'
import BlogPostForm from './BlogPostForm'
import { useHistory, useParams } from 'react-router-dom'

const EditBlogPost = () => {
	const { category, postTitle } = useParams()
	return (
		<div>
			EditBlogPost component
			<div>
				<BlogPostForm
					postCategory={category}
					postTitle={postTitle}
					createNew={false}
				/>
			</div>
		</div>
	)
}

export default EditBlogPost
