import React from 'react'
import BlogPostForm from './BlogPostForm'

const CreateBlogPost = () => {
	return (
		<div>
			CreateBlogPost component
			<div>
				<BlogPostForm createNew={true} />
			</div>
		</div>
	)
}

export default CreateBlogPost
