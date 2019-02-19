import { create } from "apisauce";
import config from "src/config";

export const api = create({
    baseURL: config.apiUrl,
    headers: {
        "Accept-Language": "fa",
    },
});

api.addAsyncRequestTransform(request => async () => {
    await console.log("request", request);
    // todo add token to request in the future
});
api.addResponseTransform(response => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
        return response;
    } else {
        throw response;
    }
});
