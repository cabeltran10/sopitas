import React from "react";
import PageNotFound from "../../img/notFound/pageNotFound.png";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="pageNotFound" src={PageNotFound} />
      </div>
    );
  }
}
export default NotFoundPage;
