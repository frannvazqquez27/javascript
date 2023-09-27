const AMSG = "This in an alert message, click me to move on!!!";
const CMSG = "Show me in an alert if you cliked on ok or false";
const TMSG = "You clicked on true click me to move on!!!";
const FMSG = "You clicked on false click me to move on!!!";
const AMSGT = "Show me in an alert the menssage typed";
const ALMSG1 = "You typed";
const ALMSG2 = "click me to move on!!!";

window.alert(AMSG);

const isConfirmed = window.confirm(CMSG);

window.alert(isConfirmed ? TMSG : FMSG);

const userInput = window.prompt(AMSGT);

window.alert(`${ALMSG1} ${userInput}!!! ${ALMSG2}`);