import React from "react"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import SortTable from "../components/sorttable"
import { Container } from "react-bootstrap"

function IndexPage(props) {
  const query = getJsonFromUrl(props.location.search)
  return (
    <Layout>
      <Container>
        <SortTable sequence={query['s']} version={query['v']}/>
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
