import { withRouter } from 'react-router'; <% if (logic) { %>
import { Component } from 'refast';
import logic from './logic';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } else { %>
import { Component } from 'react';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } %>
export default withRouter(Page<%- Name %>);