const postsReducer = (state, action) => {
	switch (action.type) {
		case 'POPULATE_POSTS':
			//console.log('*** postsReducer POPULATE_POSTS triggered ***')
			//console.log('*** postsReducer action payload: ', action.payload)
			return action.payload
		case 'ADD_POST':
			return {
				...state,
				[action.payload.category]: [
					...state[action.payload.category],
					{
						category: action.payload.category,
						title: action.payload.title,
						text: action.payload.text,
						time: action.payload.time,
					},
				],
			}
		case 'REMOVE_POST':
			return {
				...state,
				[action.payload.category]: [...state[action.payload.category]].filter(
					(post) => post.title !== action.payload.title,
				),
			}
		case 'UPDATE_POST':
			return {
				...state,
				[action.payload.category]: [...state[action.payload.category]]
					.filter((post) => post.title !== action.payload.title)
					.concat({
						category: action.payload.category,
						title: action.payload.title,
						text: action.payload.text,
						time: action.payload.time,
					}),
			}
		default:
			return state
	}
}

const feedbacksReducer = (state, action) => {
	switch (action.type) {
		case 'POPULATE_FEEDBACKS':
			return action.payload
		case 'ADD_FEEDBACK':
			//console.log('&&&&& ADD-FEEDBACK action in reducer')
			return {
				...state,
				[action.payload.blogCategory]: [
					...state[action.payload.blogCategory],
					{
						blogCategory: action.payload.blogCategory,
						blogTitle: action.payload.blogTitle,
						feedbackText: action.payload.feedbackText,
						time: action.payload.time,
					},
				],
			}
		default:
			return state
	}
}

export { postsReducer, feedbacksReducer }
