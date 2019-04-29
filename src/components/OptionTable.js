import React, { Component } from "react";
import PropTypes from "prop-types";
import BS from "black-scholes";

export default class OptionTable extends Component {
    static propTypes = {
        prop: PropTypes
    };

    render() {
        return (
            <div>
                <div>{BS.blackScholes(30, 34, 0.25, 0.2, 0.08, "call")}</div>

                <div>{BS.blackScholes(30, 34, .245,  0.2, 0.08, "call")}</div>
            </div>
        );
    }
}
