//// !!! Dev !!!

import { createContentLoader } from "vitepress";

interface ServerInfo {
    icon?: 
    | string
    | {
        src: string
        alt?: string
        width?: string
        height?: string
        wrap?: boolean
      }
    | {
        light: string
        dark: string
        alt?: string
        width?: string
        height?: string
        wrap?: boolean
      }
    name: string
    desc?: string
    type: 'Java' | 'Bedrock' | 'Geyser' | 'Netease'
    link?: string
    linkText?: string
    version?: string | number
    ip?: string
    is_member?: boolean
    auth_mode?: 'official' | 'yggdrasil' | 'offline'
    hide?: boolean
}

interface Server {
    url: string
    lang: string
    info: ServerInfo
}

declare const data: Server[]
export { data }

const now = new Date().toLocaleTimeString();

export default createContentLoader("*/servers/*.md", {
    excerpt: false,
    transform(raw): Server[] {
        return raw.map(({ frontmatter, url }) => {
            let lang = url.split("/")[1]
            if (!frontmatter) {
                console.warn(now, `[SCS:Warning] No frontmatter found for ${url}`)
                return null
            }

            const { name, type, desc, icon, link, linkText, version, ip, is_member, auth_mode, hide } = frontmatter

            if (hide === true) {
                console.log(now, `[SCS:INFO] Server hidden: ${url}`);
                return null;
            }

            if (!name || !type) {
                console.warn(now,`[SCS:Warning] Missing required fields in ${url}`)
                return null
            }

            let finalLink = link || url;
            finalLink = finalLink.replace('/zh_CN/', '/');

            return {
                url,
                lang,
                info: {
                    name,
                    ip,
                    type,
                    desc,
                    icon,
                    link: finalLink,
                    linkText,
                    version,
                    is_member,
                    auth_mode,
                },
            } as Server
        }).filter((server): server is Server => server !== null)
    },
});