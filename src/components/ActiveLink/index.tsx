import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activateClassName: string;
}

export function ActiveLink({children, activateClassName, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter()

    const className = asPath === rest.href
        ? activateClassName
        : '';

    return (
        <Link {...rest} >
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}
