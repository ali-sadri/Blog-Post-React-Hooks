import React, { useReducer, useEffect, useState } from 'react'
import './App.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import ViewBlogPost from './ViewBlogPost'
import EditBlogPost from './EditBlogPost'
import DeletePostConfirm from './DeletePostConfirm'
import CreateBlogPost from './CreateBlogPost'
import FeedbackList from './FeedbackList'
import FeedbackForm from './FeedbackForm'
import { postsReducer, feedbacksReducer } from '../reducer'

import PostsContext from '../context/PostsContext'

import postsData from '../data/posts.json'
import feedbacksData from '../data/feedbacks.json'

const App = () => {
	const [posts, postsDispatch] = useReducer(postsReducer)
	const [feedbacks, feedbacksDispatch] = useReducer(feedbacksReducer)

	useEffect(() => {
		const localStoragePosts = JSON.parse(localStorage.getItem('posts'))
		const localStorageFeedbacks = JSON.parse(localStorage.getItem('feedbacks'))

		/*  running the app before any item is set in localStorage .
			this is when we update the data from our json file.
			once the data (posts, feedbacks) are updated by using dispatch,
			the next two useEffect set the data in local storage as well. */
		if (!localStoragePosts && !localStorageFeedbacks) {
			postsDispatch({ type: 'POPULATE_POSTS', payload: postsData })
			feedbacksDispatch({ type: 'POPULATE_FEEDBACKS', payload: feedbacksData })
		} else {
			/*	if the posts is already set in localStorage, we trigger dispatch  to load state date from 
			local storage for subsequent running of application or refresh or new browser window */
			if (localStoragePosts) {
				postsDispatch({ type: 'POPULATE_POSTS', payload: localStoragePosts })
			}
			if (localStorageFeedbacks) {
				feedbacksDispatch({
					type: 'POPULATE_FEEDBACKS',
					payload: localStorageFeedbacks,
				})
			}
		}
	}, [])

	//useEffect for when the posts state changes through corresponding dispatch anywhere in our application
	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts))
	}, [posts])

	//useEffect for when the feedbacks state changes through corresponding dispatch anywhere in our application
	useEffect(() => {
		localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
	}, [feedbacks])

	return (
		<PostsContext.Provider
			value={{ posts, feedbacks, postsDispatch, feedbacksDispatch }}
		>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route
						path='/posts/view/:category/:postTitle'
						component={ViewBlogPost}
					/>
					<Route
						path='/posts/edit/:category/:postTitle'
						component={EditBlogPost}
					/>
					<Route
						path='/posts/delete/:category/:postTitle'
						component={DeletePostConfirm}
					/>
					<Route path='/posts/new' component={CreateBlogPost} />
					<Route
						path='/feedbacks/:category/:postTitle'
						exact
						component={FeedbackList}
					/>
					<Route
						path='/feedbacks/new/:category/:postTitle'
						component={FeedbackForm}
					/>
				</Switch>
			</BrowserRouter>
		</PostsContext.Provider>
	)
}

export default App
