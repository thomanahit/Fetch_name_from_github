import React, { Component } from 'react';

const urlForUserName = username =>
`https://api.github.com/users/${username}`

class GitHub extends Component {

constructor(props) {
  super(props)
  this.state = {
    requistFailed:false
  }
}

componentDidMount() {
fetch(urlForUserName(this.props.username))

  .then(response => {
    if (!response.ok){
      throw Error("Network requist faild")
    }
    return response
  })
  .then(d => d.json())
  .then(d => {
    this.setState({ githubData: d })
  }, () => {
    this.setState ({
      requistFailed:true
    })
  })
}


render() {
  if (this.state.requistFailed)return <p>Failed..</p>
  if (!this.state.githubData) return <p>Loading ..</p>
  return (
    <div>

    <h2>{this.state.githubData.name}</h2>

    </div>
  )
}
}
export default GitHub;
