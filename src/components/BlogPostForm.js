import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import PostsContext from '../context/PostsContext'
import Dropdown from 'react-dropdown'
import { useHistory, useParams } from 'react-router-dom'
import 'react-dropdown/style.css'
import { isBoolean } from 'lodash'

const BlogPostForm = ({ createNew, postCategory, postTitle = '' }) => {
	const { posts, postsDispatch } = useContext(PostsContext)
	const [category, setCategory] = useState('')
	const [title, setTitle] = useState('')
	const [blogText, setBlogText] = useState('')
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
	const history = useHistory()

	useEffect(() => {
		// console.log('$$$$$$ triggering useEffect')
		if (posts && !createNew) {
			setBlogText(
				posts[postCategory].filter((post) => post.title === postTitle)[0].text,
			)
		}
	}, [posts])

	const categoryOnChange = (selectedCategory) => {
		console.log('****', selectedCategory)
		setCategory(selectedCategory.value)
		setSubmitButtonDisabled(
			!(
				selectedCategory.value &&
				blogText.trim().length > 0 &&
				title.trim().length > 0
			),
		)
	}

	const postFormSubmit = (e) => {
		console.log('*** in postFormSubmit', e.target)
		e.preventDefault()
		if (createNew) {
			if (
				posts[category].find(
					(post) =>
						post.title.trim().toLowerCase() === title.trim().toLowerCase(),
				)
			) {
				//TODO: need to show a modal that title can't be duplicate
				//console.log('@@@@@@@@@@@ duplicate title')
			} else {
				console.log('$$$$$$$$$$$$ ', ' title ', title, ' blog text ', blogText)
				postsDispatch({
					type: 'ADD_POST',
					payload: {
						category,
						title: title.trim(),
						text: blogText.trim(),
						time: 'new time to be formated',
					},
				})
			}
			history.push('/')
		} else {
			postsDispatch({
				type: 'UPDATE_POST',
				payload: {
					category: postCategory,
					title: postTitle,
					text: blogText.trim(),
					time: 'new time to be formated',
				},
			})
			setBlogText('')
			history.push('/')
		}
	}
	const onCancel = (e) => {
		e.preventDefault()
		let path = '/'
		if (!createNew) {
			console.log('**** inside !createNew')
			path = `/posts/view/${postCategory}/${postTitle}`
		}
		history.push(path)
	}

	return (
		<form onSubmit={postFormSubmit}>
			<div>
				{createNew && (
					<div>
						<label>Category:</label>
						<Dropdown
							className='dropdownMenu'
							options={posts && Object.keys(posts)}
							onChange={categoryOnChange}
							//value={defaultOption}
							placeholder='Select Post categories'
						/>
						<label>Title: </label>
						<input
							value={title}
							onChange={(e) => {
								setTitle(e.target.value)
								setSubmitButtonDisabled(
									!(
										e.target.value.trim().length > 0 &&
										blogText.trim().length > 0 &&
										category.trim().length > 0
									),
								)
							}}
							disabled={!createNew}
						/>
					</div>
				)}
				{!createNew && (
					<div>
						<div>
							<label>Category:</label>
							<label>{postCategory}</label>
						</div>
						<div>
							<label>Title: </label>
							<label>{postTitle}</label>
						</div>
					</div>
				)}
				<div>
					<label>Blog Post Text: </label>
					<div>
						<textarea
							value={blogText}
							onChange={(e) => {
								setBlogText(e.target.value)
								setSubmitButtonDisabled(
									!(
										e.target.value.trim().length > 0 &&
										title.trim().length > 0 &&
										category.trim().length > 0
									),
								)
							}}
						/>
					</div>
				</div>
				<div>
					<button name='submit' disabled={submitButtonDisabled}>
						Submit
					</button>
					{/* <button onClick={() => history.push('/')}>Cancel</button> */}
					<button name='cancel' onClick={onCancel}>
						Cancel
					</button>
				</div>
			</div>
		</form>
	)
}

export default BlogPostForm
