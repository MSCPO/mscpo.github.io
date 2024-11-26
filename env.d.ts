declare module '*.yaml' {
    const content: Record<string, any>;
    export default content;
}
declare module '*.yml' {
    const content: Record<string, any>;
    export default content;
}
declare module '*.toml' {
    const content: Record<string, any>;
    export default content;
}
declare module '*.mp3' {
    const src: string;
    export default src;
}