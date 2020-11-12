import React from "react";

function Question(props) {
    
    const answerBlockStyle = {
        display: "inline-block",
        textAlign: "center",
        width: "7em",
        verticalAlign: "top",
        fontFamily: "verdana"
    };
    
    const questionTextStyle = {
        paddingBottom: "1em",
        fontFamily: "verdana",
        fontSize: "1.1em"
    };
    
    return (
        <div style={{textAlign: "center"}}>
            <div style={questionTextStyle}>
                {props.text}
            </div>
            <div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="-3" onChange={props.updateCallback} /><br />
                    <label>Strongly Disagree</label>
                </div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="-2" onChange={props.updateCallback} /><br />
                    <label>Disagree</label>
                </div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="-1" onChange={props.updateCallback} /><br />
                    <label>Somewhat Disagree</label>
                </div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="1" onChange={props.updateCallback} /><br />
                    <label>Somewhat Agree</label>
                </div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="2" onChange={props.updateCallback} /><br />
                    <label>Agree</label>
                </div>
                <div style={answerBlockStyle}>
                    <input type="radio" name={props.index + "," + props.multiplier} value="3" onChange={props.updateCallback} /><br />
                    <label>Strongly Agree</label>
                </div>
            </div>
        </div>
    );
}

export default Question;