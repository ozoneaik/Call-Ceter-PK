import echo from "../Test/echo.js";

export const newMessage = ({onPassed}) => {
    const channel = echo.channel(`notifications`);
    channel.listen('.my-event', (event) => {
        console.log('Message received:', event);
        onPassed(true,event);
    });
    return () => {
        channel.stopListening('.my-event');
        echo.leaveChannel(`notifications`);
    };
}