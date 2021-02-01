import React, { useContext } from 'react'

import CategoryPostsList from './CategoryPostsList'

const BlogCategoryPanel = (props) => {
	return (
		<div className='ui conatiner'>
			<div
				className='ui segment'
				style={{ width: '810px', marginLeft: '30px' }}
			>
				<h3>
					Blog Category: {'\u00a0'}
					{props.category}
				</h3>
				{<CategoryPostsList category={props.category} />}
			</div>
		</div>
	)
}

export default BlogCategoryPanel
