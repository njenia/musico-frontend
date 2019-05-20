import React from 'react'

const Loader = () => <div>
  Loading...
</div>

const withLoader = Component => props => (props.isLoading ? <Loader /> : <Component {...props} />)

export default withLoader