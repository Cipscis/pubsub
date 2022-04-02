declare const publish: (this: any, event: string, ...args: any[]) => void;
declare const subscribe: (event: string, callback: Function) => void;
declare const unsubscribe: (event: string, callback: Function) => void;
export { publish, subscribe, unsubscribe };
