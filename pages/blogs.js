import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

import { getBlogs } from '../actions';
import { shortenText } from '../helpers/utils';

import moment from 'moment';


class Blogs extends React.Component {

  static async getInitialProps({req}) {
    let blogs = [];

    try {
      blogs = await getBlogs(req);
    } catch(err) {
      console.error(err);
    }

    return {blogs};
  }

  renderBlogs = (blogs) => (
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">
              {blog.title}
            </h2>
            <h3 className="post-subtitle">
              {shortenText(blog.subTitle)}
            </h3>
          </a>
        </Link>
        <p className="post-meta">Posted by
          <a href="#"> {blog.author} </a>
          {moment(parseInt(blog.createdAt, 10)).format('LL')}</p>
      </div>
      )
    )
  )

  render() {
    const {blogs} = this.props;

    return (
      <BaseLayout {...this.props.auth}
                  headerType={'landing'}
                  className="blog-listing-page"
                  title="Filip Jerga - Newest Blogs to Read">
        <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                  <span className="subheading">Programming, travelling...</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {
                this.renderBlogs(blogs)
              }
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a target="_blank" href="https://www.facebook.com/groups/217273012433804/?jazoest=26510012195869511271971084598756511378108122691091131211141201017010910474116557610010645897511574116115668565119119586510012177701165586491061151219048557183120488290847377451207611983109114112118697610912011183109109521091159581">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a target="_blank" href="https://github.com/Jerga99">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Filip Jerga 2018</p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    )
  }
}

export default Blogs;

