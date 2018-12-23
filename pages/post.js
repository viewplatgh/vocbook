import {withRouter} from 'next/router'
import Layout from '../components/layout'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog content</p>
  </div>
))

const Post = (props) => (
  <Layout>
    <Content/>
  </Layout>
)

export default Post