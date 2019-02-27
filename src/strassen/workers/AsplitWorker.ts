import {Matrix} from "../../matrix/matrix";

onmessage = function (event: MessageEvent) {
    console.log(event);
    postMessage(event);
    // postMessage(m.split());
}