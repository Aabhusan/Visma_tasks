exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        // body: JSON.stringify('Hello World from lambda!'),
		body: 'Hello world',
    };
    return response;
};