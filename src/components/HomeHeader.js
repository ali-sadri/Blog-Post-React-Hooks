import React from 'react'
import { useHistory } from 'react-router-dom'

const HomeHeader = () => {
	const history = useHistory()
	return (
		<div style={{ margin: '50px' }}>
			<div className='ui grid'>
				<div
					className='left floated ten wide column'
					style={{ marginTop: '30px' }}
				>
					<h1>Welcome to my Blog Post Application</h1>
				</div>

				<div className='right floated six wide column'>
					<div style={{ paddingRight: '30px', marginTop: '30px' }}>
						<button
							className='ui primary button'
							onClick={() => history.push(`/posts/new`)}
						>
							New Blog Post
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHeader
