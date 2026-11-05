// "as" syntax
const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your current status is : " + status);
};
// showStatus(someStatus);


const config = {
    port: 5000
};
const currentPort = config.port;
const currentPort2 = config.port;
//Const assertion
const configuration = {
    port: 8080,
    prefix: "/api/v1"
};
export {};
