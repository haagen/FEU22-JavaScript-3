import React from "react";
import PrefsContext from "./context/PrefsContext";

class SubscriberClassComponent extends React.Component {
  static contextType = PrefsContext;

  render() {
    return (
      <>
        <strong>This is a class component</strong>
        <br />
        Your language preference is {this.context.language}.<br />
        Your mode is set to {this.context.mode}.<br />
        <button
          onClick={(e) => {
            this.context.setLanguage("Estonian");
          }}
        >
          Set Language to Estonian
        </button>
      </>
    );
  }

  /*
  setLanguageToDanish = (setLanguage) => {
    setLanguage("Danish");
  };

  render() {
    return (
      <PrefsContext.Consumer>
        {(userPref) => {
          return (
            <>
              <strong>This is a class component</strong>
              <br />
              Your language preference is {userPref.language}.<br />
              Your mode is set to {userPref.mode}.<br />
              <button
                onClick={(e) => {
                  //this.setLanguageToDanish(userPref.setLanguage);
                  userPref.setLanguage("Danish");
                }}
              >
                Set Language Danish
              </button>
            </>
          );
        }}
      </PrefsContext.Consumer>
    );
  }
  */
}

export default SubscriberClassComponent;
