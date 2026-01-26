interface Messenger {
    (message: string): void;
    sender: string;
}

const ping: Messenger = (msg) => {
    console.log(`Sending: ${msg}`)
}

ping.sender = "Raam";

ping("hello world");