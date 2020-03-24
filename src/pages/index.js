import React from "react"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import SortNav from "../components/sortnav"
import { Container } from "react-bootstrap"

const IndexPage = (props) => {

  const query = getJsonFromUrl(props.location.search)
  return (
    <Layout>
      <Container>
        <SortNav sequence={query['s']}
                   version={query['v']}/>
      </Container>
    </Layout>
  );
}

function getJsonFromUrl(url) {
  let query = url.substr(1);
  let result = {};
  query.split("&").forEach(function(part) {
    let item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

export default IndexPage
