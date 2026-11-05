// "as" syntax


type Status = 'pending' | 'approved' | 'rejected';

const someStatus: string = "pending";

const showStatus = (status: Status) =>{
    console.log("Your current status is : " + status);
}

showStatus(someStatus as Status);



//Non-Null assertion

interface Config {
    port?: number;
}
const config:Config = {
    port: 5000
}


const currentPort : number = config.port!;
const currentPort2 : number = config.port as number;



//Const assertion

const configuration = {
    port: 8080,
    prefix: "/api/v1"
} as const; 