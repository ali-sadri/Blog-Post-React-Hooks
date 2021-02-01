import React, { useContext } from 'react'
import PostsContext from '../context/PostsContext'
import BlogCategoryPanel from './BlogCategoryPanel'
import HomeHeader from './HomeHeader'
const Home = () => {
	const { posts } = useContext(PostsContext)

	return (
		<div className='ui container'>
			<HomeHeader />
			<div>
				{posts &&
					Object.keys(posts).map((category) => (
						<BlogCategoryPanel key={category} category={category} />
					))}
			</div>
		</div>
	)
}

export default Home
