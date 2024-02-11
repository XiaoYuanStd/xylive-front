import styles from "./styles.module.scss"
import {PropsWithChildren, ReactNode} from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import {mdiCast} from "@mdi/js";

interface ChannelListProps{
    hide?:boolean
    children?:ReactNode
}

export function ChannelList({hide,children}:ChannelListProps) {
    return <div className={styles.channels} data-hide={hide}>{children}</div>
}

interface ChannelListItemProps{
    target:string,
    watch?:boolean
}

export function ChannelListItem({target,watch=false}:ChannelListItemProps) {
    return <Link className={styles.channel} href={"/"+target} data-watch={watch}>
        <Icon path={mdiCast}/>
        <span>{target}</span>
    </Link>
}