export type TestResponse = {
    status: number;
    content: string;
    headers: Record<string, string>;
    responseType: string;
};

function createResponse(config: Partial<TestResponse>): TestResponse {
    return {
        status: config.status || 200,
        content: config.content || '',
        headers: config.headers || {},
        responseType: config.responseType || ''
    }
}

function createJsonResponse(content: string, status: number = 200): TestResponse {
    return createResponse({
        status,
        content,
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
    });
}

export const TestResponses: Record<string, TestResponse> = {
    ValidJson: createJsonResponse('{"success": true}'),
    InvalidJson: createJsonResponse('{"success: true}'),
    ValidHtml: createResponse({content: `
<!doctype html>
<html>
    <head>
        <base href="/">
        <meta charset="UTF-8">
        <title>Dummy page</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1">
        <link rel="stylesheet" href="//css.app.e1d65720.css">
    </head>
    <body>
        <h1>I'm a dummy page.</h1>
    </body>
</html>`
}),
    ServerError: createResponse({status: 500, content: '{"message": "Test error."}'})
};
