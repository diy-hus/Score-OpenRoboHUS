export class Client {
    constructor(streamBuilder: any, options: any);
    options: any;
    streamBuilder: any;
    outgoingStore: any;
    incomingStore: any;
    queueQoSZero: any;
    messageIdToTopic: any;
    pingTimer: any;
    connected: any;
    disconnecting: any;
    queue: any;
    connackTimer: any;
    reconnectTimer: any;
    nextId: any;
    outgoing: any;
    addListener(type: any, listener: any): any;
    emit(type: any, args: any): any;
    end(force: any, cb: any): any;
    eventNames(): any;
    getLastMessageId(): any;
    getMaxListeners(): any;
    handleMessage(packet: any, callback: any): void;
    listenerCount(type: any): any;
    listeners(type: any): any;
    off(type: any, listener: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    publish(topic: any, message: any, opts: any, callback: any): any;
    rawListeners(type: any): any;
    reconnect(opts: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    removeOutgoingMessage(mid: any): any;
    setMaxListeners(n: any): any;
    subscribe(...args: any[]): any;
    unsubscribe(topic: any, callback: any): any;
}
export class MqttClient {
    constructor(streamBuilder: any, options: any);
    options: any;
    streamBuilder: any;
    outgoingStore: any;
    incomingStore: any;
    queueQoSZero: any;
    messageIdToTopic: any;
    pingTimer: any;
    connected: any;
    disconnecting: any;
    queue: any;
    connackTimer: any;
    reconnectTimer: any;
    nextId: any;
    outgoing: any;
    addListener(type: any, listener: any): any;
    emit(type: any, args: any): any;
    end(force: any, cb: any): any;
    eventNames(): any;
    getLastMessageId(): any;
    getMaxListeners(): any;
    handleMessage(packet: any, callback: any): void;
    listenerCount(type: any): any;
    listeners(type: any): any;
    off(type: any, listener: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    publish(topic: any, message: any, opts: any, callback: any): any;
    rawListeners(type: any): any;
    reconnect(opts: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    removeOutgoingMessage(mid: any): any;
    setMaxListeners(n: any): any;
    subscribe(...args: any[]): any;
    unsubscribe(topic: any, callback: any): any;
}
export class Store {
    constructor(options: any);
    options: any;
    close(cb: any): void;
    createStream(): any;
    del(packet: any, cb: any): any;
    get(packet: any, cb: any): any;
    put(packet: any, cb: any): any;
}
export function connect(brokerUrl: any, opts?: any): any;
export namespace connect {
    class MqttClient {
        constructor(streamBuilder: any, options: any);
        options: any;
        streamBuilder: any;
        outgoingStore: any;
        incomingStore: any;
        queueQoSZero: any;
        messageIdToTopic: any;
        pingTimer: any;
        connected: any;
        disconnecting: any;
        queue: any;
        connackTimer: any;
        reconnectTimer: any;
        nextId: any;
        outgoing: any;
        addListener(type: any, listener: any): any;
        emit(type: any, args: any): any;
        end(force: any, cb: any): any;
        eventNames(): any;
        getLastMessageId(): any;
        getMaxListeners(): any;
        handleMessage(packet: any, callback: any): void;
        listenerCount(type: any): any;
        listeners(type: any): any;
        off(type: any, listener: any): any;
        on(type: any, listener: any): any;
        once(type: any, listener: any): any;
        prependListener(type: any, listener: any): any;
        prependOnceListener(type: any, listener: any): any;
        publish(topic: any, message: any, opts: any, callback: any): any;
        rawListeners(type: any): any;
        reconnect(opts: any): any;
        removeAllListeners(type: any, ...args: any[]): any;
        removeListener(type: any, listener: any): any;
        removeOutgoingMessage(mid: any): any;
        setMaxListeners(n: any): any;
        subscribe(...args: any[]): any;
        unsubscribe(topic: any, callback: any): any;
    }
    class Store {
        constructor(options: any);
        options: any;
        close(cb: any): void;
        createStream(): any;
        del(packet: any, cb: any): any;
        get(packet: any, cb: any): any;
        put(packet: any, cb: any): any;
    }
    // Circular reference from mqtt.connect
    const connect: any;
}
