import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";
import { ClipLoader } from "react-spinners";

const KanyeQuote = props => {
  return (
    <div className="kanye-div">
      <div>
        <h1>What Does Kanye Say?</h1>
      </div>
      <div>
        {!props.quote && !props.isFetching && (
          <p> Closed on sunday! You're my Chic-fil-a!!! </p>
        )}
        {props.isFetching && <ClipLoader color={"red"} />}
        {props.quote && <p>"{props.quote}"</p>}
      </div>
      <div>
        <button onClick={props.getQuote}></button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(KanyeQuote);
