import React from 'react'

const FeedbackItem = (props) => {
	return (
		<div>
			<div>
				-----------------------------------------------------------------------------------
			</div>
			<div>{props.feedback.feedbackText}</div>
			<div>{props.feedback.time}</div>
		</div>
	)
}

export default FeedbackItem
