"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body || '{}');
        console.log('Received contact form data:', { name, email, message });
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Thank you for your interest, ${name}!`,
            }),
        };
    }
    catch (error) {
        console.error('Error handling contact form:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'There was an error processing your request.',
            }),
        };
    }
};
exports.handler = handler;
