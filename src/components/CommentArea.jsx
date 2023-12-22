import React, { Component } from "react"
import { Form, InputGroup, FormControl, Button, Alert } from "react-bootstrap"
import CommentsList from "./CommentsList"

class CommentArea extends Component {
  state = {
    comments: [],
    error: false,
    newComment: {
      comment: "",
      rate: 3, // Change the default rate to a number
      elementId: this.props.movieId,
    },
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.movieId !== this.props.movieId) {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.props.movieId}`,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NmY1YjJjNmEwZDAwMTg0OTVlNmIiLCJpYXQiOjE3MDMyNTY5MzIsImV4cCI6MTcwNDQ2NjUzMn0.Msu23qrlGkXt1aScy31kSGRJQnLm1qAY6zCwXjUFVFk", // Replace with your actual access token
            },
          }
        )

        if (response.ok) {
          let comments = await response.json()
          this.setState({
            comments: comments,
            error: false,
            newComment: {
              ...this.state.newComment,
              elementId: this.props.movieId,
            },
          })
        } else {
          console.error("Error fetching comments")
          this.setState({ error: true })
        }
      } catch (error) {
        console.error(error)
        this.setState({ error: true })
      }
    }
  }

  submitComment = async (e) => {
    e.preventDefault()
    const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/"

    try {
      const response = await fetch(COMMENTS_URL, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NmY1YjJjNmEwZDAwMTg0OTVlNmIiLCJpYXQiOjE3MDMyNTY5MzIsImV4cCI6MTcwNDQ2NjUzMn0.Msu23qrlGkXt1aScy31kSGRJQnLm1qAY6zCwXjUFVFk", // Replace with your actual access token
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        alert("Comment added")
        this.setState({
          newComment: {
            comment: "",
            rate: 3, // Change the default rate to a number
            elementId: this.props.movieId,
          },
        })
      } else {
        alert("An error has occurred")
      }
    } catch (error) {
      console.error("Error submitting comment:", error)
    }
  }

  handleRadioChange = (rating) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        rate: rating,
      },
    })
  }

  handleCommentText = (e) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        comment: e.currentTarget.value,
      },
    })
  }

  render() {
    return (
      <div className="my-3">
        {this.state.error && (
          <Alert variant="danger" className="text-center">
            Error fetching comments
          </Alert>
        )}
        {this.state.comments.length > 0 &&
          this.state.comments[0].elementId === this.props.movieId && (
            <CommentsList comments={this.state.comments} />
          )}
        <div className="text-center text-light">
          <h5 className="my-3">Add a comment</h5>
          <Form onSubmit={this.submitComment}>
            <div className="my-3 text-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Form.Check
                  key={rating}
                  inline
                  label={rating.toString()}
                  value={rating.toString()}
                  type="radio"
                  name="rating"
                  checked={this.state.newComment.rate === rating}
                  onChange={() => this.handleRadioChange(rating.toString())}
                />
              ))}
            </div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Write your comment"
                aria-label="comment"
                aria-describedby="basic-addon1"
                onChange={this.handleCommentText}
                value={this.state.newComment.comment}
                required
              />
            </InputGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default CommentArea
