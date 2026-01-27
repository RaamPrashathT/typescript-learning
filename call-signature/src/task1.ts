interface Messenger {
    (message: string): void;
    sender: number;
}

const ping: Messenger = (msg) => {
    console.log(`Sending: ${msg}`)
}

ping.sender = 1;

ping("hello world");