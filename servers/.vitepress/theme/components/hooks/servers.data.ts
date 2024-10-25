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
}

interface Server {
    url: string
    lang: string
    info: ServerInfo
}

declare const data: Server[]
export { data }

export default createContentLoader("*/servers/*.md", {
    excerpt: false,
    transform(raw): Server[] {
        return raw.map(({ frontmatter, url }) => {
            let lang = url.split("/")[1]
            if (!frontmatter) {
                console.warn(`No frontmatter found for ${url}`)
                return null
            }

            const { name, type, desc, icon, link, linkText, version, ip } = frontmatter

            if (!name || !type) {
                console.warn(`Missing required fields in ${url}`)
                return null
            }

            return {
                url,
                lang,
                info: {
                    name,
                    ip,
                    type,
                    desc,
                    icon,
                    link,
                    linkText,
                    version,
                },
            } as Server
        }).filter((server): server is Server => server !== null)
    },
});